class FooterComponent extends HTMLElement {
    constructor() {
        super();

        const date = new Date();
        const year = date.getFullYear();
        this.innerHTML = 
        `<footer>
            <p class="footer-text">Victory Board Games</p>
            <p class="footer-text">2019-${year}</p>
            <p class="footer-text">Thanks For Stopping By!</p>
            </footer>`
    }
}

window.customElements.define('footer-component', FooterComponent);