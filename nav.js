var navLinks = document.getElementById("navLinks");
            function showMenu(){
                navLinks.style.display="block";
                navLinks.style.right="0";
            }
            function hideMenu(){
                navLinks.style.display="none";
                navLinks.style.right="-200px";
            }
            function resetNav() {
                if (window.innerWidth > 700) {
                    navLinks.style.removeProperty('display');
                    //navLinks.style.display="block"; //WHY!!!!!!!!!
                    navLinks.style.right = "0"; 
                }
            }

            window.addEventListener('resize', resetNav);