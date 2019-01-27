window.history.pushState('','',window.location.href.replace(/\/$/,''));
(function() {
    var logo = document.createElement('link');
    logo.rel = 'icon';
    logo.type = 'image/svg+xml';
    logo.href = '/favicon.svg';
    document.getElementsByTagName('head')[0].appendChild(logo);
})();
