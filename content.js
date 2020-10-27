var img = document.getElementsByTagName("img");
console.log(img);
var animal = ""
var pict = "";

// Chrome récupere la source de l'image choisie
chrome.runtime.onMessage.addListener(function(message, sender, sendResponse) {
    animal = message;
    
    switch (animal){
      case 'puppy':
        pict = "images/puppy.jpg";
        break;
      case 'kitten':
        pict = "images/kitten.jpg";
        break;
      case 'deer':
        pict = "images/deer.jpg";
        break;
      case 'rabbit':
          pict = "images/rabbit.jpg";
          break;
      default:
        pict = "images/kitten.jpg";
    }
    var url = chrome.extension.getURL(pict);

    // boucle pour changer toutes les url des images du site par celle pré-définie
    for(var i = 0; i < img.length ; i++) {
        console.log(pict);
        img[i].src = url;
      }
});
