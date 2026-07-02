import Image from "next/image";

const projects = [
  {
    name: "Project Atlas",
    type: "Web Platform",
    description:
      "A dashboard for tracking product metrics, release status, and live system signals in one place.",
    stack: ["Next.js", "TypeScript", "Charts"],
  },
  {
    name: "Signal Vault",
    type: "Tooling",
    description:
      "A secure project notes workspace for storing ideas, snippets, and technical references with structure.",
    stack: ["React", "API", "Auth"],
  },
  {
    name: "Neon Commerce",
    type: "E-commerce",
    description:
      "A sleek storefront concept focused on fast browsing, sharp product presentation, and conversion flows.",
    stack: ["Next.js", "Tailwind", "Performance"],
  },
];

export default function Home() {
  return (
    <main className="min-h-screen overflow-hidden bg-[#050816] text-slate-100">
      <div className="pointer-events-none fixed inset-0 bg-[radial-gradient(circle_at_top,rgba(56,189,248,0.2),transparent_32%),radial-gradient(circle_at_75%_18%,rgba(14,165,233,0.15),transparent_22%),radial-gradient(circle_at_bottom_right,rgba(34,197,94,0.12),transparent_28%),linear-gradient(to_bottom,rgba(5,8,22,0.96),rgba(2,6,23,1))]" />
      <div className="pointer-events-none fixed inset-0 opacity-25 [background-image:linear-gradient(rgba(148,163,184,0.08)_1px,transparent_1px),linear-gradient(90deg,rgba(148,163,184,0.08)_1px,transparent_1px)] [background-size:72px_72px]" />

      <div className="relative mx-auto flex w-full max-w-6xl flex-col gap-24 px-6 py-8 sm:px-10 lg:px-12">
        <header className="flex items-center justify-between border-b border-white/10 py-4">
          <div>
            <p className="text-xs uppercase tracking-[0.45em] text-cyan-300">
              Portfolio
            </p>
            <p className="mt-2 text-sm text-slate-400">Jhon Biancent Recede</p>
          </div>
          <a
            className="rounded-full border border-cyan-400/30 bg-cyan-400/10 px-4 py-2 text-sm text-cyan-200 transition hover:border-cyan-300 hover:bg-cyan-300/15"
            href="#projects"
          >
            View projects
          </a>
        </header>

        <section className="grid min-h-[calc(100vh-7rem)] items-center gap-10 py-10 lg:grid-cols-[1.1fr_0.9fr] lg:py-16">
          <div className="relative order-1 min-h-[28rem] overflow-hidden rounded-[2rem] border border-white/10 bg-slate-950 shadow-2xl shadow-cyan-950/30 lg:order-1">
            <Image
              src="/hero/user-profile.jpg"
              alt="Portrait of Jhon Biancent Recede"
              fill
              priority
              sizes="(max-width: 1024px) 100vw, 55vw"
              className="object-cover object-center"
            />
            <div className="absolute inset-0 bg-[linear-gradient(to_top,rgba(2,6,23,0.7),transparent_55%),linear-gradient(90deg,rgba(5,8,22,0.32),transparent_40%)]" />
          </div>

          <div className="relative order-2 z-10 max-w-3xl lg:order-2">
            <div className="max-w-3xl">
              <h1 className="max-w-2xl text-5xl font-semibold tracking-tight text-white sm:text-6xl lg:text-7xl">
                HI I'M JEYBI!
              </h1>
              <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-300 sm:text-xl">
                I&apos;m Jhon Biancent Recede, a frontend-focused developer
                creating clean, fast, and visually deliberate experiences with
                Next.js, TypeScript, and React.
              </p>

              <div className="mt-8 flex flex-wrap gap-3">
                <a
                  href="#projects"
                  className="rounded-full bg-cyan-400 px-5 py-3 text-sm font-medium text-slate-950 transition hover:bg-cyan-300"
                >
                  Explore projects
                </a>
                <a
                  href="#about"
                  className="rounded-full border border-white/15 bg-white/5 px-5 py-3 text-sm font-medium text-white transition hover:bg-white/10"
                >
                  About me
                </a>
              </div>

              <div className="mt-10 grid max-w-md grid-cols-2 border-y border-white/10 py-5">
                <div>
                  <p className="text-4xl font-semibold text-white">03</p>
                  <p className="mt-2 text-sm text-slate-400">
                    Software projects
                  </p>
                </div>
                <div className="border-l border-white/10 pl-6">
                  <p className="text-4xl font-semibold text-white">01+</p>
                  <p className="mt-2 text-sm text-slate-400">
                    Years experience
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section
          id="about"
          className="grid gap-8 rounded-[2rem] border border-white/10 bg-white/5 p-8 backdrop-blur lg:grid-cols-[0.95fr_1.05fr]"
        >
          <div>
            <p className="text-sm uppercase tracking-[0.35em] text-cyan-300">
              Introduction
            </p>
            <h2 className="mt-4 text-3xl font-semibold text-white">
              A focused intro section for who you are and what you build.
            </h2>
          </div>

          <div className="space-y-6 text-slate-300">
            <p className="text-base leading-8">
              Use this space to introduce yourself, your background, and the kind
              of problems you like solving. Keep it concise and specific.
            </p>
          </div>
        </section>

        <section id="projects" className="pb-10">
          <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
            <div>
              <p className="text-sm uppercase tracking-[0.35em] text-cyan-300">
                Projects
              </p>
              <h2 className="mt-4 text-3xl font-semibold text-white sm:text-4xl">
                A clean place to showcase software work.
              </h2>
            </div>
            <p className="max-w-xl text-sm leading-7 text-slate-400">
              Replace these sample cards with your own projects as you build out
              the site.
            </p>
          </div>

          <div className="mt-8 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
            {projects.map((project) => (
              <article
                key={project.name}
                className="group rounded-3xl border border-white/10 bg-slate-950/70 p-6 transition duration-300 hover:-translate-y-1 hover:border-cyan-400/40 hover:bg-slate-950"
              >
                <p className="text-sm uppercase tracking-[0.3em] text-slate-500">
                  {project.type}
                </p>
                <h3 className="mt-4 text-2xl font-semibold text-white">
                  {project.name}
                </h3>
                <p className="mt-4 leading-7 text-slate-300">
                  {project.description}
                </p>
                <div className="mt-6 flex flex-wrap gap-2">
                  {project.stack.map((item) => (
                    <span
                      key={item}
                      className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-slate-300"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </article>
            ))}
          </div>
        </section>
      </div>
    </main>
  );
}
