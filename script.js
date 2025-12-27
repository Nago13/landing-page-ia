// ========================================
// Stack Recommendations Database
// ========================================
const stackRecommendations = {
    tecnologia: [
        { name: "Zapier", category: "AUTOMAÇÃO", logo: "images/zapier-logo.png", compatible: true },
        { name: "Perplexity", category: "PESQUISA", logo: "images/perplexity-logo.png", compatible: true },
        { name: "Claude 3.5 Sonnet", category: "LLM CORE", logo: "https://www.anthropic.com/favicon.ico", compatible: true },
        { name: "GitHub Copilot", category: "CÓDIGO", logo: "https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png", compatible: true },
        { name: "ChatGPT Plus", category: "LLM CORE", logo: "https://upload.wikimedia.org/wikipedia/commons/0/04/ChatGPT_logo.svg", compatible: true },
        { name: "Notion AI", category: "KNOWLEDGE", logo: "https://upload.wikimedia.org/wikipedia/commons/4/45/Notion_app_logo.png", compatible: true },
        { name: "Microsoft Copilot", category: "PRODUTIVIDADE", logo: "https://upload.wikimedia.org/wikipedia/commons/2/2a/Microsoft_365_Copilot_Icon.svg", compatible: true },
        { name: "Google Gemini Advanced", category: "LLM CORE", logo: "https://www.gstatic.com/lamda/images/gemini_sparkle_v002_d4735304ff6292a690345.svg", compatible: true }
    ],
    marketing: [
        { name: "Zapier", category: "AUTOMAÇÃO", logo: "images/zapier-logo.png", compatible: true },
        { name: "ChatGPT Plus", category: "LLM CORE", logo: "https://upload.wikimedia.org/wikipedia/commons/0/04/ChatGPT_logo.svg", compatible: true },
        { name: "Jasper AI", category: "CONTEÚDO", logo: "https://www.jasper.ai/favicon.ico", compatible: true },
        { name: "Canva", category: "DESIGN", logo: "https://www.canva.com/favicon.ico", compatible: true },
        { name: "Claude 3.5 Sonnet", category: "LLM CORE", logo: "https://www.anthropic.com/favicon.ico", compatible: true },
        { name: "Perplexity", category: "PESQUISA", logo: "images/perplexity-logo.png", compatible: true },
        { name: "Notion AI", category: "KNOWLEDGE", logo: "https://upload.wikimedia.org/wikipedia/commons/4/45/Notion_app_logo.png", compatible: true },
        { name: "Gamma", category: "APRESENTAÇÃO", logo: "https://gamma.app/favicon.ico", compatible: true }
    ],
    financeiro: [
        { name: "Zapier", category: "AUTOMAÇÃO", logo: "images/zapier-logo.png", compatible: true },
        { name: "Google Gemini Advanced", category: "LLM CORE", logo: "https://www.gstatic.com/lamda/images/gemini_sparkle_v002_d4735304ff6292a690345.svg", compatible: true },
        { name: "Microsoft Copilot", category: "PRODUTIVIDADE", logo: "https://upload.wikimedia.org/wikipedia/commons/2/2a/Microsoft_365_Copilot_Icon.svg", compatible: true },
        { name: "Notion AI", category: "KNOWLEDGE", logo: "https://upload.wikimedia.org/wikipedia/commons/4/45/Notion_app_logo.png", compatible: true },
        { name: "ChatGPT Plus", category: "LLM CORE", logo: "https://upload.wikimedia.org/wikipedia/commons/0/04/ChatGPT_logo.svg", compatible: true },
        { name: "Claude 3.5 Sonnet", category: "LLM CORE", logo: "https://www.anthropic.com/favicon.ico", compatible: true },
        { name: "Perplexity", category: "PESQUISA", logo: "images/perplexity-logo.png", compatible: true },
        { name: "Gamma", category: "APRESENTAÇÃO", logo: "https://gamma.app/favicon.ico", compatible: true }
    ],
    vendas: [
        { name: "Zapier", category: "AUTOMAÇÃO", logo: "images/zapier-logo.png", compatible: true },
        { name: "ChatGPT Plus", category: "LLM CORE", logo: "https://upload.wikimedia.org/wikipedia/commons/0/04/ChatGPT_logo.svg", compatible: true },
        { name: "Claude 3.5 Sonnet", category: "LLM CORE", logo: "https://www.anthropic.com/favicon.ico", compatible: true },
        { name: "Perplexity", category: "PESQUISA", logo: "images/perplexity-logo.png", compatible: true },
        { name: "Notion AI", category: "KNOWLEDGE", logo: "https://upload.wikimedia.org/wikipedia/commons/4/45/Notion_app_logo.png", compatible: true },
        { name: "Gamma", category: "APRESENTAÇÃO", logo: "https://gamma.app/favicon.ico", compatible: true },
        { name: "Microsoft Copilot", category: "PRODUTIVIDADE", logo: "https://upload.wikimedia.org/wikipedia/commons/2/2a/Microsoft_365_Copilot_Icon.svg", compatible: true },
        { name: "Google Gemini Advanced", category: "LLM CORE", logo: "https://www.gstatic.com/lamda/images/gemini_sparkle_v002_d4735304ff6292a690345.svg", compatible: true }
    ],
    outros: [
        { name: "ChatGPT Plus", category: "LLM CORE", logo: "https://upload.wikimedia.org/wikipedia/commons/0/04/ChatGPT_logo.svg", compatible: true },
        { name: "Claude 3.5 Sonnet", category: "LLM CORE", logo: "https://www.anthropic.com/favicon.ico", compatible: true },
        { name: "Zapier", category: "AUTOMAÇÃO", logo: "images/zapier-logo.png", compatible: true },
        { name: "Notion AI", category: "KNOWLEDGE", logo: "https://upload.wikimedia.org/wikipedia/commons/4/45/Notion_app_logo.png", compatible: true },
        { name: "Perplexity", category: "PESQUISA", logo: "images/perplexity-logo.png", compatible: true },
        { name: "Google Gemini Advanced", category: "LLM CORE", logo: "https://www.gstatic.com/lamda/images/gemini_sparkle_v002_d4735304ff6292a690345.svg", compatible: true },
        { name: "Microsoft Copilot", category: "PRODUTIVIDADE", logo: "https://upload.wikimedia.org/wikipedia/commons/2/2a/Microsoft_365_Copilot_Icon.svg", compatible: true },
        { name: "Gamma", category: "APRESENTAÇÃO", logo: "https://gamma.app/favicon.ico", compatible: true }
    ]
};

