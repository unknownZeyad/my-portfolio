import gsap from "gsap";

export const animateThemeOnScroll = () => {
  gsap.timeline().fromTo(document.body,{
    scrollTrigger: {
      scrub: 3,
      trigger: "#experiences",
      // start: "top 30%",  
    },
    duration: 1,
    backgroundColor: "var(--light-theme-bg-color)",
    color: "var(--light-theme-text-color)",
  },{
    backgroundColor: "var(--dark-theme-bg-color)",
    color: "var(--dark-theme-text-color)",
  })
}