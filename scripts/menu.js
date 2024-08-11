document.addEventListener('DOMContentLoaded', function() {
    const menuItem = document.querySelectorAll('.item-menu');
    const dropdownToggles = document.querySelectorAll('.dropdown-toggle');
    const btnExp = document.querySelector('#btn-exp');
    const menuSide = document.querySelector('.menu-lateral');

    function selectLink() {
        menuItem.forEach(item => item.classList.remove('ativo'));
        this.classList.add('ativo');
    }

    function fecharDropdowns() {
        document.querySelectorAll('.dropdown').forEach(item => item.classList.remove('open'));
    }

    function toggleMenu() {
        menuSide.classList.toggle('expandir');
        if (!menuSide.classList.contains('expandir')) {
            fecharDropdowns();
        }
    }

    menuItem.forEach(item => item.addEventListener('click', selectLink));
    btnExp.addEventListener('click', toggleMenu);

    dropdownToggles.forEach(toggle => {
        toggle.addEventListener('click', function(e) {
            e.preventDefault();
            const parent = this.parentElement;
            document.querySelectorAll('.dropdown').forEach(item => {
                if (item !== parent) item.classList.remove('open');
            });
            parent.classList.toggle('open');
        });
    });

    const colorLinks = document.querySelectorAll('.dropdown-menu a.padrao, .dropdown-menu a.quente, .dropdown-menu a.fria');
    colorLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            document.querySelector('.bolhas').classList.remove('padrão', 'quente', 'fria');
            document.querySelector('.bolhas').classList.add(this.className);
        });
    });
});
