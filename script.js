// ========================================
// Stack Recommendations Database
// ========================================
const stackRecommendations = {
    tecnologia: [
        { name: "Zapier", category: "AUTOMAÇÃO", logo: "images/zapier-logo.png", compatible: true },
        { name: "Perplexity", category: "PESQUISA", logo: "https://www.perplexity.ai/favicon.ico", compatible: true },
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
        { name: "Perplexity", category: "PESQUISA", logo: "https://www.perplexity.ai/favicon.ico", compatible: true },
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
        { name: "Perplexity", category: "PESQUISA", logo: "https://www.perplexity.ai/favicon.ico", compatible: true },
        { name: "Gamma", category: "APRESENTAÇÃO", logo: "https://gamma.app/favicon.ico", compatible: true }
    ],
    juridico: [
        { name: "Claude 3.5 Sonnet", category: "LLM CORE", logo: "https://www.anthropic.com/favicon.ico", compatible: true },
        { name: "Perplexity", category: "PESQUISA", logo: "https://www.perplexity.ai/favicon.ico", compatible: true },
        { name: "Notion AI", category: "KNOWLEDGE", logo: "https://upload.wikimedia.org/wikipedia/commons/4/45/Notion_app_logo.png", compatible: true },
        { name: "Zapier", category: "AUTOMAÇÃO", logo: "images/zapier-logo.png", compatible: true },
        { name: "ChatGPT Plus", category: "LLM CORE", logo: "https://upload.wikimedia.org/wikipedia/commons/0/04/ChatGPT_logo.svg", compatible: true },
        { name: "Microsoft Copilot", category: "PRODUTIVIDADE", logo: "https://upload.wikimedia.org/wikipedia/commons/2/2a/Microsoft_365_Copilot_Icon.svg", compatible: true },
        { name: "Google Gemini Advanced", category: "LLM CORE", logo: "https://www.gstatic.com/lamda/images/gemini_sparkle_v002_d4735304ff6292a690345.svg", compatible: true },
        { name: "Gamma", category: "APRESENTAÇÃO", logo: "https://gamma.app/favicon.ico", compatible: true }
    ],
    rh: [
        { name: "Notion AI", category: "KNOWLEDGE", logo: "https://upload.wikimedia.org/wikipedia/commons/4/45/Notion_app_logo.png", compatible: true },
        { name: "ChatGPT Plus", category: "LLM CORE", logo: "https://upload.wikimedia.org/wikipedia/commons/0/04/ChatGPT_logo.svg", compatible: true },
        { name: "Zapier", category: "AUTOMAÇÃO", logo: "images/zapier-logo.png", compatible: true },
        { name: "Microsoft Copilot", category: "PRODUTIVIDADE", logo: "https://upload.wikimedia.org/wikipedia/commons/2/2a/Microsoft_365_Copilot_Icon.svg", compatible: true },
        { name: "Claude 3.5 Sonnet", category: "LLM CORE", logo: "https://www.anthropic.com/favicon.ico", compatible: true },
        { name: "Perplexity", category: "PESQUISA", logo: "https://www.perplexity.ai/favicon.ico", compatible: true },
        { name: "Google Gemini Advanced", category: "LLM CORE", logo: "https://www.gstatic.com/lamda/images/gemini_sparkle_v002_d4735304ff6292a690345.svg", compatible: true },
        { name: "Gamma", category: "APRESENTAÇÃO", logo: "https://gamma.app/favicon.ico", compatible: true }
    ],
    operacoes: [
        { name: "Zapier", category: "AUTOMAÇÃO", logo: "images/zapier-logo.png", compatible: true },
        { name: "Google Gemini Advanced", category: "LLM CORE", logo: "https://www.gstatic.com/lamda/images/gemini_sparkle_v002_d4735304ff6292a690345.svg", compatible: true },
        { name: "Notion AI", category: "KNOWLEDGE", logo: "https://upload.wikimedia.org/wikipedia/commons/4/45/Notion_app_logo.png", compatible: true },
        { name: "Perplexity", category: "PESQUISA", logo: "https://www.perplexity.ai/favicon.ico", compatible: true },
        { name: "ChatGPT Plus", category: "LLM CORE", logo: "https://upload.wikimedia.org/wikipedia/commons/0/04/ChatGPT_logo.svg", compatible: true },
        { name: "Claude 3.5 Sonnet", category: "LLM CORE", logo: "https://www.anthropic.com/favicon.ico", compatible: true },
        { name: "Microsoft Copilot", category: "PRODUTIVIDADE", logo: "https://upload.wikimedia.org/wikipedia/commons/2/2a/Microsoft_365_Copilot_Icon.svg", compatible: true },
        { name: "Gamma", category: "APRESENTAÇÃO", logo: "https://gamma.app/favicon.ico", compatible: true }
    ],
    design: [
        { name: "Midjourney", category: "IMAGEM", logo: "https://upload.wikimedia.org/wikipedia/commons/e/e6/Midjourney_Emblem.png", compatible: true },
        { name: "Canva", category: "DESIGN", logo: "https://www.canva.com/favicon.ico", compatible: true },
        { name: "Adobe Firefly", category: "CRIATIVO", logo: "https://www.adobe.com/content/dam/cc/icons/firefly.svg", compatible: true },
        { name: "ChatGPT Plus", category: "LLM CORE", logo: "https://upload.wikimedia.org/wikipedia/commons/0/04/ChatGPT_logo.svg", compatible: true },
        { name: "Claude 3.5 Sonnet", category: "LLM CORE", logo: "https://www.anthropic.com/favicon.ico", compatible: true },
        { name: "Perplexity", category: "PESQUISA", logo: "https://www.perplexity.ai/favicon.ico", compatible: true },
        { name: "Notion AI", category: "KNOWLEDGE", logo: "https://upload.wikimedia.org/wikipedia/commons/4/45/Notion_app_logo.png", compatible: true },
        { name: "Gamma", category: "APRESENTAÇÃO", logo: "https://gamma.app/favicon.ico", compatible: true }
    ],
    produto: [
        { name: "Zapier", category: "AUTOMAÇÃO", logo: "images/zapier-logo.png", compatible: true },
        { name: "Perplexity", category: "PESQUISA", logo: "https://www.perplexity.ai/favicon.ico", compatible: true },
        { name: "Claude 3.5 Sonnet", category: "LLM CORE", logo: "https://www.anthropic.com/favicon.ico", compatible: true },
        { name: "Notion AI", category: "KNOWLEDGE", logo: "https://upload.wikimedia.org/wikipedia/commons/4/45/Notion_app_logo.png", compatible: true },
        { name: "ChatGPT Plus", category: "LLM CORE", logo: "https://upload.wikimedia.org/wikipedia/commons/0/04/ChatGPT_logo.svg", compatible: true },
        { name: "Microsoft Copilot", category: "PRODUTIVIDADE", logo: "https://upload.wikimedia.org/wikipedia/commons/2/2a/Microsoft_365_Copilot_Icon.svg", compatible: true },
        { name: "Google Gemini Advanced", category: "LLM CORE", logo: "https://www.gstatic.com/lamda/images/gemini_sparkle_v002_d4735304ff6292a690345.svg", compatible: true },
        { name: "Gamma", category: "APRESENTAÇÃO", logo: "https://gamma.app/favicon.ico", compatible: true }
    ],
    outros: [
        { name: "ChatGPT Plus", category: "LLM CORE", logo: "https://upload.wikimedia.org/wikipedia/commons/0/04/ChatGPT_logo.svg", compatible: true },
        { name: "Claude 3.5 Sonnet", category: "LLM CORE", logo: "https://www.anthropic.com/favicon.ico", compatible: true },
        { name: "Zapier", category: "AUTOMAÇÃO", logo: "images/zapier-logo.png", compatible: true },
        { name: "Notion AI", category: "KNOWLEDGE", logo: "https://upload.wikimedia.org/wikipedia/commons/4/45/Notion_app_logo.png", compatible: true },
        { name: "Perplexity", category: "PESQUISA", logo: "https://www.perplexity.ai/favicon.ico", compatible: true },
        { name: "Google Gemini Advanced", category: "LLM CORE", logo: "https://www.gstatic.com/lamda/images/gemini_sparkle_v002_d4735304ff6292a690345.svg", compatible: true },
        { name: "Microsoft Copilot", category: "PRODUTIVIDADE", logo: "https://upload.wikimedia.org/wikipedia/commons/2/2a/Microsoft_365_Copilot_Icon.svg", compatible: true },
        { name: "Gamma", category: "APRESENTAÇÃO", logo: "https://gamma.app/favicon.ico", compatible: true }
    ]
};

