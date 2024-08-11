document.addEventListener('DOMContentLoaded', function() {
    const itens = [
        { nome: "Roblox", imagem: "https://play-lh.googleusercontent.com/WNWZaxi9RdJKe2GQM3vqXIAkk69mnIl4Cc8EyZcir2SKlVOxeUv9tZGfNTmNaLC717Ht" },
        { nome: "Minecraft", imagem: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTSbWOL6AqgFI9M4eblTENTH_X5OYkzBMpvZA&s" },
        { nome: "Terraria", imagem: "https://sm.ign.com/ign_br/cover/t/terraria/terraria_j231.jpg" },
        { nome: "Genshin", imagem: "https://gizmodo.uol.com.br/wp-content/blogs.dir/8/files/2022/04/EGS_GenshinImpact_miHoYoLimited_S1_2560x1440-91c6cd7312cc2647c3ebccca10f30399.jpg" },
        { nome: "Valorant", imagem: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTxjK5GygFdK-sCzl6HsQKy_iLMPwk6bdCdgw&s" }
    ];

    const roletaContainer = document.querySelector('.roleta');
    const rankingContainer = document.querySelector('.ranking');
    const duracaoAnimacao = 10000;
    const contador = { Roblox: 0, Minecraft: 0, Terraria: 0, Genshin: 0, Valorant: 0 };

    function adicionarItens() {
        roletaContainer.innerHTML = '';
        const itensDuplicados = itens.concat(itens).sort(() => Math.random() - 0.5);
        itensDuplicados.forEach(item => {
            const div = document.createElement('div');
            div.classList.add('item');
            div.textContent = item.nome;
            div.dataset.nome = item.nome;
            roletaContainer.appendChild(div);
        });
    }

    function atualizarRanking() {
        rankingContainer.innerHTML = '';
        const itensOrdenados = Object.keys(contador)
            .map(nome => ({ nome, quantidade: contador[nome] }))
            .sort((a, b) => b.quantidade - a.quantidade);
        itensOrdenados.forEach((item, index) => {
            const div = document.createElement('div');
            div.classList.add('item');
            if (index === 0) div.classList.add('top-1');
            else if (index === 1) div.classList.add('top-2');
            else if (index === 2) div.classList.add('top-3');
            div.innerHTML = `<span>${index + 1}º</span> ${item.nome}: ${item.quantidade}`;
            rankingContainer.appendChild(div);
        });
    }

    window.sortear = function() {
        document.getElementById('imagem-jogo').style.display = 'none';
        document.getElementById('resultado').style.display = 'none';

        adicionarItens();
        roletaContainer.style.animation = 'none';
        roletaContainer.offsetHeight; // Força a re-renderização
        roletaContainer.style.animation = `girar ${duracaoAnimacao}ms linear`;

        setTimeout(function() {
            const itensVisiveis = Array.from(document.querySelectorAll('.roleta .item'));
            const meio = Math.floor(itensVisiveis.length / 2);
            const itemSelecionado = itensVisiveis[meio];
            const nomeSelecionado = itemSelecionado.dataset.nome;
            const itemEscolhido = itens.find(item => item.nome === nomeSelecionado);

            if (itemEscolhido) {
                document.getElementById('nome-jogo').textContent = itemEscolhido.nome;
                document.getElementById('imagem-jogo').src = itemEscolhido.imagem;
                document.getElementById('imagem-jogo').style.display = 'block';
                document.getElementById('resultado').style.display = 'block';
                contador[nomeSelecionado]++;
                atualizarRanking();

                // Exibir o nome selecionado na roleta
                roletaContainer.innerHTML = ''; // Limpa a roleta
                const div = document.createElement('div');
                div.classList.add('item');
                div.textContent = itemEscolhido.nome; // Nome selecionado
                roletaContainer.appendChild(div);
            } else {
                console.error("Item selecionado não encontrado");
            }

            roletaContainer.style.animation = 'none';
        }, duracaoAnimacao);
    }

    adicionarItens();
    atualizarRanking();
});