const areaNames = {
    marketing: "Marketing",
    tecnologia: "Tecnologia",
    vendas: "Vendas",
    financeiro: "Financeiro",
    outros: "Outros"
};

const usageLabels = {
    sim_frequente: "Uso frequente",
    sim_eventual: "Uso eventual, ainda explorando",
    nao_mas_quero: "Não uso, mas quero começar",
    empresa_tem: "Empresa já oferece"
};

// ========================================
// Task Options by Area
// ========================================
const taskOptionsByArea = {
    marketing: [
        { value: "criar_conteudo_social", text: "Criar conteúdo social" },
        { value: "gestao_trafego", text: "Gestão de tráfego" },
        { value: "redacao_artigos", text: "Redação de artigos" },
        { value: "responder_clientes", text: "Responder clientes" },
        { value: "analise_metricas", text: "Análise de métricas" },
        { value: "outra", text: "Outra" }
    ],
    tecnologia: [
        { value: "desenvolvimento_codigo", text: "Desenvolvimento de código" },
        { value: "code_review", text: "Code review" },
        { value: "monitoramento_logs", text: "Monitoramento de logs" },
        { value: "escrita_documentacao", text: "Escrita de documentação" },
        { value: "testes_qa", text: "Testes/QA" },
        { value: "suporte_n1_n2", text: "Suporte N1/N2" },
        { value: "outra", text: "Outra" }
    ],
    vendas: [
        { value: "prospeccao_leads", text: "Prospecção de leads" },
        { value: "qualificacao_sdr", text: "Qualificação (SDR)" },
        { value: "reunioes_demo", text: "Reuniões de demo" },
        { value: "follow_up", text: "Follow up" },
        { value: "elaboracao_propostas", text: "Elaboração de propostas" },
        { value: "elaboracao_crm", text: "Elaboração de CRM" },
        { value: "outra", text: "Outra" }
    ],
    financeiro: [
        { value: "conciliacao_bancaria", text: "Conciliação bancária" },
        { value: "emissao_notas", text: "Emissão de notas" },
        { value: "contas_pagar_receber", text: "Contas a pagar/receber" },
        { value: "relatorios_fechamento", text: "Relatórios de fechamento" },
        { value: "gestao_reembolsos", text: "Gestão de reembolsos" },
        { value: "auditoria", text: "Auditoria" },
        { value: "outra", text: "Outra" }
    ],
    outros: [
        { value: "gestao_emails", text: "Gestão de emails" },
        { value: "agendamento_reunioes", text: "Agendamento de reuniões" },
        { value: "organizacao_arquivos", text: "Organização de arquivos" },
        { value: "preenchimento_planilhas", text: "Preenchimento de planilhas" },
        { value: "pesquisa_dados", text: "Pesquisa de dados" },
        { value: "relatorios", text: "Relatórios" },
        { value: "outra", text: "Outra" }
    ]
};

// ========================================
// AI Recommendations Database (Legacy - mantido para compatibilidade)
// ========================================
const aiRecommendations = {
    tecnologia: {
        popular: {
            name: "GitHub Copilot",
            logo: "https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png",
            users: "1.8 milhões"
        },
        recommended: {
            name: "Claude Pro",
            logo: "https://upload.wikimedia.org/wikipedia/commons/8/8a/Claude_AI_logo.svg",
            desc: "Análise profunda de código, documentação técnica e debugging com contexto de 200K tokens"
        }
    },
    marketing: {
        popular: {
            name: "ChatGPT Plus",
            logo: "https://upload.wikimedia.org/wikipedia/commons/0/04/ChatGPT_logo.svg",
            users: "2.4 milhões"
        },
        recommended: {
            name: "Jasper AI",
            logo: "https://www.jasper.ai/favicon.ico",
            desc: "Criação de conteúdo otimizado para conversão, com templates específicos para marketing"
        }
    },
    vendas: {
        popular: {
            name: "ChatGPT Plus",
            logo: "https://upload.wikimedia.org/wikipedia/commons/0/04/ChatGPT_logo.svg",
            users: "1.8 milhões"
        },
        recommended: {
            name: "Claude Pro",
            logo: "https://upload.wikimedia.org/wikipedia/commons/8/8a/Claude_AI_logo.svg",
            desc: "Análise de pipelines de vendas, criação de propostas personalizadas e automação de follow-ups"
        }
    },
    financeiro: {
        popular: {
            name: "Microsoft Copilot",
            logo: "https://upload.wikimedia.org/wikipedia/commons/2/2a/Microsoft_365_Copilot_Icon.svg",
            users: "1.2 milhões"
        },
        recommended: {
            name: "Google Gemini Advanced",
            logo: "https://www.gstatic.com/lamda/images/gemini_sparkle_v002_d4735304ff6292a690345.svg",
            desc: "Análise de planilhas, geração de relatórios e integração nativa com Google Workspace"
        }
    },
    vendas: {
        popular: {
            name: "ChatGPT Plus",
            logo: "https://upload.wikimedia.org/wikipedia/commons/0/04/ChatGPT_logo.svg",
            users: "1.8 milhões"
        },
        recommended: {
            name: "Claude Pro",
            logo: "https://upload.wikimedia.org/wikipedia/commons/8/8a/Claude_AI_logo.svg",
            desc: "Análise de pipelines de vendas, criação de propostas personalizadas e automação de follow-ups"
        }
    },
    outros: {
        popular: {
            name: "ChatGPT Plus",
            logo: "https://upload.wikimedia.org/wikipedia/commons/0/04/ChatGPT_logo.svg",
            users: "2.4 milhões"
        },
        recommended: {
            name: "Claude Pro",
            logo: "https://upload.wikimedia.org/wikipedia/commons/8/8a/Claude_AI_logo.svg",
            desc: "Versatilidade para múltiplas tarefas, análise profunda e conversas contextuais longas"
        }
    }
};

