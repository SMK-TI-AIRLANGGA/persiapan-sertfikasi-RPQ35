
function showPage(pageNumber) {
  var size =8;
  if(window.innerWidth<728){size=6;}

    const items = document.querySelectorAll('.obj');
    const itemsPerPage = size;
    
    
    // Calculate our bounds
    const start = (pageNumber - 1) * itemsPerPage;
    const end = start + itemsPerPage;
  
    items.forEach((item, index) => {
      // If the index is between our start and end, show it; otherwise, hide it
      if (index >= start && index < end) {
        item.style.display = "block";
      } else {
        item.style.display = "none";
      }
    });
  }
  
  // Run once on load to show the first page
  showPage(1);


  