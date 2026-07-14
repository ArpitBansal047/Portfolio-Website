import "./styles/HeroSphere.css";

const HeroSphere = () => {
  return (
    <div className="hero-sphere-top" aria-hidden="true">
      <img
        src="/images/hero/sphere-dark-top.png"
        alt=""
        className="hero-sphere-top__img hero-sphere-top__img--dark"
        loading="lazy"
        decoding="async"
      />
      <img
        src="/images/hero/sphere-light-top.png"
        alt=""
        className="hero-sphere-top__img hero-sphere-top__img--light"
        loading="lazy"
        decoding="async"
      />
    </div>
  );
};

export default HeroSphere;
