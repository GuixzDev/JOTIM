// Aguarda o carregamento completo do DOM para executar o script
document.addEventListener('DOMContentLoaded', () => {

    // Dados fictícios das mudas
    const mudasData = [
        {
            id: 'JTM-001',
            nome: 'Muda Ipê-Amarelo',
            especie: 'Handroanthus albus',
            o2: 25,
            maturidade: '3 anos',
            progresso: 15 
        },
        {
            id: 'JTM-002',
            nome: 'Muda Jacarandá-Mimoso',
            especie: 'Jacaranda mimosifolia',
            o2: 30,
            maturidade: '2 anos',
            progresso: 40
        },
        {
            id: 'JTM-003',
            nome: 'Muda Pitangueira',
            especie: 'Eugenia uniflora',
            o2: 15,
            maturidade: '1,5 ano',
            progresso: 75
        },
        {
            id: 'JTM-004',
            nome: 'Muda Pau-Brasil',
            especie: 'Paubrasilia echinata',
            o2: 40,
            maturidade: '4 anos',
            progresso: 5
        }
    ];

    // Seleciona o container onde os cards serão inseridos
    const container = document.getElementById('mudas-container');

    // Verifica se estamos na página de monitoramento (se o container existe)
    if (container) {
        // Itera sobre cada objeto de muda nos dados
        mudasData.forEach(muda => {
            // Cria um novo elemento 'div' para o card
            const card = document.createElement('div');
            card.className = 'muda-card'; // Adiciona a classe CSS

            // Define o conteúdo HTML interno do card
            card.innerHTML = `
                <h3>${muda.nome}</h3>
                <p><strong>Espécie:</strong> <em>${muda.especie}</em> <br> <strong>ID:</strong> ${muda.id}</p>
                
                <div class="stat">
                    <span>💨 O₂ liberado/semana:</span>
                    <strong>${muda.o2} g</strong>
                </div>
                
                <div class="stat">
                    <span>⏳ Maturidade estimada:</span>
                    <strong>${muda.maturidade}</strong>
                </div>

                <div class="progress-label">Progresso de Crescimento:</div>
                <div class="progress-bar-container">
                    <div class="progress-bar" style="width: ${muda.progresso}%;"></div>
                </div>
                <span class="progress-text">${muda.progresso}%</span>
            `;

            // Adiciona o card recém-criado ao container no HTML
            container.appendChild(card);
        });
    }

});