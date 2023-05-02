// Script to open and close sidebar
function w3_open() {
    document.getElementById("mySidebar").style.display = "block";
    document.getElementById("myOverlay").style.display = "block";
}

function w3_close() {
  document.getElementById("mySidebar").style.display = "none";
  document.getElementById("myOverlay").style.display = "none";
}

// iFrame Change
function ChangeContent(weapon_number) {
  switch(weapon_number){
    case 1:
      document.getElementById("mainFrame").src = "frames/greatsword_frame.htm";
    break;
    case 2:
      document.getElementById("mainFrame").src = "frames/longsword_frame.htm";
    break;
    case 3:
      document.getElementById("mainFrame").src = "frames/sns_frame.htm";
    break;
    case 4:
      document.getElementById("mainFrame").src = "frames/dualblades_frame.htm";
    break;
    case 5:
      document.getElementById("mainFrame").src = "frames/hammer_frame.htm";
    break;
    case 6:
      document.getElementById("mainFrame").src = "frames/hh_frame.htm";
    break;
    case 7:
      document.getElementById("mainFrame").src = "frames/lance_frame.htm";
    break;
    case 8:
      document.getElementById("mainFrame").src = "frames/gunlance_frame.htm";
    break;
    case 9:
      document.getElementById("mainFrame").src = "frames/swaxe_frame.htm";
    break;
    case 10:
      document.getElementById("mainFrame").src = "frames/chblade_frame.htm";
    break;
    case 11:
      document.getElementById("mainFrame").src = "frames/insectglaive_frame.htm";
    break;
    case 12:
      document.getElementById("mainFrame").src = "frames/lbg_frame.htm";
    break;
    case 13:
      document.getElementById("mainFrame").src = "frames/hbg_frame.htm";
    break;
    case 14:
      document.getElementById("mainFrame").src = "frames/bow_frame.htm";
    break;
  }
}

// MAIN MENU SCRIPT
let slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  if (n > slides.length) { slideIndex = 1 }
  if (n < 1) { slideIndex = slides.length }
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slides[slideIndex - 1].style.display = "block";
  dots[slideIndex - 1].className += " active";
}