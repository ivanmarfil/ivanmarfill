function toggleCV() {
    var dots = document.getElementById("dots");
    var moreText = document.getElementById("more");
    var btnText = document.getElementById("leer-mas-btn");
  
    if (moreText.style.display === "none") {
      moreText.style.display = "inline";
      dots.style.display = "none";
      btnText.innerHTML = "Leer menos";
    } else {
      moreText.style.display = "none";
      dots.style.display = "inline";
      btnText.innerHTML = "Leer más";
    }
  }
  