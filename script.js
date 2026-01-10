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
    senioridadeTop: 3,
    familiaridadeIA: 3,
    setupComplexityTolerance: 3,
    riskTolerance: 3,
    tasks: []
};

// Function to toggle AI used field visibility (legacy - não mais usado)
function toggleAIUsedField(radioGroup) {
    // Função mantida para compatibilidade, mas não é mais usada
    // Os campos de IA agora são gerenciados por toggleAIToolsSelection
}

// Function to toggle AI tools selection visibility
function toggleAIToolsSelection(radioInput) {
    const taskContainer = radioInput.closest('.profile-filters');
    const aiToolsSelection = taskContainer.querySelector('.ai-tools-selection');
    
    if (radioInput.value === 'sim') {
        if (aiToolsSelection) {
            aiToolsSelection.style.display = 'block';
        }
    } else {
        if (aiToolsSelection) {
            aiToolsSelection.style.display = 'none';
            // Uncheck all AI tool checkboxes
            const checkboxes = aiToolsSelection.querySelectorAll('input[type="checkbox"]');
            checkboxes.forEach(cb => cb.checked = false);
            // Hide "Outro" field
            const otherField = taskContainer.querySelector('.ai-other-field');
            if (otherField) {
                otherField.style.display = 'none';
                const otherInput = taskContainer.querySelector('input[name*="aiOther"]');
                if (otherInput) {
                    otherInput.value = '';
                }
            }
        }
    }
}

// Function to toggle "Outro" field visibility
function toggleAIOtherField(checkbox) {
    const taskContainer = checkbox.closest('.profile-filters');
    const otherField = taskContainer.querySelector('.ai-other-field');
    
    if (checkbox.checked && checkbox.value === 'outro') {
        if (otherField) {
            otherField.style.display = 'block';
        }
    } else {
        if (otherField) {
            otherField.style.display = 'none';
            const otherInput = taskContainer.querySelector('input[name*="aiOther"]');
            if (otherInput) {
                otherInput.value = '';
            }
        }
    }
}

