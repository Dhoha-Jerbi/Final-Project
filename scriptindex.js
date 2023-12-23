


  
  let nombrePanier = 0;

function afficherCommander(article) {
  article.querySelector('.bouton-commander').style.display = 'block';
}

function cacherCommander(article) {
  article.querySelector('.bouton-commander').style.display = 'none';
}

function ajouterAuPanier() {
  nombrePanier++;
  document.getElementById('nombrePanier').innerText = nombrePanier;
  alert('Article ajouté au panier !');

}

document.addEventListener('DOMContentLoaded', function() {
  
  var endDate = new Date('December 31, 2023 23:59:59').getTime();

  
  var countdownInterval = setInterval(function() {
  
    var now = new Date().getTime();

   
    var timeRemaining = endDate - now;

    
    var days = Math.floor(timeRemaining / (1000 * 60 * 60 * 24));
    var hours = Math.floor((timeRemaining % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((timeRemaining % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((timeRemaining % (1000 * 60)) / 1000);

    
    document.getElementById('countdown').innerHTML = "Il vous reste : " +
      days + " jours, " +
      hours + " heures, " +
      minutes + " minutes, " +
      seconds + " secondes.";

  
    if (timeRemaining < 0) {
      clearInterval(countdownInterval);
      document.getElementById('countdown').innerHTML = "L'offre de fin d'année a expiré !";
    }
  }, 1000);
});
