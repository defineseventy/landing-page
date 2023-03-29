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
