const toggler = document.querySelector('.navbar-toggler');
    const navCollapse = document.querySelector('#cismrNavbar');

    // Toggle on click
    toggler.addEventListener('click', (e) => {
        e.stopPropagation(); // prevent bubbling to document
        navCollapse.classList.toggle('show');
    });

    // Show on hover
    toggler.addEventListener('mouseenter', () => {
        navCollapse.classList.add('show');
    });

    // Hide when clicking outside
    document.addEventListener('click', (e) => {
        if (!toggler.contains(e.target) && !navCollapse.contains(e.target)) {
            navCollapse.classList.remove('show');
        }
    });