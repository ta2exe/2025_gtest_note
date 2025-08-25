// Main JavaScript functionality

function openMenu() {
    document.getElementById('menuOverlay').style.display = 'block';
    document.body.style.overflow = 'hidden';
}

function closeMenu() {
    document.getElementById('menuOverlay').style.display = 'none';
    document.body.style.overflow = 'auto';
}

// Close menu when clicking outside
document.addEventListener('DOMContentLoaded', function() {
    const menuOverlay = document.getElementById('menuOverlay');
    if (menuOverlay) {
        menuOverlay.addEventListener('click', function(e) {
            if (e.target === this) {
                closeMenu();
            }
        });
    }

    // Close menu with Escape key
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape') {
            closeMenu();
        }
    });

    // Smooth scrolling for TOC links
    document.querySelectorAll('.toc-link').forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href').substring(1);
            const targetElement = document.getElementById(targetId);
            if (targetElement) {
                targetElement.scrollIntoView({ behavior: 'smooth' });
                
                // Update active TOC item
                document.querySelectorAll('.toc-link').forEach(l => l.classList.remove('active'));
                this.classList.add('active');
            }
        });
    });

    // Update active TOC item on scroll
    window.addEventListener('scroll', updateActiveTocItem);
});

function updateActiveTocItem() {
    const headings = document.querySelectorAll('.content h1, .content h2, .content h3');
    const tocLinks = document.querySelectorAll('.toc-link');
    
    let activeHeading = null;
    const scrollPosition = window.scrollY + 100; // Offset for header
    
    headings.forEach(heading => {
        if (heading.offsetTop <= scrollPosition) {
            activeHeading = heading;
        }
    });
    
    if (activeHeading) {
        const activeId = activeHeading.getAttribute('id');
        tocLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href') === '#' + activeId) {
                link.classList.add('active');
            }
        });
    }
}