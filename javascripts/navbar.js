class NavBar extends HTMLElement 
{
    constructor() 
    {
        super();
        this.innerHTML = `<nav>
                            <a href="welcome.html">Welcome</a>
                            <a href="products.html">Products</a>
                            <a href="about.html">About Us</a>
                          </nav>`;
    }
}

window.customElements.define('nav-bar', NavBar);