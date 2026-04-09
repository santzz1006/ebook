// responsividade.js
(function() {
    function aplicarZoomDesktop() {
        const container = document.querySelector('.page-container');
        if (!container) return;

        const larguraTela = window.innerWidth;
        // 1100px é o tamanho do seu container + 50px de respiro = 1150
        const larguraProjeto = 1150; 

        if (larguraTela < larguraProjeto) {
            // Calcula a porcentagem exata para encolher a tela
            const escala = larguraTela / larguraProjeto;
            
            // Aplica o encolhimento (zoom out) em toda a página do e-book
            container.style.transform = 'scale(' + escala + ')';
            container.style.transformOrigin = 'center center';
            
            // Força uma altura fixa para manter o formato deitado (paisagem) idêntico ao do PC, 
            // evitando que o celular estique a caixa lá para baixo
            container.style.height = '750px'; 
            container.style.maxHeight = '750px';
            
            // Trava a rolagem do fundo para a tela não ficar "sambando" no celular
            document.body.style.overflow = 'hidden';
            document.documentElement.style.overflow = 'hidden';
        } else {
            // Se for PC, volta para a configuração original
            container.style.transform = 'none';
            container.style.height = '90vh';
            container.style.maxHeight = 'none';
        }
    }

    // Executa o script assim que a página carrega e toda vez que a tela girar/mudar de tamanho
    window.addEventListener('DOMContentLoaded', aplicarZoomDesktop);
    window.addEventListener('resize', aplicarZoomDesktop);
    
    // Executa imediatamente por segurança
    aplicarZoomDesktop();
})();