// ========================================
// Utility Functions
// ========================================
// Função para gerar slug do email
function generateSlugFromEmail(email) {
    const [name, domain] = email.toLowerCase().split('@');
    const companyName = domain.split('.')[0]; // pega apenas o nome da empresa (antes do .com)
    const nameSlug = name.replace(/[^a-z0-9]+/g, '-').replace(/^-+|-+$/g, ''); // remove caracteres especiais
    return `${nameSlug}-${companyName}`;
}

// ========================================
// Form State Management
// ========================================
let currentStep = 1;
const totalSteps = 2;

// Form data storage
const formData = {
    area: null,
    cargo: null,
    senioridadeTop: 50,
    familiaridadeIA: 50,
    preferenciaEstrutura: 50,
    necessidadeExplicacao: 50,
    frequencia: 50,
    tempoOcorrencia: 25,
    complexidade: 25,
    custoErro: 25,
    roiEstimado: 25,
    tasks: []
};

// Function to toggle AI used field visibility
function toggleAIUsedField(radioGroup) {
    const taskContainer = radioGroup.closest('.profile-filters');
    const aiUsedField = taskContainer.querySelector('.ai-used-field');
    const iaUsadaInput = taskContainer.querySelector('input[name*="iaUsada"]');
    
    if (radioGroup.querySelector('input[value="sim"]:checked')) {
        aiUsedField.style.display = 'block';
    } else {
        aiUsedField.style.display = 'none';
        if (iaUsadaInput) {
            iaUsadaInput.value = '';
        }
    }
}

// ========================================
// Navigation Functions
// ========================================
function updateProgressBar() {
    const progressFill = document.getElementById('progressFill');
    const progressSteps = document.querySelectorAll('.progress-step');
    
    const percentage = (currentStep / totalSteps) * 100;
    progressFill.style.width = `${percentage}%`;
    
    progressSteps.forEach((step, index) => {
        const stepNum = index + 1;
        step.classList.remove('active', 'completed');
        
        if (stepNum < currentStep) {
            step.classList.add('completed');
        } else if (stepNum === currentStep) {
            step.classList.add('active');
        }
    });
}

function showStep(step) {
    const formSteps = document.querySelectorAll('.form-step');
    
    formSteps.forEach((formStep) => {
        formStep.classList.remove('active');
        if (parseInt(formStep.dataset.step) === step) {
            formStep.classList.add('active');
        }
    });
    
    currentStep = step;
    updateProgressBar();
}

function nextStep(currentStepNum) {
    // Validate current step
    if (!validateStep(currentStepNum)) {
        return;
    }
    
    // Save data
    saveStepData(currentStepNum);
    
    // Move to next step
    showStep(currentStepNum + 1);
    
    // Smooth scroll to form
    scrollToElement('.diagnostic-section');
}

function prevStep(currentStepNum) {
    showStep(currentStepNum - 1);
    scrollToElement('.diagnostic-section');
}

function validateStep(step) {
    if (step === 1) {
        const selectedArea = document.querySelector('input[name="area"]:checked');
        if (!selectedArea) {
            shakeElement('.options-grid');
            return false;
        }
        
        // Validar que pelo menos uma tarefa foi adicionada
        const tasksContainer = document.getElementById('tasksContainer');
        const taskItems = tasksContainer ? tasksContainer.querySelectorAll('.profile-filters:not(.task-template)') : [];
        
        if (taskItems.length === 0) {
            alert('Por favor, adicione pelo menos uma tarefa antes de continuar.');
            shakeElement('.tasks-section');
            return false;
        }
        
        // Validar que cada tarefa tem uma categoria selecionada
        let hasInvalidTask = false;
        taskItems.forEach((taskItem, index) => {
            const taskSelect = taskItem.querySelector('.cargo-select');
            if (!taskSelect || !taskSelect.value || taskSelect.value === '') {
                hasInvalidTask = true;
                taskItem.style.border = '2px solid #ef4444';
                setTimeout(() => {
                    taskItem.style.border = '';
                }, 2000);
            }
        });
        
        if (hasInvalidTask) {
            alert('Por favor, selecione a categoria para todas as tarefas antes de continuar.');
            return false;
        }
    }
    return true;
}

