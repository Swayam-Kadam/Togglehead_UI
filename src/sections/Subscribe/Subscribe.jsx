import { useState } from "react";
import "./Subscribe.scss";

const Subscribe = () => {
  const [email, setEmail] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
  };

  return (
    <section className="subscribe" id="subscribe">
      <div className="subscribe__content">
        <h2 className="subscribe__title">Subscribe</h2>
        <p className="subscribe__text">
          Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
          nonumy eirmod
        </p>

        <form className="subscribe__form" onSubmit={handleSubmit}>
          <input
            type="email"
            name="email"
            placeholder="Enter your Email Address"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <button type="submit">
            Subscribe Now
            <img src="/images/Polygon 1.svg" alt="" />
          </button>
        </form>
      </div>

      <div className="subscribe__visual">
        <img src="/images/Mask Group 72.svg" alt="" />
      </div>
    </section>
  );
};

export default Subscribe;
