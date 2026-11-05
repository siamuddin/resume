import React, { useState } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import {
  ArrowLeft,
  Calendar,
  Clock,
  Share2,
  Check,
} from 'lucide-react';
import { articles, personalInfo } from '../data/portfolioData';
import { Badge } from '../components/ui/Badge';
import { Button } from '../components/ui/Button';
import { ArticleCard } from '../components/ArticleCard';
import { useSound } from '../context/SoundContext';

export const ArticleDetailPage: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  const navigate = useNavigate();
  const { playClick, playSuccess } = useSound();
  const [copied, setCopied] = useState(false);

  const article = articles.find((a) => a.slug === slug);

  if (!article) {
    return (
      <div className="py-24 text-center space-y-4">
        <h2 className="text-2xl font-bold text-zinc-200">Article Not Found</h2>
        <p className="text-sm text-zinc-400">The requested journal article could not be found.</p>
        <Link to="/journal">
          <Button variant="primary" size="md" leftIcon={<ArrowLeft className="w-4 h-4" />}>
            Back to Journal
          </Button>
        </Link>
      </div>
    );
  }

  const handleShare = () => {
    navigator.clipboard.writeText(window.location.href);
    playSuccess();
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const relatedArticles = articles
    .filter((a) => a.slug !== article.slug)
    .slice(0, 2);

  return (
    <article className="space-y-12 max-w-3xl mx-auto">
      {/* 1. Header & Back Navigation */}
      <div className="space-y-6">
        <button
          onClick={() => {
            playClick();
            navigate('/journal');
          }}
          className="inline-flex items-center gap-1.5 text-xs font-semibold text-zinc-400 hover:text-white transition-colors cursor-pointer group"
        >
          <ArrowLeft className="w-4 h-4 transition-transform group-hover:-translate-x-1" />
          <span>Back to Journal</span>
        </button>

        <div className="space-y-4">
          <div className="flex flex-wrap items-center gap-3 text-xs font-mono text-zinc-400">
            <Badge variant="purple" size="sm">
              {article.category}
            </Badge>
            <span className="flex items-center gap-1">
              <Calendar className="w-3.5 h-3.5" />
              {article.publishDate}
            </span>
            <span>•</span>
            <span className="flex items-center gap-1">
              <Clock className="w-3.5 h-3.5" />
              {article.readingTime}
            </span>
          </div>

          <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-zinc-900 dark:text-white leading-[1.12]">
            {article.title}
          </h1>

          <p className="text-base sm:text-lg text-zinc-600 dark:text-zinc-300 leading-relaxed italic border-l-2 border-purple-500 pl-4 py-1">
            {article.excerpt}
          </p>

          {/* Author Bar & Share */}
          <div className="flex items-center justify-between pt-4 border-t border-zinc-200/80 dark:border-white/[0.08]">
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-full bg-gradient-to-tr from-purple-600 to-sky-400 p-[1.5px]">
                <div className="w-full h-full rounded-full bg-[#09090B] flex items-center justify-center font-bold text-white text-xs">
                  S
                </div>
              </div>
              <div>
                <div className="text-xs font-bold text-zinc-900 dark:text-zinc-200">
                  {personalInfo.name}
                </div>
                <div className="text-[11px] text-zinc-400 font-mono">
                  {personalInfo.role}
                </div>
              </div>
            </div>

            <button
              onClick={handleShare}
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-zinc-800/60 hover:bg-zinc-800 text-xs text-zinc-300 transition-colors border border-zinc-700/60"
            >
              {copied ? (
                <>
                  <Check className="w-3.5 h-3.5 text-emerald-400" />
                  <span className="text-emerald-400">Link Copied!</span>
                </>
              ) : (
                <>
                  <Share2 className="w-3.5 h-3.5" />
                  <span>Share Essay</span>
                </>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* 2. Cover Banner */}
      <div className="rounded-3xl overflow-hidden border border-zinc-200/80 dark:border-white/[0.08] aspect-[16/9] bg-zinc-950 shadow-xl">
        <img
          src={article.coverImage}
          alt={article.title}
          className="w-full h-full object-cover"
        />
      </div>

      {/* 3. Main Content Stream */}
      <div className="space-y-10 pt-4 text-zinc-700 dark:text-zinc-300 text-base leading-relaxed">
        {article.content.map((section, idx) => (
          <section key={idx} className="space-y-4">
            {section.sectionHeading && (
              <h2 className="text-xl sm:text-2xl font-bold text-zinc-900 dark:text-white pt-4">
                {section.sectionHeading}
              </h2>
            )}

            {section.paragraphs.map((p, pIdx) => (
              <p key={pIdx} className="leading-relaxed">
                {p}
              </p>
            ))}

            {section.quote && (
              <blockquote className="my-6 p-5 rounded-2xl bg-purple-950/20 border-l-4 border-purple-500 text-zinc-200 text-base italic font-serif leading-relaxed">
                &ldquo;{section.quote}&rdquo;
              </blockquote>
            )}

            {section.codeSnippet && (
              <div className="my-6 rounded-2xl overflow-hidden border border-zinc-800 bg-[#09090B]">
                <div className="px-4 py-2 border-b border-zinc-800 text-xs font-mono text-zinc-400 flex items-center justify-between">
                  <span>{section.codeSnippet.language}</span>
                  <span className="text-[10px] text-zinc-400">code snippet</span>
                </div>
                <pre className="p-4 text-xs font-mono text-purple-300 overflow-x-auto">
                  <code>{section.codeSnippet.code}</code>
                </pre>
              </div>
            )}
          </section>
        ))}
      </div>

      {/* 4. Tags Footer */}
      <div className="pt-8 border-t border-zinc-200/80 dark:border-white/[0.08] flex flex-wrap items-center gap-2">
        <span className="text-xs font-mono text-zinc-400 mr-2">Tags:</span>
        {article.tags.map((tag) => (
          <span
            key={tag}
            className="text-xs font-mono px-3 py-1 rounded-full bg-zinc-800/80 text-zinc-300 border border-zinc-700/40"
          >
            #{tag}
          </span>
        ))}
      </div>

      {/* 5. Related Articles */}
      <div className="pt-12 border-t border-zinc-200/80 dark:border-white/[0.08] space-y-6">
        <h2 className="text-xl font-bold text-zinc-900 dark:text-white">
          Continue Reading
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {relatedArticles.map((rel) => (
            <ArticleCard key={rel.id} article={rel} />
          ))}
        </div>
      </div>
    </article>
  );
};
