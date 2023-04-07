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
            
                <div class="nav-element">
                    <a href="welcome.html">Welcome</a>
                </div>
                <div class="nav-element">
                    <a href="products.html" class="nav-element">Products</a>
                </div>
                <div class="nav-element">
                    <a href="about.html" class="nav-element">About Us</a>
                </div>       
            </nav>`;
    }
}

window.customElements.define('nav-bar', NavBar);