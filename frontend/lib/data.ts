export type Job = {
    id: number;
    title: string;
    company: string;
    location: string;
    salary: string;
    stack: string[];
    type: "Full-time" | "Part-time" | "Contract";
    postedAt: string;
};

export const jobs: Job[] = [
    {
        id: 1,
        title: "Senior Frontend Engineer",
        company: "Vercel",
        location: "Remote",
        salary: "$140k – $180k",
        stack: ["Next.js", "TypeScript", "Tailwind"],
        type: "Full-time",
        postedAt: "2026-03-01",
    },
    {
        id: 2,
        title: "Full Stack Developer",
        company: "Supabase",
        location: "Remote",
        salary: "$120k – $150k",
        stack: ["React", "Node.js", "PostgreSQL"],
        type: "Full-time",
        postedAt: "2026-03-02",
    },
    {
        id: 3,
        title: "Backend Engineer",
        company: "PlanetScale",
        location: "San Francisco, CA",
        salary: "$130k – $160k",
        stack: ["NestJS", "Prisma", "Docker"],
        type: "Full-time",
        postedAt: "2026-03-02",
    },
    {
        id: 4,
        title: "AI Integration Engineer",
        company: "Anthropic",
        location: "Remote",
        salary: "$150k – $200k",
        stack: ["Python", "LangChain", "TypeScript"],
        type: "Full-time",
        postedAt: "2026-03-03",
    },
    {
        id: 5,
        title: "DevOps Engineer",
        company: "Fly.io",
        location: "Remote",
        salary: "$110k – $140k",
        stack: ["Docker", "GitHub Actions", "Kubernetes"],
        type: "Contract",
        postedAt: "2026-03-03",
    },
];

export type Developer = {
    id: number;
    name: string;
    bio: string;
    location: string;
    stack: string[];
    yearsOfExperience: number;
    openToWork: boolean;
    github: string;
};

export const developer: Developer = {
    id: 1,
    name: "Agnes Beret",
    bio: "Full stack developer passionate about clean architecture and AI-powered products.",
    location: "Remote",
    stack: ["Next.js", "TypeScript", "NestJS", "PostgreSQL", "LangChain"],
    yearsOfExperience: 3,
    openToWork: true,
    github: "agnesberet",
};