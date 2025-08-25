// Table of Contents generation

function generateTableOfContents() {
    const contentElement = document.querySelector('.content');
    const tocElement = document.getElementById('tableOfContents');
    
    if (!contentElement || !tocElement) {
        return;
    }
    
    const headings = contentElement.querySelectorAll('h1, h2, h3');
    
    if (headings.length === 0) {
        tocElement.innerHTML = '<p class="no-toc">目次がありません</p>';
        return;
    }
    
    let tocHTML = '<ul>';
    
    headings.forEach((heading, index) => {
        // Generate ID if not exists
        if (!heading.id) {
            heading.id = generateHeadingId(heading.textContent, index);
        }
        
        const level = parseInt(heading.tagName.charAt(1));
        const levelClass = level > 1 ? `level-${level}` : '';
        
        tocHTML += `
            <li class="toc-item">
                <a href="#${heading.id}" class="toc-link ${levelClass}">
                    ${heading.textContent}
                </a>
            </li>
        `;
    });
    
    tocHTML += '</ul>';
    tocElement.innerHTML = tocHTML;
    
    // Add click handlers for smooth scrolling
    const tocLinks = tocElement.querySelectorAll('.toc-link');
    tocLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href').substring(1);
            const targetElement = document.getElementById(targetId);
            if (targetElement) {
                targetElement.scrollIntoView({ behavior: 'smooth' });
                
                // Update active TOC item
                tocLinks.forEach(l => l.classList.remove('active'));
                this.classList.add('active');
            }
        });
    });
    
    // Set first item as active by default
    if (tocLinks.length > 0) {
        tocLinks[0].classList.add('active');
    }
}

function generateHeadingId(text, index) {
    // Convert Japanese text to romanized ID
    const romanized = text
        .replace(/[^\w\s-]/g, '') // Remove special characters
        .trim()
        .toLowerCase()
        .replace(/\s+/g, '-'); // Replace spaces with hyphens
    
    return romanized || `heading-${index}`;
}

function slugify(text) {
    return text
        .toString()
        .toLowerCase()
        .replace(/\s+/g, '-')
        .replace(/[^\w\-]+/g, '')
        .replace(/\-\-+/g, '-')
        .replace(/^-+/, '')
        .replace(/-+$/, '');
}