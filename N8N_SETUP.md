# Configuração do n8n para Geração de Relatórios

Este documento explica como configurar os workflows no n8n para gerar e servir relatórios personalizados.

## Pré-requisitos

1. Conta no n8n (n8n.cloud ou instalação própria)
2. Acesso a uma API de IA (OpenAI, Anthropic, etc.)
3. URL do seu site onde os relatórios serão hospedados

## Workflow 1: Gerar Relatório (`/webhook/generate-report`)

### Passo 1: Criar Webhook Trigger

1. Adicione um nó **Webhook**
2. Configure:
   - **HTTP Method**: POST
   - **Path**: `generate-report`
   - **Response Mode**: Respond to Webhook
   - **Response Code**: 200

### Passo 2: Preparar Dados (Function Node)

Adicione um nó **Code** (Function) com o seguinte código:

```javascript
// Preparar dados para a IA
const formData = $input.item.json;

const prompt = `
Você é um especialista em IA empresarial. Gere um relatório detalhado e profissional em HTML sobre a recomendação de stack de IA para o seguinte perfil:

**Perfil do Usuário:**
- Área de Atuação: ${formData.areaName}
- Cargo: ${formData.cargo || 'Não informado'}
- Nível de Senioridade: ${formData.senioridade}% (Jr=0% a Sr=100%)
- Autonomia: ${formData.autonomia}% (Assistido=0% a Agente=100%)
- Nível Técnico: ${formData.nivelTecnico}% (NoCode=0% a ProCode=100%)
- Tarefas Principais: ${formData.tarefas}
- Uso Atual de IA: ${formData.usageLabel}

**Stack Recomendado:**
${formData.stack.map(app => `- ${app.name} (${app.category})`).join('\n')}

Gere um relatório HTML completo e profissional que inclua:
1. Análise do perfil do usuário
2. Justificativa para cada ferramenta recomendada
3. Cálculo de ROI estimado
4. Curva de aprendizado esperada
5. Argumentos prontos para apresentar ao gestor
6. Plano de implementação sugerido

Use HTML semântico, estilos inline básicos e formatação profissional. O relatório deve ser direto ao ponto e acionável.
`;

return {
  json: {
    prompt: prompt,
    slug: formData.slug,
    email: formData.email,
    formData: formData
  }
};
```

### Passo 3: Chamar API de IA

Adicione um nó da API de IA escolhida:

**Para OpenAI:**
- Nó: **OpenAI**
- Model: `gpt-4-turbo-preview`
- Messages:
  - System: `Você é um consultor especializado em IA empresarial. Gere relatórios detalhados e profissionais em HTML.`
  - User: `{{ $json.prompt }}`
- Max Tokens: 3000

**Para Anthropic:**
- Nó: **HTTP Request** ou **Anthropic** (se disponível)
- Method: POST
- URL: `https://api.anthropic.com/v1/messages`
- Headers:
  - `x-api-key`: Sua chave da API
  - `anthropic-version`: `2023-06-01`
- Body:
```json
{
  "model": "claude-3-5-sonnet-20241022",
  "max_tokens": 3000,
  "messages": [
    {
      "role": "user",
      "content": "{{ $json.prompt }}"
    }
  ]
}
```

### Passo 4: Processar Resposta da IA (Function Node)

Adicione outro nó **Code** para processar a resposta:

```javascript
const aiResponse = $input.item.json;
const formData = $('Code').item.json.formData; // Ajuste o nome do nó anterior se necessário

// Extrair HTML do relatório
let reportHtml = '';

// Para OpenAI
if (aiResponse.choices && aiResponse.choices[0]) {
  reportHtml = aiResponse.choices[0].message.content;
}
// Para Anthropic
else if (aiResponse.content && aiResponse.content[0]) {
  reportHtml = aiResponse.content[0].text;
}
else {
  reportHtml = JSON.stringify(aiResponse);
}

return {
  json: {
    slug: formData.slug,
    html: reportHtml,
    email: formData.email,
    generatedAt: new Date().toISOString(),
    formData: formData
  }
};
```

