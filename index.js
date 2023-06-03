const drop = document.querySelector(".dropdown");
function s() {
        drop.style.display = "flex";
  }

  function c() {
        drop.style.display = "none";
}

function showOrHide() {
    if (drop.style.display === "none") {
      s()
    } else {
      c()
    }
  }
let i = 0;
let txt = 'Continue to try, seek help when you get stuck, have fun and you will be rewarded when your code finally works.';
let txt1 = '~ Jacqueline27 (taken from my very first article on Hashnode)';
let speed = 60;
function typeWriter() {
    if (i < txt.length && i < txt1.length) {
        document.getElementById("quote").innerHTML += txt.charAt(i);
        document.getElementById("quote").innerHTML += txt1.charAt(i);
        i++;
        setTimeout(typeWriter, speed);
    }
}

