import { useEffect, useState } from "react";
import "./styles/Loading.css";
import "./styles/ImageLightbox.css";
import { useLoading } from "../context/LoadingProvider";
import Marquee from "react-fast-marquee";
import { site } from "../data/portfolio";
import ClickableImage from "./ClickableImage";

const Loading = ({ percent }: { percent: number }) => {
  const { setIsLoading } = useLoading();
  const [loaded, setLoaded] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);
  const [clicked, setClicked] = useState(false);

  useEffect(() => {
    if (percent < 100) return;
    const t1 = setTimeout(() => setLoaded(true), 600);
    const t2 = setTimeout(() => setIsLoaded(true), 1600);
    return () => {
      clearTimeout(t1);
      clearTimeout(t2);
    };
  }, [percent]);

  useEffect(() => {
    if (!isLoaded) return;
    import("./utils/initialFX").then((module) => {
      setClicked(true);
      setTimeout(() => {
        module.initialFX();
        setIsLoading(false);
      }, 900);
    });
  }, [isLoaded, setIsLoading]);

  function handleMouseMove(e: React.MouseEvent<HTMLElement>) {
    const { currentTarget: target } = e;
    const rect = target.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    target.style.setProperty("--mouse-x", `${x}px`);
    target.style.setProperty("--mouse-y", `${y}px`);
  }

  return (
    <>
      <div className="loading-header">
        <div className="loader-title" data-cursor="disable">
          <ClickableImage
            src={site.profileImage}
            alt={site.name}
            className="loader-avatar-clickable"
            downloadName="arpit-bansal-profile.png"
          />
        </div>
        <div className={`loaderGame ${clicked && "loader-out"}`}>
          <div className="loaderGame-container">
            <div className="loaderGame-in">
              {[...Array(27)].map((_, index) => (
                <div className="loaderGame-line" key={index}></div>
              ))}
            </div>
            <div className="loaderGame-ball"></div>
          </div>
        </div>
      </div>
      <div className="loading-screen">
        <div className="loading-marquee">
          <Marquee>
            <span> Full-Stack Developer</span> <span>GenAI & Automation</span>
            <span> React · Node · Flutter</span> <span>Building tools that work</span>
          </Marquee>
        </div>
        <div
          className={`loading-wrap ${clicked && "loading-clicked"}`}
          onMouseMove={(e) => handleMouseMove(e)}
          onClick={() => {
            if (percent < 100) {
              setLoaded(true);
              setIsLoaded(true);
            }
          }}
          title="Click to enter if loading is slow"
        >
          <div className="loading-hover"></div>
          <div className={`loading-button ${loaded && "loading-complete"}`}>
            <div className="loading-container">
              <div className="loading-content">
                <div className="loading-content-in">
                  Loading <span>{Math.min(100, percent)}%</span>
                </div>
              </div>
              <div className="loading-box"></div>
            </div>
            <div className="loading-content2">
              <span>Welcome</span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Loading;
