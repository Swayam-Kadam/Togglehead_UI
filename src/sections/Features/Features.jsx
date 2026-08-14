import "./Features.scss";

const FEATURES = [
  {
    title: "Lorem ipsum",
    text: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod",
    bg: "/images/Group 5833.svg",
  },
  {
    title: "Lorem ipsum",
    text: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod",
    bg: "/images/Group 9195.svg",
  },
  {
    title: "Lorem ipsum",
    text: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod",
    bg: "/images/Group 5833.svg",
  },
  {
    title: "Lorem ipsum",
    text: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod",
    bg: "/images/Group 9195.svg",
  },
];

const Features = () => {
  return (
    <section className="features" id="enrolment">
      <div className="features__track">
        {FEATURES.map((item, index) => (
          <article
            className="features__card"
            key={`${item.title}-${index}`}
            aria-label={item.title}
          >
            <img src={item.bg} alt="" className="features__bg" />
            <div className="features__content">
              <h3 className="features__title">{item.title}</h3>
              <p className="features__text">{item.text}</p>
              <button type="button" className="features__cta">
                Know More
                <img src="/images/Group 9275.svg" alt="" />
              </button>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
};

export default Features;
