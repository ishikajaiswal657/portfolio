import AnimatedSection from './AnimatedSection';

const achievements = [
  {
    title: 'TATA Teleport participant',
    description: 'Digital innovation challenges.',
    date: 'Nov 2025',
  },
  {
    title: 'Smart India Hackathon (SIH) participant',
    description: 'National-level prototype development.',
    date: 'Sep 2025',
  },
  {
    title: 'NSS volunteer',
    description: 'Community service initiatives.',
    date: 'Jul 2024',
  },
  {
    title: 'OC member, College MUN Society',
    description: 'Organizing committee member for campus Model UN events.',
    date: 'Feb 2024',
  },
];

export default function AchievementsSection() {
  return (
    <AnimatedSection id="achievements" className="py-24 px-6 max-w-6xl mx-auto border-t border-border">
      <div className="space-y-8">
        <div className="space-y-2">
          <h2 className="text-3xl sm:text-4xl font-semibold text-foreground tracking-tight">
            Achievements and Extracurriculars
          </h2>
          <p className="text-muted-foreground text-base max-w-xl">
            Competitions, community involvement and leadership roles.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {achievements.map((item) => (
            <div
              key={item.title}
              className="rounded-lg border border-border bg-card p-5 flex flex-col justify-between card-hover"
            >
              <div>
                <div className="flex items-center justify-between text-xs text-muted-foreground mb-2">
                  <span>{item.date}</span>
                </div>
                <h3 className="text-base font-semibold text-foreground leading-snug">
                  {item.title}
                </h3>
                <p className="text-sm text-muted-foreground mt-2">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </AnimatedSection>
  );
}
