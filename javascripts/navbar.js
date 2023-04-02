class NavBar extends HTMLElement 
{
    constructor() 
    {
        super();
        this.innerHTML = 
            `<nav>
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