import "./Qualifications.scss";

const EXAMS = [
  {
    date: "02th October 2014",
    details: ["Level 1 exam"],
    icon: "/images/Group 2645.svg",
  },
  {
    date: "Nov-Dec 2016",
    details: ["Level 2", "Lorem Ipsum", "Lorem Ipsum"],
    icon: "/images/Group 2645.svg",
  },
  {
    date: "Ongoing this year",
    details: ["Level 3 (Grad)"],
    icon: "/images/Group 2645.svg",
  },
];

const Qualifications = () => {
  return (
    <section className="qualifications">
      <div className="qualifications__inner">
        <div className="qualifications__intro">
          <h2 className="qualifications__title">
            Upcoming
            <br />
            Examinations
          </h2>
          <p className="qualifications__subtitle">
            Enquire about the examination &amp; register for the exams
          </p>
        </div>

        <div className="qualifications__list">
          {EXAMS.map((exam) => (
            <article className="qualifications__item" key={exam.date}>
              <div style={{ position: "relative" }}>
              <img
                className="qualifications__icon"
                src={exam.icon}
                alt=""
              />
              <div style={{ position: "absolute", bottom: 12, right: 10 }}>
              <img
                className=""
                src="/images/Group 2647.png"
                alt=""
              />
              </div>
              </div>
              <div className="qualifications__content">
                <h3 className="qualifications__date">{exam.date}</h3>
                {exam.details.map((line) => (
                  <p className="qualifications__detail" key={line}>
                    {line}
                  </p>
                ))}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Qualifications;
