import React from 'react';
import {
  Briefcase,
  GraduationCap,
  Award,
  Calendar,
  MapPin,
  CheckCircle2,
  Download,
} from 'lucide-react';
import {
  experienceTimeline,
  educationList,
  certificationsList,
} from '../data/portfolioData';
import { Badge } from '../components/ui/Badge';
import { Button } from '../components/ui/Button';
import { useSound } from '../context/SoundContext';

export const ExperiencePage: React.FC = () => {
  const { playSuccess } = useSound();

  const handlePrintCV = () => {
    playSuccess();
    window.print();
  };

  return (
    <div className="space-y-16 max-w-4xl">
      {/* 1. Header */}
      <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
        <div className="space-y-3">
          <Badge variant="purple" size="md">
            Career & Credentials
          </Badge>
          <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-zinc-900 dark:text-white">
            Experience & Timeline
          </h1>
          <p className="text-sm sm:text-base text-zinc-600 dark:text-zinc-400 max-w-xl">
            A chronological timeline of roles, engineering responsibilities, and illustrative career stops.
          </p>
        </div>

        <Button
          onClick={handlePrintCV}
          variant="secondary"
          size="md"
          leftIcon={<Download className="w-4 h-4" />}
          className="shrink-0"
        >
          Print / Export CV
        </Button>
      </div>

      {/* Illustrative Note Banner */}
      <div className="p-4 rounded-xl bg-purple-950/20 border border-purple-500/20 text-xs text-purple-300 flex items-center justify-between">
        <span>
          📌 <strong>Note:</strong> All company names and career milestones below are illustrative fictional placeholders designed to demonstrate production portfolio structure.
        </span>
      </div>

      {/* 2. Professional Timeline */}
      <section className="space-y-8">
        <div className="flex items-center gap-2 text-sm font-mono uppercase tracking-wider text-purple-400 font-semibold">
          <Briefcase className="w-4 h-4" />
          <span>Professional Roles</span>
        </div>

        <div className="relative border-l border-zinc-700/60 dark:border-white/10 ml-4 sm:ml-6 space-y-10 pl-6 sm:pl-8">
          {experienceTimeline.map((item) => (
            <div key={item.id} className="relative group">
              {/* Timeline Bullet */}
              <div className="absolute -left-[31px] sm:-left-[39px] top-1.5 w-3.5 h-3.5 rounded-full bg-purple-500 border-4 border-[#09090B] group-hover:scale-125 transition-transform" />

              <div className="p-6 sm:p-7 rounded-2xl bg-zinc-900/60 dark:bg-[#18181D]/80 border border-zinc-200/80 dark:border-white/[0.08] space-y-4 hover:border-purple-500/30 transition-colors shadow-sm">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                  <div>
                    <h3 className="text-lg font-bold text-zinc-900 dark:text-white">
                      {item.role}
                    </h3>
                    <div className="text-sm font-medium text-purple-400">
                      {item.company}
                    </div>
                  </div>

                  <div className="flex items-center gap-2 text-xs font-mono text-zinc-400">
                    <span className="flex items-center gap-1">
                      <Calendar className="w-3.5 h-3.5" />
                      {item.period}
                    </span>
                    <span>•</span>
                    <span className="flex items-center gap-1">
                      <MapPin className="w-3.5 h-3.5" />
                      {item.location}
                    </span>
                  </div>
                </div>

                <p className="text-xs sm:text-sm text-zinc-600 dark:text-zinc-300 leading-relaxed">
                  {item.description}
                </p>

                {/* Key Responsibilities */}
                <div className="space-y-2 pt-1">
                  <div className="text-[11px] font-mono uppercase tracking-wider text-zinc-400 font-semibold">
                    Core Accomplishments:
                  </div>
                  <ul className="space-y-2 text-xs sm:text-sm text-zinc-600 dark:text-zinc-300">
                    {item.responsibilities.map((resp, i) => (
                      <li key={i} className="flex items-start gap-2.5">
                        <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                        <span>{resp}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Tech chips */}
                <div className="flex flex-wrap gap-1.5 pt-3 border-t border-zinc-800">
                  {item.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="text-[11px] font-mono px-2 py-0.5 rounded-md bg-zinc-800/80 text-zinc-300 border border-zinc-700/40"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 3. Education Section */}
      <section className="space-y-6 pt-6">
        <div className="flex items-center gap-2 text-sm font-mono uppercase tracking-wider text-purple-400 font-semibold">
          <GraduationCap className="w-4 h-4" />
          <span>Education</span>
        </div>

        <div className="space-y-4">
          {educationList.map((edu, idx) => (
            <div
              key={idx}
              className="p-6 rounded-2xl bg-zinc-900/60 dark:bg-[#18181D]/80 border border-zinc-200/80 dark:border-white/[0.08] space-y-2"
            >
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1">
                <h3 className="font-bold text-base text-zinc-900 dark:text-white">
                  {edu.degree}
                </h3>
                <span className="text-xs font-mono text-zinc-400">{edu.period}</span>
              </div>
              <div className="text-sm text-purple-400 font-medium">
                {edu.institution}
              </div>
              <p className="text-xs sm:text-sm text-zinc-600 dark:text-zinc-400">
                Focus: {edu.focus}
              </p>
              {edu.honors && (
                <div className="text-xs font-mono text-emerald-400 pt-1">
                  ★ {edu.honors}
                </div>
              )}
            </div>
          ))}
        </div>
      </section>

      {/* 4. Certifications Section */}
      <section className="space-y-6 pt-6">
        <div className="flex items-center gap-2 text-sm font-mono uppercase tracking-wider text-purple-400 font-semibold">
          <Award className="w-4 h-4" />
          <span>Certifications & Specialized Training</span>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          {certificationsList.map((cert) => (
            <div
              key={cert.title}
              className="p-5 rounded-2xl bg-zinc-900/60 dark:bg-[#18181D]/80 border border-zinc-200/80 dark:border-white/[0.08] space-y-2 flex flex-col justify-between"
            >
              <div className="space-y-1">
                <div className="text-xs font-mono text-purple-400">{cert.year}</div>
                <h4 className="font-bold text-sm text-zinc-900 dark:text-white">
                  {cert.title}
                </h4>
                <div className="text-xs text-zinc-400">{cert.issuer}</div>
              </div>
              {cert.credentialId && (
                <div className="text-[10px] font-mono text-zinc-500 pt-2 border-t border-zinc-800">
                  ID: {cert.credentialId}
                </div>
              )}
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};
