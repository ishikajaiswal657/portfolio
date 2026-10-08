'use client';

import { useState } from 'react';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { projects } from '@/data/projects';
import ProjectCard from './ProjectCard';
import AnimatedSection from './AnimatedSection';

const categories = ['All', 'Cybersecurity', 'Data and ML', 'AI and Automation'];

export default function ProjectsSection() {
  const [selectedCategory, setSelectedCategory] = useState('All');

  const filteredProjects = selectedCategory === 'All'
    ? projects
    : projects.filter((p) => p.category === selectedCategory);

  return (
    <AnimatedSection id="projects" className="py-24 px-6 max-w-6xl mx-auto border-t border-border">
      <div className="space-y-8">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6">
          <div className="space-y-2">
            <h2 className="text-3xl sm:text-4xl font-semibold text-foreground tracking-tight">
              Projects
            </h2>
            <p className="text-muted-foreground text-base max-w-xl">
              Security tools, forensic casework, machine learning and automation.
            </p>
          </div>

          <div className="flex flex-wrap gap-2" role="tablist" aria-label="Project Categories">
            {categories.map((cat) => {
              const isActive = selectedCategory === cat;
              return (
                <button
                  key={cat}
                  type="button"
                  onClick={() => setSelectedCategory(cat)}
                  className={`rounded-md px-3.5 py-1.5 text-sm font-medium transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary ${
                    isActive
                      ? 'bg-primary text-primary-foreground'
                      : 'border border-border bg-card text-muted-foreground hover:text-foreground hover:bg-accent'
                  }`}
                >
                  {cat}
                </button>
              );
            })}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProjects.map((project) => (
            <div key={project.title} className="flex flex-col card-hover">
              <ProjectCard
                title={project.title}
                category={project.category}
                date={project.date}
                description={project.description}
                bullets={project.bullets}
                tools={project.tools}
                screenshotSrc={project.screenshotSrc}
                screenshotAlt={project.screenshotAlt}
                githubUrl={project.githubUrl}
                liveUrl={project.liveUrl}
                driveUrl={project.driveUrl}
              />
              <div className="mt-2 text-right">
                <Link
                  href={`/projects/${project.slug}`}
                  className="inline-flex items-center gap-1 text-xs font-medium text-muted-foreground hover:text-foreground focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary rounded-sm"
                >
                  <span>Details</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </AnimatedSection>
  );
}
