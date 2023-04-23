class NavBar extends HTMLElement 
{
    constructor() 
    {
        super();
        this.innerHTML = 
            `<nav>
                <div class="logo-container">
                    <a href="/todd-spainhour-individual-assignment-3-swe-5063/welcome.html" class="clickable-logo">
                        <img id="logo" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRslKnNvO72QK-3TrnGRVeyHTaEJHHSxsoFCkHw3Yv5rQ&usqp=CAU&ec=48665699"></img>
                        <h1>Victory Board Games</h1>
                    </a>
                </div>
                <div class="nav-toggle-container">
                    <button id="navigation-toggle-button" value="">Menu</button>
                </div>
                <div id="nav-container" class="nav-element-container">
                    <div class="nav-element">
                        <a href="welcome.html">Welcome</a>
                    </div>
                    <div class="nav-element">
                        <a href="products.html" class="nav-element">Products</a>
                    </div>
                    <div class="nav-element">
                        <a href="about.html" class="nav-element">About Us</a>
                    </div>  
                </div>
            </nav>`;

            const toggleNavbar = () => {
                const navbarToggleButton = document.getElementById("navigation-toggle-button");
                const navElementContainer = document.getElementById("nav-container");

                if(navbarToggleButton.value === "open"){
                    navbarToggleButton.innerHTML = "Menu";
                    navbarToggleButton.value = "closed";
                    navElementContainer.style.display = "none";
                } else {
                    navbarToggleButton.innerHTML = "X"
                    navbarToggleButton.value = "open";
                    navElementContainer.style.display = "block";
                }
                
            }
        
            const addEvents = () => {
                const navbarToggleButton = document.getElementById("navigation-toggle-button");
                navbarToggleButton.addEventListener("click", toggleNavbar);
            }
        
            const init = () => {
                addEvents();
            }
            init();
    }      
}
window.customElements.define('nav-bar', NavBar);