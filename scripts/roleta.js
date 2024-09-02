var clicks = 0;

function contarClicks() { // usado para que no final os cicks ssejam atualizados 
    clicks++; // cada click conta +1 função
    console.log("O número de vezes foi: " + clicks); 
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

function abcde() { 
    const jogo = (function() {  
        return jogos[Math.floor(Math.random() * jogos.length)];
    })(); // função abcde ( click ), chama o jogo ( array ) com a função de retornar e multiplicar pelo array

    jogo.clicks++; // "reconta" a função clicks do jogo pra contar +1 quando foi selecionado e mossra o valor
    contarClicks();  // clicks atualizados
    console.log(jogo); // c.l no jogo
    console.log(`Clique(s) no jogo ${jogo.nome}: ${jogo.clicks} vez(es).`); // c.l mostrando cliques no jogo e nome
}
   