function toggleMenu() {
    var menu = document.querySelector(".nav-menu"); 
    if (menu.style.display === "block") 
    { 
        menu.style.display = "none";
    } 
else 
    {
        menu.style.display = "block";
    }
}

function closeFooter() {
    document.getElementById('site-footer').style.display = 'none';
}