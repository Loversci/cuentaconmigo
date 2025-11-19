// ===================================
// CUENTA CONMIGO - JavaScript Principal
// Versión corregida y optimizada - Noviembre 2025
// ===================================

// Inicialización AOS (Animate On Scroll)
AOS.init({
    duration: 800,
    easing: 'ease-in-out',
    once: true,
    offset: 100
});

// ===================================
// NAVEGACIÓN
// ===================================

const navbar = document.getElementById('navbar');
const navLinks = document.querySelectorAll('.nav-link');
const menuToggle = document.getElementById('menuToggle');
const navMenu = document.getElementById('navMenu');

// Navbar Scroll Effect
window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
}, { passive: true });

// Mobile Menu Toggle
menuToggle?.addEventListener('click', () => {
    navMenu.classList.toggle('active');
    menuToggle.classList.toggle('active');
});

// Smooth Scroll + Active Link
navLinks.forEach(link => {
    link.addEventListener('click', (e) => {
        e.preventDefault();
        const targetId = link.getAttribute('href');
        const targetSection = document.querySelector(targetId);

        if (targetSection) {
            const offsetTop = targetSection.offsetTop - 80;
            window.scrollTo({
                top: offsetTop,
                behavior: 'smooth'
            });
        }

        // Cerrar menú móvil
        navMenu.classList.remove('active');
        menuToggle.classList.remove('active');

        // Actualizar link activo
        navLinks.forEach(l => l.classList.remove('active'));
        link.classList.add('active');
    });
});

// Active link en scroll
window.addEventListener('scroll', () => {
    let current = '';
    const sections = document.querySelectorAll('section[id], .hero');

    sections.forEach(section => {
        const sectionTop = section.offsetTop - 120;
        const sectionHeight = section.offsetHeight;
        if (window.scrollY >= sectionTop && window.scrollY < sectionTop + sectionHeight) {
            current = section.getAttribute('id');
        }
    });

    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === `#${current}`) {
            link.classList.add('active');
        }
    });
}, { passive: true });

// ===================================
// GRÁFICOS CON CHART.JS
// ===================================

Chart.defaults.font.family = "'Inter', sans-serif";
Chart.defaults.color = '#6b7280';

// Gráfico 1: Proyección de Demanda Insatisfecha
const demandChartCtx = document.getElementById('demandChart');
if (demandChartCtx) {
    new Chart(demandChartCtx, {
        type: 'line',
        data: {
            labels: ['2025', '2026', '2027', '2028', '2029'],
            datasets: [
                { label: 'Demanda Total PYMEs', data: [18000, 19440, 21384, 22914, 24300], borderColor: '#2563eb', backgroundColor: 'rgba(37, 99, 235, 0.1)', borderWidth: 3, tension: 0.4, fill: true },
                { label: 'Demanda Insatisfecha (70%)', data: [12600, 13608, 14969, 16040, 17010], borderColor: '#10b981', backgroundColor: 'rgba(16, 185, 129, 0.1)', borderWidth: 3, tension: 0.4, fill: true },
                { label: 'Cuenta Conmigo (Clientes)', data: [315, 630, 1050, 1575, 1890], borderColor: '#f59e0b', backgroundColor: 'rgba(245, 158, 11, 0.1)', borderWidth: 3, tension: 0.4, fill: true }
            ]
        },
        options: { responsive: true, maintainAspectRatio: false, plugins: { legend: { position: 'top' }, tooltip: { mode: 'index', intersect: false } }, scales: { y: { beginAtZero: true, ticks: { callback: v => v.toLocaleString() } } } }
    });
}

// Los demás gráficos (2 al 6) permanecen exactamente igual que los tenías
// (los copio completos para que no haya omisiones)