// Initialize AI tools selection for a container
function initializeAIToolsSelection(container) {
    // Set up radio button listeners for Não/Sim
    const usaIARadios = container.querySelectorAll('input[name*="usaIA"]');
    usaIARadios.forEach(radio => {
        radio.addEventListener('change', function() {
            toggleAIToolsSelection(this);
        });
        // Initialize visibility on load
        if (radio.checked) {
            toggleAIToolsSelection(radio);
        }
    });
    
    // Set up checkbox listeners for AI tools
    const aiToolCheckboxes = container.querySelectorAll('input[name*="aiTools"]');
    aiToolCheckboxes.forEach(checkbox => {
        checkbox.addEventListener('change', function() {
            toggleAIOtherField(this);
        });
        // Initialize visibility on load
        if (checkbox.checked) {
            toggleAIOtherField(checkbox);
        }
    });
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
            // Save custom area name if "outros" is selected
            if (selectedArea.value === 'outros') {
                const areaOtherInput = document.getElementById('areaOther');
                if (areaOtherInput && areaOtherInput.value) {
                    formData.areaOther = areaOtherInput.value.trim();
                }
            } else {
                formData.areaOther = null;
            }
        }
        const cargoSelect = document.getElementById('cargo');
        if (cargoSelect) {
            formData.cargo = cargoSelect.value;
        }
        
        // Coletar os 4 sliders superiores (níveis gerais do usuário)
        const senioridadeTopInput = document.getElementById('senioridadeTop');
        if (senioridadeTopInput) {
            formData.senioridadeTop = Math.round(Math.max(1, Math.min(5, parseFloat(senioridadeTopInput.value) || 3)));
        }
        const familiaridadeIAInput = document.getElementById('familiaridadeIA');
        if (familiaridadeIAInput) {
            formData.familiaridadeIA = Math.round(Math.max(1, Math.min(5, parseFloat(familiaridadeIAInput.value) || 3)));
        }
        const setupComplexityToleranceInput = document.getElementById('setupComplexityTolerance');
        if (setupComplexityToleranceInput) {
            formData.setupComplexityTolerance = Math.round(Math.max(1, Math.min(5, parseFloat(setupComplexityToleranceInput.value) || 3)));
        }
        const riskToleranceInput = document.getElementById('riskTolerance');
        if (riskToleranceInput) {
            formData.riskTolerance = Math.round(Math.max(1, Math.min(5, parseFloat(riskToleranceInput.value) || 3)));
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
                const taskData = {};
                
                // Campos básicos sempre presentes
                taskData.task = taskValue;
                taskData.taskText = select.options[select.selectedIndex]?.text;
                
                // Coletar valores dos sliders da tarefa (1-5) - apenas se existirem
                sliders.forEach(slider => {
                    const sliderId = slider.id;
                    const roundedValue = Math.round(Math.max(1, Math.min(5, parseFloat(slider.value) || 3)));
                    if (sliderId.includes('frequencia')) {
                        taskData.frequencia = roundedValue;
                    } else if (sliderId.includes('timePerInstance')) {
                        taskData.tempoOcorrencia = roundedValue;
                    } else if (sliderId.includes('automationOpenness')) {
                        taskData.automatizacao = roundedValue;
                    } else if (sliderId.includes('dataSensitivity')) {
                        taskData.dataSensitivity = roundedValue;
                    }
                });
                
                // Save AI usage data
                const usaIARadio = taskContainer.querySelector('input[name*="usaIA"]:checked');
                if (usaIARadio) {
                    taskData.usaIA = usaIARadio.value;
                }
                
                // Coletar nome da IA usada (checkboxes ou campo "Outro")
                const aiToolsCheckboxes = taskContainer.querySelectorAll('input[name*="aiTools"]:checked');
                const selectedAITools = Array.from(aiToolsCheckboxes).map(cb => cb.value);
                
                // Coletar campo "Outro" se preenchido
                const aiOtherInput = taskContainer.querySelector('input[name*="aiOther"]');
                const aiOtherValue = aiOtherInput && aiOtherInput.value.trim() ? aiOtherInput.value.trim() : null;
                
                // Determinar qual IA foi usada (prioridade: campo "Outro", depois checkboxes)
                if (aiOtherValue) {
                    taskData.iaUsada = aiOtherValue;
                } else if (selectedAITools.length > 0) {
                    // Se múltiplas IAs foram selecionadas, usar a primeira ou concatenar
                    taskData.iaUsada = selectedAITools.length === 1 ? selectedAITools[0] : selectedAITools.join(', ');
                } else {
                    taskData.iaUsada = null;
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
        // Use custom area name if "outros" is selected and has a custom name
        let areaName = areaNames[formData.area] || "Outros";
        if (formData.area === 'outros' && formData.areaOther) {
            areaName = formData.areaOther;
        }
        
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

// Function to validate corporate email
function isValidCorporateEmail(email) {
    // Lista de domínios de email pessoais comuns
    const personalEmailDomains = [
        'gmail.com',
        'gmail.com.br',
        'hotmail.com',
        'hotmail.com.br',
        'outlook.com',
        'outlook.com.br',
        'yahoo.com',
        'yahoo.com.br',
        'bol.com.br',
        'uol.com.br',
        'terra.com.br',
        'live.com',
        'live.com.br',
        'icloud.com',
        'me.com',
        'mail.com',
        'protonmail.com',
        'proton.me',
        'gmx.com',
        'zoho.com',
        'aol.com',
        'msn.com',
        'ymail.com',
        'rocketmail.com'
    ];
    
    // Valida formato básico de email
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!email || !emailRegex.test(email)) {
        return false;
    }
    
    // Extrai o domínio do email
    const domain = email.split('@')[1].toLowerCase();
    
    // Verifica se o domínio está na lista de emails pessoais
    return !personalEmailDomains.includes(domain);
}

function submitUnlock() {
    const emailInput = document.getElementById('unlockEmail');
    const emailError = document.getElementById('unlockEmailError');
    const email = emailInput.value.trim();
    
    // Limpar erro anterior
    if (emailError) {
        emailError.style.display = 'none';
        emailInput.classList.remove('unlock-input-error');
    }
    
    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!email || !emailRegex.test(email)) {
        if (emailError) {
            emailError.textContent = 'Por favor, insira um email válido.';
            emailError.style.display = 'block';
            emailInput.classList.add('unlock-input-error');
        }
        shakeElement('.unlock-form');
        emailInput.focus();
        return;
    }
    
    // Validate corporate email
    if (!isValidCorporateEmail(email)) {
        if (emailError) {
            emailError.textContent = 'Este email é inválido. Só aceitamos emails corporativos.';
            emailError.style.display = 'block';
            emailInput.classList.add('unlock-input-error');
        }
        shakeElement('.unlock-form');
        emailInput.focus();
        return;
    }
    
    // Show loading state - definir botão antes de qualquer validação
    const unlockBtn = document.querySelector('.unlock-btn');
    const originalText = unlockBtn ? unlockBtn.innerHTML : 'Desbloquear';
    
    // Garantir que todos os dados estão atualizados antes de enviar
    saveStepData(1);
    
    // Validar que área foi selecionada
    if (!formData.area) {
        alert('Por favor, selecione uma área de atuação.');
        if (unlockBtn) {
            unlockBtn.innerHTML = originalText;
            unlockBtn.disabled = false;
        }
        return;
    }
    
    // Prepare form data
    const stack = stackRecommendations[formData.area] || stackRecommendations.outros;
    // Use custom area name if "outros" is selected and has a custom name
    let areaName = areaNames[formData.area] || "Outros";
    if (formData.area === 'outros' && formData.areaOther) {
        areaName = formData.areaOther;
    }
    
    // Coletar novamente os sliders superiores para garantir que estão atualizados
    const senioridadeTopInput = document.getElementById('senioridadeTop');
    const familiaridadeIAInput = document.getElementById('familiaridadeIA');
    const setupComplexityToleranceInput = document.getElementById('setupComplexityTolerance');
    const riskToleranceInput = document.getElementById('riskTolerance');
    
    // Validar que os inputs existem
    if (!senioridadeTopInput || !familiaridadeIAInput || !setupComplexityToleranceInput || !riskToleranceInput) {
        console.error('Alguns sliders não foram encontrados no DOM');
    }
    
    // Coletar todos os dados das tarefas com informações completas
    const taskSelects = document.querySelectorAll('.tasks-container .cargo-select');
    const tasksComplete = [];
    
    taskSelects.forEach((select) => {
        const taskValue = select.value;
        if (taskValue) {
            const taskContainer = select.closest('.profile-filters');
            const sliders = taskContainer.querySelectorAll('input[type="range"]');
            
            const taskData = {};
            
            // Campos básicos sempre presentes
            taskData.task = taskValue;
            taskData.taskText = select.options[select.selectedIndex]?.text;
            
            // Coletar valores dos sliders da tarefa (1-5) - apenas se existirem
            sliders.forEach(slider => {
                const sliderId = slider.id;
                const roundedValue = Math.round(Math.max(1, Math.min(5, parseFloat(slider.value) || 3)));
                if (sliderId.includes('frequencia')) {
                    taskData.frequencia = roundedValue;
                } else if (sliderId.includes('timePerInstance')) {
                    taskData.tempoOcorrencia = roundedValue;
                } else if (sliderId.includes('automationOpenness')) {
                    taskData.automatizacao = roundedValue;
                } else if (sliderId.includes('dataSensitivity')) {
                    taskData.dataSensitivity = roundedValue;
                }
            });
            
            // Coletar resposta sobre uso de IA
            const usaIARadio = taskContainer.querySelector('input[name*="usaIA"]:checked');
            if (usaIARadio) {
                taskData.usaIA = usaIARadio.value;
            }
            
            // Coletar nome da IA usada (checkboxes ou campo "Outro")
            const aiToolsCheckboxes = taskContainer.querySelectorAll('input[name*="aiTools"]:checked');
            const selectedAITools = Array.from(aiToolsCheckboxes).map(cb => cb.value);
            
            // Coletar campo "Outro" se preenchido
            const aiOtherInput = taskContainer.querySelector('input[name*="aiOther"]');
            const aiOtherValue = aiOtherInput && aiOtherInput.value.trim() ? aiOtherInput.value.trim() : null;
            
            // Determinar qual IA foi usada (prioridade: campo "Outro", depois checkboxes)
            if (aiOtherValue) {
                taskData.iaUsada = aiOtherValue;
            } else if (selectedAITools.length > 0) {
                // Se múltiplas IAs foram selecionadas, usar a primeira ou concatenar
                taskData.iaUsada = selectedAITools.length === 1 ? selectedAITools[0] : selectedAITools.join(', ');
            } else {
                taskData.iaUsada = null;
            }
            
            tasksComplete.push(taskData);
        }
    });
    
    // Preparar objeto completo com todos os dados
    // Garantir que todos os valores numéricos sejam válidos (1-5, sempre inteiros)
    const senioridadeValue = senioridadeTopInput ? Math.round(Math.max(1, Math.min(5, parseFloat(senioridadeTopInput.value) || 3))) : formData.senioridadeTop || 3;
    const familiaridadeIAValue = familiaridadeIAInput ? Math.round(Math.max(1, Math.min(5, parseFloat(familiaridadeIAInput.value) || 3))) : formData.familiaridadeIA || 3;
    const aberturaAprendizadoValue = setupComplexityToleranceInput ? Math.round(Math.max(1, Math.min(5, parseFloat(setupComplexityToleranceInput.value) || 3))) : formData.setupComplexityTolerance || 3;
    const maturidadeIAsValue = riskToleranceInput ? Math.round(Math.max(1, Math.min(5, parseFloat(riskToleranceInput.value) || 3))) : formData.riskTolerance || 3;
    
    // Preparar lista de tarefas como string para compatibilidade com N8N
    const tarefasText = tasksComplete.map(t => t.taskText).filter(Boolean).join(', ') || 'Não informado';
    
    // Transformar array de tarefas em campos planos com sufixos numéricos
    const taskFields = {};
    tasksComplete.forEach((task, index) => {
        const taskNum = index + 1;
        taskFields[`task_${taskNum}`] = task.task || null;
        taskFields[`taskText_${taskNum}`] = task.taskText || null;
        taskFields[`frequencia_${taskNum}`] = task.frequencia || null;
        taskFields[`tempoOcorrencia_${taskNum}`] = task.tempoOcorrencia || null;
        taskFields[`automatizacao_${taskNum}`] = task.automatizacao || null;
        taskFields[`dataSensitivity_${taskNum}`] = task.dataSensitivity || null;
        taskFields[`usaIA_${taskNum}`] = task.usaIA || null;
        taskFields[`iaUsada_${taskNum}`] = task.iaUsada || null;
    });
    
    const fullData = {
        // Dados básicos
        email: email,
        timestamp: new Date().toISOString(),
        area: formData.area,
        areaName: areaName,
        cargo: formData.cargo || null,
        slug: generateSlugFromEmail(email),
        
        // Campos principais (padronizados para n8n)
        senioridade: senioridadeValue,
        familiaridadeIA: familiaridadeIAValue,
        aberturaAprendizado: aberturaAprendizadoValue,
        maturidadeIAs: maturidadeIAsValue,
        
        // Tarefas como campos planos com sufixos numéricos (compatível com N8N)
        ...taskFields,
        
        // Stack recomendado (apenas dados serializáveis)
        stack: stack.slice(0, 4).map(app => ({
            name: app.name,
            category: app.category,
            logo: app.logo,
            compatible: app.compatible
        }))
    };
    
    // Validar dados essenciais antes de enviar
    if (!fullData.email || !fullData.area || !fullData.slug) {
        alert('Erro: Dados essenciais faltando. Por favor, preencha todos os campos obrigatórios.');
        if (unlockBtn) {
            unlockBtn.innerHTML = originalText;
            unlockBtn.disabled = false;
        }
        return;
    }
    
    if (tasksComplete.length === 0) {
        alert('Erro: Nenhuma tarefa foi adicionada. Por favor, adicione pelo menos uma tarefa.');
        if (unlockBtn) {
            unlockBtn.innerHTML = originalText;
            unlockBtn.disabled = false;
        }
        return;
    }
    
    // Função para remover valores null/undefined recursivamente
    // Mantém arrays vazios e strings vazias, mas remove null/undefined
    function cleanData(obj) {
        if (obj === null || obj === undefined) {
            return undefined; // Retorna undefined para ser removido depois
        }
        if (Array.isArray(obj)) {
            const cleaned = obj.map(cleanData).filter(item => item !== undefined);
            return cleaned; // Mantém array mesmo se vazio
        }
        if (typeof obj === 'object') {
            const cleaned = {};
            for (const key in obj) {
                if (obj.hasOwnProperty(key)) {
                    const value = cleanData(obj[key]);
                    // Mantém o campo se não for undefined
                    // Remove apenas se for explicitamente undefined
                    if (value !== undefined) {
                        cleaned[key] = value;
                    }
                }
            }
            return cleaned;
        }
        // Mantém strings vazias, números 0, false, etc.
        return obj;
    }
    
    // Limpar dados antes de enviar (remover null/undefined)
    const cleanedData = cleanData(fullData);
    
    // Atualizar estado do botão para loading (já definido anteriormente)
    if (unlockBtn) {
        unlockBtn.innerHTML = 'Enviando respostas...';
        unlockBtn.disabled = true;
    }
    
    // URL do webhook do n8n
    const N8N_WEBHOOK_URL = 'https://ianafirma.app.n8n.cloud/webhook/dabfbfe6-2e55-4ca2-9c3e-9a0053d92084';
    
    // Log dos dados antes de enviar (para debug)
    console.log('Enviando dados para webhook:', cleanedData);
    console.log('URL do webhook:', N8N_WEBHOOK_URL);
    
    // Validar que cleanedData é válido
    try {
        JSON.stringify(cleanedData);
    } catch (e) {
        console.error('Erro ao serializar dados:', e);
        alert('Erro ao preparar dados. Por favor, tente novamente.');
        unlockBtn.innerHTML = originalText;
        unlockBtn.disabled = false;
        return;
    }
    
    // Send to n8n webhook
    fetch(N8N_WEBHOOK_URL, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(cleanedData)
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
            // Se tiver success, mostra modal de sucesso
            console.log('Webhook executado com sucesso');
            showSuccessModal();
        } else if (data.error) {
            // Se tiver erro explícito, lança erro
            throw new Error(data.error);
        } else {
            // Qualquer outra resposta HTTP 200 é considerada sucesso
            // (workflowId, executionId, message, ou qualquer outra coisa)
            console.log('Webhook do n8n executado com sucesso:', data);
            showSuccessModal();
        }
    })
    .catch(error => {
        console.error('Erro ao gerar relatório:', error);
        console.error('Tipo do erro:', error.name);
        console.error('Mensagem do erro:', error.message);
        console.error('Stack do erro:', error.stack);
        
        // Tentar obter fullData do escopo se disponível
        try {
            console.error('Dados que tentaram ser enviados:', JSON.stringify(fullData, null, 2));
        } catch (e) {
            console.error('Não foi possível serializar dados:', e);
        }
        
        // Mensagem de erro mais detalhada e amigável
        let errorMessage = 'Erro ao gerar relatório. ';
        
        if (error.message.includes('Failed to fetch') || error.message.includes('NetworkError')) {
            errorMessage += 'Erro de conexão. Verifique sua internet e tente novamente.';
        } else if (error.message.includes('CORS')) {
            errorMessage += 'Erro de configuração. Por favor, entre em contato com o suporte.';
        } else if (error.message.includes('Dados essenciais faltando') || error.message.includes('Nenhuma tarefa')) {
            errorMessage = error.message + ' Por favor, preencha todos os campos obrigatórios.';
        } else if (error.message.includes('500')) {
            errorMessage += 'Erro no servidor. Por favor, tente novamente em alguns instantes. Se o problema persistir, entre em contato com o suporte.';
        } else {
            errorMessage += error.message || 'Por favor, tente novamente.';
        }
        
        alert(errorMessage);
        
        // Restaurar botão
        if (unlockBtn) {
            unlockBtn.innerHTML = originalText;
            unlockBtn.disabled = false;
        }
    });
}

