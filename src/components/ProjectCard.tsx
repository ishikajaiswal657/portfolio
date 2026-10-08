'use client';

import { useId, useRef } from 'react';

interface ProjectCardProps {
  title: string;
  category: string;
  date?: string;
  description: string;
  bullets?: string[];
  tools: string[];
  screenshotSrc?: string;
  screenshotAlt?: string;
  githubUrl?: string;
  liveUrl?: string;
  driveUrl?: string;
}

export default function ProjectCard({
  title,
  category,
  date,
  description,
  bullets,
  tools,
  screenshotSrc,
  screenshotAlt = '',
  githubUrl,
  liveUrl,
  driveUrl,
}: ProjectCardProps) {
  const dialogRef = useRef<HTMLDialogElement>(null);
  const titleId = useId();

  const open = () => dialogRef.current?.showModal();
  const close = () => dialogRef.current?.close();

  return (
    <>
      <button
        type="button"
        onClick={open}
        className="block w-full overflow-hidden rounded-lg border border-border bg-card text-left hover:border-primary focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
      >
        {screenshotSrc && (
          <img
            src={screenshotSrc}
            alt={screenshotAlt}
            loading="lazy"
            className="h-44 w-full object-cover"
          />
        )}
        <div className="p-4">
          <div className="flex items-center justify-between gap-2">
            <p className="text-xs font-medium text-muted-foreground">{category}</p>
            {date && <span className="text-xs text-muted-foreground">{date}</span>}
          </div>
          <h3 className="mt-1 text-base font-semibold text-foreground">{title}</h3>
        </div>
      </button>

      <dialog
        ref={dialogRef}
        aria-labelledby={titleId}
        onClick={(e) => {
          if (e.target === e.currentTarget) close();
        }}
        className="m-auto w-[calc(100%-2rem)] max-w-2xl rounded-lg border border-border bg-card p-0 text-foreground backdrop:bg-black/50"
      >
        <div className="max-h-[80vh] overflow-y-auto p-6 sm:p-8">
          <div className="flex items-start justify-between gap-4">
            <div>
              <div className="flex items-center gap-3">
                <p className="text-xs font-medium text-muted-foreground">{category}</p>
                {date && <span className="text-xs text-muted-foreground">{date}</span>}
              </div>
              <h3 id={titleId} className="mt-1 text-2xl font-semibold text-foreground">
                {title}
              </h3>
            </div>
            <button
              type="button"
              onClick={close}
              className="rounded-md border border-border px-3 py-1.5 text-sm hover:bg-accent focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
            >
              Close
            </button>
          </div>

          {screenshotSrc && (
            <img
              src={screenshotSrc}
              alt={screenshotAlt}
              className="mt-6 w-full rounded-md border border-border"
            />
          )}

          <div className="mt-6 text-sm leading-relaxed text-foreground/80 space-y-2">
            {bullets && bullets.length > 0 ? (
              <ul className="list-disc pl-5 space-y-1">
                {bullets.map((b) => (
                  <li key={b}>{b}</li>
                ))}
              </ul>
            ) : (
              <p>{description}</p>
            )}
          </div>

          <p className="mt-4 text-sm">
            <span className="font-semibold text-foreground">Tools: </span>
            <span className="text-muted-foreground">{tools.join(', ')}</span>
          </p>

          {(githubUrl || liveUrl || driveUrl) && (
            <div className="mt-6 flex flex-wrap gap-3">
              {githubUrl && (
                <a
                  href={githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground hover:opacity-90"
                >
                  View code on GitHub
                </a>
              )}
              {liveUrl && (
                <a
                  href={liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rounded-md border border-border px-4 py-2 text-sm font-medium text-foreground hover:bg-accent"
                >
                  Open live site
                </a>
              )}
              {driveUrl && (
                <a
                  href={driveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rounded-md border border-border px-4 py-2 text-sm font-medium text-foreground hover:bg-accent"
                >
                  View file on Google Drive
                </a>
              )}
            </div>
          )}
        </div>
      </dialog>
    </>
  );
}
