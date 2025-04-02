import { skewBlurTween } from "@/core/client/animations"
import AnimationWrapper from "@/core/client/components/ui/animation-wrapper"
import { cn } from "@/core/client/lib/utils"
import { getExperiencesAction } from "@/core/server/actions/experiences"
import { IExperience } from "@/core/server/models/experiences"
import { TUnknownChildren } from "@/core/types"

export const dynamic = "force-dynamic"

function Animation ({ children }: TUnknownChildren) {
  return (
    <AnimationWrapper fromTo={skewBlurTween}>
      { children }
    </AnimationWrapper>
  )
}

async function Experiences() {
  const experiences = await getExperiencesAction()

  return (
    <main id="experiences" className="container mt-[200px]">
      <h2 className="text-7xl uppercase font-primary mb-[100px]">Experiences</h2>
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
        "max-w-[75%] xl:max-w-[70%] w-fit after:absolute relative after:w-[1px] pl-8 after:h-[110%] after:bg-white after:top-0 after:left-0 gap-5 flex flex-col",
        directionIndex % 2 === 1 && "ml-auto"
      )}
    >
      <div className="flex justify-between font-secondary items-center">
        <Animation>
          <h5 className="text-4xl font-bold">{worked_at.name}</h5>
        </Animation>
        <Animation>
          <div className="flex text-lg font-semibold">
            <p>{from}</p>
            <p className="mx-2">-</p>
            <p>{to}</p>
          </div>
        </Animation>
      </div>

      <Animation>
        <h3 className="text-7xl font-primary uppercase">{position}</h3>
      </Animation>

      <div className="flex flex-col font-secondary text-lg font-medium gap-3">
        {achievements.map((curr,idx) => (
          <Animation key={idx}>
            <p>{curr}</p>
          </Animation>
        ))}
      </div>
    </section>
  )
}