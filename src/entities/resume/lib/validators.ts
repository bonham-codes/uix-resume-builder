import { z } from 'zod';

const personalDetailsValidator = z.object({
  fullName: z.string().min(1),
  email: z.email(),
  phone: z.number(),
  linkedin: z.url(),
  github: z.url(),
  address: z.string(),
});

const educationValidator = z.object({
  institution: z.string(),
  degree: z.string(),
  fieldofStudy: z.string(),
  location: z.string(),
  startDate: z.object({ month: z.string(), year: z.number() }),
  endDate: z.object({ month: z.string(), year: z.number() }),
  ongoing: z.boolean(),
  grade: z.object({ type: z.string(), value: z.string(), scale: z.string() }),
});

const experienceValidator = z.object({
  company: z.string(),
  position: z.string(),
  location: z.string(),
  startDate: z.object({ month: z.string(), year: z.number() }),
  endDate: z.object({ month: z.string(), year: z.number() }),
  ongoing: z.boolean(),
  description: z.string(),
});

const projectsValidator = z.object({
  title: z.string(),
  description: z.string(),
  techStack: z.array(z.string()),
  startDate: z.object({ month: z.string(), year: z.number() }),
  endDate: z.object({ month: z.string(), year: z.number() }),
  ongoing: z.boolean(),
  link: z.url(),
});

const certificationsValidator = z.object({
  title: z.string(),
  issuer: z.string(),
  startDate: z.object({ month: z.string(), year: z.number() }),
  endDate: z.object({ month: z.string(), year: z.number() }),
  ongoing: z.boolean(),
  link: z.url(),
});

const skillsValidator = z.array(z.string());
const achievementsValidator = z.array(z.string());
const interestsValidator = z.array(z.string());

export const resumeDataValidator = z.object({
  personalDetails: personalDetailsValidator,
  education: z.array(educationValidator),
  experience: z.array(experienceValidator),
  projects: z.array(projectsValidator),
  certifications: z.array(certificationsValidator),
  skills: skillsValidator,
  achievements: achievementsValidator,
  interests: interestsValidator,
});
