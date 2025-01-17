var hue1 = 55;
var hue2 = 0;
function bgChange() {
    if (hue1==0 || hue1>=255) {hue1 = 5;}
    else {hue1+=50;}
    document.body.style.backgroundColor = "hsl(" + hue1 + ",100%,80%)";
    document.getElementById("button").style.color = "hsl(" + hue1 + ",100%,80%)";

    if (hue2>=255) {hue2 = 0;}
    else {hue2+=55;}
    var span = document.getElementsByClassName("span");
    var hr = document.getElementsByClassName("hr");
    for (var i=0; i<span.length; i++) {
        span[i].style.color = "hsl(" + hue2 + ",76%,47%)";
    }
    for (var i=0; i<hr.length; i++) {
        hr[i].style.backgroundColor = "hsl(" + hue2 + ",76%,47%)";
    }
    document.getElementById("button").style.background = "hsl(" + hue2 + ",76%,47%)";
}