import { projects } from '@/data/projects';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Link from 'next/link';
import { notFound } from 'next/navigation';

export function generateStaticParams() {
  return projects.map((project) => ({
    slug: project.slug,
  }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const project = projects.find((p) => p.slug === slug);
  if (!project) return { title: 'Project Not Found' };

  return {
    title: `${project.title} | Ishika Jaiswal`,
    description: project.description,
  };
}

export default async function ProjectDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const project = projects.find((p) => p.slug === slug);

  if (!project) {
    notFound();
  }

  return (
    <>
      <Navbar />
      <main className="pt-32 pb-20 px-6 max-w-4xl mx-auto min-h-screen">
        <Link
          href="/#projects"
          className="text-xs font-medium text-muted-foreground hover:text-foreground inline-flex items-center gap-1 mb-8 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary rounded-sm"
        >
          &larr; Back to all projects
        </Link>

        <div className="space-y-8">
          <div>
            <div className="flex items-center gap-3">
              <span className="text-xs font-medium text-muted-foreground bg-accent px-2.5 py-1 rounded-md">
                {project.category}
              </span>
              <span className="text-xs text-muted-foreground">{project.date}</span>
            </div>
            <h1 className="text-3xl sm:text-4xl font-semibold text-foreground tracking-tight mt-3">
              {project.title}
            </h1>
          </div>

          {(project.githubUrl || project.liveUrl || project.driveUrl) && (
            <div className="flex flex-wrap gap-4 border-y border-border py-4">
              {project.githubUrl && (
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground hover:opacity-90 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
                >
                  View code on GitHub
                </a>
              )}
              {project.liveUrl && (
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rounded-md border border-border bg-card px-4 py-2 text-sm font-medium text-foreground hover:bg-accent focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
                >
                  Open live site
                </a>
              )}
              {project.driveUrl && (
                <a
                  href={project.driveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rounded-md border border-border bg-card px-4 py-2 text-sm font-medium text-foreground hover:bg-accent focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
                >
                  View file on Google Drive
                </a>
              )}
            </div>
          )}

          {project.screenshotSrc && (
            <div className="rounded-lg border border-border overflow-hidden">
              <img
                src={project.screenshotSrc}
                alt={project.screenshotAlt || `${project.title} screenshot`}
                className="w-full h-auto object-cover"
              />
            </div>
          )}

          <div className="space-y-6 text-foreground">
            <div>
              <h2 className="text-xl font-semibold text-foreground mb-3">Key Highlights</h2>
              <ul className="list-disc pl-5 space-y-2 text-muted-foreground leading-relaxed text-sm sm:text-base">
                {project.bullets.map((bullet) => (
                  <li key={bullet}>{bullet}</li>
                ))}
              </ul>
            </div>

            <div>
              <h2 className="text-xl font-semibold text-foreground mb-2">Tools & Technologies</h2>
              <div className="flex flex-wrap gap-2">
                {project.tools.map((tool) => (
                  <span
                    key={tool}
                    className="rounded-md border border-border bg-card px-3 py-1 text-xs font-medium text-muted-foreground"
                  >
                    {tool}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
