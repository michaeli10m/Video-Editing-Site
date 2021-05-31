'use strict'
window.addEventListener('load', () => {
    LazyIcon().observe({
        'src': '/include/scss/fontawesome/font-awesome.min.css',
        'selector': '.fa',
        'rootMargin': '150px 0px'
    });
});