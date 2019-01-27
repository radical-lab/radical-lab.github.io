// https://www.dforge.net/2014/03/12/javascript-and-regex-removing-trailing-pound-and-slash-from-the-url/
// https://stackoverflow.com/a/12446376
window.history.pushState('', '', window.location.href.replace(/\/$/, ''));

// https://stackoverflow.com/a/260876
(function() {
    var logo  = document.createElement('link');
    logo.rel  = 'icon';
    logo.type = 'image/svg+xml';
    logo.href = '/favicon.svg';
    document.getElementsByTagName('head')[0].appendChild(logo);
})();
