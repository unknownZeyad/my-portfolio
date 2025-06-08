import { FadeIn, SkewAndBlur } from "@/core/client/components/animations/wrappers"
import { cn } from "@/core/client/lib/utils"
import { getExperiencesAction } from "@/core/server/actions/experiences"
import { IExperience } from "@/core/server/models/experiences"

async function Experiences() {
  const experiences = await getExperiencesAction()

  return (
    <main id="experiences" className="container mt-[200px]">
      <SkewAndBlur>
        <h2 className="font-secondary font-medium mb-[100px]">Experience</h2>
      </SkewAndBlur>
      <div className="flex flex-col gap-[200px]">
        {
          experiences.map((curr,idx) => (
            <ExperienceCard 
              directionIndex={idx} 
              key={curr.uuid} 
              {...curr}
            />
          ))
        }
      </div>
    </main>
  )
}

export default Experiences


export function ExperienceCard ({ achievements, from, position, to, worked_at, directionIndex }: {
  directionIndex: number
} & IExperience) {
  return (
    <section 
      className={cn(
        "gap-5 flex flex-col relative pl-8",
        // 'max-w-[75%] xl:max-w-[70%] w-fit',
        // directionIndex % 2 === 1 && "ml-auto",
      )}
    >
      <FadeIn>
        <span className="vr absolute h-[110%] top-0 left-0"/>
      </FadeIn>

      <div className="flex justify-between font-secondary items-center">
        <SkewAndBlur>
          <h5 className="text-3xl font-bold">{worked_at.name}</h5>
        </SkewAndBlur>

        <SkewAndBlur>
          <div className="flex text-lg font-semibold">
            <p>{from}</p>
            <p className="mx-2">-</p>
            <p>{to}</p>
          </div>
        </SkewAndBlur>
      </div>

      <SkewAndBlur>
        <h3 className="text-8xl font-primary uppercase skew_and_blur">{position}</h3>
      </SkewAndBlur>

      <div className="flex flex-col font-secondary font-medium gap-3">
        {achievements.map((curr,idx) => (
          <SkewAndBlur key={idx}>
            <p>{curr}</p>
          </SkewAndBlur>
        ))}
      </div>
    </section>
  )
}