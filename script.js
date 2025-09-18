// Smooth scrolling function
function scrollToOffer() {
    const offerSection = document.getElementById('offer');
    offerSection.scrollIntoView({ 
        behavior: 'smooth',
        block: 'start'
    });
}

// Intersection Observer for animations
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Initialize animations on page load
document.addEventListener('DOMContentLoaded', function() {
    // Animate elements on scroll
    const animatedElements = document.querySelectorAll('.learning-item, .proof-item, .bonus-item, .author-content');
    
    animatedElements.forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(30px)';
        el.style.transition = 'all 0.6s ease-out';
        observer.observe(el);
    });

    // Counter animation for price
    animateCounter();

    // Add parallax effect to hero
    addParallaxEffect();

    // Add click tracking for CTA buttons
    addCTATracking();

    // Add scroll progress indicator
    addScrollProgress();
});

// Counter animation for price
function animateCounter() {
    const priceElement = document.querySelector('.amount');
    if (!priceElement) return;

    const finalPrice = 19.90;
    const duration = 2000;
    const increment = finalPrice / (duration / 16);
    let currentPrice = 0;

    const timer = setInterval(() => {
        currentPrice += increment;
        if (currentPrice >= finalPrice) {
            currentPrice = finalPrice;
            clearInterval(timer);
        }
        priceElement.textContent = currentPrice.toFixed(2).replace('.', ',');
    }, 16);
}

// Parallax effect for hero section
function addParallaxEffect() {
    const hero = document.querySelector('.hero');
    const ebookMockup = document.querySelector('.ebook-mockup');
    
    if (!hero || !ebookMockup) return;

    window.addEventListener('scroll', () => {
        const scrolled = window.pageYOffset;
        const rate = scrolled * -0.5;
        
        if (scrolled < window.innerHeight) {
            ebookMockup.style.transform = `translateY(${rate}px) rotateY(-15deg) rotateX(5deg)`;
        }
    });
}

// CTA button tracking and effects
function addCTATracking() {
    const ctaButtons = document.querySelectorAll('.cta-button');
    
    ctaButtons.forEach(button => {
        // Add ripple effect
        button.addEventListener('click', function(e) {
            // Create ripple element
            const ripple = document.createElement('span');
            ripple.classList.add('ripple');
            
            // Calculate position
            const rect = this.getBoundingClientRect();
            const size = Math.max(rect.width, rect.height);
            const x = e.clientX - rect.left - size / 2;
            const y = e.clientY - rect.top - size / 2;
            
            // Style ripple
            ripple.style.cssText = `
                position: absolute;
                width: ${size}px;
                height: ${size}px;
                left: ${x}px;
                top: ${y}px;
                background: rgba(255, 255, 255, 0.3);
                border-radius: 50%;
                transform: scale(0);
                animation: ripple-animation 0.6s ease-out;
                pointer-events: none;
            `;
            
            // Add to button
            this.appendChild(ripple);
            
            // Remove after animation
            setTimeout(() => {
                ripple.remove();
            }, 600);
            
            // Analytics tracking (placeholder)
            trackCTAClick(this.textContent);
        });

        // Hover effects
        button.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-3px) scale(1.02)';
        });

        button.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0) scale(1)';
        });
    });
}

// Add CSS for ripple animation
const rippleCSS = `
    @keyframes ripple-animation {
        to {
            transform: scale(4);
            opacity: 0;
        }
    }
    
    .cta-button {
        position: relative;
        overflow: hidden;
    }
`;

const style = document.createElement('style');
style.textContent = rippleCSS;
document.head.appendChild(style);

// Scroll progress indicator
function addScrollProgress() {
    // Create progress bar
    const progressBar = document.createElement('div');
    progressBar.style.cssText = `
        position: fixed;
        top: 0;
        left: 0;
        width: 0%;
        height: 4px;
        background: linear-gradient(90deg, #4ade80, #667eea);
        z-index: 9999;
        transition: width 0.1s ease-out;
    `;
    document.body.appendChild(progressBar);

    // Update progress on scroll
    window.addEventListener('scroll', () => {
        const scrolled = (window.pageYOffset / (document.documentElement.scrollHeight - window.innerHeight)) * 100;
        progressBar.style.width = scrolled + '%';
    });
}

// Placeholder for analytics tracking
function trackCTAClick(buttonText) {
    console.log(`CTA clicked: ${buttonText}`);
    
    // Here you would integrate with your analytics service
    // Example: gtag('event', 'click', { 'event_category': 'CTA', 'event_label': buttonText });
    // or: fbq('track', 'Lead', { content_name: buttonText });
}

// Add floating elements animation
function addFloatingElements() {
    const hero = document.querySelector('.hero');
    if (!hero) return;

    // Create floating elements
    for (let i = 0; i < 5; i++) {
        const element = document.createElement('div');
        element.style.cssText = `
            position: absolute;
            width: ${Math.random() * 20 + 10}px;
            height: ${Math.random() * 20 + 10}px;
            background: rgba(255, 255, 255, 0.1);
            border-radius: 50%;
            left: ${Math.random() * 100}%;
            top: ${Math.random() * 100}%;
            animation: float ${Math.random() * 6 + 4}s ease-in-out infinite;
            pointer-events: none;
        `;
        hero.appendChild(element);
    }
}

// Add floating animation CSS
const floatingCSS = `
    @keyframes float {
        0%, 100% {
            transform: translateY(0px);
            opacity: 0.7;
        }
        50% {
            transform: translateY(-20px);
            opacity: 0.3;
        }
    }
`;

const floatingStyle = document.createElement('style');
floatingStyle.textContent = floatingCSS;
document.head.appendChild(floatingStyle);

// Initialize floating elements
document.addEventListener('DOMContentLoaded', addFloatingElements);

