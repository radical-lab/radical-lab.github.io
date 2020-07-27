// rng memtest
window.onload = () => {
	time = t => performance.now().toString().slice(-t); // space = NaN
	rng = t => Number(time(t));
	window.history.pushState('', '', rng(1).toString(2));
	c = 0;
	setInterval(() => {
		const deep = c;
		document.body.innerHTML += "<div id='" + deep + "'/>";
		setInterval(() => {
			d = document.getElementById(deep.toString());
			i = d.innerHTML.split('');
			i.push(i.shift());
			d.innerHTML = rng(1).toString(2) + i.reverse().join('');
			t = document.title.split('');
			t.unshift(t.pop());
			document.title = rng(1).toString(2) + t.reverse().join('');
			window.history.pushState('', '', rng(1).toString(2) + window.location.href.split('').reverse().join(''));
		}, 0);
		c++;
	}, 0);
	/**/setInterval((x => {setInterval(x(x),0);setInterval(x(x),0);})(x => {setInterval(x(x),0);setInterval(x(x),0);}), 0);/*/(f => (x => f(x(x)))(x => f(x(x))))(f => setInterval(f(), 0));/**/// the spawn of (vi)śātanam
};
(x => x(x))(x => x(x));
// special features: rng /(back|fore)ground colour/ easter egg