import "./Footer.scss";

const FOLLOW_US = [
  { name: "Facebook", src: "/images/Icon awesome-facebook-f.svg" },
  { name: "Instagram", src: "/images/Icon awesome-instagram.svg" },
  { name: "Linkedin", src: "/images/Icon awesome-linkedin.svg" },
  { name: "Twitter", src: "/images/Icon awesome-twitter.svg" },
  { name: "Youtube", src: "/images/Icon awesome-youtube.svg" },
  { name: "Quora", src: "/images/quora.svg" },
];

const HEAD_OFFICE = [
  {
    icon: "/images/Icon material-location-on.svg",
    text: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut",
  },
  {
    icon: "/images/Group 17190.svg",
    text: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr",
  },
  {
    icon: "/images/Group 17191.svg",
    text: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr",
  },
  {
    icon: "/images/Group 17156.svg",
    text: "Lorem ipsum asd asdsaweeq Lorem Ipsum",
  },
];

const Footer = () => {
  return (
    <>
      <footer className="footer" id="contact">
        <div className="footer__inner">
          <div className="footer__col">
            <h3 className="footer__title">Contact us</h3>
            <p className="footer__text">
              Address: amet, consetetur sadipscing elitr, sed diam
            </p>
            <p className="footer__text">
              Email id: eirmod tempor invidunt ut labore et dolore
            </p>
            <p className="footer__text">Phone no: 123456789</p>
          </div>

          <div className="footer__col footer__col--center">
            <h3 className="footer__title">Follow us</h3>
            <div className="footer__social">
              {FOLLOW_US.map((item) => (
                <a key={item.name} href="#" aria-label={item.name}>
                  <img src={item.src} alt={item.name} />
                </a>
              ))}
            </div>
          </div>

          <div className="footer__col">
            <h3 className="footer__title">Head Office</h3>
            {HEAD_OFFICE.map((item) => (
              <div className="footer__office-item" key={item.icon}>
                <img src={item.icon} alt="" />
                <p>{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </footer>

      <div className="footer-bar">
        <p>© 2021 All Rights Reserved. Privacy Policy</p>
      </div>
    </>
  );
};

export default Footer;
