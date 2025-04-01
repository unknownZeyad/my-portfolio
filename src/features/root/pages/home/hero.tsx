import { IoLogoFacebook, IoLogoGithub } from "react-icons/io";
import { FaLinkedin } from "react-icons/fa";
import { ReactElement } from "react";
import { IconType } from "react-icons/lib";

export const dynamic = "force-static"

function Hero() {

  return (
    <section className='h-screen container !w-[90%] pt-[120px]'>
      <img 
        className='absolute block top-0 right-0 w-[655px] aspect-[1.45]' 
        src="/images/horus-eye.png" 
        alt="eye" 
      />

      <div className='flex flex-col h-full justify-end'>
        <UpperSection/>
        <LowerSection/>
      </div>

    </section>
  )
}

export default Hero

function UpperSection () {

  const bioSegments: string[] = [
    "Zeyad Tamer is Egyptian Web Developer",
    "is passionate about Programming & Web",
    "development with intuitive experiences",
    "that augment human abilities and help",
    "businesses succeed."
  ]
  
  return (
    <div>
      <div className="flex items-center justify-between">
        <div>
          <h3 className="hero_title">A Creative</h3>
          <h3 className="hero_title">Front-End</h3>
        </div>
        <div className="text-xl leading-6 font-secondary font-medium capitalize w-[400px]">
          {bioSegments.map((s,idx) => <p key={idx}>{s}</p>)}
        </div>
      </div>
      <h3 className="hero_title">Web Developer</h3>
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
      icon: <IoLogoGithub />,
      href: "https://2"
    },
    {
      icon: <FaLinkedin />,
      href: "https://3"
    },
  ]

  return (
    <div className='flex justify-between items-center h-[130px]'>
      <div className="flex gap-x-3 text-3xl">
        {contactIcons.map((curr,idx) => (
          <a 
            href={curr.href}
            key={idx}
          >{curr.icon}</a>
        ))}
      </div>
      <p className="font-medium font-secondary">Lets Work On Something Great!</p>
    </div>
  )
}