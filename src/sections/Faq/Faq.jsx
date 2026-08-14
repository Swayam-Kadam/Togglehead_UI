import { useState } from "react";
import "./Faq.scss";

const FAQ_ITEMS = [
  {
    question: "How does an investor gain access to MF Utility?",
    answer:
      "Lorem ipsum dolor sit amet, nsectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco.",
  },
  {
    question: "Will investors be able to have multiple Common Account Numbers?",
    answer:
      "Lorem ipsum dolor sit amet, nsectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco.Lorem ipsum dolor sit amet, nsectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco.",
  },
  {
    question: "How does an investor gain access to MF Utility?",
    answer:
      "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat.",
  },
];

const Faq = () => {
  const [active, setActive] = useState(1);

  return (
    <section className="faq" id="faq">
      <h2 className="faq__title">FAQ</h2>

      <div className="faq__list">
        {FAQ_ITEMS.map((item, index) => {
          const isOpen = active === index;

          return (
            <article
              className={`faq__item ${isOpen ? "is-open" : ""}`}
              key={`${item.question}-${index}`}
            >
              <button
                type="button"
                className="faq__question"
                aria-expanded={isOpen}
                onClick={() => setActive(isOpen ? -1 : index)}
              >
                <span>{item.question}</span>
                <img
                  src={
                    isOpen
                      ? "/images/do_not_disturb_on_FILL1_wght100_GRAD200_opsz24.svg"
                      : "/images/add_circle_FILL0_wght300_GRAD-25_opsz48.svg"
                  }
                  alt=""
                />
              </button>

              {isOpen && <p className="faq__answer">{item.answer}</p>}
            </article>
          );
        })}
      </div>
    </section>
  );
};

export default Faq;
