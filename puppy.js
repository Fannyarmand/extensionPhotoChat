var img = document.getElementsByTagName("img");
console.log(img);

// Chrome récupere la source de l'image choisie

var pict = "images/puppy.jpg"
var url = chrome.extension.getURL(pict);

// boucle pour changer toutes les url des images du site par celle pré-définie
for(var i = 0; i < img.length ; i++) {
    img[i].src = url;
  }
