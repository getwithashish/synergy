function scrollToElement(elementID) {
    var element = document.getElementById(elementID);
    if (element) {
        element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
}



// Add click event listeners to category links
document.addEventListener('DOMContentLoaded', function () {
    var categoryLinks = document.querySelectorAll('.cd-faq__categories a');
    categoryLinks.forEach(function (link) {
        link.addEventListener('click', function (event) {
            event.preventDefault();
            var targetId = this.getAttribute('href').substring(1); // Remove the '#' symbol
            scrollToElement(targetId);
        });
    });
});