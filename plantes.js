function appliquerFiltre() {
    
    const filtre = document.getElementById('filtre').value;
  
  
    const items = document.querySelectorAll('.item');
  
 
    items.forEach(item => {
      const categorieItem = item.getAttribute('data-categorie');
  
      
      if (filtre === 'tous' || filtre === categorieItem) {
        item.style.display = 'block';
      } else {
        item.style.display = 'none';
      }
    });
  }
  