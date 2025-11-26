// Enhanced Main JavaScript for TELsTP Showcase Website

// Wait for DOM to be fully loaded
document.addEventListener('DOMContentLoaded', function() {
    // Initialize all components
    initNavigation();
    initAnimations();
    initModalHandlers();
    initScrollEffects();
    
    // Load dynamic content
    if (typeof loadResearchHubs === 'function') loadResearchHubs();
    if (typeof loadPublications === 'function') loadPublications();
    if (typeof loadEvents === 'function') loadEvents();
});

// Navigation functionality
function initNavigation() {
    const nav = document.querySelector('nav');
    const hamburger = document.querySelector('.hamburger');
    const navLinks = document.querySelector('.nav-links');
    
    // Handle navigation background on scroll
    window.addEventListener('scroll', function() {
        if (window.scrollY > 100) {
            nav.classList.add('scrolled');
        } else {
            nav.classList.remove('scrolled');
        }
    });
    
    // Mobile menu toggle
    if (hamburger) {
        hamburger.addEventListener('click', function() {
            navLinks.classList.toggle('active');
            hamburger.classList.toggle('active');
        });
    }
    
    // Smooth scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            if (targetId === '#') return;
            
            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                // Close mobile menu if open
                if (navLinks.classList.contains('active')) {
                    navLinks.classList.remove('active');
                    hamburger.classList.remove('active');
                }
                
                // Scroll to target
                window.scrollTo({
                    top: targetElement.offsetTop - 80,
                    behavior: 'smooth'
                });
            }
        });
    });
}

// Animation effects
function initAnimations() {
    // Animate elements when they come into view
    const animatedElements = document.querySelectorAll('.animate-on-scroll');
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate-fade-in');
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.1 });
    
    animatedElements.forEach(element => {
        observer.observe(element);
    });
    
    // Add animation classes to section headers
    document.querySelectorAll('.section-header').forEach(header => {
        header.classList.add('animate-on-scroll');
    });
}

// Modal functionality
function initModalHandlers() {
    // Chairman's message modal
    const chairmanModal = document.getElementById('chairmanModal');
    const readMoreBtn = document.getElementById('read-more-chairman');
    const closeBtn = document.querySelector('.close');
    
    if (readMoreBtn && chairmanModal) {
        readMoreBtn.addEventListener('click', function(e) {
            e.preventDefault();
            chairmanModal.style.display = 'block';
            document.body.style.overflow = 'hidden'; // Prevent scrolling
        });
    }
    
    if (closeBtn && chairmanModal) {
        closeBtn.addEventListener('click', function() {
            chairmanModal.style.display = 'none';
            document.body.style.overflow = 'auto'; // Re-enable scrolling
        });
    }
    
    // Close modal when clicking outside
    window.addEventListener('click', function(e) {
        if (chairmanModal && e.target === chairmanModal) {
            chairmanModal.style.display = 'none';
            document.body.style.overflow = 'auto';
        }
    });
}

// Scroll effects
function initScrollEffects() {
    // Parallax effect for hero section
    const hero = document.querySelector('.hero');
    if (hero) {
        window.addEventListener('scroll', function() {
            const scrollPosition = window.scrollY;
            hero.style.backgroundPositionY = scrollPosition * 0.5 + 'px';
        });
    }
    
    // Counter animation for stats
    const stats = document.querySelectorAll('.stat-number');
    
    const statsObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                animateCounter(entry.target);
                statsObserver.unobserve(entry.target);
            }
        });
    }, { threshold: 0.5 });
    
    stats.forEach(stat => {
        statsObserver.observe(stat);
    });
}

// Helper function to animate counters
function animateCounter(element) {
    const target = parseInt(element.textContent);
    const duration = 2000; // 2 seconds
    const step = target / (duration / 16); // 60fps
    let current = 0;
    
    const timer = setInterval(() => {
        current += step;
        if (current >= target) {
            element.textContent = target;
            clearInterval(timer);
        } else {
            element.textContent = Math.floor(current);
        }
    }, 16);
}

// Dynamic content loading for chairman's message
function loadChairmanMessage() {
    const chairmanMessageContainer = document.querySelector('.chairman-full-message');
    if (!chairmanMessageContainer) return;
    
    const message = `
        <p>It is with immense pride and unwavering determination that I welcome you to TAWASOL Life Science Park, a revolutionary ecosystem where the boundaries of scientific possibility are not merely pushed—they are completely redefined.</p>
        
        <p>As we stand at the threshold of a new era in scientific discovery, TAWASOL represents more than just a research facility—it embodies humanity's boldest aspirations for understanding the very essence of life and consciousness. Our vision transcends conventional paradigms, seeking to create a space where quantum physics meets biology, where artificial intelligence collaborates with human intuition, and where the ancient wisdom of our civilization converges with cutting-edge technology.</p>
        
        <p>The name TAWASOL, meaning "communication" in Arabic, encapsulates our core philosophy: breakthrough discoveries emerge not from isolated endeavors but from the dynamic interplay of diverse minds, cutting-edge technologies, and bold ideas that challenge conventional wisdom. Here, we are building bridges—between disciplines, between nations, between humanity's past and its future.</p>
        
        <p>Our 8 billion EGP investment is not merely financial; it represents Egypt's commitment to reclaiming its historical role as a beacon of knowledge and innovation. From the Library of Alexandria to the medical papyri of ancient times, Egypt has long been a crucible of scientific advancement. Today, we honor that legacy by creating a modern temple of discovery that will serve as the cornerstone of Egypt's Vision 2030 and beyond.</p>
        
        <p>To our international partners across 47 institutions worldwide: your collaboration amplifies our collective potential. Together, we are not just conducting research—we are orchestrating a global symphony of scientific exploration that transcends borders and unites humanity in its quest for knowledge.</p>
        
        <p>To the visionary leaders at GAFI and the Giza Governorate: your support transforms abstract dreams into concrete reality. The 130 feddan of land you provide will become fertile ground where ideas take root and flourish into innovations that benefit not just Egypt, but all of humanity.</p>
        
        <p>To the brilliant minds who will soon walk these halls—researchers, students, healthcare professionals, and innovators: you are the lifeblood of TAWASOL. Your curiosity, creativity, and courage will illuminate paths yet undiscovered.</p>
        
        <p>As we embark on this extraordinary journey, I am reminded of the words in Surah Ar-Ra'd: "Thus does Allah present the truth and falsehood: the foam vanishes, but that which benefits mankind remains." At TAWASOL, we dedicate ourselves to creating knowledge that remains—knowledge that heals, enlightens, and transforms.</p>
        
        <p>The future of life sciences begins here, at the convergence of human ingenuity and divine inspiration. Welcome to TAWASOL—where consciousness meets quantum reality, and the impossible becomes inevitable.</p>
        
        <p>With unwavering commitment to excellence,</p>
        
        <p><strong>Dr. Ahmed Hassan Al-Mansouri</strong><br>
        Chairman, TAWASOL Life Science Technology Park</p>
    `;
    
    chairmanMessageContainer.innerHTML = message;
}

// Call chairman message loading function
document.addEventListener('DOMContentLoaded', loadChairmanMessage);

// Update copyright year automatically
document.addEventListener('DOMContentLoaded', function() {
    const copyrightYearElement = document.querySelector('.copyright-year');
    if (copyrightYearElement) {
        copyrightYearElement.textContent = new Date().getFullYear();
    }
});
