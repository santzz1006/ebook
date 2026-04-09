// responsividade.js
(function() {
    // Cria uma tag <style> dinamicamente
    const estiloMobile = document.createElement('style');
    
    // Injeta as regras CSS de responsividade forçando a prioridade com !important
    estiloMobile.innerHTML = `
        @media (max-width: 850px) {
            /* 1. Ajuste do Container Principal */
            .page-container {
                height: 96vh !important;
                width: 95vw !important;
            }

            /* 2. Redução dos espaçamentos internos para caber na tela */
            .content-area {
                padding: 20px 15px !important;
            }

            /* 3. Ajuste do Cabeçalho (Empilha os textos e centraliza) */
            header {
                flex-direction: column !important;
                align-items: center !important;
                text-align: center !important;
                gap: 15px !important;
                margin-bottom: 20px !important;
            }
            .header-left h1 { font-size: 20px !important; }
            .header-right { text-align: center !important; font-size: 11px !important; width: 100%; }

            /* 4. O SEGREDO: Transforma TODAS as grades (grids) em 1 única coluna vertical */
            main, .escopo-grid, .timeline-grid, .justificativa-grid, .impactos-grid, .viabilidade-grid, .grid-conteudo, .grid-especificos {
                display: flex !important;
                flex-direction: column !important;
                gap: 20px !important;
            }

            /* 5. Ajuste interno dos cartões e textos */
            .card-info, .card-viab, .fase-card, .resultado-card, .card-justificativa, .obj-geral {
                padding: 20px 15px !important;
            }
            .texto-principal p { font-size: 14px !important; }

            /* 6. Ajuste do Rodapé (Empilha as logos e os botões) */
            footer {
                flex-direction: column !important;
                height: auto !important;
                padding: 15px !important;
                gap: 15px !important;
            }
            .nav-panel {
                width: 100% !important;
                justify-content: space-between !important;
            }

            /* 7. Modais (Telas de aviso/curiosidade) adaptados para o celular */
            .modal-content {
                width: 90% !important;
                padding: 25px !important;
                max-height: 80vh !important;
                overflow-y: auto !important;
            }

            /* 8. Sobe o botão de curiosidade para não ficar em cima do novo rodapé */
            .btn-curiosidade {
                bottom: 120px !important; 
                left: 15px !important;
            }
        }
    `;
    
    // Adiciona as regras ao <head> de todas as páginas onde o script for chamado
    document.head.appendChild(estiloMobile);
})();