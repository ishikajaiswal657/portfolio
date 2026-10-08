import { certificates } from '@/data/certificates';
import CertificateCard from './CertificateCard';
import AnimatedSection from './AnimatedSection';

const categories = ['Cybersecurity', 'Networking', 'Data analytics and AI', 'Programming'] as const;

export default function CertificationsSection() {
  return (
    <AnimatedSection id="certifications" className="py-24 px-6 max-w-6xl mx-auto border-t border-border">
      <div className="space-y-12">
        <div className="space-y-2">
          <h2 className="text-3xl sm:text-4xl font-semibold text-foreground tracking-tight">
            Certifications
          </h2>
          <p className="text-muted-foreground text-base max-w-xl">
            Credentials in security, networking and data analytics.
          </p>
        </div>

        <div className="space-y-12">
          {categories.map((category) => {
            const groupCerts = certificates.filter((c) => c.category === category);
            if (groupCerts.length === 0) return null;

            return (
              <div key={category} className="space-y-4">
                <h3 className="text-lg font-semibold text-foreground border-b border-border/50 pb-2">
                  {category}
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                  {groupCerts.map((cert) => (
                    <CertificateCard key={cert.id} cert={cert} />
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </AnimatedSection>
  );
}
