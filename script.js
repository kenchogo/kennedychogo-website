/**
 * Kennedy Chogo LLC - Core Framework Interface Engine
 * High-tier performance optimization metrics
 */

document.addEventListener("DOMContentLoaded", function() {
    initializeNavigationEngine();
    initializeScrollObserverEngine();
    initializeHeroCanvas();
    initializeFormEngine();
    initializeKennyBotSimulator();
});

/* --- Navigation Mobile Menu Drawer Handlers --- */
function initializeNavigationEngine() {
    const toggleBtn = document.querySelector('.mobile-toggle');
    const drawer = document.querySelector('.mobile-menu-drawer');
    const header = document.querySelector('.main-header');

    if (toggleBtn && drawer) {
        toggleBtn.addEventListener('click', function() {
            drawer.classList.toggle('active');
            toggleBtn.classList.toggle('open');
        });
    }

    window.addEventListener('scroll', function() {
        if (window.scrollY > 40) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
    });
}

/* --- Intersection Observer Scroll Animation Matrix --- */
function initializeScrollObserverEngine() {
    const revealElements = document.querySelectorAll('.reveal-left, .reveal-right, .reveal-up');
    
    const observerOptions = {
        root: null,
        threshold: 0.12,
        rootMargin: "0px 0px -40px 0px"
    };

    const scrollObserver = new IntersectionObserver(function(entries, observer) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('reveal-active');
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    revealElements.forEach(element => {
        scrollObserver.observe(element);
    });
}

/* --- Animated World-Grid Connection Canvas (Hero Background) --- */
function initializeHeroCanvas() {
    const canvas = document.getElementById('heroCanvas');
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    let resizeTimer;

    function resizeCanvas() {
        canvas.width = canvas.offsetWidth;
        canvas.height = canvas.offsetHeight;
    }
    resizeCanvas();

    window.addEventListener('resize', function() {
        clearTimeout(resizeTimer);
        resizeTimer = setTimeout(resizeCanvas, 200);
    });

    const particles = [];
    const particleCount = 45;

    for (let i = 0; i < particleCount; i++) {
        particles.push({
            x: Math.random() * canvas.width,
            y: Math.random() * canvas.height,
            vx: (Math.random() - 0.5) * 0.35,
            vy: (Math.random() - 0.5) * 0.35,
            radius: Math.random() * 1.5 + 1
        });
    }

    function renderLoop() {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        ctx.fillStyle = "rgba(142, 155, 180, 0.15)";
        ctx.strokeStyle = "rgba(46, 10, 140, 0.08)";

        // Draw connections grid lines
        for (let i = 0; i < particleCount; i++) {
            const p1 = particles[i];
            p1.x += p1.vx;
            p1.y += p1.vy;

            if (p1.x < 0 || p1.x > canvas.width) p1.vx *= -1;
            if (p1.y < 0 || p1.y > canvas.height) p1.vy *= -1;

            ctx.beginPath();
            ctx.arc(p1.x, p1.y, p1.radius, 0, Math.PI * 2);
            ctx.fill();

            for (let j = i + 1; j < particleCount; j++) {
                const p2 = particles[j];
                const distance = Math.hypot(p1.x - p2.x, p1.y - p2.y);

                if (distance < 130) {
                    ctx.beginPath();
                    ctx.moveTo(p1.x, p1.y);
                    ctx.lineTo(p2.x, p2.y);
                    ctx.stroke();
                }
            }
        }
        requestAnimationFrame(renderLoop);
    }
    renderLoop();
}

/* --- Contact Intake Status Context Verification --- */
function initializeFormEngine() {
    const urlParams = new URLSearchParams(window.location.search);
    const successBox = document.getElementById('successBox');
    const contactForm = document.getElementById('corporateContactForm');

    if (urlParams.get('status') === 'success' && successBox) {
        successBox.classList.remove('hidden');
        if (contactForm) contactForm.style.display = 'none';
        successBox.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }
}

/* --- KennyBot Terminal Processing Logic Simulation --- */
function initializeKennyBotSimulator() {
    const kForm = document.getElementById('kennyForm');
    if (!kForm) return;

    kForm.addEventListener('submit', function(e) {
        e.preventDefault();
        const inputField = document.getElementById('userInput');
        const queryText = inputField.value.trim();
        if (!queryText) return;

        appendChatMessage(queryText, 'user-msg');
        inputField.value = '';

        // Emulate advanced tactical computing delay
        setTimeout(function() {
            const simulatedResponse = generateDynamicBotResponse(queryText);
            appendChatMessage(simulatedResponse, 'bot-msg');
        }, 850);
    });
}

function appendChatMessage(text, className) {
    const container = document.getElementById('chatContainer');
    if (!container) return;

    const msgDiv = document.createElement('div');
    msgDiv.className = `message ${className}`;
    
    // Formatting line breaks safely
    msgDiv.innerHTML = text.replace(/\n/g, '<br>');
    
    container.appendChild(msgDiv);
    container.scrollTop = container.scrollHeight;
}

function sendSuggested(promptText) {
    appendChatMessage(promptText, 'user-msg');
    setTimeout(function() {
        const responseText = generateDynamicBotResponse(promptText);
        appendChatMessage(responseText, 'bot-msg');
    }, 700);
}

function generateDynamicBotResponse(queryText) {
    const queryLower = queryText.toLowerCase();
    
    if (queryLower.includes('east africa') || queryLower.includes('kenya') || queryLower.includes('logistical')) {
        return `<strong>[EAST AFRICA REGIONAL MATRIX SECTOR RESPONSE]</strong>\n\nKennedy Chogo LLC manages localized infrastructural risk arrays across the East African trade zones (Kenya, Uganda, Tanzania corridors).\n\n<strong>Key Protocol Parameters:</strong>\n• Secure point-to-point regional movement mapping.\n• Direct integration alongside local compliance clearing boards.\n• Local intelligence mapping matrices that bypass general public infrastructure blockages.\n\nTo coordinate field security operations planning, please utilize our secure channel via the main <a href="contact.html" style="color:#FFFFFF;text-decoration:underline;">Consultation Portal</a>.`;
    }
    
    if (queryLower.includes('html') || queryLower.includes('template') || queryLower.includes('modality') || queryLower.includes('guard')) {
        return `<strong>[STRATEGIC METRIC CLASSIFICATION BRIEF]</strong>\n\nOur advisory firm intentionally implements custom standalone optimized frameworks rather than relying on generic public security patterns or simple guard placement.\n\n<strong>Our Operational Separation:</strong>\n• <strong>discretion:</strong> Total reduction of public digital footprint vulnerability parameters.\n• <strong>Ownership:</strong> Core operational metrics are kept inside zero-margin third-party dependencies.\n• <strong>Displacement:</strong> Transitioning your enterprise layer from traditional static physical guards to forward-looking predictive defense intelligence architectures.`;
    }

    if (queryLower.includes('emergency') || queryLower.includes('submit') || queryLower.includes('protection') || queryLower.includes('consultation')) {
        return `<strong>[SECURE CHANNEL ROUTING PROTOCOL]</strong>\n\nTo initiate close defensive support operations or secure tactical advisory deployments, your organization must route an intake form through the primary liaison terminal.\n\n<strong>Direct Actions:</strong>\n1. Access our <a href="contact.html" style="color:#FFFFFF;text-decoration:underline;">Secure Consultation conduit</a>.\n2. Complete organizational budget profile allocation variables.\n3. The Principal advisor will establish a direct secondary secure line within 12 standard operating hours.`;
    }

    return `<strong>[TERMINAL TRANSMISSION SUCCESSFUL]</strong>\n\nYour strategic risk allocation tracking parameter has been cataloged inside our localized session registry.\n\nKennedy Chogo LLC specializes in premium multi-layered corporate defense consulting, asset insulation, and executive protection advisory protocols across demanding international scopes. We advise against standard generic defensive models in favor of highly customized infrastructure planning matrices.\n\nTo formally request a secure threat brief, please route requirements directly to <strong>kennedy@kennedychogo.com</strong> or engage the main contact desk terminal.`;
}