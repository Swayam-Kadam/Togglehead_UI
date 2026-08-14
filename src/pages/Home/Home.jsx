import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import Hero from "../../sections/Hero/Hero";
import Qualifications from "../../sections/Qualifications/Qualifications";
import Features from "../../sections/Features/Features";
import Stats from "../../sections/Stats/Stats";
import Faq from "../../sections/Faq/Faq";
import Subscribe from "../../sections/Subscribe/Subscribe";
import "./Home.scss";

const Home = () => {
  return (
    <div className="home">
      <Header />
      <main>
        <Hero />
        <Qualifications />
        <Features />
        <Stats />
        <Faq />
        <Subscribe />
      </main>
      <Footer />
    </div>
  );
};

export default Home;
