import { useEffect, useRef } from "react";
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
  const trackRef = useRef(null);
  const dragRef = useRef({
    isDown: false,
    startX: 0,
    scrollLeft: 0,
    moved: false,
  });

  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;

    const onMouseDown = (event) => {
      if (event.button !== 0) return;

      dragRef.current = {
        isDown: true,
        startX: event.pageX,
        scrollLeft: track.scrollLeft,
        moved: false,
      };
      track.classList.add("is-dragging");
    };

    const onMouseMove = (event) => {
      if (!dragRef.current.isDown) return;

      event.preventDefault();
      const walk = event.pageX - dragRef.current.startX;

      if (Math.abs(walk) > 4) {
        dragRef.current.moved = true;
      }

      track.scrollLeft = dragRef.current.scrollLeft - walk;
    };

    const onMouseUp = () => {
      dragRef.current.isDown = false;
      track.classList.remove("is-dragging");
    };

    track.addEventListener("mousedown", onMouseDown);
    window.addEventListener("mousemove", onMouseMove);
    window.addEventListener("mouseup", onMouseUp);

    return () => {
      track.removeEventListener("mousedown", onMouseDown);
      window.removeEventListener("mousemove", onMouseMove);
      window.removeEventListener("mouseup", onMouseUp);
    };
  }, []);

  const handleClickCapture = (event) => {
    if (dragRef.current.moved) {
      event.preventDefault();
      event.stopPropagation();
      dragRef.current.moved = false;
    }
  };

  return (
    <section className="features" id="enrolment">
      <div
        className="features__track"
        ref={trackRef}
        onClickCapture={handleClickCapture}
      >
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
