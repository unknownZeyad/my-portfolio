import gsap from "gsap";
import { TUnknownChildren } from "../types";

type TTween = {
  from: gsap.TweenVars,
  to: ((element: TUnknownChildren) => gsap.TweenVars) | gsap.TweenVars,
}

export const animateThemeOnScroll = () => {
  gsap.fromTo(document.body,{
    backgroundColor: "#fff",
    color: "#000",
  },{
    backgroundColor: "#141414",
    color: "#fff",
    scrollTrigger: {
      scrub: 1,
      trigger: "#experiences",
      start: "300px bottom",  
      end: "500px bottom",
    },
  })
}

export const animateHeaderOnScroll = () => {
  gsap.fromTo('header',{
    "--backdrop-blur": "0px",
  },{
    "--backdrop-blur": "20px",
    scrollTrigger: {
      scrub: 1,
      start: "0 top",  
      end: "150px top",
    },
  })
}



export const skewBlurTween: TTween = {
  from: {
    transform: "skewX(-50deg)",
    filter: "blur(20px)",
    opacity: ".5"
  },
  to: (element) => ({
    transform: "skewX(0deg)",
    filter: "blur(0px)",
    opacity: "1",
    duration: 1.5,
    scrollTrigger: {
      start: "top bottom",
      end: "100px bottom",
      trigger: element
    }
  })
}


export const fadeIn: TTween = {
  from: {
    opacity: 0
  },
  to: (element) => ({
    opacity: 1,
    duration: 2,
    scrollTrigger: {
      start: "top bottom",
      end: "100px bottom",
      trigger: element
    }
  })
}