// Função para mostrar o modal de sucesso
function showSuccessModal() {
    const unlockModal = document.getElementById('unlockModal');
    const successModal = document.getElementById('successUnlockModal');
    const unlockBtn = document.querySelector('.unlock-btn');
    
    // Esconder o modal de desbloqueio
    if (unlockModal) {
        unlockModal.style.display = 'none';
    }
    
    // Mostrar o modal de sucesso
    if (successModal) {
        successModal.style.display = 'block';
    }
    
    // Restaurar o botão
    if (unlockBtn) {
        unlockBtn.innerHTML = 'Desbloquear';
        unlockBtn.disabled = false;
    }
}

// Função para fechar o modal de sucesso
function closeSuccessModal() {
    const successModal = document.getElementById('successUnlockModal');
    if (successModal) {
        successModal.style.display = 'none';
    }
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
    formData.senioridadeTop = 3;
    formData.familiaridadeIA = 3;
    formData.setupComplexityTolerance = 3;
    formData.riskTolerance = 3;
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
    
    
    // Reset cargo select in template
    const cargoSelect = document.getElementById('cargo');
    if (cargoSelect) {
        cargoSelect.value = '';
    }
    
    // Reset novos sliders superiores
    const senioridadeTopInput = document.getElementById('senioridadeTop');
    if (senioridadeTopInput) {
        senioridadeTopInput.value = 3;
        updateSliderFill('senioridadeTop', 3);
    }
    const familiaridadeIAInput = document.getElementById('familiaridadeIA');
    if (familiaridadeIAInput) {
        familiaridadeIAInput.value = 3;
        updateSliderFill('familiaridadeIA', 3);
    }
    const setupComplexityToleranceInput = document.getElementById('setupComplexityTolerance');
    if (setupComplexityToleranceInput) {
        setupComplexityToleranceInput.value = 3;
        updateSliderFill('setupComplexityTolerance', 3);
    }
    const riskToleranceInput = document.getElementById('riskTolerance');
    if (riskToleranceInput) {
        riskToleranceInput.value = 3;
        updateSliderFill('riskTolerance', 3);
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

// Define slider levels for each slider
const sliderLevels = {
    senioridadeTop: [
        'Jr (0-2 anos)',
        'Jr-Mid (2-4 anos)',
        'Mid (4-8 anos)',
        'Sr-Mid (8-12 anos)',
        'Sr (12+ anos)'
    ],
    familiaridadeIA: [
        'Iniciante',
        'Básico',
        'Intermediário',
        'Avançado',
        'Especialista'
    ],
    setupComplexityTolerance: [
        'Quero algo que funcione na hora',
        'Topo aprender o básico rápido',
        'Consigo investir um pouco de tempo',
        'Topo estudar para aproveitar bem',
        'Gosto de aprender ferramentas profundas'
    ],
    riskTolerance: [
        'Só gigantes (Google, Microsoft)',
        'Preferência por empresas já estabelecidas',
        'Sem preferência de maturidade',
        'Aberto a startups',
        'Quanto mais novo, melhor'
    ],
    frequencia: [
        'Ocasional (1-2x/mês)',
        'Semanal raro',
        'Semanal',
        'Quase diária',
        'Diária'
    ],
    timePerInstance: [
        'Rápido (5-15 min)',
        '15-30 min',
        '30-60 min',
        '1-3 horas',
        '3+ horas'
    ],
    automationOpenness: [
        'Mínima (brainstorm)',
        '30% autônomo',
        '50% autônomo',
        '70% autônomo',
        '90%+ autônomo'
    ],
    dataSensitivity: [
        'Público',
        'Interno',
        'Sensível',
        'Muito sensível',
        'Altamente sensível'
    ]
};

// Get level text based on slider value (1-5, can be decimal during drag)
function getSliderLevel(sliderId, value) {
    // Extract base slider name (remove _task suffix if present)
    const baseSliderId = sliderId.split('_task')[0];
    const levels = sliderLevels[baseSliderId];
    if (!levels) return '';
    
    // Map value 1-5 (or decimals between) directly to index 0-4
    // Round to nearest integer: Value 1-1.5 = index 0, 1.5-2.5 = index 1, etc.
    // Value 1 = index 0, value 2 = index 1, ..., value 5 = index 4
    let index = Math.round(value) - 1;
    if (index < 0) index = 0;
    if (index >= levels.length) index = levels.length - 1;
    
    return levels[index];
}

// Update slider level display
function updateSliderLevel(sliderId, value) {
    const levelId = sliderId + 'Level';
    const levelElement = document.getElementById(levelId);
    if (levelElement) {
        // Extract base slider name (before _task suffix) for lookup
        const baseSliderId = sliderId.split('_task')[0];
        const levelText = getSliderLevel(baseSliderId, value);
        if (levelText) {
            levelElement.textContent = levelText;
        }
    }
}

// Snap slider value to nearest integer (1, 2, 3, 4, or 5)
function snapSliderToNearestValue(slider) {
    const currentValue = parseFloat(slider.value);
    // Round to nearest integer and clamp to 1-5 range
    const snappedValue = Math.round(Math.max(1, Math.min(5, currentValue)));
    
    // Only update if value actually changed to avoid unnecessary updates
    if (Math.abs(currentValue - snappedValue) > 0.01) {
        slider.value = snappedValue;
        // Trigger change event to ensure form data is updated
        slider.dispatchEvent(new Event('change', { bubbles: true }));
    }
    
    return snappedValue;
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
        // Convert value 1-5 to percentage 0-100
        // Value 1 = 0%, value 2 = 25%, value 3 = 50%, value 4 = 75%, value 5 = 100%
        const percentage = ((value - 1) / 4) * 100;
        fillElement.style.width = percentage + '%';
    }
    
    // Also update level display
    updateSliderLevel(sliderId, value);
}

// Initialize sliders in a given container
function initializeSlidersInContainer(container) {
    const sliderNames = ['frequencia', 'timePerInstance', 'automationOpenness', 'dataSensitivity'];
    sliderNames.forEach(sliderName => {
        // Find slider by name or id that contains the slider name
        const slider = container.querySelector(`input[type="range"][name*="${sliderName}"], input[type="range"][id*="${sliderName}"]`);
        if (slider) {
            const sliderId = slider.id;
            if (sliderId) {
                // Set initial fill
                const value = parseInt(slider.value) || 3;
                updateSliderFill(sliderId, value);
                
                // Update visual during drag (input event fires continuously)
                // During drag, slider can have decimal values for smooth movement
                slider.addEventListener('input', function(e) {
                    const val = parseFloat(this.value);
                    updateSliderFill(this.id, val);
                });
                
                // Snap to nearest value when user releases mouse
                slider.addEventListener('mouseup', function(e) {
                    const snappedValue = snapSliderToNearestValue(this);
                    updateSliderFill(this.id, snappedValue);
                });
                
                // Snap to nearest value when user releases touch (mobile)
                slider.addEventListener('touchend', function(e) {
                    const snappedValue = snapSliderToNearestValue(this);
                    updateSliderFill(this.id, snappedValue);
                });
                
                // Also snap on change event as fallback
                slider.addEventListener('change', function(e) {
                    const snappedValue = Math.round(Math.max(1, Math.min(5, parseFloat(this.value))));
                    if (Math.abs(parseFloat(this.value) - snappedValue) > 0.01) {
                        this.value = snappedValue;
                        updateSliderFill(this.id, snappedValue);
                    }
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
            const value = parseInt(slider.value) || 3;
            updateSliderFill(sliderId, value);
            
            // Update visual during drag (input event fires continuously)
            // During drag, slider can have decimal values for smooth movement
            slider.addEventListener('input', (e) => {
                const value = parseFloat(e.target.value);
                updateSliderFill(sliderId, value);
            });
            
            // Snap to nearest value when user releases mouse
            slider.addEventListener('mouseup', (e) => {
                const snappedValue = snapSliderToNearestValue(e.target);
                updateSliderFill(sliderId, snappedValue);
            });
            
            // Snap to nearest value when user releases touch (mobile)
            slider.addEventListener('touchend', (e) => {
                const snappedValue = snapSliderToNearestValue(e.target);
                updateSliderFill(sliderId, snappedValue);
            });
            
            // Also snap on change event as fallback
            slider.addEventListener('change', (e) => {
                const snappedValue = Math.round(Math.max(1, Math.min(5, parseFloat(e.target.value))));
                if (Math.abs(parseFloat(e.target.value) - snappedValue) > 0.01) {
                    e.target.value = snappedValue;
                    updateSliderFill(sliderId, snappedValue);
                }
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
    
    // Clear email error when user starts typing
    const unlockEmailInput = document.getElementById('unlockEmail');
    if (unlockEmailInput) {
        unlockEmailInput.addEventListener('input', () => {
            const emailError = document.getElementById('unlockEmailError');
            if (emailError && emailError.style.display !== 'none') {
                emailError.style.display = 'none';
                unlockEmailInput.classList.remove('unlock-input-error');
            }
        });
    }
    
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
    
    // Navbar scroll effect - mantém fundo branco sempre
    window.addEventListener('scroll', () => {
        const navbar = document.querySelector('.navbar');
        // Sempre mantém o fundo branco, independente do scroll
        navbar.style.background = 'rgba(255, 255, 255, 0.95)';
        navbar.classList.remove('navbar-dark');
    });
    
    // Garantir que a navbar comece com fundo branco
    const navbar = document.querySelector('.navbar');
    if (navbar) {
        navbar.style.background = 'rgba(255, 255, 255, 0.95)';
        navbar.classList.remove('navbar-dark');
    }
    
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
    const areaOtherField = document.getElementById('areaOtherField');
    const areaOtherInput = document.getElementById('areaOther');
    
    areaRadios.forEach(radio => {
        radio.addEventListener('change', function() {
            if (this.checked) {
                // Show/hide "Outros" field
                if (this.value === 'outros') {
                    if (areaOtherField) {
                        areaOtherField.style.display = 'block';
                    }
                } else {
                    if (areaOtherField) {
                        areaOtherField.style.display = 'none';
                    }
                    if (areaOtherInput) {
                        areaOtherInput.value = '';
                    }
                }
                
                updateAllTaskSelects(this.value);
                showTasksSection();
                updateTasksUI();
                
                // Scroll to area section title
                setTimeout(() => {
                    const areaSectionTitle = document.querySelector('.area-section-title');
                    if (areaSectionTitle) {
                        const offset = 100;
                        const elementPosition = areaSectionTitle.getBoundingClientRect().top + window.pageYOffset;
                        window.scrollTo({
                            top: elementPosition - offset,
                            behavior: 'smooth'
                        });
                    }
                }, 100);
            }
        });
    });
    
    // Initialize "Outros" field visibility on load
    const selectedAreaOnLoad = document.querySelector('input[name="area"]:checked');
    if (selectedAreaOnLoad) {
        // Show "Outros" field if "outros" is selected
        if (selectedAreaOnLoad.value === 'outros') {
            if (areaOtherField) {
                areaOtherField.style.display = 'block';
            }
        }
        // Initialize tasks section visibility
        showTasksSection();
        updateTasksUI();
    }
    
    // Initialize task selects with default area (if one is selected)
    const selectedArea = document.querySelector('input[name="area"]:checked');
    if (selectedArea) {
        updateAllTaskSelects(selectedArea.value);
    }
    
    // Add event listeners to existing task selects to remove animation when selected
    const existingTaskSelects = document.querySelectorAll('.tasks-container .cargo-select');
    existingTaskSelects.forEach(select => {
        select.addEventListener('change', function() {
            if (this.value && this.value !== '') {
                this.classList.add('task-selected');
            } else {
                this.classList.remove('task-selected');
            }
        });
        
        // Check if already has a value
        if (select.value && select.value !== '') {
            select.classList.add('task-selected');
        }
    });
    
    // Initialize AI tools selection for template (hidden by default)
    const template = document.querySelector('.task-template');
    if (template) {
        initializeAIToolsSelection(template);
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
        // Update UI to show header and empty state correctly
        updateTasksUI();
    }
}

function updateTasksUI() {
    const tasksContainer = document.getElementById('tasksContainer');
    const tasksHeader = document.getElementById('tasksHeader');
    const tasksEmptyState = document.getElementById('tasksEmptyState');
    
    if (!tasksContainer) return;
    
    const taskItems = tasksContainer.querySelectorAll('.profile-filters:not(.task-template)');
    const hasTasks = taskItems.length > 0;
    
    // Always show header when tasks section is visible
    if (tasksHeader) tasksHeader.style.display = 'flex';
    
    if (hasTasks) {
        // Hide empty state when there are tasks
        if (tasksEmptyState) tasksEmptyState.style.display = 'none';
        // Update add task button visibility
        updateAddTaskButtonsVisibility();
    } else {
        // Show empty state with centered button when no tasks
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
    
    // Check if we've reached the limit of 3 tasks
    const existingTasks = tasksContainer.querySelectorAll('.profile-filters:not(.task-template)');
    if (existingTasks.length >= 3) {
        alert('Você pode adicionar no máximo 3 tarefas por relatório.');
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
            
            // Map fill element IDs for all sliders
            if (oldId.includes('frequencia') || oldId.includes('timePerInstance') || 
                oldId.includes('automationOpenness') || oldId.includes('dataSensitivity')) {
                const oldFillId = oldId + 'Fill';
                const newFillId = newId + 'Fill';
                fillIdMap[oldFillId] = newFillId;
            }
        }
        
        // Update name for all inputs (including checkboxes and radio buttons)
        if (input.name) {
            input.name = `${input.name}_task${taskId}`;
        }
    });
    
    // Update fill element IDs using the map
    Object.keys(fillIdMap).forEach(oldFillId => {
        const fillElement = newTask.querySelector(`#${oldFillId}`);
        if (fillElement) {
            fillElement.id = fillIdMap[oldFillId];
        }
    });
    
    // Update slider-level element IDs to match their corresponding sliders
    const sliderLevelElements = newTask.querySelectorAll('.slider-level');
    sliderLevelElements.forEach(levelElement => {
        if (levelElement.id) {
            const oldLevelId = levelElement.id;
            // Extract the slider name (e.g., 'frequencia' from 'frequenciaLevel')
            const sliderName = oldLevelId.replace('Level', '');
            
            // Find the corresponding slider input
            const sliderInput = newTask.querySelector(`input[id*="${sliderName}"]`);
            if (sliderInput && sliderInput.id) {
                // Get the new slider ID and create matching level ID
                const newSliderId = sliderInput.id;
                const newLevelId = newSliderId + 'Level';
                levelElement.id = newLevelId;
            }
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
        updateAddTaskButtonsVisibility();
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
    
    // Initialize AI tools selection
    initializeAIToolsSelection(newTask);
    
    // Add event listener to task select to remove animation when selected
    const taskSelect = newTask.querySelector('.cargo-select');
    if (taskSelect) {
        taskSelect.addEventListener('change', function() {
            if (this.value && this.value !== '') {
                this.classList.add('task-selected');
            } else {
                this.classList.remove('task-selected');
            }
        });
    }
    
    // Update UI to show header instead of empty state
    updateTasksUI();
    
    // Update add task button visibility for all tasks
    updateAddTaskButtonsVisibility();
    
    // Scroll to the new task
    newTask.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
}

// Function to update add task button visibility based on task count
function updateAddTaskButtonsVisibility() {
    const tasksContainer = document.getElementById('tasksContainer');
    if (!tasksContainer) return;
    
    const existingTasks = tasksContainer.querySelectorAll('.profile-filters:not(.task-template)');
    const taskCount = existingTasks.length;
    const maxTasks = 3;
    
    // Show/hide add task buttons in all existing tasks
    existingTasks.forEach(task => {
        const addButtonWrapper = task.querySelector('.add-task-button-wrapper');
        if (addButtonWrapper) {
            if (taskCount < maxTasks) {
                addButtonWrapper.style.display = 'block';
            } else {
                addButtonWrapper.style.display = 'none';
            }
        }
    });
}
