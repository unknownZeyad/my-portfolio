import { z } from "zod";

const urlRegex = /^(https?:\/\/)?([\w-]+(\.[\w-]+)+)(:\d{1,5})?(\/\S*)?$/;

export const createProjectSchema = z.object({
  name: z.string({
    required_error: "project name is required",
  }).min(3,"project name must be at least 3 chars"),
  description: z.string({
    required_error: "project description is required",
  }).min(3,"project description must be at least 3 chars"),
  pinned: z.boolean().optional(),
  listing_priority: z.number().optional(),
  deployment_url: z.string().regex(urlRegex,"deployment url is not valid").optional(),
  github_repo_url: z.string().regex(urlRegex,"github repository url is not valid").optional(),
})