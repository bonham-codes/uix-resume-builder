import { ResumeTemplate } from "../types";

const classicTemplate: ResumeTemplate = {
  name: "Classic",
  page: {
    width: 794,
    padding: 28,
    background: "#ffffff",
    className: "text-zinc-900",
  },
  body: {
    type: "container",
    direction: "column",
    gap: 16,
    children: [
      {
        type: "container",
        direction: "row",
        justify: "between",
        align: "center",
        children: [
          {
            type: "container",
            direction: "column",
            gap: 4,
            children: [
              { type: "text", text: { path: "data.name", fallback: "Your Name" }, variant: "h1", weight: "bold" },
              { type: "text", text: { path: "data.title", fallback: "Job Title" }, variant: "subtitle" },
            ],
          },
          {
            type: "container",
            direction: "column",
            align: "end",
            children: [
              { type: "text", text: { path: "data.contact.email", fallback: "email@example.com" }, variant: "small" },
              { type: "text", text: { path: "data.contact.phone", fallback: "+1 555-123-4567" }, variant: "small" },
              { type: "text", text: { path: "data.contact.location", fallback: "City, Country" }, variant: "small" },
            ],
          },
        ],
      },
      { type: "divider", thickness: 2, color: "#e5e7eb" },
      {
        type: "container",
        direction: "column",
        gap: 8,
        children: [
          { type: "text", text: "Summary", variant: "h3", weight: "semibold" },
          { type: "text", text: { path: "data.summary", fallback: "A brief professional summary goes here." } },
        ],
      },
      {
        type: "container",
        direction: "column",
        gap: 8,
        children: [
          { type: "text", text: "Experience", variant: "h3", weight: "semibold" },
          {
            type: "list",
            source: "data.experience",
            itemClassName: "mb-3",
            item: [
              {
                type: "container",
                direction: "row",
                justify: "between",
                children: [
                  { type: "text", text: { path: "item.role", fallback: "Role" }, weight: "semibold" },
                  { type: "text", text: { path: "item.period", fallback: "2020 - Present" }, variant: "small", className: "text-zinc-500" },
                ],
              },
              { type: "text", text: { path: "item.company", fallback: "Company" }, variant: "small", className: "text-zinc-600" },
              { type: "text", text: { path: "item.description", fallback: "What you did." }, className: "text-zinc-700" },
            ],
            emptyText: "No experience provided",
          },
        ],
      },
      {
        type: "container",
        direction: "row",
        gap: 24,
        children: [
          {
            type: "container",
            direction: "column",
            gap: 8,
            width: "60%",
            children: [
              { type: "text", text: "Projects", variant: "h3", weight: "semibold" },
              {
                type: "list",
                source: "data.projects",
                itemClassName: "mb-3",
                item: [
                  { type: "text", text: { path: "item.name", fallback: "Project Name" }, weight: "semibold" },
                  { type: "text", text: { path: "item.description", fallback: "Short project description." } },
                ],
                emptyText: "No projects provided",
              },
            ],
          },
          {
            type: "container",
            direction: "column",
            gap: 8,
            width: "40%",
            children: [
              { type: "text", text: "Skills", variant: "h3", weight: "semibold" },
              {
                type: "list",
                source: "data.skills",
                itemClassName: "flex flex-wrap gap-2",
                item: [
                  { type: "text", text: { path: "item", fallback: "Skill" }, className: "px-2 py-1 rounded bg-zinc-100 text-zinc-700 text-sm" },
                ],
                emptyText: "No skills provided",
              },
            ],
          },
        ],
      },
    ],
  },
};

export default classicTemplate;


