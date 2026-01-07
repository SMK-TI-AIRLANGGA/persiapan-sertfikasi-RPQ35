const modal = document.getElementById('Login_pinjam');
function pinjam(){
    setTimeout(() => {
        
        modal.classList.remove('hidden');
    }, 200);
}

document.addEventListener('click', function(event) {
    
    // Check if the modal exists and is NOT hidden
    if (modal && !modal.classList.contains('hidden')) {
        
        // If the click happened outside the modal...
        if (!modal.contains(event.target)) {
            modal.classList.add('hidden');
        }
    }
});