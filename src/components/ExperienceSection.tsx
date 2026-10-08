'use client';

import { useId, useRef, useState } from 'react';
import Image from 'next/image';
import AnimatedSection from './AnimatedSection';
import { experienceCertificates, ExperienceCertificate } from '@/data/certificates';

export default function ExperienceSection() {
  const [selectedCert, setSelectedCert] = useState<ExperienceCertificate | null>(null);
  const dialogRef = useRef<HTMLDialogElement>(null);
  const titleId = useId();

  const openCertModal = (cert: ExperienceCertificate) => {
    setSelectedCert(cert);
    dialogRef.current?.showModal();
  };

  const closeCertModal = () => {
    dialogRef.current?.close();
    setSelectedCert(null);
  };

  return (
    <>
      <AnimatedSection id="experience" className="py-24 px-6 max-w-6xl mx-auto border-t border-border">
        <div className="space-y-8">
          <div className="space-y-2">
            <h2 className="text-3xl sm:text-4xl font-semibold text-foreground tracking-tight">
              Experience and Education
            </h2>
            <p className="text-muted-foreground text-base max-w-xl">
              Studies and internship in cybersecurity, AI/ML and data.
            </p>
          </div>

          <div className="space-y-6">
            {/* B.Tech CSE */}
            <div className="rounded-lg border border-border bg-card p-6 card-hover">
              <div className="flex items-start gap-4">
                <div className="relative w-10 h-10 rounded-md border border-border bg-accent/40 flex items-center justify-center flex-shrink-0 overflow-hidden">
                  <Image
                    src="/logos/jecrc.svg"
                    alt="JECRC logo"
                    width={28}
                    height={28}
                    className="object-contain"
                    onError={(e) => {
                      (e.target as HTMLElement).style.display = 'none';
                    }}
                  />
                  <span className="text-xs font-bold text-muted-foreground">JU</span>
                </div>

                <div className="flex-1">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1">
                    <h3 className="text-lg font-semibold text-foreground">
                      B.Tech CSE (Cybersecurity), JECRC University, Jaipur
                    </h3>
                    <span className="text-xs font-medium text-muted-foreground bg-accent px-2.5 py-1 rounded-md w-fit">
                      2023 to 2027
                    </span>
                  </div>
                  <ul className="list-disc pl-5 mt-3 text-sm text-muted-foreground leading-relaxed">
                    <li>CGPA: 8.55.</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* AI/ML Intern */}
            <div className="rounded-lg border border-border bg-card p-6 card-hover">
              <div className="flex items-start gap-4">
                <div className="relative w-10 h-10 rounded-md border border-border bg-accent/40 flex items-center justify-center flex-shrink-0 overflow-hidden">
                  <Image
                    src="/logos/corizo.svg"
                    alt="Corizo logo"
                    width={28}
                    height={28}
                    className="object-contain"
                    onError={(e) => {
                      (e.target as HTMLElement).style.display = 'none';
                    }}
                  />
                  <span className="text-xs font-bold text-muted-foreground">CE</span>
                </div>

                <div className="flex-1">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1">
                    <h3 className="text-lg font-semibold text-foreground">
                      AI/ML Intern, Corizo Edutech Pvt. Ltd., Remote
                    </h3>
                    <span className="text-xs font-medium text-muted-foreground bg-accent px-2.5 py-1 rounded-md w-fit">
                      Sep 2024 to Oct 2024
                    </span>
                  </div>

                  <ul className="list-disc pl-5 mt-3 text-sm text-muted-foreground leading-relaxed space-y-1">
                    <li>Built end-to-end ML models and data modeling workflows in Python.</li>
                    <li>Applied feature engineering, EDA and visualization to prepare data for model training.</li>
                    <li>Turned raw datasets into decision-ready outputs.</li>
                  </ul>

                  {/* Certificate links */}
                  <div className="mt-4 pt-3 border-t border-border/50 flex flex-wrap gap-3">
                    <button
                      type="button"
                      onClick={() => openCertModal(experienceCertificates[0])}
                      className="text-xs font-medium text-primary hover:underline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary rounded-sm"
                    >
                      Internship certificate &rarr;
                    </button>
                    <button
                      type="button"
                      onClick={() => openCertModal(experienceCertificates[1])}
                      className="text-xs font-medium text-primary hover:underline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary rounded-sm"
                    >
                      Training certificate &rarr;
                    </button>
                  </div>
                </div>
              </div>
            </div>

            {/* Senior Secondary */}
            <div className="rounded-lg border border-border bg-card p-6 card-hover">
              <div className="flex items-start gap-4">
                <div className="relative w-10 h-10 rounded-md border border-border bg-accent/40 flex items-center justify-center flex-shrink-0 overflow-hidden">
                  <Image
                    src="/logos/orion.svg"
                    alt="Orion logo"
                    width={28}
                    height={28}
                    className="object-contain"
                    onError={(e) => {
                      (e.target as HTMLElement).style.display = 'none';
                    }}
                  />
                  <span className="text-xs font-bold text-muted-foreground">OIS</span>
                </div>

                <div className="flex-1">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1">
                    <h3 className="text-lg font-semibold text-foreground">
                      Senior Secondary, Orion International School, Bhopal
                    </h3>
                    <span className="text-xs font-medium text-muted-foreground bg-accent px-2.5 py-1 rounded-md w-fit">
                      2023
                    </span>
                  </div>
                  <ul className="list-disc pl-5 mt-3 text-sm text-muted-foreground leading-relaxed">
                    <li>Scored 81%.</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </AnimatedSection>

      {/* Modal Dialog for Experience Certificates */}
      <dialog
        ref={dialogRef}
        aria-labelledby={titleId}
        onClick={(e) => {
          if (e.target === e.currentTarget) closeCertModal();
        }}
        className="m-auto w-[calc(100%-2rem)] max-w-2xl rounded-lg border border-border bg-card p-0 text-foreground backdrop:bg-black/50"
      >
        {selectedCert && (
          <div className="max-h-[85vh] overflow-y-auto p-6 sm:p-8">
            <div className="flex items-start justify-between gap-4">
              <div>
                <p className="text-xs font-medium text-muted-foreground">{selectedCert.issuer}</p>
                <h3 id={titleId} className="text-xl font-semibold text-foreground mt-1">
                  {selectedCert.name}
                </h3>
                <p className="text-xs text-muted-foreground mt-1">Period: {selectedCert.dateRange}</p>
              </div>
              <button
                type="button"
                onClick={closeCertModal}
                className="rounded-md border border-border px-3 py-1.5 text-sm hover:bg-accent focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
              >
                Close
              </button>
            </div>

            <div className="relative w-full aspect-[4/3] rounded-md border border-border bg-accent/40 overflow-hidden mt-6 flex items-center justify-center">
              <Image
                src={`/certificates/${selectedCert.imageFileName}`}
                alt={`Certificate: ${selectedCert.name}, ${selectedCert.issuer}`}
                fill
                sizes="(max-width: 768px) 100vw, 800px"
                className="object-contain p-3"
                onError={(e) => {
                  (e.target as HTMLElement).style.opacity = '0';
                }}
              />
              <span className="text-sm text-muted-foreground p-4 text-center select-none pointer-events-none">
                {selectedCert.name} ({selectedCert.issuer})
              </span>
            </div>
          </div>
        )}
      </dialog>
    </>
  );
}
