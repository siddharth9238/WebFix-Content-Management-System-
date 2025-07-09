document.addEventListener('DOMContentLoaded', function() {
    const signInBtn = document.querySelector('a[href="#signin"]');
    const signUpBtn = document.querySelector('a[href="#signup"]');
    const signInForm = document.getElementById('signin-form');
    const signUpForm = document.getElementById('signup-form');
    const templatesLink = document.getElementById('templates-link');
    const templatesSubmenu = document.querySelector('.templates-submenu');
    const templatesSection = document.getElementById('templates-section');
    const postsLink = document.getElementById('posts-link');
    const postsSubmenu = document.querySelector('.posts-submenu');
    const postsSection = document.getElementById('posts-section');

    if (signInBtn && signUpBtn && signInForm && signUpForm) {
        signInBtn.addEventListener('click', function(e) {
            e.preventDefault();
            signInForm.style.display = 'block';
            signUpForm.style.display = 'none';
        });
        signUpBtn.addEventListener('click', function(e) {
            e.preventDefault();
            signInForm.style.display = 'none';
            signUpForm.style.display = 'block';
        });
        // Default: show sign in, hide sign up
        signInForm.style.display = 'block';
        signUpForm.style.display = 'none';
    }

    if (templatesLink && templatesSubmenu && templatesSection) {
        templatesLink.addEventListener('click', function(e) {
            e.preventDefault();
            const isVisible = templatesSubmenu.style.display === 'block';
            templatesSubmenu.style.display = isVisible ? 'none' : 'block';
            templatesSection.style.display = isVisible ? 'none' : 'block';
        });
    }

    if (postsLink && postsSubmenu && postsSection) {
        postsLink.addEventListener('click', function(e) {
            e.preventDefault();
            const isVisible = postsSubmenu.style.display === 'block';
            postsSubmenu.style.display = isVisible ? 'none' : 'block';
            postsSection.style.display = isVisible ? 'none' : 'block';
        });
    }
}); 