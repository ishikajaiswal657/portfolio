'use client';

import { useId, useRef, useState } from 'react';
import Image from 'next/image';
import { Certificate } from '@/data/certificates';

interface CertificateCardProps {
  cert: Certificate;
}

export default function CertificateCard({ cert }: CertificateCardProps) {
  const dialogRef = useRef<HTMLDialogElement>(null);
  const titleId = useId();
  const [imageLoaded, setImageLoaded] = useState(false);

  const open = () => dialogRef.current?.showModal();
  const close = () => dialogRef.current?.close();

  const certImagePath = `/certificates/${cert.imageFileName}`;
  const issuerLogoPath = cert.issuerLogoFileName ? `/logos/${cert.issuerLogoFileName}` : null;

  return (
    <>
      <button
        type="button"
        onClick={open}
        className="block w-full overflow-hidden rounded-lg border border-border bg-card p-4 text-left card-hover focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
      >
        <div className="flex items-center justify-between gap-2 mb-3">
          <span className="text-xs font-medium text-muted-foreground">{cert.issuer}</span>
          {issuerLogoPath && (
            <div className="relative w-5 h-5 flex-shrink-0">
              <Image
                src={issuerLogoPath}
                alt={`${cert.issuer} logo`}
                width={20}
                height={20}
                className="object-contain"
                onError={(e) => {
                  (e.target as HTMLElement).style.display = 'none';
                }}
              />
            </div>
          )}
        </div>

        <div className="relative w-full aspect-[4/3] rounded-md border border-border bg-accent/40 overflow-hidden mb-3 flex items-center justify-center">
          <Image
            src={certImagePath}
            alt={`Certificate: ${cert.name}, ${cert.issuer}`}
            fill
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
            className="object-contain p-2"
            onError={(e) => {
              (e.target as HTMLElement).style.opacity = '0';
            }}
          />
          <span className="text-xs font-medium text-muted-foreground p-2 text-center select-none pointer-events-none">
            {cert.name}
          </span>
        </div>

        <h4 className="text-sm font-semibold text-foreground leading-snug line-clamp-2">
          {cert.name}
        </h4>
        <p className="text-xs text-muted-foreground mt-2">{cert.date}</p>
      </button>

      <dialog
        ref={dialogRef}
        aria-labelledby={titleId}
        onClick={(e) => {
          if (e.target === e.currentTarget) close();
        }}
        className="m-auto w-[calc(100%-2rem)] max-w-2xl rounded-lg border border-border bg-card p-0 text-foreground backdrop:bg-black/50"
      >
        <div className="max-h-[85vh] overflow-y-auto p-6 sm:p-8">
          <div className="flex items-start justify-between gap-4">
            <div>
              <p className="text-xs font-medium text-muted-foreground">{cert.issuer}</p>
              <h3 id={titleId} className="text-xl font-semibold text-foreground mt-1">
                {cert.name}
              </h3>
              <p className="text-xs text-muted-foreground mt-1">Issued: {cert.date}</p>
            </div>
            <button
              type="button"
              onClick={close}
              className="rounded-md border border-border px-3 py-1.5 text-sm hover:bg-accent focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
            >
              Close
            </button>
          </div>

          <div className="relative w-full aspect-[4/3] rounded-md border border-border bg-accent/40 overflow-hidden mt-6 flex items-center justify-center">
            <Image
              src={certImagePath}
              alt={`Certificate: ${cert.name}, ${cert.issuer}`}
              fill
              sizes="(max-width: 768px) 100vw, 800px"
              className={`object-contain p-3 transition-opacity duration-300 ${
                imageLoaded ? 'opacity-100' : 'opacity-90'
              }`}
              onLoad={() => setImageLoaded(true)}
              onError={(e) => {
                (e.target as HTMLElement).style.opacity = '0';
              }}
            />
            <span className="text-sm text-muted-foreground p-4 text-center select-none pointer-events-none">
              {cert.name} ({cert.issuer})
            </span>
          </div>

          {cert.tasksCompleted && cert.tasksCompleted.length > 0 && (
            <div className="mt-6 text-sm">
              <h4 className="font-semibold text-foreground mb-2">Tasks Completed:</h4>
              <ul className="list-disc pl-5 text-muted-foreground space-y-1 text-xs sm:text-sm">
                {cert.tasksCompleted.map((t) => (
                  <li key={t}>{t}</li>
                ))}
              </ul>
            </div>
          )}

          {cert.verifyUrl && (
            <div className="mt-6">
              <a
                href={cert.verifyUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground hover:opacity-90 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
              >
                Verify Credential
              </a>
            </div>
          )}
        </div>
      </dialog>
    </>
  );
}
