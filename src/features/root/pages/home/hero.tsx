import { IoLogoFacebook, IoLogoGithub, IoLogoLinkedin } from "react-icons/io";
import { ReactElement } from "react";
import { IconType } from "react-icons/lib";

export const dynamic = "force-static"

function Hero() {

  return (
    <section id="index" className='h-screen container !w-[90%]'>
      <img 
        className='absolute block top-[100px] right-0 w-[70%] lg:w-[655px] aspect-[1.45]' 
        src="/images/horus-eye.png" 
        alt="eye" 
      />

      <div className='flex flex-col relative z-10 h-full justify-center'>
        <UpperSection/>
        <LowerSection/>
      </div>

    </section>
  )
}

export default Hero

function UpperSection () {

  const bioSegments: string[] = [
    "Zeyad Tamer is Egyptian Web Developer is passionate",
    "about Programming & Web development with intuitive",
    "experiences that augment human abilities and help",
    "businesses succeed.",
  ]
  
  return (
    <div className="flex items-center flex-col justify-between">
      <div className="flex gap-5 items-center">
        <h1 className="hero_title">A Creative</h1>
        <span className="hr w-[130px]"/>
      </div>
      <h1 className="hero_title">frontend developer</h1>

      <div className="flex gap-5">
        <h1 className="hero_title">based in</h1>
        <div className="flex-col font-semibold text-[9px] xs:text-[11px] sm:text-[12px] md:text-[14px] lg:text-[16px] flex">
          {bioSegments.map((curr,idx) => (
            <p key={idx}>{curr}</p>
          ))}
        </div>
      </div>
      <div className="flex gap-5 items-center">
        <span className="hr w-[130px] xs:w-[200px] md:w-[260px]"/>
        <h1 className="hero_title">egypt</h1>
      </div>
    </div>
  )
}

function LowerSection () {

  const contactIcons: {
    icon: ReactElement<IconType>,
    href: `https://${string}`
  }[] = [
    {
      icon: <IoLogoFacebook />,
      href: "https://1"
    },
    {
      icon: <IoLogoLinkedin />,
      href: "https://3"
    },
    {
      icon: <IoLogoGithub />,
      href: "https://2"
    },
  ]

  return (
    <div className='flex absolute w-full left-0 bottom-0 justify-between items-center h-[130px]'>
      <div className="flex gap-x-3 text-xl sm:text-3xl">
        {contactIcons.map((curr,idx) => (
          <a 
            key={idx} 
            href={curr.href}
            className="hover:opacity-70 duration-100"
          >
            {curr.icon}
          </a>
        ))}
      </div>
        <p className="font-medium font-secondary text-sm sm:text-[1rem]">Lets Work On Something Great!</p>
    </div>
  )
}