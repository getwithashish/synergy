// faq.js

document.addEventListener('DOMContentLoaded', function () {
    var categoryLinks = document.querySelectorAll('.cd-faq__category');

    categoryLinks.forEach(function (link) {
        link.addEventListener('click', function (event) {
            event.preventDefault();

            var targetId = link.getAttribute('href').substring(1); // Remove the '#' from the href
            var targetSection = document.getElementById(targetId);

            if (targetSection) {
                // Use smooth scrolling behavior
                targetSection.scrollIntoView({ behavior: 'smooth' });
            }
        });
    });
});
