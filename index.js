$( document ).ready(function() {
    // set external links to open in a new tab
    // https://stackoverflow.com/a/12042162
    $.expr[':'].external = function(obj) {
    return !obj.href.match(/^mailto\:/)
           && (obj.hostname !== location.hostname)
           && !obj.href.match(/^javascript\:/)
           && !obj.href.match(/^$/);
    };
    $('a:external').addClass('external').attr('target', '_blank').attr('rel','noopener noreferrer');
});
