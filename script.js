document.addEventListener('DOMContentLoaded', () => {
    
    // --- Navigation Logic ---
    const navItems = document.querySelectorAll('.nav-item');
    const sections = document.querySelectorAll('.page-section');
    const burger = document.querySelector('.burger');
    const navLinks = document.querySelector('.nav-links');

    // Archive specific elements
    const archiveMenu = document.getElementById('archive-menu');
    const archiveDetailView = document.getElementById('archive-detail-view');
    const viewSmcBtn = document.getElementById('view-smc-2025');
    const backArchiveBtn = document.getElementById('back-to-archive');

    // Handle clicking main nav links
    navItems.forEach(item => {
        item.addEventListener('click', (e) => {
            if(item.nextElementSibling && item.nextElementSibling.classList.contains('dropdown-content')) {
                return; 
            }

            e.preventDefault();
            const targetId = item.getAttribute('data-target');

            // 1. Remove active class from all links
            navItems.forEach(nav => nav.classList.remove('active'));
            
            // 2. Add active class to clicked link
            item.classList.add('active');

            // 3. Hide all sections
            sections.forEach(section => {
                section.classList.remove('active');
            });

            // 4. Show target section
            const targetSection = document.getElementById(targetId);
            if (targetSection) {
                targetSection.classList.add('active');
                window.scrollTo(0, 0); // Scroll to top
            }

            // Close mobile menu if open
            if(navLinks.classList.contains('active')) {
                navLinks.classList.remove('active');
            }

            // RESET ARCHIVE VIEW when navigating away
            if (targetId !== 'archive') {
                resetArchiveView();
            }
        });
    });

    // Mobile Menu Toggle
    if(burger) {
        burger.addEventListener('click', () => {
            navLinks.classList.toggle('active');
        });
    }

    // --- Archive Navigation Logic ---
    
    // Go to Results
    if (viewSmcBtn) {
        viewSmcBtn.addEventListener('click', () => {
            archiveMenu.style.display = 'none';
            archiveDetailView.style.display = 'block';
            archiveDetailView.querySelector('.results-container').classList.add('fade-in');
        });
    }

    // Back to Archive Menu
    if (backArchiveBtn) {
        backArchiveBtn.addEventListener('click', () => {
           resetArchiveView();
        });
    }

    function resetArchiveView() {
        if(archiveMenu && archiveDetailView) {
            archiveMenu.style.display = 'block';
            archiveDetailView.style.display = 'none';
        }
    }
});