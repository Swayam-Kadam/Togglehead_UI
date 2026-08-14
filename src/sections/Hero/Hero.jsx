import { useState } from "react";
import "./Hero.scss";

const SLIDES = [
  {
    title: "Lorem ipsum",
    description:
      "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd",
  },
  {
    title: "Enrolment",
    description:
      "Enquire about the examination and register for the exams. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos.",
  },
  {
    title: "Qualifications",
    description:
      "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.",
  },
  {
    title: "Examinations",
    description:
      "Upcoming examinations for Level 1, Level 2 and Level 3. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.",
  },
];

const Hero = () => {
  const [activeSlide, setActiveSlide] = useState(0);
  const slide = SLIDES[activeSlide];

  return (
    <section className="hero" id="home">
      <div className="hero__row">
        <div className="hero__content">
          <h2 className="hero__title">{slide.title}</h2>
          <p className="hero__description">{slide.description}</p>
          <button type="button" className="hero__cta">
            Know More
            <img src="/images/Polygon 1.svg" alt="" />
          </button>
        </div>

        <div className="hero__visual">
          <img src="/images/Mask Group 99.svg" alt="" />

          <div className="hero__nav" aria-label="Hero slide navigation">
            {SLIDES.map((item, index) => {
              const isActive = activeSlide === index;

              return (
                <button
                  key={item.title}
                  type="button"
                  className={`hero__nav-btn ${isActive ? "is-active" : ""}`}
                  aria-label={`Go to slide ${index + 1}`}
                  aria-current={isActive ? "true" : undefined}
                  onClick={() => setActiveSlide(index)}
                >
                  <span />
                </button>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
