import "./home.css";

const Home = () => {
  return (
    <section className="home section" id="home">
      <div className="home__container container grid">
        <div className="home__content grid">
          <h1 className="home__title">Ace Your Semester with Fahim!</h1>
          <p className="home__description">
            Discover personalized course recommendations, professor ratings, GPA
            calculations, and more.
          </p>
          <a href="#features" className="home__button">
            Explore Features
          </a>
        </div>
      </div>
    </section>
  );
};

export default Home;
