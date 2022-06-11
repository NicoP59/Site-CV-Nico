var lienEcran = document.querySelectorAll(".lien-pour-js");

lienEcran.forEach((element) => {
  element.addEventListener("click", affichage);
});

allDiv = document.querySelectorAll("div");
allSection = document.querySelectorAll("section");

var open_close = false;

var nav = document.getElementById("block-nav");
var btn_ham = document.getElementById("btn-ham");
btn_ham.addEventListener("click", affichageNav);

function affichage() {
  var stock = this.dataset.lien;

  for (var i = 0; i < allDiv.length; i++) {
    if (allDiv[i].id == stock) {
      allDiv[i].scrollIntoView({
        block: "start", // se cale fin du block
        inline: "start", // se met au début
        behavior: "smooth", // defil smooth
      });
      open_close = true;
      affichageNav();
    }
  }

  for (var i = 0; i < allSection.length; i++) {
    if (allSection[i].id == stock) {
      allSection[i].scrollIntoView({
        block: "start", // se cale fin du block
        inline: "start", // se met au début
        behavior: "smooth", // defil smooth
      });
      open_close = true;
      affichageNav();
    }
  }
}

function affichageNav() {
  if (open_close == false) {
    nav.style.visibility = "visible";

    open_close = true;
  } else if (open_close == true) {
    nav.style.visibility = "hidden";
    open_close = false;
  } else {
    console.error("Boolean à une valeur inconnu");
  }
}
