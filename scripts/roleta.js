var clicks = 0;

function contarClicks() { // usado para que no final os cicks ssejam atualizados 
    clicks++; // cada click conta +1 função
    console.log("O número total de vezes foi: " + clicks); 
}

var jogos = [
    {
        nome: 'Valorant',
        tipo: 'FPS',
        ano: 2020,
        clicks: 0, 
    },
    {
        nome: 'Minecraft',
        tipo: 'Sandbox',
        ano: 2011,
        clicks: 0, 
    },
    {
        nome: 'Roblox',
        tipo: 'Sandbox',
        ano: 2006,
        clicks: 0, 
    }
];

function abcde() {{ // { a mais pra fechar com o } no final do codigo pra integrar o forEach e retornar ele inteiro novamente atualizado
    const jogo = (function() {  
        return jogos[Math.floor(Math.random() * jogos.length)];
    })(); // função abcde ( click ), chama o jogo ( array ) com a função de retornar e multiplicar pelo array

    jogo.clicks++; // "reconta" a função clicks do jogo pra contar +1 quando foi selecionado e mossra o valor
    contarClicks();  // clicks atualizados
    console.log(jogo); // c.l no jogo
    console.log(`Clique(s) no jogo ${jogo.nome}: ${jogo.clicks} vezes.`); // c.l mostrando cliques no jogo e nome
}

jogos.forEach(function(jogo2) { // jogo2 "chama" o conteudo do array(jogos) --> jogo é o sorteado e o jogo2 "representa" cada jogo
    console.log(`Nome: ${jogo2.nome}, Clique(s): ${jogo2.clicks} vezes.`);
});
}