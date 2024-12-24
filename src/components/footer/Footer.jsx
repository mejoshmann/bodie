import "./Footer.scss";

function Footer() {
    return(
        <main className="footer">
            <div className="footer__logo"></div>
            <section className="footer__socialCopy">
                <p className="footer__socialCopy--copyright">&copy; www.bodiemorgan.com</p>
                <div className="footer__social">
                    <div className="footer__social--insta"></div>
                    <div className="footer__social--x"></div>
                    <div className="footer__social--tube"></div>
                </div>
            </section>
        </main>
    )
}

export default Footer;