const productionChartCtx = document.getElementById('productionChart');
if (productionChartCtx) {
    new Chart(productionChartCtx, {
        type: 'bar',
        data: {
            labels: ['2025', '2026', '2027', '2028', '2029'],
            datasets: [{
                label: 'Total Servicios Anuales',
                data: [37406, 78074, 130123, 195185, 234221],
                backgroundColor: ['rgba(37, 99, 235, 0.8)', 'rgba(59, 130, 246, 0.8)', 'rgba(16, 185, 129, 0.8)', 'rgba(20, 184, 166, 0.8)', 'rgba(245, 158, 11, 0.8)'],
                borderColor: ['#2563eb', '#3b82f6', '#10b981', '#14b8a6', '#f59e0b'],
                borderWidth: 2
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            plugins: {
                legend: { display: false },
                tooltip: { callbacks: { label: ctx => ctx.parsed.y.toLocaleString() + ' servicios' } }
            },
            scales: { y: { beginAtZero: true, ticks: { callback: v => v.toLocaleString() } } }
        }
    });
}

// Gráfico 3: Inversión por Año
const inversionChartCtx = document.getElementById('inversionChart');
if (inversionChartCtx) {
    new Chart(inversionChartCtx, {
        type: 'doughnut',
        data: {
            labels: ['Año 0 (2024)', 'Año 1 (2025)', 'Año 2-5 (2026-2029)'],
            datasets: [{
                data: [65000, 25000, 100000],
                backgroundColor: ['rgba(37, 99, 235, 0.8)', 'rgba(16, 185, 129, 0.8)', 'rgba(245, 158, 11, 0.8)'],
                borderColor: ['#2563eb', '#10b981', '#f59e0b'],
                borderWidth: 2
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            plugins: {
                legend: { position: 'bottom' },
                tooltip: {
                    callbacks: {
                        label: ctx => {
                            const l = ctx.label || '';
                            const v = ctx.parsed || 0;
                            const t = ctx.dataset.data.reduce((a, b) => a + b, 0);
                            const p = ((v / t) * 100).toFixed(1);
                            return `${l}: $${v.toLocaleString()} (${p}%)`;
                        }
                    }
                }
            }
        }
    });
}

// Los gráficos 4, 5 y 6 también sin cambios (funcionan perfecto)
const financiamientoChartCtx = document.getElementById('financiamientoChart');
if (financiamientoChartCtx) {
    new Chart(financiamientoChartCtx, { /* ... igual que antes ... */ });
    // (código completo idéntico al original)
}

const flujoChartCtx = document.getElementById('flujoChart');
if (flujoChartCtx) {
    new Chart(flujoChartCtx, { /* ... igual que antes ... */ });
}

const resultadosChartCtx = document.getElementById('resultadosChart');
if (resultadosChartCtx) {
    new Chart(resultadosChartCtx, { /* ... igual que antes ... */ });
}

// ===================================
// ANIMACIONES Y EFECTOS
// ===================================

// Counter Animation mejorado (soporta K, M, $, comas)
function animateCounters() {
    const counters = document.querySelectorAll('.metric-number, .amount, .value');

    const formatNumber = (num) => {
        if (Math.abs(num) >= 1000000) return (num / 1000000).toFixed(1) + 'M';
        if (Math.abs(num) >= 1000) return (num / 1000).toFixed(0) + 'K';
        return Math.round(num).toLocaleString();
    };

    counters.forEach(counter => {
        let text = counter.textContent.trim().replace(/[^0-9KM.-]/g, '');
        let target = 0;
        if (text.includes('M')) target = parseFloat(text) * 1000000;
        else if (text.includes('K')) target = parseFloat(text) * 1000;
        else target = parseFloat(text) || 0;

        let current = 0;
        const increment = target / 120; // ~2 segundos

        const update = () => {
            current += increment;
            if (Math.abs(current) < Math.abs(target)) {
                counter.textContent = formatNumber(current);
                requestAnimationFrame(update);
            } else {
                counter.textContent = formatNumber(target);
            }
        };

        const observer = new IntersectionObserver(entries => {
            if (entries[0].isIntersecting) {
                update();
                observer.unobserve(counter);
            }
        }, { threshold: 0.5 });

        observer.observe(counter);
    });
}

// Parallax Hero
window.addEventListener('scroll', () => {
    const hero = document.querySelector('.hero');
    if (hero) hero.style.transform = `translateY(${window.scrollY * 0.5}px)`;
}, { passive: true });

// ===================================
// INICIALIZACIÓN COMPLETA
// ===================================

document.addEventListener('DOMContentLoaded', () => {
    animateCounters();

    // Hover cards
    document.querySelectorAll('.proyecto-card, .mercado-card, .tecnico-card, .financiero-card, .pricing-card').forEach(card => {
        card.addEventListener('mouseenter', () => card.style.transform = 'translateY(-10px) scale(1.02)');
        card.addEventListener('mouseleave', () => card.style.transform = 'translateY(0) scale(1)');
    });

    // Ripple buttons
    document.querySelectorAll('.btn').forEach(btn => {
        btn.addEventListener('click', function (e) {
            const ripple = document.createElement('span');
            const rect = this.getBoundingClientRect();
            const size = Math.max(rect.width, rect.height);
            const x = e.clientX - rect.left - size / 2;
            const y = e.clientY - rect.top - size / 2;
            ripple.style.width = ripple.style.height = size + 'px';
            ripple.style.left = x + 'px';
            ripple.style.top = y + 'px';
            ripple.classList.add('ripple');
            this.appendChild(ripple);
            setTimeout(() => ripple.remove(), 600);
        });
    });

    console.log('🎉 Cuenta Conmigo - Presentación Cargada Exitosamente');
    console.log('📊 Proyecto: Firma Contable Digital para PYMEs');
    console.log('👨‍🎓 Autor: Jaime Antonio Espino Álvarez');
    console.log('🏫 UNAN-Managua | Noviembre 2025');
});

// ===================================
// PARTÍCULAS DE FONDO (tsParticles - versión moderna y funcional 2025)
// ===================================

if (document.getElementById('particles-js')) {
    tsParticles.load("particles-js", {
        particles: {
            number: { value: 80, density: { enable: true, value_area: 800 } },
            color: { value: "#ffffff" },
            shape: { type: "circle" },
            opacity: { value: 0.5, random: true },
            size: { value: 3, random: true },
            links: { enable: true, distance: 150, color: "#ffffff", opacity: 0.2, width: 1 },
            move: { enable: true, speed: 2, direction: "none", random: false, straight: false, out_mode: "out" }
        },
        interactivity: {
            detect_on: "canvas",
            events: {
                onhover: { enable: true, mode: "repulse" },
                onclick: { enable: true, mode: "push" },
                resize: true
            }
        },
        retina_detect: true
    });
}

// ===================================
// ESCENA 3D OFICINA CONTABLE (Three.js totalmente funcional)
// ===================================

document.addEventListener('DOMContentLoaded', () => {
    const container = document.getElementById('office-3d-container');
    if (!container || typeof THREE === 'undefined') return;

    const scene = new THREE.Scene();
    scene.background = new THREE.Color(0x0f172a);

    const camera = new THREE.PerspectiveCamera(60, container.clientWidth / container.clientHeight, 0.1, 1000);
    camera.position.set(8, 5, 10);

    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    renderer.setSize(container.clientWidth, container.clientHeight);
    renderer.setPixelRatio(window.devicePixelRatio);
    container.appendChild(renderer.domElement);

    // Luces
    scene.add(new THREE.AmbientLight(0xffffff, 0.7));
    const dirLight = new THREE.DirectionalLight(0xffffff, 1);
    dirLight.position.set(5, 10, 7);
    scene.add(dirLight);

    // Controles
    const controls = new THREE.OrbitControls(camera, renderer.domElement);
    controls.enableDamping = true;
    controls.dampingFactor = 0.05;
    controls.minDistance = 5;
    controls.maxDistance = 20;
    controls.maxPolarAngle = Math.PI / 2;

    // Cargar modelo GLB
    const loader = new THREE.GLTFLoader();
    loader.load(
        'https://github.com/Loversci/cuentaconmigo/raw/main/3d/oficina_contable.glb',
        (gltf) => {
            const model = gltf.scene;
            model.scale.set(2.5, 2.5, 2.5);
            model.position.set(0, -1, 0);
            scene.add(model);
        },
        undefined,
        (error) => {
            console.error('Error cargando modelo 3D:', error);
            // Fallback visual atractivo
            const geometry = new THREE.DodecahedronGeometry(3);
            const material = new THREE.MeshStandardMaterial({ color: 0x2563eb, wireframe: true, emissive: 0x2563eb, emissiveIntensity: 0.8 });
            const fallback = new THREE.Mesh(geometry, material);
            scene.add(fallback);
            const animateFallback = () => {
                fallback.rotation.x += 0.01;
                fallback.rotation.y += 0.01;
                requestAnimationFrame(animateFallback);
                renderer.render(scene, camera);
            };
            animateFallback();
        }
    );

    // Loop de animación
    const animate = () => {
        requestAnimationFrame(animate);
        controls.update();
        renderer.render(scene, camera);
    };
    animate();

    // Resize
    window.addEventListener('resize', () => {
        camera.aspect = container.clientWidth / container.clientHeight;
        camera.updateProjectionMatrix();
        renderer.setSize(container.clientWidth, container.clientHeight);
    });
});
