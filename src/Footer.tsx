import "./Footer.css"

export default function Footer() {
    return (
        <footer className="footer">
            <div className="footer-content">
                <div className="footer-section">
                    <h2>MiMart</h2>
                    <p>Your one-stop shop for everyday products.</p>
                </div>

                <div className="footer-section">
                    <h3>Shop</h3>
                    <a href="#">All Products</a>
                    <a href="#">Men's Clothing</a>
                    <a href="#">Women's Clothing</a>
                    <a href="#">Electronics</a>
                </div>

                <div className="footer-section">
                    <h3>About</h3>
                    <a href="#">About Us</a>
                    <a href="#">Contact</a>
                    <a href="#">Privacy Policy</a>
                    <a href="#">Terms of Service</a>
                </div>
            </div>

            <div className="footer-bottom">
                <p>© 2026 MiMart. All rights reserved.</p>
            </div>
        </footer>
    );
}