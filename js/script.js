    // Initialize Lucide icons
        lucide.createIcons();

        // ---- Navbar scroll effect ----
        const navbar = document.getElementById('navbar');
        let lastScroll = 0;

        window.addEventListener('scroll', () => {
            const currentScroll = window.pageYOffset;
            if (currentScroll > 80) {
                navbar.classList.add('bg-navy-900/95', 'glass', 'shadow-lg');
            } else {
                navbar.classList.remove('bg-navy-900/95', 'glass', 'shadow-lg');
            }
            lastScroll = currentScroll;
        });

        // ---- Mobile menu ----
        const menuToggle = document.getElementById('menuToggle');
        const menuClose = document.getElementById('menuClose');
        const mobileMenu = document.getElementById('mobileMenu');
        const mobileNavLinks = document.querySelectorAll('.mobile-nav-link');

        menuToggle.addEventListener('click', () => {
            mobileMenu.classList.add('open');
            document.body.style.overflow = 'hidden';
        });

        menuClose.addEventListener('click', () => {
            mobileMenu.classList.remove('open');
            document.body.style.overflow = '';
        });

        mobileNavLinks.forEach(link => {
            link.addEventListener('click', () => {
                mobileMenu.classList.remove('open');
                document.body.style.overflow = '';
            });
        });

        // ---- Scroll reveal animations ----
        const revealElements = document.querySelectorAll('.reveal');

        const revealObserver = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('active');
                }
            });
        }, { threshold: 0.1, rootMargin: '0px 0px -50px 0px' });

        revealElements.forEach(el => revealObserver.observe(el));

        // ---- Active nav link ----
        const sections = document.querySelectorAll('section[id]');
        const navLinks = document.querySelectorAll('.nav-link');

        window.addEventListener('scroll', () => {
            let current = '';
            sections.forEach(section => {
                const sectionTop = section.offsetTop - 100;
                if (pageYOffset >= sectionTop) {
                    current = section.getAttribute('id');
                }
            });
            navLinks.forEach(link => {
                link.classList.remove('active');
                if (link.getAttribute('href') === '#' + current) {
                    link.classList.add('active');
                }
            });
        });

        // ---- Back to top button ----
        const backToTop = document.getElementById('backToTop');

        window.addEventListener('scroll', () => {
            if (window.pageYOffset > 500) {
                backToTop.classList.add('visible');
            } else {
                backToTop.classList.remove('visible');
            }
        });

        // ---- Lightbox ----
        const galleryImages = [
            'https://mypage-chi-cyan.vercel.app/img/669F7FA6-8BDA-4A01-B3FB-887013F6FBD4.jpg',
            'https://mypage-chi-cyan.vercel.app/img/20240202_165415.png',
            'https://mypage-chi-cyan.vercel.app/img/20231215_215321.png',
            'https://mypage-chi-cyan.vercel.app/img/20240202_205747.png',
            'https://mypage-chi-cyan.vercel.app/img/20240412_205747.png',
            'https://mypage-chi-cyan.vercel.app/img/20240815_115813~2.jpg',
            'https://mypage-chi-cyan.vercel.app/img/20240819_152459.jpg',
            'https://mypage-chi-cyan.vercel.app/img/1732730374350%20Copy.jpg',
            'https://mypage-chi-cyan.vercel.app/img/IMG_0168.png',
            'https://mypage-chi-cyan.vercel.app/img/IMG_0982.png',
            'https://mypage-chi-cyan.vercel.app/img/IMG_1544.png',
            'https://mypage-chi-cyan.vercel.app/img/IMG_1545.png',
            'https://mypage-chi-cyan.vercel.app/img/IMG_20230813_083108_073.jpg',
            'https://mypage-chi-cyan.vercel.app/img/IMG_20241204_215123.jpg'
        ];
        let currentImageIndex = 0;

        function openLightbox(index) {
            currentImageIndex = index;
            const lightbox = document.getElementById('lightbox');
            const lightboxImg = document.getElementById('lightboxImg');
            lightboxImg.src = galleryImages[index];
            lightbox.classList.remove('hidden');
            lightbox.classList.add('flex');
            document.body.style.overflow = 'hidden';
        }

        function closeLightbox(event) {
            if (event.target === document.getElementById('lightbox') || event.currentTarget.tagName === 'BUTTON') {
                const lightbox = document.getElementById('lightbox');
                lightbox.classList.add('hidden');
                lightbox.classList.remove('flex');
                document.body.style.overflow = '';
            }
        }

        function nextImage(event) {
            event.stopPropagation();
            currentImageIndex = (currentImageIndex + 1) % galleryImages.length;
            document.getElementById('lightboxImg').src = galleryImages[currentImageIndex];
        }

        function prevImage(event) {
            event.stopPropagation();
            currentImageIndex = (currentImageIndex - 1 + galleryImages.length) % galleryImages.length;
            document.getElementById('lightboxImg').src = galleryImages[currentImageIndex];
        }

        // Keyboard navigation for lightbox
        document.addEventListener('keydown', (e) => {
            const lightbox = document.getElementById('lightbox');
            if (lightbox.classList.contains('hidden')) return;
            if (e.key === 'Escape') {
                lightbox.classList.add('hidden');
                lightbox.classList.remove('flex');
                document.body.style.overflow = '';
            }
            if (e.key === 'ArrowRight') nextImage(e);
            if (e.key === 'ArrowLeft') {
                currentImageIndex = (currentImageIndex - 1 + galleryImages.length) % galleryImages.length;
                document.getElementById('lightboxImg').src = galleryImages[currentImageIndex];
            }
        });

        // ---- Hero particles ----
        function createParticles() {
            const container = document.getElementById('particles-container');
            const colors = ['#3b7aff', '#f5a623', '#ffffff'];
            for (let i = 0; i < 20; i++) {
                const particle = document.createElement('div');
                particle.classList.add('particle');
                const size = Math.random() * 6 + 2;
                const color = colors[Math.floor(Math.random() * colors.length)];
                particle.style.width = size + 'px';
                particle.style.height = size + 'px';
                particle.style.background = color;
                particle.style.left = Math.random() * 100 + '%';
                particle.style.animationDuration = (Math.random() * 15 + 10) + 's';
                particle.style.animationDelay = (Math.random() * 10) + 's';
                container.appendChild(particle);
            }
        }
        createParticles();

        // ---- Contact form ----
        document.getElementById('contactForm').addEventListener('submit', function(e) {
            e.preventDefault();
            const name = document.getElementById('name').value;
            const email = document.getElementById('email').value;
            const subject = document.getElementById('subject').value;
            const message = document.getElementById('message').value;

            // Build mailto link
            const mailtoSubject = encodeURIComponent(subject || 'Contato via site');
            const mailtoBody = encodeURIComponent(`Nome: ${name}\nEmail: ${email}\n\n${message}`);
            window.open(`mailto:welingtonhopka@hotmail.com?subject=${mailtoSubject}&body=${mailtoBody}`, '_blank');

            showToast('Mensagem preparada! Verifique seu cliente de email.', 'success');
        });

        // ---- Toast notifications ----
        function showToast(message, type = 'info') {
            const container = document.getElementById('toastContainer');
            const toast = document.createElement('div');
            const bgColor = type === 'success' ? 'bg-green-500' : type === 'error' ? 'bg-red-500' : 'bg-primary-500';
            toast.className = `toast ${bgColor} text-white px-6 py-4 rounded-xl shadow-xl flex items-center gap-3 min-w-[300px]`;
            const icon = type === 'success' ? 'check-circle' : type === 'error' ? 'x-circle' : 'info';
            toast.innerHTML = `<i data-lucide="${icon}" class="w-5 h-5 flex-shrink-0"></i><span class="text-sm font-medium">${message}</span>`;
            container.appendChild(toast);
            lucide.createIcons();
            setTimeout(() => {
                toast.remove();
            }, 3000);
        }

        // ---- Counter animation ----
        function animateCounters() {
            const counters = document.querySelectorAll('[data-count]');
            counters.forEach(counter => {
                const target = parseInt(counter.dataset.count);
                const duration = 2000;
                const step = target / (duration / 16);
                let current = 0;
                const timer = setInterval(() => {
                    current += step;
                    if (current >= target) {
                        current = target;
                        clearInterval(timer);
                    }
                    counter.textContent = Math.floor(current) + '+';
                }, 16);
            });
        }

        // Trigger counter animation when visible
        const counterSection = document.querySelector('#about');
        const counterObserver = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    animateCounters();
                    counterObserver.unobserve(entry.target);
                }
            });
        }, { threshold: 0.3 });
        if (counterSection) counterObserver.observe(counterSection);

        // ---- Smooth scroll for navigation ----
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', function(e) {
                e.preventDefault();
                const target = document.querySelector(this.getAttribute('href'));
                if (target) {
                    target.scrollIntoView({ behavior: 'smooth', block: 'start' });
                }
            });
        });
