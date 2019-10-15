function resize() {
	document.body.style.width = window.innerWidth+'px';
	document.body.style.height = window.innerHeight+'px';
}
document.addEventListener('DOMContentLoaded', function(event) {
	resize();
	document.body.style.overflow = 'hidden';
	document.body.style.cursor = 'none';
	document.body.addEventListener("click", ()=>document.body.requestPointerLock(), false); // s/click/mousemove
	// TODO /catch|disable/ /\esc|any browser shortcuts to close (tabs|windows)|any window manager shortcuts to (close browser|reboot|unplug|power off|change channels)/
});
window.addEventListener("resize", resize, false);
// the dereference of this pointer is inline.css.js
alert("fullscreen the window yourself and go complain to the world that windows should be able to fullscreen themselves");
// now it is t time
var t = new Date();
// rescheduling t time to <span> the rest of the /day|night/ until some midpoint; excluding /mid((mou?rn|odd)|(even|bir?th?))ing/
t.setHours(t.getHours() < 12? 12: 24);
t.setMinutes(0);
t.setSeconds(0);
t.setMilliseconds(0);
// do this at t time
setTimeout(()=>{document.body.exitPointerLock();alert("while it is true the display is currently blank this emptyness has a poetic meaning therefore it cannot be considered nothing as such and you are encouraged to fully acknowledge the emptyness of the experience but are you certain you do not wish to talk about your mother as i am a mock rogerian psychotherapist \\escvxﬄM thmbz arfgﬁ odwkﬂY ilyqﬀ nupjﬃW");}, t.getTime() - Date.now());
