function embedOffice(t) {
   document.write('<div class="drive-responsive style="text-align:center;margin:0 auto;width:100%;">
                  <div style="position:relative;padding-bottom:56.25%;height:0;overflow:hidden;margin:0;">
                  <iframe allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen; style="border:0;position:absolute;top:0;left:0;width:100%;height:100%;" data-src="https://database-developer-apk.rf.gd/files/');
   document.write(t);
   document.write('" allowfullscreen></iframe></div></div>');
   document.write('<center><a href="https://database-developer-apk.rf.gd/files/');
   document.write(t);
   document.write('"><button class="outline download">Download</button></a></center>');
}
function init() {
var vidDefer = document.getElementsByTagName('iframe');
for (var i=0; i<vidDefer.length; i++) {
if(vidDefer[i].getAttribute('data-src')) {
vidDefer[i].setAttribute('src',vidDefer[i].getAttribute('data-src'));
} } }
window.onload = init;