// Add testimonial carousel functionality (for future use)
function initTestimonialCarousel() {
    const testimonialSection = document.querySelector('.social-proof');
    if (!testimonialSection) return;

    // Placeholder for testimonial carousel
    // This can be expanded when real testimonials are added
    console.log('Testimonial carousel ready for implementation');
}

// Scroll-triggered animations for learning items
function initScrollAnimations() {
    const learningItems = document.querySelectorAll('.learning-item');
    
    learningItems.forEach((item, index) => {
        item.style.animationDelay = `${index * 0.1}s`;
    });
}

// Add exit-intent popup functionality
function addExitIntentPopup() {
    let exitIntentShown = false;

    document.addEventListener('mouseleave', (e) => {
        if (e.clientY <= 0 && !exitIntentShown) {
            exitIntentShown = true;
            showExitIntentPopup();
        }
    });
}

function showExitIntentPopup() {
    // Create modal backdrop
    const backdrop = document.createElement('div');
    backdrop.style.cssText = `
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: rgba(0, 0, 0, 0.8);
        z-index: 10000;
        display: flex;
        align-items: center;
        justify-content: center;
        animation: fadeIn 0.3s ease-out;
    `;

    // Create popup content
    const popup = document.createElement('div');
    popup.style.cssText = `
        background: white;
        padding: 40px;
        border-radius: 20px;
        max-width: 500px;
        width: 90%;
        text-align: center;
        position: relative;
        animation: slideUp 0.4s ease-out;
    `;

    popup.innerHTML = `
        <h3 style="font-size: 1.8rem; margin-bottom: 20px; color: #1e293b;">Espera! Não perca essa oportunidade! 🚀</h3>
        <p style="font-size: 1.1rem; margin-bottom: 25px; color: #64748b;">
            Você está a um clique de transformar sua carreira como desenvolvedor front-end.
        </p>
        <div style="background: linear-gradient(135deg, #4ade80 0%, #16a34a 100%); color: white; padding: 15px; border-radius: 10px; margin-bottom: 25px;">
            <strong>Oferta especial: R$ 19,90</strong>
        </div>
        <button onclick="this.parentElement.parentElement.remove()" style="
            background: linear-gradient(135deg, #4ade80 0%, #16a34a 100%);
            color: white;
            border: none;
            padding: 15px 30px;
            border-radius: 10px;
            font-weight: 600;
            cursor: pointer;
            margin-right: 15px;
        ">Garantir Agora</button>
        <button onclick="this.parentElement.parentElement.remove()" style="
            background: transparent;
            color: #64748b;
            border: 1px solid #e2e8f0;
            padding: 15px 30px;
            border-radius: 10px;
            cursor: pointer;
        ">Fechar</button>
    `;

    backdrop.appendChild(popup);
    document.body.appendChild(backdrop);

    // Add animations
    const animationCSS = `
        @keyframes fadeIn {
            from { opacity: 0; }
            to { opacity: 1; }
        }
        @keyframes slideUp {
            from { transform: translateY(50px); opacity: 0; }
            to { transform: translateY(0); opacity: 1; }
        }
    `;
    
    if (!document.querySelector('#exit-intent-css')) {
        const exitStyle = document.createElement('style');
        exitStyle.id = 'exit-intent-css';
        exitStyle.textContent = animationCSS;
        document.head.appendChild(exitStyle);
    }

    // Remove popup after 10 seconds
    setTimeout(() => {
        if (backdrop.parentElement) {
            backdrop.remove();
        }
    }, 10000);
}

// Initialize exit intent after page load
setTimeout(() => {
    addExitIntentPopup();
}, 5000);

// Add FAQ accordion functionality (for future expansion)
function initFAQAccordion() {
    const faqItems = document.querySelectorAll('.faq-item');
    
    faqItems.forEach(item => {
        const question = item.querySelector('.faq-question');
        const answer = item.querySelector('.faq-answer');
        
        if (question && answer) {
            question.addEventListener('click', () => {
                const isOpen = answer.style.display === 'block';
                
                // Close all other answers
                faqItems.forEach(otherItem => {
                    const otherAnswer = otherItem.querySelector('.faq-answer');
                    if (otherAnswer && otherAnswer !== answer) {
                        otherAnswer.style.display = 'none';
                    }
                });
                
                // Toggle current answer
                answer.style.display = isOpen ? 'none' : 'block';
            });
        }
    });
}

// Add social share functionality
function addSocialShare() {
    const shareButtons = document.querySelectorAll('.share-button');
    
    shareButtons.forEach(button => {
        button.addEventListener('click', function(e) {
            e.preventDefault();
            const platform = this.dataset.platform;
            const url = encodeURIComponent(window.location.href);
            const text = encodeURIComponent('Transforme seu código em experiências memoráveis! 🚀');
            
            let shareUrl = '';
            
            switch(platform) {
                case 'facebook':
                    shareUrl = `https://www.facebook.com/sharer/sharer.php?u=${url}`;
                    break;
                case 'twitter':
                    shareUrl = `https://twitter.com/intent/tweet?url=${url}&text=${text}`;
                    break;
                case 'linkedin':
                    shareUrl = `https://www.linkedin.com/sharing/share-offsite/?url=${url}`;
                    break;
                case 'whatsapp':
                    shareUrl = `https://wa.me/?text=${text} ${url}`;
                    break;
            }
            
            if (shareUrl) {
                window.open(shareUrl, '_blank', 'width=600,height=400');
            }
        });
    });
}

// Initialize all functionality
document.addEventListener('DOMContentLoaded', function() {
    initScrollAnimations();
    initTestimonialCarousel();
    addSocialShare();
    
    console.log('Landing page initialized successfully! 🚀');
});