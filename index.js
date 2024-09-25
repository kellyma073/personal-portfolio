$(".girl").click(function() {
    $(".dialogue").text("“Hello! I'm Kelly, a Computer Science student at the University of California, Riverside.\"")
});

$(".headphones").click(function() {
    $(".dialogue").html("“My beloved headphones!! I love music. I’ve played the clarinet and guitar. Currently, my favorite song is <a target='_blank' href='https://www.youtube.com/watch?v=T6QKqFPRZSA'>‘Doo Wop (That Thing)’</a> by Ms. Lauryn Hill.”")
});

$(".laptop").click(function() {
    $(".dialogue").text("“I use my MacBook for coding projects, watching anime/k-dramas/movies, and playing RPGs.”")
});

$(".cat").click(function() {
    $(".dialogue").text("“My aunt and I found a stray kitten in Monterey Park and took him in. His name is Monty. He’s a really affectionate lil guy.”")
});

$(".book").click(function() {
    $(".dialogue").html('“Pride and Prejudice is my favorite book. I have soooo much to say about it. In fact, read my analysis of the novel <a target="_blank" href="misc/Kelly Ma - Book Analysis_ Pride and Prejudice.pdf">HERE</a> !!”');
});

$(".winc").click(function() {
    $(".screen1").html('<div class="topic">Women in Computing Website</div><div class="thin">React.js, Next.js, Tailwind CSS, GitHub</div><div class="thin">October 2023 - December 2023</div>');
    $(".screen2").html('<li>Collaborated with team of 8 developers to construct static site generation Next.js website for displaying club information</li><li><p class="gray-space">Eliminated codebase redundancy by 250 lines</p> by developing map data structure and mapping algorithm that converts club event metadata into a React component</li>');
    $(".screen3").html('<ul><li>Created <p class="gray-space">reusable components</p>, such as modal and picture frame, to streamline display of event details and images</li><li>Attended weekly scrum meetings to assign action items and address issues such as <p class="gray-space">responsiveness</p> on mobile devices</li></ul><a target="_blank" href="https://winc.cs.ucr.edu/"><img class="www" src="misc/www.png"/></a><a target="_blank" href="https://github.com/acm-ucr/winc-website"><img class="www" src="contact/gitcat.png"/></a>');
});

$(".hsp").click(function() {
    $(".screen1").html('<div class="topic">Highlander Space Program</div><div class="thin">React.js, Next.js, Tailwind CSS, GitHub</div><div class="thin">January 2024 - March 2024</div>');
    $(".screen2").html('<li>Coordinated with team of 9 developers to construct static site generation Next.js website for presenting club information</li><li>Integrated component to showcase contact information and social media links in the footer of all webpages</li>');
    $(".screen3").html('<ul><li>Mapped text and images on pages describing the club’s various projects and initiatives</li></ul><a target="_blank" href="https://hsp.ucrhighlanders.org/"><img class="www" src="misc/www.png"/></a><a target="_blank" href="https://github.com/acm-ucr/hsp-website"><img class="www" src="contact/gitcat.png"/></a>');
});

$(".qwer").click(function() {
    $(".screen1").html('<div class="topic">Daily Dose</div><div class="thin">React.js, Next.js, Tailwind CSS, GitHub</div><div class="thin">February 2024</div>');
    $(".screen2").html('<li>Developed web app alongside 3 teammates that enables users to send time capsules to themselves in the future</li><li>Won <p class="gray-space">Best Beginner</p> and <p class="gray-space">Best Use of MongoDB</p> for Major League Hacking’s QWERHacks @ UCLA</li><li>My first hackathon :)</li>');
    $(".screen3").html('<img class="team" src="misc/qwerteam.jpeg"/><div class="caption">I couldn’t make it to the closing ceremony, so I’m not in this picture… but look at how adorable my team is!!!!</div><a target="_blank" href="https://devpost.com/software/daily-dose-7ks69p"><img class="www" src="misc/devpost.jpg"/></a><a target="_blank" href="https://github.com/NotALobster/daily-dose"><img class="www" src="contact/gitcat.png"/></a>');
});

$(".bear").click(function() {
    $(".screen1").html('<div class="topic">BearCare</div><div class="thin">React.js, Next.js, Tailwind CSS, GitHub</div><div class="thin">April 2024</div>');
    $(".screen2").html('<li>Developed a web app alongside 3 teammates aimed at simplifying the process of locating local hospitals covered by specific insurance providers during emergencies</li><li>Created for BearHack @ UCR</li>');
    $(".screen3").html('<img class="team" src="misc/bearteam.jpeg"/><div class="caption">Me, my team, and our project at judging !!</div><a target="_blank" href="https://devpost.com/software/bearcare-18lzch"><img class="www" src="misc/devpost.jpg"/></a><a target="_blank" href="https://github.com/aditithanekar/bearhack"><img class="www" src="contact/gitcat.png"/></a>');
});

var song = new Audio("music/sakuragirl.mp3");
var isPlaying = false;

$(".play").click(function() {
    if (isPlaying) {
        song.pause();
        $(".play").attr("src", "misc/play.png");
        isPlaying = false;
    } 
    else {
        song.play();
        $(".play").attr("src", "misc/pause.png");
        isPlaying = true;
    }
});

// code below is from https://pastebin.com/cYaZamTx

var b = document.body;
var imgurl = "misc/fairydust.png";
var size = [20, 30];
 
function rand(min, max) {
return Math.floor(Math.random() * (max - min + 1) + min)
}
 
function getSize() {
return rand(size[0], size[1]);
}
 
function lerp(a, b, f) {
return(b - a) * f + a;
}
 
function heart(x, y) {
var s = getSize();
x -= s / 2;
y -= s / 2;
x = Math.floor(x) + rand(-5, 5);Math.floor(x) + rand(-5, 5);
y = Math.floor(y) + rand(-5, 5);
var fx = x + rand(-40, 40);
var fy = y + rand(-40, 40);
var i = document.createElement("img");
i.src = imgurl;
i.style = `pointer-events: none; position: fixed; width: ${s}px; left: ${x}px; top: ${y}px; -webkit-touch-callout: none; -webkit-user-select: none; -khtml-user-select: none; -moz-user-select: none; -ms-user-select: none; user-select: none; z-index: 1000000;`;
b.appendChild(i);
var f = 0;
var interval;
interval = setInterval(function() {var _x = Math.floor(lerp(x, fx, f));
var _y = Math.floor(lerp(y, fy, f));
i.style = `pointer-events: none; position: fixed; width: ${s}px; left: ${_x}px; top: ${_y}px; -webkit-touch-callout: none; -webkit-user-select: none; -khtml-user-select: none; -moz-user-select: none; -ms-user-select: none; user-select: none; z-index: 1000000;`;
i.style.opacity = 1 - f;
f += 0.01;
if(f > 1) {
clearInterval(interval);
b.removeChild(i);
}
}, 10);
}
 
function bro(x, y) {
for(var i = 0; i < 5; i++) {
heart(x, y);
}
}
b.addEventListener("click", function(event) {
var x = event.clientX;
var y = event.clientY;
bro(x, y);
});

var myIndex = 0;
carousel();
 
function carousel() {
var i;
var x = document.getElementsByClassName("mySlides");
for(i = 0; i < x.length; i++) {
x[i].style.display = "none";
}
myIndex++;
if(myIndex > x.length) {
myIndex = 1
}
x[myIndex - 1].style.display = "block";
setTimeout(carousel, 2000);
}