function saveStepData(step) {
    if (step === 1) {
        const selectedArea = document.querySelector('input[name="area"]:checked');
        if (selectedArea) {
            formData.area = selectedArea.value;
        }
        const cargoSelect = document.getElementById('cargo');
        if (cargoSelect) {
            formData.cargo = cargoSelect.value;
        }
        
        // Coletar os 4 sliders superiores (níveis gerais do usuário)
        const senioridadeTopInput = document.getElementById('senioridadeTop');
        if (senioridadeTopInput) {
            formData.senioridadeTop = parseInt(senioridadeTopInput.value) || 0;
        }
        const familiaridadeIAInput = document.getElementById('familiaridadeIA');
        if (familiaridadeIAInput) {
            formData.familiaridadeIA = parseInt(familiaridadeIAInput.value) || 0;
        }
        const preferenciaEstruturaInput = document.getElementById('preferenciaEstrutura');
        if (preferenciaEstruturaInput) {
            formData.preferenciaEstrutura = parseInt(preferenciaEstruturaInput.value) || 0;
        }
        const necessidadeExplicacaoInput = document.getElementById('necessidadeExplicacao');
        if (necessidadeExplicacaoInput) {
            formData.necessidadeExplicacao = parseInt(necessidadeExplicacaoInput.value) || 0;
        }
        
        // Coletar sliders inferiores do template (mantido para compatibilidade)
        const frequenciaInput = document.getElementById('frequencia');
        if (frequenciaInput) {
            formData.frequencia = parseInt(frequenciaInput.value) || 0;
        }
        const tempoOcorrenciaInput = document.getElementById('tempoOcorrencia');
        if (tempoOcorrenciaInput) {
            formData.tempoOcorrencia = parseInt(tempoOcorrenciaInput.value) || 0;
        }
        const complexidadeInput = document.getElementById('complexidade');
        if (complexidadeInput) {
            formData.complexidade = parseInt(complexidadeInput.value) || 0;
        }
        const custoErroInput = document.getElementById('custoErro');
        if (custoErroInput) {
            formData.custoErro = parseInt(custoErroInput.value) || 0;
        }
        const roiEstimadoInput = document.getElementById('roiEstimado');
        if (roiEstimadoInput) {
            formData.roiEstimado = parseInt(roiEstimadoInput.value) || 0;
        }
        
        // Save all task data from dynamically added tasks
        const taskSelects = document.querySelectorAll('.tasks-container .cargo-select');
        formData.tasks = [];
        taskSelects.forEach((select) => {
            const taskValue = select.value;
            if (taskValue) {
                // Get sliders for this task
                const taskContainer = select.closest('.profile-filters');
                const sliders = taskContainer.querySelectorAll('input[type="range"]');
                const taskData = {
                    task: taskValue,
                    taskText: select.options[select.selectedIndex]?.text,
                    frequencia: null,
                    tempoOcorrencia: null,
                    complexidade: null,
                    custoErro: null,
                    roiEstimado: null,
                    dataSensitivity: null,
                    usaIA: null,
                    iaUsada: null
                };
                
                sliders.forEach(slider => {
                    const sliderId = slider.id;
                    if (sliderId.includes('frequencia')) {
                        taskData.frequencia = parseInt(slider.value) || 0;
                    } else if (sliderId.includes('tempoOcorrencia')) {
                        taskData.tempoOcorrencia = parseInt(slider.value) || 0;
                    } else if (sliderId.includes('complexidade')) {
                        taskData.complexidade = parseInt(slider.value) || 0;
                    } else if (sliderId.includes('custoErro')) {
                        taskData.custoErro = parseInt(slider.value) || 0;
                    } else if (sliderId.includes('roiEstimado')) {
                        taskData.roiEstimado = parseInt(slider.value) || 0;
                    } else if (sliderId.includes('dataSensitivity')) {
                        taskData.dataSensitivity = parseInt(slider.value) || 0;
                    }
                });
                
                // Save AI usage data
                const usaIARadio = taskContainer.querySelector('input[name*="usaIA"]:checked');
                if (usaIARadio) {
                    taskData.usaIA = usaIARadio.value;
                }
                
                const iaUsadaInput = taskContainer.querySelector('input[name*="iaUsada"]');
                if (iaUsadaInput && iaUsadaInput.value.trim()) {
                    taskData.iaUsada = iaUsadaInput.value.trim();
                }
                
                formData.tasks.push(taskData);
            }
        });
    }
}

// ========================================
// Results Functions
// ========================================
function showResults() {
    // Validate step 1
    if (!validateStep(1)) {
        return;
    }
    
    // Save step 1 data
    saveStepData(1);
    
    // Show loading overlay
    const loadingOverlay = document.getElementById('loadingOverlay');
    if (loadingOverlay) {
        loadingOverlay.classList.add('active');
    }
    
    // Hide current step
    const currentStep = document.querySelector('.form-step.active');
    if (currentStep) {
        currentStep.classList.remove('active');
    }
    
    // After 4 seconds, show results
    setTimeout(() => {
        // Get stack recommendations
        const stack = stackRecommendations[formData.area] || stackRecommendations.outros;
        const areaName = areaNames[formData.area] || "Outros";
        
        // Update header
        document.getElementById('stackAreaName').textContent = areaName;
        document.getElementById('filterArea').textContent = areaName;
        
        // Get tasks from all task selects
        const taskSelects = document.querySelectorAll('.tasks-container .cargo-select');
        const selectedTasks = Array.from(taskSelects)
            .map(select => select.options[select.selectedIndex]?.text)
            .filter(text => text && text !== 'Selecione uma tarefa...')
            .join(', ');
        
        document.getElementById('filterTasks').textContent = selectedTasks || 'Tarefas selecionadas';
        document.getElementById('filterUsage').textContent = 'Análise personalizada';
        
        // Populate stack grid - sempre mostrar 8 cards (2 linhas de 4)
        const stackGrid = document.getElementById('stackGrid');
        stackGrid.innerHTML = '';
        
        // Garantir que temos pelo menos 8 apps (duplicar se necessário)
        let appsToShow = [...stack];
        while (appsToShow.length < 8) {
            appsToShow = [...appsToShow, ...stack];
        }
        appsToShow = appsToShow.slice(0, 8);
        
        appsToShow.forEach((app, index) => {
            const card = document.createElement('div');
            card.className = 'stack-card';
            card.innerHTML = `
                <div class="stack-card-logo-wrapper">
                    ${app.compatible ? '<span class="stack-card-compatible">Compatível</span>' : ''}
                    <div class="stack-card-logo">
                        <img src="${app.logo}" alt="${app.name}" onerror="this.style.display='none'; this.parentElement.innerHTML='<div style=\\'width:100%;height:100%;background:var(--color-bg-card);display:flex;align-items:center;justify-content:center;font-size:0.7rem;color:var(--color-text-muted)\\'>${app.name.substring(0,2).toUpperCase()}</div>'">
                    </div>
                </div>
                <h4 class="stack-card-name">${app.name}</h4>
                <div class="stack-card-category">${app.category}</div>
            `;
            stackGrid.appendChild(card);
        });
        
        // Hide loading overlay
        if (loadingOverlay) {
            loadingOverlay.classList.remove('active');
        }
        
        // Show results step
        showStep(2);
        scrollToElement('.diagnostic-section');
    }, 4000);
}

