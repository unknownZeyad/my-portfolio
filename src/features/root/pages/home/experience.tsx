import { cn } from "@/core/client/lib/utils"
import { getExperiencesAction, getExperiencesPagesAction } from "@/core/server/actions/experiences"
import { IExperience } from "@/core/server/models/experiences"

export const dynamic = "force-dynamic"

async function ExperiencesList() {
  const pages = await getExperiencesPagesAction()
  
  return (
    <main id="experiences" className="container mt-[200px]">
      <h2 className="text-7xl uppercase font-primary mb-[100px]">Experiences</h2>
      <div className="flex flex-col gap-[200px]">
        {Array(pages).fill(0).map((_,idx) => <ExperiencesSection key={idx} page={idx+1}/>)}
      </div>
    </main>
  )
}

export default ExperiencesList


async function ExperiencesSection ({ page }: {
  page: number
}) {
  const experiences = await getExperiencesAction(page)
  return experiences.map((curr, idx) => (
    <ExperienceCard 
      directionIndex={idx+page} 
      key={curr.uuid} 
      {...curr}
    />
  ))
}


export function ExperienceCard ({ achievements, from, position, to, worked_at, directionIndex }: {
  directionIndex: number
} & IExperience) {
  return (
    <section 
      className={cn(
        "max-w-[75%] xl:max-w-[70%] w-fit after:absolute relative after:w-[1px] pl-8 after:h-[110%] after:bg-white after:top-0 after:left-0 gap-5 flex flex-col",
        directionIndex % 2 === 0 && "ml-auto"
      )}
    >
      <div className="flex justify-between font-secondary items-center">
        <h5 className="text-4xl font-bold">{worked_at.name}</h5>
        <div className="flex text-lg font-semibold">
          <p>{from}</p>
          <p className="mx-2">-</p>
          <p>{to}</p>
        </div>
      </div>

      <h3 className="text-7xl font-primary uppercase">{position}</h3>

      <div className="flex flex-col font-secondary text-lg font-medium gap-3">
        {achievements.map((curr,idx) => (
          <p key={idx}>{curr}</p>
        ))}
      </div>
    </section>
  )
}