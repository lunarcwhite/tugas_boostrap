AOS.init();
window.addEventListener('DOMContentLoaded', event => {

    const sideNav = document.body.querySelector('#nav');
    if (sideNav) {
        new bootstrap.ScrollSpy(document.body, {
            target: '#nav',
            offset: 74,
        });
    };

    const navbarToggler = document.body.querySelector('.navbar-toggler');
    const responsiveNavItems = [].slice.call(
        document.querySelectorAll('#navbarResponsive .nav-link')
    );
    responsiveNavItems.map(function(responsiveNavItem) {
        responsiveNavItem.addEventListener('click', () => {
            if (window.getComputedStyle(navbarToggler).display !== 'none') {
                navbarToggler.click();
            }
        });
    });

});