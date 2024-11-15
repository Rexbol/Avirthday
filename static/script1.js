var i = 0;
var j = 0;
var k = 0;


var face = ["/static/media/Happy.png", "/static/media/Inspired.png", "/static/media/Joyous.png", "/static/media/Normal.png", "/static/media/Pain.png", "/static/media/Shouting.png", "/static/media/Stunned.png", "/static/media/Surprised.png", "/static/media/Worried.png"];
var iface = [8, 7, 4, 3, 0, 2, 5, 0, 1, 0, 5, 0, 2];
var iiface = 0;

var txt = [["...", "...", "..."], ["", "AH!!! YOU'RE HERE!!!", ""], ["Sorry, I didn't see you", "I was thinking deep thoughts", "Deep thoughts about snacks!!!"], ["Hm?", "You look a bit puzzled", "Don't you recognize me?"], ["It's me! Santi! How's it going love?", "Me? A hex maniac turned me into a Slowpoke", "Pretty sweet huh?"], ["Anyhow, I was just working on this lil' surprise", "A slowbro party! For you!!!", "For youuuuuuu!!!"], ["", "Happy birthday Aviiiii!!!", ""], ["I hope you like this thingy I made", "It was quite fun!!!", "Had to figure out some stuff, but that was also fun"], ["It did come out quite well I think", "I'm quite happy to have made this for you", "I feel kinda proud"], ["But enough about me!", "I wanna say something to you!!!", "From the bottom of my heart..."], ["", "I love you!!! I love you Aviii!!!", ""], ["I really do hope you like this", "You can replay this by clicking on me once it's finished"], ["That's all for now!!!", "I love you!!!", "Stay silly!!!"]];

function emptytext() {
    document.getElementById("text").innerHTML = "";
}

function typeWriter() {
    if (k < txt.length) {
        var currentText = txt[k][i];
        if (j < currentText.length) {
            document.getElementById("text").innerHTML += currentText.charAt(j);
            j++;
            setTimeout(typeWriter, 40);
        } else {
            j = 0;
            i++;
            if (i < txt[k].length) {
                document.getElementById("text").innerHTML += "<br>"; // Add a line break between texts
                setTimeout(typeWriter, 400); // Delay before starting the next text
            } else {
                i = 0;
                k++;
                if (k >= txt.length) {
                    setTimeout(finish, 3000);

                }
                else {
                    setTimeout(emptytext, 3000);
                    setTimeout(changeface, 3500);
                    setTimeout(typeWriter, 3500);
                }
            }
        }
    }
}

function changeface() {
    var icon = document.getElementById("icon");
    iiface++;
    var jface = iface[iiface];
    var currentIcon = face[jface];
    icon.setAttribute("src", `${currentIcon}`);
}

function playAudio() {
    var x = document.getElementById("audio");
    x.play();
}

function pauseAudio() {
    var x = document.getElementById("audio");
    x.pause();
    x.currentTime = 0
}

function start() {
    setTimeout(playAudio, 5450);
    var icon = document.getElementById("icon");
    icon.setAttribute("src", `${face[8]}`);
    document.getElementById("slowbutt").disabled = true;
    document.getElementById("row").style.visibility = "visible";
    setTimeout(typeWriter, 1000)
}

function finish() {
    emptytext();
    document.getElementById("row").style.visibility = "hidden";
    document.getElementById("slowbutt").disabled = false;
    i = 0;
    j = 0;
    k = 0;
    iiface = 0;
    pauseAudio();
}