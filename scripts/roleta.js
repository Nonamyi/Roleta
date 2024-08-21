
var jogos = [

{
nome: 'Valorant',
tipo: 'FPS',
ano: 2020,
descricao: function() {
return `${this.nome} é um jogo de ${this.tipo} lançado em ${this.ano}.`;
}
},
   
{
nome: 'Minecraftt',
tipo: 'Sandbox',
ano: 2011,
descricao: function() {
   return `${this.nome} é um jogo de ${this.tipo} lançado em ${this.ano}.`;
}
},

      
{
nome: 'Roblox',
tipo: 'Sandbox',
ano: 2006,
descricao: function() {
   return `${this.nome} é um jogo de ${this.tipo} lançado em ${this.ano}.`;
}
},
];

   function abcde() { 
   const jogo = (function() {  
      return jogos[Math.floor(Math.random() * jogos.length)];
 })();


   console.log(jogo);
   console.log(jogo.descricao());
}
/* parte de cima já é a roleta */