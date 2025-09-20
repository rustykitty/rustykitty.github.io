/**
 * "Transcludes" the content of a page into an HTML element.
 * This function does ZERO input validation, you have been warned.
 * @param {*} url The URL to be loaded
 * @param {*} element The element to load the content into
 */
async function includePage(url, element) {
    if (typeof element === 'string') {
        element = document.getElementById(element);
    }
    const response = await fetch(url);
    element.innerHTML = await response.text();
}

$(document).ready(function () {
    // set external links to open in a new tab
    // https://stackoverflow.com/a/12042162
    $.expr[':'].external = function (obj) {
        return !obj.href.match(/^mailto\:/)
            && (obj.hostname !== location.hostname)
            && !obj.href.match(/^javascript\:/)
            && !obj.href.match(/^$/);
    };
    $('a:external').addClass('external').attr('target', '_blank').attr('rel', 'noopener noreferrer');
});

$(document).ready(function () {
    includePage('/include/header.html', document.querySelector('header'));
    includePage('/include/nav.html', document.querySelector('nav'));
    includePage('/include/footer.html', document.querySelector('footer'));
})