### Passo 5: Salvar Dados (Opcional - Google Sheets)

Se quiser salvar os dados em uma planilha:

1. Adicione nó **Google Sheets**
2. Configure:
   - Operation: Append
   - Spreadsheet: Selecione sua planilha
   - Sheet: Nome da aba
   - Columns: Mapeie os campos:
     - `Timestamp` → `{{ $json.generatedAt }}`
     - `Email` → `{{ $json.email }}`
     - `Slug` → `{{ $json.slug }}`
     - `Área` → `{{ $json.formData.areaName }}`
     - `Cargo` → `{{ $json.formData.cargo }}`
     - `Tarefas` → `{{ $json.formData.tarefas }}`

### Passo 6: Responder ao Webhook

Adicione um nó **Respond to Webhook**:

```json
{
  "success": true,
  "slug": "{{ $json.slug }}",
  "url": "/relatorio/{{ $json.slug }}.html"
}
```

**IMPORTANTE**: Você também precisa salvar o HTML do relatório em algum lugar acessível. Opções:

1. **Google Sheets** (em uma coluna específica)
2. **Banco de dados** (PostgreSQL, MySQL, etc.)
3. **Storage** (AWS S3, Google Cloud Storage)
4. **GitHub** (via API para criar arquivos)

## Workflow 2: Buscar Relatório (`/webhook/get-report`)

### Passo 1: Criar Webhook Trigger

1. Adicione um nó **Webhook**
2. Configure:
   - **HTTP Method**: GET
   - **Path**: `get-report`
   - **Response Mode**: Respond to Webhook

### Passo 2: Extrair Slug

Adicione um nó **Code**:

```javascript
const query = $input.item.json.query;
const slug = query.slug;

return {
  json: {
    slug: slug
  }
};
```

### Passo 3: Buscar Relatório

Dependendo de onde você salvou o HTML:

**Se salvou no Google Sheets:**
1. Adicione nó **Google Sheets**
2. Operation: Read
3. Filter: `Slug = {{ $json.slug }}`
4. Retorne a coluna com o HTML

**Se salvou em banco de dados:**
1. Adicione nó **PostgreSQL** ou **MySQL**
2. Query: `SELECT html, generated_at FROM reports WHERE slug = '{{ $json.slug }}'`

### Passo 4: Processar e Retornar

Adicione um nó **Code**:

```javascript
const data = $input.item.json;

return {
  json: {
    success: true,
    html: data.html, // Ajuste conforme sua estrutura de dados
    slug: data.slug,
    generatedAt: data.generated_at || data.generatedAt
  }
};
```

### Passo 5: Responder ao Webhook

Adicione nó **Respond to Webhook** com o JSON acima.

## Configuração no Código

No arquivo `script.js`, atualize as URLs:

```javascript
// Linha ~470
const N8N_WEBHOOK_URL = 'https://SEU-N8N.com/webhook/generate-report';

// No arquivo relatorio.html, linha ~80
const N8N_GET_REPORT_URL = 'https://SEU-N8N.com/webhook/get-report';
```

## Testando

1. Preencha o formulário no site
2. Insira um email (ex: `joao@empresa.com`)
3. Clique em "Desbloquear"
4. O sistema deve:
   - Enviar dados para o n8n
   - Gerar relatório via IA
   - Redirecionar para `/relatorio/joao-empresa.html`
   - Exibir o relatório gerado

## Troubleshooting

- **Erro 404**: Verifique se os paths dos webhooks estão corretos
- **Erro ao gerar relatório**: Verifique as chaves da API de IA
- **Relatório não carrega**: Verifique se o HTML está sendo salvo corretamente
- **Slug incorreto**: Verifique a função `generateSlugFromEmail()` no script.js


