function toggleMore() {
    var paragraphesCache = document.getElementsByClassName("paragrapheCache");

    
    for (var i = 0; i < paragraphesCache.length; i++) {
        var paragraphe = paragraphesCache[i];

       
        if (paragraphe.style.display === "none") {
          
            paragraphe.style.display = "block";
        } else {

            paragraphe.style.display = "none";
        }
    }
}