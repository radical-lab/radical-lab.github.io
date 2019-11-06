// https://www.dforge.net/2014/03/12/javascript-and-regex-removing-trailing-pound-and-slash-from-the-url/
// https://stackoverflow.com/a/12446376
window.history.pushState('', '', window.location.href.replace(/\/$/, ''));

// http://www.p01.org/releases/DEFENDER_of_the_favicon/
// https://stackoverflow.com/a/260876
(function() {
    var logo  = document.createElement('link');
    logo.rel  = 'icon';
    logo.type = 'image/svg+xml';
    logo.href = '/favicon.svg';
    document.getElementsByTagName('head')[0].appendChild(logo);
    var meta     = document.createElement('meta');
    meta.charset = 'utf-8';
    document.getElementsByTagName('head')[0].appendChild(meta);
})();

// https://stackoverflow.com/a/16625864
// https://stackoverflow.com/a/23007856
document.addEventListener('DOMContentLoaded', function(event) {
    document.body.style.backgroundColor = 'black';
    document.body.style.color = 'white';
    // https://en.wikipedia.org/wiki/Box-drawing_character
    // https://en.wikipedia.org/wiki/Block_Elements
    // https://medium.com/@chuckdries/traversing-the-dom-with-filter-map-and-arrow-functions-1417d326d2bc
    Array.prototype.map.call(document.getElementsByClassName('monocodært'), x => {x.style.lineHeight = '1'});
	 try {
		  var home = document.getElementById('homeoraknalirs');
		  home.href = Math.random() < 0.5? 'file:///': '/';
		  home.innerHTML = '\\o/';
	 } catch(up) {}
});