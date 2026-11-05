import React, { useState } from 'react';
import confetti from 'canvas-confetti';
import { motion } from 'framer-motion';
import {
  Mail,
  Send,
  Copy,
  Check,
  MapPin,
  Clock,
  Sparkles,
  ExternalLink,
} from 'lucide-react';
import { personalInfo } from '../data/portfolioData';
import { Badge } from '../components/ui/Badge';
import { Button } from '../components/ui/Button';
import { useSound } from '../context/SoundContext';

export const ContactPage: React.FC = () => {
  const { playClick, playSuccess } = useSound();
  const [copied, setCopied] = useState(false);

  // Form State
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: 'Project Inquiry',
    message: '',
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const validateForm = () => {
    const newErrors: Record<string, string> = {};
    if (!formData.name.trim()) newErrors.name = 'Please provide your name.';
    if (!formData.email.trim()) {
      newErrors.email = 'Please provide your email address.';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email address.';
    }
    if (!formData.message.trim() || formData.message.trim().length < 10) {
      newErrors.message = 'Please write a message with at least 10 characters.';
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    playClick();

    if (!validateForm()) return;

    setIsSubmitting(true);

    // Simulate reliable dispatch
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      playSuccess();

      confetti({
        particleCount: 60,
        spread: 70,
        origin: { y: 0.6 },
        colors: ['#8B5CF6', '#38BDF8', '#10B981'],
      });
    }, 900);
  };

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(personalInfo.email);
    playSuccess();
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="space-y-12 max-w-5xl">
      {/* 1. Header */}
      <div className="space-y-3 max-w-2xl">
        <Badge variant="purple" size="md">
          Get in Touch
        </Badge>
        <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-zinc-900 dark:text-white">
          Let&apos;s Start a Conversation
        </h1>
        <p className="text-sm sm:text-base text-zinc-600 dark:text-zinc-400">
          Have an inquiry, an interesting collaboration proposal, or just want to discuss design systems? Send a direct message below.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        {/* 2. Contact Information & Direct Channels */}
        <div className="lg:col-span-5 space-y-6">
          {/* Direct Email Card */}
          <div className="p-6 rounded-3xl bg-zinc-900/60 dark:bg-[#18181D]/80 border border-zinc-200/80 dark:border-white/[0.08] space-y-4 shadow-sm">
            <div className="flex items-center gap-3">
              <div className="p-2.5 rounded-xl bg-purple-500/10 text-purple-400 border border-purple-500/20">
                <Mail className="w-5 h-5" />
              </div>
              <div>
                <h3 className="font-bold text-sm text-zinc-900 dark:text-white">
                  Direct Email
                </h3>
                <span className="text-xs text-zinc-400">Inboxes monitored daily</span>
              </div>
            </div>

            <div className="flex items-center justify-between p-3 rounded-xl bg-black/40 border border-zinc-800 text-xs font-mono">
              <span className="text-zinc-200 truncate">{personalInfo.email}</span>
              <button
                onClick={handleCopyEmail}
                className="p-1.5 rounded-lg bg-zinc-800 hover:bg-zinc-700 text-zinc-300 hover:text-white transition-colors cursor-pointer"
                title="Copy email to clipboard"
              >
                {copied ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4" />}
              </button>
            </div>
          </div>

          {/* Timezone & Availability Card */}
          <div className="p-6 rounded-3xl bg-zinc-900/60 dark:bg-[#18181D]/80 border border-zinc-200/80 dark:border-white/[0.08] space-y-4 shadow-sm">
            <h3 className="text-xs font-mono uppercase tracking-wider text-purple-400 font-semibold">
              Location & Availability
            </h3>

            <div className="space-y-3 text-xs sm:text-sm text-zinc-400">
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-purple-400 shrink-0 mt-0.5" />
                <span>Based in {personalInfo.location} (UTC+6)</span>
              </div>
              <div className="flex items-start gap-2.5">
                <Clock className="w-4 h-4 text-sky-400 shrink-0 mt-0.5" />
                <span>Typically responding within 24–48 business hours</span>
              </div>
              <div className="flex items-start gap-2.5">
                <Sparkles className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                <span>{personalInfo.availability}</span>
              </div>
            </div>
          </div>

          {/* Social Profiles */}
          <div className="p-6 rounded-3xl bg-zinc-900/60 dark:bg-[#18181D]/80 border border-zinc-200/80 dark:border-white/[0.08] space-y-3 shadow-sm">
            <h3 className="text-xs font-mono uppercase tracking-wider text-purple-400 font-semibold">
              Digital Footprint
            </h3>
            <div className="grid grid-cols-2 gap-2">
              {personalInfo.socials.map((social) => (
                <a
                  key={social.platform}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 rounded-xl bg-zinc-800/40 hover:bg-zinc-800/90 border border-zinc-700/40 text-xs font-medium text-zinc-300 hover:text-white transition-colors flex items-center justify-between group"
                >
                  <span>{social.platform}</span>
                  <ExternalLink className="w-3.5 h-3.5 text-zinc-500 group-hover:text-purple-400 transition-colors" />
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* 3. Interactive Contact Form */}
        <div className="lg:col-span-7">
          <div className="p-6 sm:p-8 rounded-3xl bg-zinc-900/60 dark:bg-[#18181D]/80 border border-zinc-200/80 dark:border-white/[0.08] shadow-sm">
            {isSubmitted ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="py-12 text-center space-y-4"
              >
                <div className="w-16 h-16 rounded-full bg-emerald-500/10 text-emerald-400 border border-emerald-500/30 flex items-center justify-center mx-auto">
                  <Check className="w-8 h-8" />
                </div>
                <h3 className="text-2xl font-bold text-white">Message Dispatched!</h3>
                <p className="text-sm text-zinc-400 max-w-md mx-auto leading-relaxed">
                  Thank you for reaching out, <span className="text-zinc-200 font-semibold">{formData.name}</span>. Your message has been received and Siam will respond shortly.
                </p>
                <button
                  onClick={() => {
                    setIsSubmitted(false);
                    setFormData({ name: '', email: '', subject: 'Project Inquiry', message: '' });
                  }}
                  className="text-xs font-semibold text-purple-400 hover:underline pt-4 cursor-pointer"
                >
                  Send another message →
                </button>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="space-y-1">
                  <h3 className="text-xl font-bold text-zinc-900 dark:text-white">
                    Send an Inquiry
                  </h3>
                  <p className="text-xs text-zinc-400">
                    Fill out the form below with your project details.
                  </p>
                </div>

                {/* Name */}
                <div className="space-y-1.5">
                  <label className="text-xs font-mono text-zinc-400 font-medium">
                    Your Name <span className="text-rose-400">*</span>
                  </label>
                  <input
                    type="text"
                    placeholder="Ada Lovelace"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className={`w-full px-4 py-2.5 rounded-xl bg-zinc-800/40 dark:bg-[#111114] border text-sm text-zinc-100 placeholder-zinc-500 outline-none transition-colors ${
                      errors.name ? 'border-rose-500' : 'border-zinc-700/60 dark:border-white/10 focus:border-purple-500'
                    }`}
                  />
                  {errors.name && <p className="text-xs text-rose-400">{errors.name}</p>}
                </div>

                {/* Email */}
                <div className="space-y-1.5">
                  <label className="text-xs font-mono text-zinc-400 font-medium">
                    Email Address <span className="text-rose-400">*</span>
                  </label>
                  <input
                    type="email"
                    placeholder="ada@example.com"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className={`w-full px-4 py-2.5 rounded-xl bg-zinc-800/40 dark:bg-[#111114] border text-sm text-zinc-100 placeholder-zinc-500 outline-none transition-colors ${
                      errors.email ? 'border-rose-500' : 'border-zinc-700/60 dark:border-white/10 focus:border-purple-500'
                    }`}
                  />
                  {errors.email && <p className="text-xs text-rose-400">{errors.email}</p>}
                </div>

                {/* Subject Selector */}
                <div className="space-y-1.5">
                  <label className="text-xs font-mono text-zinc-400 font-medium">
                    Inquiry Topic
                  </label>
                  <select
                    value={formData.subject}
                    onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                    className="w-full px-4 py-2.5 rounded-xl bg-zinc-800/40 dark:bg-[#111114] border border-zinc-700/60 dark:border-white/10 text-sm text-zinc-100 outline-none focus:border-purple-500"
                  >
                    <option value="Project Inquiry">New Project or Product Collaboration</option>
                    <option value="Design System Consulting">Design System Architecture</option>
                    <option value="Frontend Engineering Contract">Frontend / Creative Engineering Contract</option>
                    <option value="General Conversation">Friendly Hello / Feedback</option>
                  </select>
                </div>

                {/* Message */}
                <div className="space-y-1.5">
                  <label className="text-xs font-mono text-zinc-400 font-medium">
                    Message <span className="text-rose-400">*</span>
                  </label>
                  <textarea
                    rows={5}
                    placeholder="Tell me about what you are building, timeline expectations, or ideas..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className={`w-full px-4 py-2.5 rounded-xl bg-zinc-800/40 dark:bg-[#111114] border text-sm text-zinc-100 placeholder-zinc-500 outline-none transition-colors resize-none ${
                      errors.message ? 'border-rose-500' : 'border-zinc-700/60 dark:border-white/10 focus:border-purple-500'
                    }`}
                  />
                  {errors.message && <p className="text-xs text-rose-400">{errors.message}</p>}
                </div>

                {/* Submit Button */}
                <Button
                  type="submit"
                  variant="primary"
                  size="lg"
                  isLoading={isSubmitting}
                  rightIcon={<Send className="w-4 h-4" />}
                  className="w-full sm:w-auto"
                >
                  Send Message
                </Button>
              </form>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
