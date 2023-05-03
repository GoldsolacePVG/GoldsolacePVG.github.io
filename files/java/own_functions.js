// Logo Change
const images = ["files/img/mh3u.webp", "files/img/mh4u.png", "files/img/mhgenu.webp", "files/img/mhst.png", "files/img/mhwi.png",
                "files/img/mhxr.webp", "files/img/mhr.png", "files/img/mhrs.png", "files/img/mhst2.png", "files/img/mhn.png"];
let indice = 0;

function ChangeImage() {
  const miImagen = document.getElementById("main_logo");
  miImagen.src = images[indice];
  indice++;
  if(indice === images.length){
    indice = 0;
  }
}

setInterval(ChangeImage, 3000);

// iFrame Change
function ChangeContent(weapon_number){
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