function submitUnlock() {
    const emailInput = document.getElementById('unlockEmail');
    const email = emailInput.value.trim();
    
    // Validate email
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!email || !emailRegex.test(email)) {
        shakeElement('.unlock-form');
        emailInput.focus();
        return;
    }
    
    // Garantir que todos os dados estão atualizados antes de enviar
    saveStepData(1);
    
    // Prepare form data
    const stack = stackRecommendations[formData.area] || stackRecommendations.outros;
    const areaName = areaNames[formData.area] || "Outros";
    
    // Coletar novamente os sliders superiores para garantir que estão atualizados
    const senioridadeTopInput = document.getElementById('senioridadeTop');
    const familiaridadeIAInput = document.getElementById('familiaridadeIA');
    const preferenciaEstruturaInput = document.getElementById('preferenciaEstrutura');
    const necessidadeExplicacaoInput = document.getElementById('necessidadeExplicacao');
    
    // Coletar todos os dados das tarefas com informações completas
    const taskSelects = document.querySelectorAll('.tasks-container .cargo-select');
    const tasksComplete = [];
    
    taskSelects.forEach((select) => {
        const taskValue = select.value;
        if (taskValue) {
            const taskContainer = select.closest('.profile-filters');
            const sliders = taskContainer.querySelectorAll('input[type="range"]');
            
            const taskData = {
                task: taskValue,
                taskText: select.options[select.selectedIndex]?.text,
                frequencia: null,
                tempoOcorrencia: null,
                complexidade: null,
                custoErro: null,
                roiEstimado: null,
                dataSensitivity: null,
                usaIA: null,
                iaUsada: null
            };
            
            // Coletar valores dos sliders da tarefa (0-100)
            sliders.forEach(slider => {
                const sliderId = slider.id;
                if (sliderId.includes('frequencia')) {
                    taskData.frequencia = parseInt(slider.value) || 0;
                } else if (sliderId.includes('tempoOcorrencia')) {
                    taskData.tempoOcorrencia = parseInt(slider.value) || 0;
                } else if (sliderId.includes('complexidade')) {
                    taskData.complexidade = parseInt(slider.value) || 0;
                } else if (sliderId.includes('custoErro')) {
                    taskData.custoErro = parseInt(slider.value) || 0;
                } else if (sliderId.includes('roiEstimado')) {
                    taskData.roiEstimado = parseInt(slider.value) || 0;
                } else if (sliderId.includes('dataSensitivity')) {
                    taskData.dataSensitivity = parseInt(slider.value) || 0;
                }
            });
            
            // Coletar resposta sobre uso de IA
            const usaIARadio = taskContainer.querySelector('input[name*="usaIA"]:checked');
            if (usaIARadio) {
                taskData.usaIA = usaIARadio.value;
            }
            
            // Coletar qual IA é usada (se aplicável)
            const iaUsadaInput = taskContainer.querySelector('input[name*="iaUsada"]');
            if (iaUsadaInput && iaUsadaInput.value.trim()) {
                taskData.iaUsada = iaUsadaInput.value.trim();
            }
            
            tasksComplete.push(taskData);
        }
    });
    
    // Preparar objeto completo com todos os dados
    const fullData = {
        // Dados básicos
        email: email,
        timestamp: new Date().toISOString(),
        area: formData.area,
        areaName: areaName,
        cargo: formData.cargo || null,
        slug: generateSlugFromEmail(email),
        
        // Sliders superiores (níveis gerais do usuário - valores de 0 a 100)
        senioridadeTop: senioridadeTopInput ? parseInt(senioridadeTopInput.value) || 0 : formData.senioridadeTop,
        familiaridadeIA: familiaridadeIAInput ? parseInt(familiaridadeIAInput.value) || 0 : formData.familiaridadeIA,
        preferenciaEstrutura: preferenciaEstruturaInput ? parseInt(preferenciaEstruturaInput.value) || 0 : formData.preferenciaEstrutura,
        necessidadeExplicacao: necessidadeExplicacaoInput ? parseInt(necessidadeExplicacaoInput.value) || 0 : formData.necessidadeExplicacao,
        
        // Tarefas com todos os dados completos (sliders de 0 a 100 + respostas de IA)
        tasks: tasksComplete,
        
        // Stack recomendado (apenas dados serializáveis)
        stack: stack.slice(0, 4).map(app => ({
            name: app.name,
            category: app.category,
            logo: app.logo,
            compatible: app.compatible
        }))
    };
    
    // Show loading state
    const unlockBtn = document.querySelector('.unlock-btn');
    const originalText = unlockBtn.innerHTML;
    unlockBtn.innerHTML = 'Gerando relatório...';
    unlockBtn.disabled = true;
    
    // URL do webhook do n8n
    const N8N_WEBHOOK_URL = 'https://ianafirma.app.n8n.cloud/webhook/dabfbfe6-2e55-4ca2-9c3e-9a0053d92084';
    
    // Log dos dados antes de enviar (para debug)
    console.log('Enviando dados para webhook:', fullData);
    console.log('URL do webhook:', N8N_WEBHOOK_URL);
    
    // Send to n8n webhook
    fetch(N8N_WEBHOOK_URL, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(fullData)
    })
    .then(async response => {
        console.log('Resposta recebida:', response.status, response.statusText);
        
        // Tentar ler como texto primeiro para ver o que veio
        const textResponse = await response.text();
        console.log('Resposta do servidor (texto):', textResponse);
        
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status} - ${textResponse}`);
        }
        
        // Tentar parsear como JSON
        let data;
        try {
            data = textResponse ? JSON.parse(textResponse) : {};
        } catch (e) {
            // Se não for JSON, verificar se é uma string vazia ou mensagem simples
            console.warn('Resposta não é JSON válido:', e);
            if (textResponse.trim() === '') {
                // Resposta vazia pode ser normal para webhooks do n8n
                data = { success: true, message: 'Webhook recebido' };
            } else {
                data = { success: true, message: textResponse };
            }
        }
        
        return data;
    })
    .then(data => {
        console.log('Dados processados:', data);
        
        // Se a requisição chegou aqui, significa que foi bem-sucedida (HTTP 200)
        // O webhook simples do n8n pode retornar diferentes formatos:
        // - {"workflowId": "...", "executionId": "..."}
        // - {"message": "Workflow was started"}
        // - Texto simples: "Workflow was started"
        // Todos esses são sinais de sucesso!
        
        if (data.success && data.slug) {
            // Caso especial: se o n8n retornar success e slug, redireciona para relatório
            window.location.href = `/relatorio/${data.slug}.html`;
        } else if (data.success) {
            // Se tiver success, mostra mensagem de sucesso
            console.log('Webhook executado com sucesso');
            alert('Relatório gerado com sucesso! Verifique o n8n para ver os dados recebidos.');
            unlockBtn.innerHTML = originalText;
            unlockBtn.disabled = false;
        } else if (data.error) {
            // Se tiver erro explícito, lança erro
            throw new Error(data.error);
        } else {
            // Qualquer outra resposta HTTP 200 é considerada sucesso
            // (workflowId, executionId, message, ou qualquer outra coisa)
            console.log('Webhook do n8n executado com sucesso:', data);
            alert('Dados enviados com sucesso para o n8n! O workflow foi iniciado.');
            unlockBtn.innerHTML = originalText;
            unlockBtn.disabled = false;
        }
    })
    .catch(error => {
        console.error('Erro ao gerar relatório:', error);
        console.error('Tipo do erro:', error.name);
        console.error('Mensagem do erro:', error.message);
        console.error('Stack do erro:', error.stack);
        console.error('Dados que tentaram ser enviados:', JSON.stringify(fullData, null, 2));
        
        // Mensagem de erro mais detalhada
        let errorMessage = 'Erro ao gerar relatório. ';
        if (error.message.includes('Failed to fetch') || error.message.includes('NetworkError')) {
            errorMessage += 'Erro de conexão. Verifique sua internet e se o webhook do n8n está acessível.';
        } else if (error.message.includes('CORS')) {
            errorMessage += 'Erro de CORS. Verifique as configurações do n8n.';
        } else {
            errorMessage += error.message || 'Por favor, tente novamente.';
        }
        
        alert(errorMessage);
        unlockBtn.innerHTML = originalText;
        unlockBtn.disabled = false;
    });
}

// Legacy function - mantida para compatibilidade
function submitEmail() {
    submitUnlock();
}

function closeModal() {
    document.getElementById('successModal').classList.remove('active');
}

function resetForm() {
    // Reset form data
    formData.area = null;
    formData.cargo = null;
    formData.senioridadeTop = 50;
    formData.familiaridadeIA = 50;
    formData.preferenciaEstrutura = 50;
    formData.necessidadeExplicacao = 50;
    formData.frequencia = 50;
    formData.tempoOcorrencia = 25;
    formData.complexidade = 25;
    formData.custoErro = 25;
    formData.roiEstimado = 25;
    formData.tasks = [];
    
    // Reset task counter
    window.taskCounter = 0;
    
    // Clear all dynamically added tasks
    const tasksContainer = document.getElementById('tasksContainer');
    if (tasksContainer) {
        // Remove all task items (but keep the template)
        const taskItems = tasksContainer.querySelectorAll('.profile-filters:not(.task-template)');
        taskItems.forEach(task => task.remove());
    }
    
    // Hide tasks section
    const tasksSection = document.getElementById('tasksSection');
    if (tasksSection) {
        tasksSection.style.display = 'none';
    }
    
    // Reset form inputs
    document.querySelectorAll('input[type="radio"]').forEach(input => input.checked = false);
    
    // Reset and hide AI used fields
    document.querySelectorAll('.ai-used-field').forEach(field => {
        field.style.display = 'none';
    });
    document.querySelectorAll('input[name*="iaUsada"]').forEach(input => {
        input.value = '';
    });
    
    // Reset cargo select in template
    const cargoSelect = document.getElementById('cargo');
    if (cargoSelect) {
        cargoSelect.value = '';
    }
    
    // Reset novos sliders superiores
    const senioridadeTopInput = document.getElementById('senioridadeTop');
    if (senioridadeTopInput) {
        senioridadeTopInput.value = 50;
        updateSliderFill('senioridadeTop', 50);
    }
    const familiaridadeIAInput = document.getElementById('familiaridadeIA');
    if (familiaridadeIAInput) {
        familiaridadeIAInput.value = 50;
        updateSliderFill('familiaridadeIA', 50);
    }
    const preferenciaEstruturaInput = document.getElementById('preferenciaEstrutura');
    if (preferenciaEstruturaInput) {
        preferenciaEstruturaInput.value = 50;
        updateSliderFill('preferenciaEstrutura', 50);
    }
    const necessidadeExplicacaoInput = document.getElementById('necessidadeExplicacao');
    if (necessidadeExplicacaoInput) {
        necessidadeExplicacaoInput.value = 50;
        updateSliderFill('necessidadeExplicacao', 50);
    }
    
    // Reset sliders inferiores no template (se existirem)
    const frequenciaInput = document.getElementById('frequencia');
    if (frequenciaInput) {
        frequenciaInput.value = 50;
        updateSliderFill('frequencia', 50);
    }
    const tempoOcorrenciaInput = document.getElementById('tempoOcorrencia');
    if (tempoOcorrenciaInput) {
        tempoOcorrenciaInput.value = 25;
        updateSliderFill('tempoOcorrencia', 25);
    }
    const complexidadeInput = document.getElementById('complexidade');
    if (complexidadeInput) {
        complexidadeInput.value = 25;
        updateSliderFill('complexidade', 25);
    }
    const custoErroInput = document.getElementById('custoErro');
    if (custoErroInput) {
        custoErroInput.value = 25;
        updateSliderFill('custoErro', 25);
    }
    const roiEstimadoInput = document.getElementById('roiEstimado');
    if (roiEstimadoInput) {
        roiEstimadoInput.value = 25;
        updateSliderFill('roiEstimado', 25);
    }
    
    // Hide loading overlay if visible
    const loadingOverlay = document.getElementById('loadingOverlay');
    if (loadingOverlay) {
        loadingOverlay.classList.remove('active');
    }
    
    // Reset unlock email input
    const unlockEmailInput = document.getElementById('unlockEmail');
    if (unlockEmailInput) {
        unlockEmailInput.value = '';
    }
    
    // Go back to step 1
    showStep(1);
    
    // Scroll to the diagnostic section after a small delay to ensure DOM is updated
    setTimeout(() => {
        const diagnosticSection = document.querySelector('.diagnostic-section');
        if (diagnosticSection) {
            const offset = 120;
            const elementPosition = diagnosticSection.getBoundingClientRect().top + window.pageYOffset;
            window.scrollTo({
                top: elementPosition - offset,
                behavior: 'smooth'
            });
        } else {
            // Fallback: scroll to top of page
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        }
    }, 150);
}

// ========================================
// Utility Functions
// ========================================
function scrollToElement(selector) {
    const element = document.querySelector(selector);
    if (element) {
        const offset = 100;
        const elementPosition = element.getBoundingClientRect().top + window.pageYOffset;
        window.scrollTo({
            top: elementPosition - offset,
            behavior: 'smooth'
        });
    }
}

function shakeElement(selector) {
    const element = document.querySelector(selector);
    if (element) {
        element.style.animation = 'shake 0.5s ease';
        setTimeout(() => {
            element.style.animation = '';
        }, 500);
    }
}

function truncateText(text, maxLength) {
    if (text.length <= maxLength) return text;
    return text.substring(0, maxLength).trim() + '...';
}

// Update slider fill visual
function updateSliderFill(sliderId, value) {
    // Handle both formats: baseId and fullId
    let fillId = sliderId;
    if (!fillId.endsWith('Fill')) {
        fillId = sliderId + 'Fill';
    }
    const fillElement = document.getElementById(fillId);
    if (fillElement) {
        fillElement.style.width = value + '%';
    }
}

// Initialize sliders in a given container
function initializeSlidersInContainer(container) {
    const sliderNames = ['frequencia', 'timePerInstance', 'tempoOcorrencia', 'complexidade', 'impacto', 'custoErro', 'roiEstimado', 'automationOpenness', 'dataSensitivity'];
    sliderNames.forEach(sliderName => {
        // Find slider by name or id that contains the slider name
        const slider = container.querySelector(`input[type="range"][name*="${sliderName}"], input[type="range"][id*="${sliderName}"]`);
        if (slider) {
            const sliderId = slider.id;
            if (sliderId) {
                // Set initial fill
                const value = parseInt(slider.value) || 0;
                updateSliderFill(sliderId, value);
                
                // Add input listener
                slider.addEventListener('input', function(e) {
                    const val = parseInt(this.value);
                    updateSliderFill(this.id, val);
                });
            }
        }
    });
}

// Add shake animation
const style = document.createElement('style');
style.textContent = `
    @keyframes shake {
        0%, 100% { transform: translateX(0); }
        10%, 30%, 50%, 70%, 90% { transform: translateX(-5px); }
        20%, 40%, 60%, 80% { transform: translateX(5px); }
    }
`;
document.head.appendChild(style);

// ========================================
// Event Listeners
// ========================================
document.addEventListener('DOMContentLoaded', () => {
    // Initialize progress bar
    updateProgressBar();
    
    // Initialize all sliders on page load
    const allSliders = document.querySelectorAll('input[type="range"].slider-input');
    allSliders.forEach(slider => {
        const sliderId = slider.id;
        if (sliderId) {
            // Set initial fill
            const value = parseInt(slider.value) || 0;
            updateSliderFill(sliderId, value);
            
            // Update fill on input
            slider.addEventListener('input', (e) => {
                const value = parseInt(e.target.value);
                updateSliderFill(sliderId, value);
            });
        }
    });
    
    // Add click event to option cards for immediate feedback
    document.querySelectorAll('.option-card, .radio-option').forEach(card => {
        card.addEventListener('click', () => {
            // Small haptic-like visual feedback
            card.style.transform = 'scale(0.98)';
            setTimeout(() => {
                card.style.transform = '';
            }, 100);
        });
    });
    
    // Close modal on backdrop click
    document.getElementById('successModal').addEventListener('click', (e) => {
        if (e.target.id === 'successModal') {
            closeModal();
        }
    });
    
    // Close modal on Escape key
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape') {
            closeModal();
        }
    });
    
    // Smooth scroll for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                const offset = 80;
                const elementPosition = target.getBoundingClientRect().top + window.pageYOffset;
                window.scrollTo({
                    top: elementPosition - offset,
                    behavior: 'smooth'
                });
            }
        });
    });
    
    // Navbar scroll effect
    let lastScroll = 0;
    window.addEventListener('scroll', () => {
        const navbar = document.querySelector('.navbar');
        const currentScroll = window.pageYOffset;
        
        if (currentScroll > 100) {
            navbar.style.background = 'rgba(10, 13, 20, 0.95)';
        } else {
            navbar.style.background = 'rgba(10, 13, 20, 0.8)';
        }
        
        lastScroll = currentScroll;
    });
    
    // Intersection Observer for animations
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);
    
    // Observe elements for animation
    document.querySelectorAll('.problem-card, .blog-card').forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(30px)';
        el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(el);
    });
    
    // Initialize task counter
    window.taskCounter = 0;
    
    // Add event listeners to area radio buttons
    const areaRadios = document.querySelectorAll('input[name="area"]');
    areaRadios.forEach(radio => {
        radio.addEventListener('change', function() {
            if (this.checked) {
                updateAllTaskSelects(this.value);
                showTasksSection();
                updateTasksUI();
            }
        });
    });
    
    // Initialize tasks section visibility based on current selection
    const selectedAreaOnLoad = document.querySelector('input[name="area"]:checked');
    if (selectedAreaOnLoad) {
        showTasksSection();
        updateTasksUI();
    }
    
    // Initialize task selects with default area (if one is selected)
    const selectedArea = document.querySelector('input[name="area"]:checked');
    if (selectedArea) {
        updateAllTaskSelects(selectedArea.value);
    }
});

// ========================================
// Update Task Select Options
// ========================================
function updateTaskSelectOptions(selectElement, area) {
    if (!selectElement || !taskOptionsByArea[area]) {
        return;
    }
    
    // Store current value
    const currentValue = selectElement.value;
    
    // Clear existing options and add placeholder
    selectElement.innerHTML = '';
    const defaultOption = document.createElement('option');
    defaultOption.value = '';
    defaultOption.textContent = 'Selecione uma tarefa...';
    selectElement.appendChild(defaultOption);
    
    // Add new options
    taskOptionsByArea[area].forEach(task => {
        const option = document.createElement('option');
        option.value = task.value;
        option.textContent = task.text;
        selectElement.appendChild(option);
    });
    
    // Restore value if it exists in new options
    if (currentValue && taskOptionsByArea[area].some(t => t.value === currentValue)) {
        selectElement.value = currentValue;
    }
}

function updateAllTaskSelects(area) {
    // Update template
    const templateSelect = document.querySelector('.task-template .cargo-select');
    if (templateSelect) {
        updateTaskSelectOptions(templateSelect, area);
    }
    
    // Update all existing task selects
    const allTaskSelects = document.querySelectorAll('.tasks-container .cargo-select');
    allTaskSelects.forEach(select => {
        updateTaskSelectOptions(select, area);
    });
}

// ========================================
// Task Management Functions
// ========================================
function showTasksSection() {
    const tasksSection = document.getElementById('tasksSection');
    if (tasksSection) {
        tasksSection.style.display = 'block';
    }
}

function updateTasksUI() {
    const tasksContainer = document.getElementById('tasksContainer');
    const tasksHeader = document.getElementById('tasksHeader');
    const tasksEmptyState = document.getElementById('tasksEmptyState');
    
    if (!tasksContainer) return;
    
    const taskItems = tasksContainer.querySelectorAll('.profile-filters:not(.task-template)');
    const hasTasks = taskItems.length > 0;
    
    if (hasTasks) {
        // Show header with button, hide empty state
        if (tasksHeader) tasksHeader.style.display = 'flex';
        if (tasksEmptyState) tasksEmptyState.style.display = 'none';
    } else {
        // Hide header, show empty state with centered button
        if (tasksHeader) tasksHeader.style.display = 'none';
        if (tasksEmptyState) tasksEmptyState.style.display = 'flex';
    }
}

function addTask() {
    const tasksContainer = document.getElementById('tasksContainer');
    const template = document.querySelector('.task-template');
    
    if (!tasksContainer || !template) {
        console.error('Tasks container or template not found');
        return;
    }
    
    // Get current selected area
    const selectedArea = document.querySelector('input[name="area"]:checked');
    if (!selectedArea) {
        alert('Por favor, selecione uma área de atuação primeiro.');
        return;
    }
    const currentArea = selectedArea.value;
    
    // Clone the template
    const newTask = template.cloneNode(true);
    newTask.classList.remove('task-template');
    newTask.style.display = 'block';
    
    // Update task select options for the new task
    const newTaskSelect = newTask.querySelector('.cargo-select');
    if (newTaskSelect) {
        updateTaskSelectOptions(newTaskSelect, currentArea);
    }
    
    // Generate unique IDs for all inputs and fills
    window.taskCounter = (window.taskCounter || 0) + 1;
    const taskId = window.taskCounter;
    
    // Update all IDs to be unique
    const allInputs = newTask.querySelectorAll('input, select');
    const fillIdMap = {}; // Map old fill IDs to new fill IDs
    
    allInputs.forEach(input => {
        if (input.id) {
            const oldId = input.id;
            const newId = `${oldId}_task${taskId}`;
            input.id = newId;
            input.name = `${input.name}_task${taskId}`;
            
            // Map fill element IDs for all sliders
            if (oldId.includes('frequencia') || oldId.includes('timePerInstance') || 
                oldId.includes('tempoOcorrencia') || oldId.includes('complexidade') || 
                oldId.includes('impacto') || oldId.includes('custoErro') || 
                oldId.includes('roiEstimado') || oldId.includes('automationOpenness') || 
                oldId.includes('dataSensitivity')) {
                const oldFillId = oldId + 'Fill';
                const newFillId = newId + 'Fill';
                fillIdMap[oldFillId] = newFillId;
            }
        }
    });
    
    // Update fill element IDs using the map
    Object.keys(fillIdMap).forEach(oldFillId => {
        const fillElement = newTask.querySelector(`#${oldFillId}`);
        if (fillElement) {
            fillElement.id = fillIdMap[oldFillId];
        }
    });
    
    // Add delete button
    const deleteBtn = document.createElement('button');
    deleteBtn.type = 'button';
    deleteBtn.className = 'btn-delete-task';
    deleteBtn.innerHTML = `
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <polyline points="3 6 5 6 21 6"></polyline>
            <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path>
        </svg>
    `;
    deleteBtn.onclick = function() {
        newTask.remove();
        updateTasksUI();
    };
    
    // Add delete button to the profile-filters container (top right corner)
    newTask.style.position = 'relative';
    deleteBtn.style.position = 'absolute';
    deleteBtn.style.top = 'var(--spacing-lg)';
    deleteBtn.style.right = 'var(--spacing-lg)';
    newTask.appendChild(deleteBtn);
    
    // Append to container
    tasksContainer.appendChild(newTask);
    
    // Initialize sliders for the new task
    initializeSlidersInContainer(newTask);
    
    // Update UI to show header instead of empty state
    updateTasksUI();
    
    // Add event listeners for AI usage radio buttons
    const usaIARadios = newTask.querySelectorAll('input[name*="usaIA"]');
    usaIARadios.forEach(radio => {
        radio.addEventListener('change', function() {
            toggleAIUsedField(this.closest('.filter-group').querySelector('.radio-group-inline'));
        });
    });
    
    // Scroll to the new task
    newTask.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
}
