// ===========================
// Theme Toggle (Dark/Light)
// ===========================
(function () {
    var toggle = document.getElementById('themeToggle');
    var stored = localStorage.getItem('theme');

    // Apply saved theme or default to dark
    if (stored) {
        document.documentElement.setAttribute('data-theme', stored);
    } else {
        document.documentElement.setAttribute('data-theme', 'dark');
    }

    toggle.addEventListener('click', function () {
        var current = document.documentElement.getAttribute('data-theme');
        var next = current === 'dark' ? 'light' : 'dark';
        document.documentElement.setAttribute('data-theme', next);
        localStorage.setItem('theme', next);
    });
})();

// ===========================
// Hero Particle Canvas
// ===========================
(function () {
    var canvas = document.getElementById('heroCanvas');
    if (!canvas) return;

    var ctx = canvas.getContext('2d');
    var particles = [];
    var mouse = { x: null, y: null };

    function getParticleColor() {
        var style = getComputedStyle(document.documentElement);
        return style.getPropertyValue('--particle-dot').trim() || '107, 127, 255';
    }

    function getLineOpacity() {
        var style = getComputedStyle(document.documentElement);
        return parseFloat(style.getPropertyValue('--particle-line-opacity')) || 0.06;
    }

    function resize() {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
    }

    function createParticles() {
        particles = [];
        var count = Math.min(Math.floor((canvas.width * canvas.height) / 15000), 80);
        for (var i = 0; i < count; i++) {
            particles.push({
                x: Math.random() * canvas.width,
                y: Math.random() * canvas.height,
                vx: (Math.random() - 0.5) * 0.4,
                vy: (Math.random() - 0.5) * 0.4,
                radius: Math.random() * 2.5 + 1,
                opacity: Math.random() * 0.4 + 0.1
            });
        }
    }

    function drawParticles() {
        ctx.clearRect(0, 0, canvas.width, canvas.height);

        var rgb = getParticleColor();
        var lineOp = getLineOpacity();

        particles.forEach(function (p, i) {
            p.x += p.vx;
            p.y += p.vy;

            if (mouse.x !== null) {
                var dx = p.x - mouse.x;
                var dy = p.y - mouse.y;
                var dist = Math.sqrt(dx * dx + dy * dy);
                if (dist < 150) {
                    p.x += dx * 0.005;
                    p.y += dy * 0.005;
                }
            }

            if (p.x < 0) p.x = canvas.width;
            if (p.x > canvas.width) p.x = 0;
            if (p.y < 0) p.y = canvas.height;
            if (p.y > canvas.height) p.y = 0;

            ctx.beginPath();
            ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
            ctx.fillStyle = 'rgba(' + rgb + ', ' + p.opacity + ')';
            ctx.fill();

            for (var j = i + 1; j < particles.length; j++) {
                var p2 = particles[j];
                var ddx = p.x - p2.x;
                var ddy = p.y - p2.y;
                var d = Math.sqrt(ddx * ddx + ddy * ddy);
                if (d < 120) {
                    ctx.beginPath();
                    ctx.moveTo(p.x, p.y);
                    ctx.lineTo(p2.x, p2.y);
                    ctx.strokeStyle = 'rgba(' + rgb + ', ' + (lineOp * (1 - d / 120)) + ')';
                    ctx.lineWidth = 1;
                    ctx.stroke();
                }
            }
        });

        requestAnimationFrame(drawParticles);
    }

    window.addEventListener('mousemove', function (e) {
        mouse.x = e.clientX;
        mouse.y = e.clientY;
    });

    window.addEventListener('resize', function () {
        resize();
        createParticles();
    });

    resize();
    createParticles();
    drawParticles();
})();

// ===========================
// Smooth Scrolling
// ===========================
document.querySelectorAll('a[href^="#"]').forEach(function (anchor) {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        var target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
    });
});

// ===========================
// Mobile Menu Toggle
// ===========================
document.getElementById('mobileMenuBtn').addEventListener('click', function () {
    var navLinks = document.getElementById('navLinks');
    var isOpen = navLinks.classList.toggle('active');
    this.setAttribute('aria-expanded', isOpen);
});

// ===========================
// Header Scroll Effect
// ===========================
(function () {
    var header = document.querySelector('header');
    window.addEventListener('scroll', function () {
        if (window.scrollY > 50) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
    });
})();

// ===========================
// Scroll Reveal
// ===========================
(function () {
    var revealElements = document.querySelectorAll('.reveal');
    if (!revealElements.length) return;

    var observer = new IntersectionObserver(function (entries) {
        entries.forEach(function (entry) {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                observer.unobserve(entry.target);
            }
        });
    }, {
        threshold: 0.15,
        rootMargin: '0px 0px -50px 0px'
    });

    revealElements.forEach(function (el) {
        observer.observe(el);
    });
})();

