let pontosJogador = 0;
let pontosMaquina = 0;

function play(numeroJogador) {
    // Número da maquina aleatórios
    const numeroMaquina = Math.floor(Math.random() * 10) + 1;

    //Mostrar número na tela
    document.getElementById('player').textContent = numeroJogador;
    document.getElementById('machine').textContent = numeroMaquina;

    // div resultado
    const winner = document.getElementById('winner');

    //verificar quem ganhou
    if (numeroJogador > numeroMaquina) {

        //soma pontos para jogador
        pontosJogador++;

        //atualiza placar
        document.getElementById('pontosJogador').textContent = pontosJogador;

        //mostra mensagem
        winner.textContent = 'Você ganhou!';
        winner.className = "vitoria";

    } else if (numeroMaquina > numeroJogador) {
        //soma pontos para máquina
        pontosMaquina++;

        //atualiza placar
        document.getElementById('pontosMaquina').textContent = pontosMaquina;

        //mostra mensagem
        winner.textContent = 'Máquina ganhou!';
        winner.className = "derrota";
    } else {
        //mostra mensagem de empate
        winner.textContent = 'Empate!';
        winner.className = "empate";
    }

}