const areaNames = {
    tecnologia: "Tecnologia / TI",
    marketing: "Marketing / Vendas",
    financeiro: "Financeiro / Contábil",
    juridico: "Jurídico",
    rh: "RH / Pessoas",
    operacoes: "Operações / Logística",
    design: "Design / Criativo",
    produto: "Produto / Inovação",
    outros: "Outros"
};

const usageLabels = {
    sim_frequente: "Uso frequente",
    sim_eventual: "Uso eventual, ainda explorando",
    nao_mas_quero: "Não uso, mas quero começar",
    empresa_tem: "Empresa já oferece"
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
    juridico: {
        popular: {
            name: "ChatGPT Plus",
            logo: "https://upload.wikimedia.org/wikipedia/commons/0/04/ChatGPT_logo.svg",
            users: "890 mil"
        },
        recommended: {
            name: "Claude Pro",
            logo: "https://upload.wikimedia.org/wikipedia/commons/8/8a/Claude_AI_logo.svg",
            desc: "Análise de contratos extensos, pesquisa jurídica e redação legal com janela de contexto de 200K"
        }
    },
    rh: {
        popular: {
            name: "ChatGPT Plus",
            logo: "https://upload.wikimedia.org/wikipedia/commons/0/04/ChatGPT_logo.svg",
            users: "1.5 milhões"
        },
        recommended: {
            name: "Notion AI",
            logo: "https://upload.wikimedia.org/wikipedia/commons/4/45/Notion_app_logo.png",
            desc: "Gestão de documentação, criação de políticas e automação de processos de RH integrados"
        }
    },
    operacoes: {
        popular: {
            name: "Microsoft Copilot",
            logo: "https://upload.wikimedia.org/wikipedia/commons/2/2a/Microsoft_365_Copilot_Icon.svg",
            users: "980 mil"
        },
        recommended: {
            name: "Google Gemini Advanced",
            logo: "https://www.gstatic.com/lamda/images/gemini_sparkle_v002_d4735304ff6292a690345.svg",
            desc: "Análise de dados operacionais, otimização de processos e integração com ferramentas Google"
        }
    },
    design: {
        popular: {
            name: "Midjourney",
            logo: "https://upload.wikimedia.org/wikipedia/commons/e/e6/Midjourney_Emblem.png",
            users: "2.1 milhões"
        },
        recommended: {
            name: "Adobe Firefly",
            logo: "https://www.adobe.com/content/dam/cc/icons/firefly.svg",
            desc: "Integração nativa com Creative Cloud, geração comercialmente segura e edição vetorial"
        }
    },
    produto: {
        popular: {
            name: "Claude",
            logo: "https://www.anthropic.com/favicon.ico",
            users: "1.8 milhões"
        },
        recommended: {
            name: "Notion AI",
            logo: "https://upload.wikimedia.org/wikipedia/commons/4/45/Notion_app_logo.png",
            desc: "Gestão de roadmap, documentação de features e colaboração em equipe para produtos"
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
const totalSteps = 4;

// Form data storage
const formData = {
    area: null,
    cargo: null,
    senioridade: 66,
    autonomia: 33,
    nivelTecnico: 25,
    tarefas: null,
    usaIA: null
};

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
    } else if (step === 2) {
        const tarefas = document.getElementById('tarefas').value.trim();
        if (!tarefas || tarefas.length < 10) {
            shakeElement('.textarea-container');
            return false;
        }
    } else if (step === 3) {
        const selectedUsaIA = document.querySelector('input[name="usaIA"]:checked');
        if (!selectedUsaIA) {
            shakeElement('.radio-options');
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
        const senioridadeInput = document.getElementById('senioridade');
        if (senioridadeInput) {
            formData.senioridade = parseInt(senioridadeInput.value);
        }
        const autonomiaInput = document.getElementById('autonomia');
        if (autonomiaInput) {
            formData.autonomia = parseInt(autonomiaInput.value);
        }
        const nivelTecnicoInput = document.getElementById('nivelTecnico');
        if (nivelTecnicoInput) {
            formData.nivelTecnico = parseInt(nivelTecnicoInput.value);
        }
    } else if (step === 2) {
        formData.tarefas = document.getElementById('tarefas').value.trim();
    } else if (step === 3) {
        formData.usaIA = document.querySelector('input[name="usaIA"]:checked').value;
    }
}

// ========================================
// Results Functions
// ========================================
function showResults() {
    // Validate step 3
    if (!validateStep(3)) {
        return;
    }
    
    // Save step 3 data
    saveStepData(3);
    
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
        const usageLabel = usageLabels[formData.usaIA] || "Não especificado";
        
        // Update header
        document.getElementById('stackAreaName').textContent = areaName;
        document.getElementById('filterArea').textContent = areaName;
        document.getElementById('filterTasks').textContent = truncateText(formData.tarefas, 30);
        document.getElementById('filterUsage').textContent = usageLabel;
        
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
        showStep(4);
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
    
    // Prepare form data
    const stack = stackRecommendations[formData.area] || stackRecommendations.outros;
    const areaName = areaNames[formData.area] || "Outros";
    const usageLabel = usageLabels[formData.usaIA] || "Não especificado";
    
    const fullData = {
        ...formData,
        email: email,
        timestamp: new Date().toISOString(),
        areaName: areaName,
        usageLabel: usageLabel,
        slug: generateSlugFromEmail(email),
        stack: stack.slice(0, 4) // Envia apenas os 4 primeiros apps recomendados
    };
    
    // Show loading state
    const unlockBtn = document.querySelector('.unlock-btn');
    const originalText = unlockBtn.innerHTML;
    unlockBtn.innerHTML = 'Gerando relatório...';
    unlockBtn.disabled = true;
    
    // URL do webhook do n8n (substitua pela sua URL real)
    const N8N_WEBHOOK_URL = 'https://seu-n8n.com/webhook/generate-report'; // TODO: Atualizar com sua URL do n8n
    
    // Send to n8n webhook
    fetch(N8N_WEBHOOK_URL, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(fullData)
    })
    .then(response => {
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        return response.json();
    })
    .then(data => {
        if (data.success && data.slug) {
            // Redirect to report page
            window.location.href = `/relatorio/${data.slug}.html`;
        } else {
            throw new Error(data.error || 'Erro ao gerar relatório');
        }
    })
    .catch(error => {
        console.error('Erro ao gerar relatório:', error);
        alert('Erro ao gerar relatório. Por favor, tente novamente.');
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
    formData.senioridade = 66;
    formData.autonomia = 33;
    formData.nivelTecnico = 25;
    formData.tarefas = null;
    formData.usaIA = null;
    
    // Reset form inputs
    document.querySelectorAll('input[type="radio"]').forEach(input => input.checked = false);
    document.getElementById('tarefas').value = '';
    
    // Reset cargo select
    const cargoSelect = document.getElementById('cargo');
    if (cargoSelect) {
        cargoSelect.value = '';
    }
    
    // Reset sliders
    const senioridadeInput = document.getElementById('senioridade');
    if (senioridadeInput) {
        senioridadeInput.value = 66;
        updateSliderFill('senioridade', 66);
    }
    const autonomiaInput = document.getElementById('autonomia');
    if (autonomiaInput) {
        autonomiaInput.value = 33;
        updateSliderFill('autonomia', 33);
    }
    const nivelTecnicoInput = document.getElementById('nivelTecnico');
    if (nivelTecnicoInput) {
        nivelTecnicoInput.value = 25;
        updateSliderFill('nivelTecnico', 25);
    }
    
    // Go back to step 1
    showStep(1);
    scrollToElement('.diagnostic-section');
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
    const fillElement = document.getElementById(sliderId + 'Fill');
    if (fillElement) {
        fillElement.style.width = value + '%';
    }
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
    
    // Initialize sliders
    const sliders = ['senioridade', 'autonomia', 'nivelTecnico'];
    sliders.forEach(sliderId => {
        const slider = document.getElementById(sliderId);
        if (slider) {
            // Set initial fill
            updateSliderFill(sliderId, parseInt(slider.value));
            
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
});
