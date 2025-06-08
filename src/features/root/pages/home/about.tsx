import React from 'react'

const bioSectionsText: string[] = [
  `hello world my name is Zeyad Tamer ,I am a 17 yo. 
  frontend web developer Based in egypt with a driver 
  for excellence in building maintainable functional, 
  responsive web apps, Proficient in the web latest 
  technoloies, libraies and frameworks`,

  `Outside of this, I love listening to music, playing
  video games, and spending time with my family.`,
]

function About() {
  return (
    <section id='about' className='container h-screen flex flex-col mt-20 justify-center'>
      <h2 className="font-secondary font-medium mb-[100px]">About</h2>

      <div className='font-primary mb-12 uppercase text-[6rem] leading-[5rem]'>
        <h2>Passionate</h2>
        <h2>& Creative</h2>
      </div>

      <div className='font-secondary text-xl font-medium capitalize space-y-8 w-[75%]'>
        {
          bioSectionsText.map((curr,idx) => (
            <p key={idx}>{curr}</p>
          ))
        }
      </div>

      <div className="flex justify-end mt-12">
        <button className='bg-smokey-white px-12 font-medium duration-100 hover:bg-opacity-70 text-xl py-3 text-black font-secondary'>Download Resume</button>
      </div>
    </section>
  )
}

export default About