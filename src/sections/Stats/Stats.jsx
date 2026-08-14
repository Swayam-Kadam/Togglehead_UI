import "./Stats.scss";

const STATS = [
  {
    title: "Lorem ipsum",
    image: "/images/123+.svg",
    description:
      "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat",
  },
  {
    title: "Lorem ipsum",
    image: "/images/12+.svg",
    description:
      "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et",
  },
  {
    title: "Lorem ipsum",
    image: "/images/12+.svg",
    description:
      "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et",
  },
  {
    title: "Lorem ipsum",
    image: "/images/123.svg",
    description:
      "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut",
  },
];

const Stats = () => {
  return (
    <section className="stats" id="stats">
      <div className="stats__row">
        {STATS.map((item, index) => (
          <article className="stats__col" key={`${item.title}-${index}`}>
            <p className="stats__label">{item.title}</p>
            <img src={item.image} alt="" className="stats__image" />
            <h3 className="stats__subtitle">{item.title}</h3>
            <p className="stats__description">{item.description}</p>
          </article>
        ))}
      </div>
    </section>
  );
};

export default Stats;
