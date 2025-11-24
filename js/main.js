// Main JavaScript for TAWASOL Life Science Technology Park Website

// Wait for DOM to be fully loaded
document.addEventListener('DOMContentLoaded', function() {
    // Mobile Navigation Toggle
    const hamburger = document.querySelector('.hamburger');
    const navLinks = document.querySelector('.nav-links');
    
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
                window.scrollTo({
                    top: targetElement.offsetTop - 80,
                    behavior: 'smooth'
                });
                
                // Close mobile menu if open
                if (navLinks.classList.contains('active')) {
                    navLinks.classList.remove('active');
                    hamburger.classList.remove('active');
                }
            }
        });
    });
    
    // Chairman's Message Modal
    const modal = document.getElementById('chairmanModal');
    const btn = document.getElementById('read-more-chairman');
    const span = document.getElementsByClassName('close')[0];
    
    if (btn && modal && span) {
        btn.addEventListener('click', function() {
            modal.style.display = 'block';
            document.body.style.overflow = 'hidden'; // Prevent scrolling
        });
        
        span.addEventListener('click', function() {
            modal.style.display = 'none';
            document.body.style.overflow = 'auto'; // Enable scrolling
        });
        
        window.addEventListener('click', function(event) {
            if (event.target == modal) {
                modal.style.display = 'none';
                document.body.style.overflow = 'auto'; // Enable scrolling
            }
        });
    }
    
    // Form submission handling
    const contactForm = document.getElementById('contactForm');
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Get form values
            const name = document.getElementById('name').value;
            const email = document.getElementById('email').value;
            const subject = document.getElementById('subject').value;
            const message = document.getElementById('message').value;
            
            // Here you would typically send the form data to a server
            // For now, we'll just show an alert
            alert(`Thank you, ${name}! Your message has been received. We will contact you at ${email} shortly.`);
            
            // Reset the form
            contactForm.reset();
        });
    }
    
    // Animate elements on scroll
    const animateOnScroll = function() {
        const elements = document.querySelectorAll('.fade-in');
        
        elements.forEach(element => {
            const elementPosition = element.getBoundingClientRect().top;
            const screenPosition = window.innerHeight / 1.3;
            
            if (elementPosition < screenPosition) {
                element.classList.add('active');
            }
        });
    };
    
    // Add fade-in class to elements that should animate
    const addFadeInClass = function() {
        const sections = [
            '.about-content', '.key-facts .fact', 
            '.vision-card', '.component-card', 
            '.timeline-item', '.platform-card', 
            '.impact-card', '.network-stats .stat'
        ];
        
        sections.forEach(section => {
            document.querySelectorAll(section).forEach((element, index) => {
                element.classList.add('fade-in');
                element.style.transitionDelay = `${index * 0.1}s`;
            });
        });
    };
    
    // Initialize animations
    addFadeInClass();
    window.addEventListener('scroll', animateOnScroll);
    animateOnScroll(); // Initial check
    
    // Dynamic copyright year
    const yearSpan = document.querySelector('.copyright-year');
    if (yearSpan) {
        yearSpan.textContent = new Date().getFullYear();
    }
    
    // Navbar scroll effect
    const nav = document.querySelector('nav');
    window.addEventListener('scroll', function() {
        if (window.scrollY > 100) {
            nav.classList.add('scrolled');
        } else {
            nav.classList.remove('scrolled');
        }
    });
});

// Simulated database connection for demonstration
class DatabaseConnection {
    constructor() {
        this.connected = false;
        this.data = null;
    }
    
    connect() {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                console.log('Database connected successfully');
                this.connected = true;
                resolve(true);
            }, 1000);
        });
    }
    
    fetchData(collection) {
        return new Promise((resolve, reject) => {
            if (!this.connected) {
                reject('Database not connected');
                return;
            }
            
            setTimeout(() => {
                // Simulated data based on collection name
                let data;
                
                switch(collection) {
                    case 'platforms':
                        data = [
                            {
                                name: 'Telemedicine Hub',
                                url: 'https://dyh6i3c9o0ll.manus.space',
                                description: 'Connecting patients with healthcare professionals through AI-powered assistance',
                                features: ['AI Medical Assistant', 'Video Consultations', 'Multilingual Support', 'Health Monitoring']
                            },
                            {
                                name: '3D Globe Visualization',
                                url: 'https://iptddxkj.manus.space',
                                description: 'Interactive 3D Earth visualization showing TELsTP\'s global network of research hubs',
                                features: ['3D Earth Visualization', 'Global Hub Mapping', 'Interactive Navigation', 'Partnership Network']
                            },
                            {
                                name: 'M2-3M Research System',
                                url: 'https://qjh9iec5vx5p.manus.space',
                                description: 'Advanced research assistant connecting to 47+ global institutions',
                                features: ['47+ Global Institutions', '47.3 TB Research Database', '94% AI Prediction Accuracy', 'Real-time Knowledge Updates']
                            }
                        ];
                        break;
                    case 'partners':
                        data = [
                            { name: 'Harvard Medical School', country: 'USA', type: 'Academic' },
                            { name: 'Max Planck Institute', country: 'Germany', type: 'Research' },
                            { name: 'Singapore Biopolis', country: 'Singapore', type: 'Innovation Hub' },
                            { name: 'Cairo University', country: 'Egypt', type: 'Academic' },
                            { name: 'Johnson & Johnson', country: 'USA', type: 'Industry' }
                        ];
                        break;
                    default:
                        data = [];
                }
                
                this.data = data;
                resolve(data);
            }, 500);
        });
    }
}

// Initialize database connection
const db = new DatabaseConnection();
db.connect()
    .then(() => {
        return db.fetchData('platforms');
    })
    .then(platforms => {
        console.log('Platforms data loaded:', platforms);
        // Here you would typically update the UI with this data
    })
    .catch(error => {
        console.error('Database error:', error);
    });
