import { Fragment, useState, useEffect } from "react";
import { createPortal } from "react-dom";
import { SpinnerCircular } from "spinners-react";
import gsap, { Power2 } from "gsap";
import { on } from "../Events";

const timeline = gsap.timeline();
const nprogressRoot = document.getElementById("nprogress") as HTMLElement;


const NProgress = () => {
  const el: HTMLElement = document.createElement("div");
  nprogressRoot.appendChild(el);

  const [isRequesting, setIsRequesting]  = useState(false);

  const showNProgress = () => {
    setIsRequesting(true);

    timeline.to(".nprogress", {
      width: `20%`,
      duration: 1,
      ease: Power2.easeInOut,
      onComplete: () => {
        timeline.to(".nprogress", {
          width: `50%`,
          duration: 1,
          ease: Power2.easeInOut,
          onComplete: () => {
            timeline.to(
              ".nprogress",
              {
                width: `70%`,
                duration: 1,
                ease: Power2.easeInOut,
              }
            )
          }
        })
      }
    })
  }

  const hideNProgress = () => {
    setTimeout(() => {
      timeline.to(
        ".nprogress", {
        width: `100%`,
        duration: 1,
        ease: Power2.easeInOut,
        onComplete: () => {
          setTimeout(() => {
            setIsRequesting(false);
          }, 50);
        }},
        "+=1"
      );
    }, 0);
  }


  useEffect(() => {
    on("nProgress:start", showNProgress);
    on("nProgress:end", hideNProgress);
  }, []);

  return createPortal(
    <Fragment>
      {isRequesting && <div className="nprogress animate__animated animate__fadeIn" id="nprogress"></div>}
      {isRequesting &&
        <div className="nprogress__spinner animate__animated animate__fadeIn" id="nprogress__spinner">
          <SpinnerCircular
            size={30}
            speed={200}
            color="#c5292a"
            secondaryColor="#ffe1d4"
            thickness={110}
          />
        </div>
      }
    </Fragment>,
    el
  );
}

export default NProgress