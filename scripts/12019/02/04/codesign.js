//jshint esversion: 6
//jshint laxcomma: true
document.addEventListener('DOMContentLoaded', function(event) {
	wtf = document.createElement('pre');
	wtf.class='monocodært';
	wtf.id='mockup';
	wtf.style.lineHeight = '1';
	document.body.appendChild(wtf);

	tr_corner = '┐';
	tl_corner = '┌';
	br_corner = '┘';
	bl_corner = '└';
	h__border = '─';
	v__border = '│';
	t_intersection = '┬';
	l_intersection = '├';
	r_intersection = '┤';
	b_intersection = '┴';

	t_line = x => [tl_corner     , ...Array(x-4).fill(h__border), t_intersection, h__border, tr_corner     ];
	m_line = x => [l_intersection, ...Array(x-4).fill(h__border), b_intersection, h__border, r_intersection];
	b_line = x => [bl_corner     , ...Array(x-2).fill(h__border)                           , br_corner     ];

	ffs = () => window.history.pushState('','',window.location.href.replace(/#$/,''));

	logo = '<a title="goto home" href="/">√</a>';
	scrollup = '<a title="goto top" href="#" onclick="_s=0;init(_x,_y,_s);window.setTimeout(ffs,50);">↑</a>';
	toc = '<a title="goto #table_of_contents" href="#" onclick="_s=3;init(_x,_y,_s);window.setTimeout(ffs,50);">#</a>';
	about = '<a title="goto about" href="/about");">?</a>';
	contribute = '<a title="goto contribute" href="https://github.com/radical-lab">!</a>';
	donate = '<a title="goto donate" href="/donate">$</a>';
	contact = '<a title="goto contact" href="mailto:shyam@shyam.id.au?Subject=√…">@</a>';
	esc = '<a title="goto escape" href="javascript:alert(\'shut the window yourself and go complain to the world that windows should be able to shut themselves\');">⍉</a>'; // close tab/window
	l_bar = [v__border, ' ', logo, ' ', scrollup, ' ', toc];
	r_bar = [about, ' ', contribute, ' ', donate, ' ', contact, ' ', esc, ' ', v__border];
	task_bar = x => [...l_bar, ...Array(x-l_bar.length-r_bar.length).fill(' '), ...r_bar, ' ← sinistrodextral precedence'];

	_x = 42;
	_y = 20;
	_s = 9;

	_txt_tbl = '(ノಠ益ಠ)ノ彡┻━┻';
	_txt_tbl_ = (x,y) => '<a href="#" onclick="_s='+y+';init(_x,_y,_s);window.setTimeout(ffs,50);">'+x+'</a>';
	_txt_tbl0 = '0ᵗʰ ┳━┳ topside';
	_txt_tbl1 = '1ˢᵗ ┳━┳ tableside';
	_txt_tbl2 = '2ⁿᵈ ┳━┳ bestside';
	_txt_tbl3 = '3ʳᵈ ┳━┳ awoogaside';
	shyam = 'please give <a href="mailto:shyam@shyam.id.au?Subject=SHUT%20UP%20AND%20TAKE%20MY%20MONEY!">shyam@shyam.id.au</a> an open ';
	_txt = [
		'CLICKBAITZ!!!!!!!!! :D'
		, '----------------------'
		, ''
		, _txt_tbl
		, _txt_tbl_(_txt_tbl0,0)
		, _txt_tbl_(_txt_tbl1,3)
		, _txt_tbl_(_txt_tbl2,9)
		, _txt_tbl_(_txt_tbl3,15)
		, ''
		, 'BESTPRACTICES'
		, 'information should be precedential.   '
		, 'layout should be precedential.        '
		, 'linguistic style determines user inter'
		, 'face.                                 '
		, 'mouse wheel orientation determines the'
		, 'scrollbar orientation.                '
		, 'percentages for the scalability.      '
		, 'creativivity for the layouts.         '
		, 'originality for the win.              '
		, 'open source front end because it is al'
		, 'ready open source you phb.            '
		, shyam
		, 'source job as a front end java script '
		, 'hacker (or better) without requiring a'
		, ' non disclosure agreement.            '
		, ''
		, 'AWOOGAAWOOGAAWOOGAAWOOGAAWOOGAAWOOGA  '
		, 'this mockup is sinistrodextrally top  '
		, 'down oriented and may attract severe  '
		, 'medical bugs if any problems persist  '
		, 'do the harlem shake and shake it out  '
	];

	txt = (x,y) => Array(y).fill().map(e => [v__border, ...Array(x-4).fill(' '), v__border, ' ', v__border]);
	con = (l,s) => {
		a = _txt.slice(s,s+16);
		[...Array(16).keys()].map(e => l[e].splice(1,a[e]==_txt_tbl?a[e].length+2:a[e]==_txt_tbl_(_txt_tbl0,0)?_txt_tbl0.length:a[e]==_txt_tbl_(_txt_tbl1,3)?_txt_tbl1.length:a[e]==_txt_tbl_(_txt_tbl2,9)?_txt_tbl2.length:a[e]==_txt_tbl_(_txt_tbl3,15)?_txt_tbl3.length:a[e]==shyam?'please give shyam@shyam.id.au an open '.length:a[e].length,...a[e]));
		return l;
	};
	scroll = (l,x) => {l[x][l[x].length-2] = '█'; return l;};
	_ui = 4;
	ui = (x,y,s) => [t_line(x), ...scroll(con(txt(x,y-_ui),s),s), m_line(x), task_bar(x), b_line(x), ['\nuse the up and down arrow keys to scroll ↑']];
	flat = x => x.map(e => e.join('')).join('\n');
	init = (x,y,z) => document.getElementById('mockup').innerHTML = flat(ui(x, y, z));
	init(_x,_y,_s);
	render = (e) => init(_x, _y, e.keyCode==40&&_s<_y-_ui-1?++_s:e.keyCode==38&&0<_s?--_s:_s);
	document.body.addEventListener('keydown', render);
});
