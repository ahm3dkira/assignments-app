import './Footer.css';

export default function Footer() {
    return (
        <footer className="footer">
    <div className="flex-center copyright-container">
        <p className="copyright">© 2022 <a href="https://cv.nourgaser.com" className="icon"> Nour Gaser</a>. All rights reserved.</p>
    </div>
    <div className="social flex-center">
        <div>
            <a href="https://facebook.com/nourgaser" target="_blank">
                <i className="fab fa-facebook-f icon"></i>
            </a>
            <a href="https://github.com/nourgaser" target="_blank">
                <i className="fab fa-github-alt icon"></i>
            </a>
            <a href="https://linkedin.com/in/nourgaser" target="_blank">
                <i className="fab fa-linkedin-in icon"></i>
            </a>
        </div>
        <div>
            <p className="social-text">/nourgaser</p>
        </div>
    </div>



        </footer>
    );
}