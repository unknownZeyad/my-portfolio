import { getExperiencesAction, getExperiencesPagesAction } from '@/core/server/actions/experiences'
import React from 'react'

export const dynamic = "force-dynamic"

async function ExperiencesList() {
  const pages = await getExperiencesPagesAction()
  return Array(pages).fill(0).map((_,idx) => <ExperiencesSection page={idx+1}/>)
}

export default ExperiencesList


async function ExperiencesSection ({ page }: {
  page: number
}) {
  const experiences = await getExperiencesAction(page)

  return experiences.map(curr => (
    <div></div>
  ))
}