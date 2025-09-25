// Função auxiliar para carregar scripts (cole aqui a função do Passo 1)
function loadScript(src) {
    return new Promise((resolve, reject) => {
        const script = document.createElement('script');
        script.src = src;
        script.onload = () => resolve(script);
        script.onerror = () => reject(new Error(`Falha ao carregar o script: ${src}`));
        document.head.append(script);
    });
}

// Lista de todos os scripts que precisamos carregar
const scriptsToLoad = [
    'https://unpkg.com/aos@2.3.1/dist/aos.js',
    'https://cdn.jsdelivr.net/npm/feather-icons/dist/feather.min.js',
    'https://cdn.jsdelivr.net/npm/vanta@latest/dist/vanta.waves.min.js',
    'https://cdn.jsdelivr.net/npm/swiper@9/swiper-bundle.min.js',
    // Adicione aqui a URL do Swiper também, para manter tudo junto!
    'https://unpkg.com/swiper/swiper-bundle.min.js' 
];

// Promise.all espera que TODOS os scripts da lista terminem de carregar
Promise.all(scriptsToLoad.map(loadScript))
    .then(() => {
        // 🎉 SUCESSO! Todos os scripts foram carregados.
        // Agora podemos executar todo o nosso código com segurança.
        console.log("Todas as bibliotecas foram carregadas com sucesso!");

        // 1. Inicializa AOS (Animate On Scroll)
        AOS.init({
            duration: 800,
            once: true
        });

        // 2. Inicializa Vanta.js
        VANTA.WAVES({
            el: "#hero",
            mouseControls: true,
            touchControls: true,
            gyroControls: false,
            minHeight: 200.00,
            minWidth: 200.00,
            scale: 1.00,
            scaleMobile: 1.00,
            color: 0x3a86ff,
            shininess: 27.00,
            waveHeight: 20.00,
            waveSpeed: 0.75,
            zoom: 0.75
        });

        // 3. Substitui os ícones do Feather
        feather.replace();

        // 4. Inicializa o Swiper
        new Swiper('.swiper-container', {
            loop: true,
            pagination: {
                el: '.swiper-pagination',
                clickable: true,
            },
            navigation: {
                nextEl: '.swiper-button-next',
                prevEl: '.swiper-button-prev',
            },
            autoplay: {
                delay: 5000,
            },
        });

        // 5. Lógica do menu mobile (pode ficar aqui também)
        const menuToggle = document.getElementById('menu-toggle');
        const mobileMenu = document.getElementById('mobile-menu');

        menuToggle.addEventListener('click', () => {
            mobileMenu.classList.toggle('hidden');
        });

    })
    .catch(error => {
        // 😥 Se algum script falhar ao carregar, veremos um erro no console.
        console.error(error);
    });
