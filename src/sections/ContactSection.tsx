import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, MapPin, Phone, Copy, Check, Send, ExternalLink, CheckCircle2 } from 'lucide-react';
import SectionHeader from '../components/SectionHeader';
import { contactInfo } from '../data/portfolioData';

const GmailIcon = ({ className }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor">
    <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z" />
  </svg>
);

const ContactSection: React.FC = () => {
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [copiedMessage, setCopiedMessage] = useState(false);
  const [statusMessage, setStatusMessage] = useState('');
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const copyEmailToClipboard = () => {
    navigator.clipboard.writeText(contactInfo.email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2500);
  };

  const formatEmailPayload = () => {
    const { name, email, subject, message } = formData;
    const cleanSubject = subject.trim()
      ? `[Portfolio] ${subject.trim()} - from ${name.trim() || 'Visitor'}`
      : `[Portfolio Inquiry] from ${name.trim() || 'Visitor'}`;

    const cleanBody = `Hi Shailesh,\n\n${message.trim()}\n\n---\nSender Name: ${name.trim()}\nSender Email: ${email.trim()}\nSent via Portfolio Contact Form`;

    return {
      subject: cleanSubject,
      body: cleanBody,
      encodedSubject: encodeURIComponent(cleanSubject),
      encodedBody: encodeURIComponent(cleanBody),
    };
  };

  // Primary action: Universal mailto: link that opens the default mail app on mobile (Gmail app, Apple Mail, Outlook) and PC
  const handleSendMail = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const { encodedSubject, encodedBody } = formatEmailPayload();
    const mailtoUrl = `mailto:${contactInfo.email}?subject=${encodedSubject}&body=${encodedBody}`;

    setStatusMessage(`Opening your email client to send to ${contactInfo.email}...`);
    
    // Trigger mail client smoothly
    window.location.href = mailtoUrl;

    setTimeout(() => {
      setStatusMessage('');
    }, 6000);
  };

  // Secondary action: Opens Gmail Web composer in browser
  const handleOpenGmailWeb = () => {
    if (!formData.name.trim() || !formData.email.trim() || !formData.message.trim()) {
      // If form isn't filled yet, open Gmail composer with just Shailesh's email
      const simpleGmailUrl = `https://mail.google.com/mail/?view=cm&fs=1&to=${contactInfo.email}`;
      window.open(simpleGmailUrl, '_blank', 'noopener,noreferrer');
      return;
    }

    const { encodedSubject, encodedBody } = formatEmailPayload();
    const gmailUrl = `https://mail.google.com/mail/?view=cm&fs=1&to=${contactInfo.email}&su=${encodedSubject}&body=${encodedBody}`;
    
    setStatusMessage('Opening Gmail Web composer in a new tab...');
    window.open(gmailUrl, '_blank', 'noopener,noreferrer');

    setTimeout(() => {
      setStatusMessage('');
    }, 6000);
  };

  // Copy full message content to clipboard
  const handleCopyMessage = () => {
    const { subject, body } = formatEmailPayload();
    const textToCopy = `To: ${contactInfo.email}\nSubject: ${subject}\n\n${body}`;
    navigator.clipboard.writeText(textToCopy);
    setCopiedMessage(true);
    setTimeout(() => setCopiedMessage(false), 2500);
  };

  return (
    <section id="contact" className="py-16 sm:py-20 relative bg-slate-100/60 dark:bg-slate-900/40 border-t border-slate-200/90 dark:border-slate-800/50 transition-colors duration-300 overflow-hidden scroll-mt-20">
      {/* Ambient background glows */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-600/5 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-violet-600/5 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <SectionHeader
          badge="07 · Contact"
          title="Let's Connect"
          subtitle="I am actively seeking entry-level software developer roles. Feel free to reach out directly!"
        />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 mt-8 items-start">
          {/* Left Column: Direct Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-5 space-y-4"
          >
            <div className="p-6 sm:p-7 rounded-3xl bg-white dark:bg-slate-900/60 border border-slate-200/90 dark:border-slate-800 shadow-sm space-y-5">
              <div>
                <h3 className="text-xl font-bold text-slate-900 dark:text-slate-100">
                  Contact Information
                </h3>
                <p className="text-xs text-slate-500 dark:text-slate-400 mt-1">
                  Have an opportunity or question? Reach out through any channel below.
                </p>
              </div>

              {/* Email Card with 1-click copy & mailto */}
              <div className="group relative p-4 rounded-2xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200/90 dark:border-slate-700/60 hover:border-blue-500/40 transition-all flex items-center justify-between gap-3 shadow-xs">
                <a
                  href={`mailto:${contactInfo.email}`}
                  title="Send email directly"
                  className="flex items-center gap-3.5 min-w-0 flex-1"
                >
                  <div className="w-10 h-10 rounded-xl bg-blue-50 dark:bg-blue-500/10 text-blue-600 dark:text-blue-400 flex items-center justify-center shrink-0 group-hover:scale-105 transition-transform">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div className="min-w-0 flex-1">
                    <p className="text-[11px] font-bold uppercase tracking-wider text-slate-400">Email Address</p>
                    <p className="text-sm font-semibold text-slate-900 dark:text-slate-100 truncate group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                      {contactInfo.email}
                    </p>
                  </div>
                </a>

                <div className="flex items-center gap-1.5 shrink-0">
                  <button
                    type="button"
                    onClick={copyEmailToClipboard}
                    title="Copy email address"
                    className="p-2.5 rounded-xl bg-white dark:bg-slate-700 text-slate-500 dark:text-slate-300 hover:text-blue-600 dark:hover:text-blue-400 border border-slate-200 dark:border-slate-600 shadow-xs hover:scale-105 transition-all cursor-pointer"
                  >
                    {copiedEmail ? (
                      <Check className="w-4 h-4 text-emerald-500" />
                    ) : (
                      <Copy className="w-4 h-4" />
                    )}
                  </button>
                  <button
                    type="button"
                    onClick={handleOpenGmailWeb}
                    title="Open in Gmail Web"
                    className="p-2.5 rounded-xl bg-white dark:bg-slate-700 text-slate-500 dark:text-slate-300 hover:text-red-500 dark:hover:text-red-400 border border-slate-200 dark:border-slate-600 shadow-xs hover:scale-105 transition-all cursor-pointer"
                  >
                    <ExternalLink className="w-4 h-4" />
                  </button>
                </div>
              </div>

              {/* Phone Card */}
              <a
                href={`tel:${contactInfo.phone.replace(/\s+/g, '')}`}
                className="group p-4 rounded-2xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200/90 dark:border-slate-700/60 hover:border-emerald-500/40 transition-all flex items-center gap-3.5 shadow-xs"
              >
                <div className="w-10 h-10 rounded-xl bg-emerald-50 dark:bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 flex items-center justify-center shrink-0 group-hover:scale-105 transition-transform">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-[11px] font-bold uppercase tracking-wider text-slate-400">Phone</p>
                  <p className="text-sm font-semibold text-slate-900 dark:text-slate-100 group-hover:text-emerald-600 dark:group-hover:text-emerald-400 transition-colors">
                    {contactInfo.phone}
                  </p>
                </div>
              </a>

              {/* Location Card */}
              <div className="p-4 rounded-2xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200/90 dark:border-slate-700/60 flex items-center gap-3.5 shadow-xs">
                <div className="w-10 h-10 rounded-xl bg-violet-50 dark:bg-violet-500/10 text-violet-600 dark:text-violet-400 flex items-center justify-center shrink-0">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-[11px] font-bold uppercase tracking-wider text-slate-400">Location</p>
                  <p className="text-sm font-semibold text-slate-900 dark:text-slate-100">
                    {contactInfo.location}
                  </p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right Column: Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="lg:col-span-7"
          >
            <form
              onSubmit={handleSendMail}
              className="p-6 sm:p-8 rounded-3xl bg-white dark:bg-slate-900/60 border border-slate-200/90 dark:border-slate-800 shadow-xl shadow-slate-900/5 space-y-4 relative"
            >
              <div className="mb-2">
                <h3 className="text-xl font-bold text-slate-900 dark:text-slate-100">
                  Send a Message
                </h3>
                <p className="text-xs text-slate-500 dark:text-slate-400 mt-1">
                  Fill in your details below and choose your preferred way to send the message.
                </p>
              </div>

              {/* Status Alert Notification */}
              {statusMessage && (
                <motion.div
                  initial={{ opacity: 0, y: -8 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="p-3.5 rounded-2xl bg-blue-50 dark:bg-blue-950/60 border border-blue-200 dark:border-blue-800/80 text-blue-800 dark:text-blue-300 text-xs font-semibold flex items-center gap-2.5"
                >
                  <CheckCircle2 className="w-4 h-4 text-blue-600 dark:text-blue-400 shrink-0" />
                  <span>{statusMessage}</span>
                </motion.div>
              )}

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-1.5">
                  <label htmlFor="name" className="text-xs font-bold uppercase tracking-wider text-slate-700 dark:text-slate-300">
                    Your Name <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    id="name"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="e.g. John Doe"
                    className="w-full px-4 py-2.5 rounded-xl bg-slate-50/90 focus:bg-white dark:bg-slate-950 dark:focus:bg-slate-900 border border-slate-200 dark:border-slate-700 text-slate-900 dark:text-slate-100 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500/40 focus:border-blue-500 transition-all placeholder:text-slate-400 dark:placeholder:text-slate-500 shadow-xs"
                  />
                </div>

                <div className="space-y-1.5">
                  <label htmlFor="email" className="text-xs font-bold uppercase tracking-wider text-slate-700 dark:text-slate-300">
                    Your Email <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="email"
                    id="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="e.g. john@example.com"
                    className="w-full px-4 py-2.5 rounded-xl bg-slate-50/90 focus:bg-white dark:bg-slate-950 dark:focus:bg-slate-900 border border-slate-200 dark:border-slate-700 text-slate-900 dark:text-slate-100 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500/40 focus:border-blue-500 transition-all placeholder:text-slate-400 dark:placeholder:text-slate-500 shadow-xs"
                  />
                </div>
              </div>

              <div className="space-y-1.5">
                <label htmlFor="subject" className="text-xs font-bold uppercase tracking-wider text-slate-700 dark:text-slate-300">
                  Subject <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  id="subject"
                  required
                  value={formData.subject}
                  onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                  placeholder="e.g. Java Developer Opportunity / Interview Invitation"
                  className="w-full px-4 py-2.5 rounded-xl bg-slate-50/90 focus:bg-white dark:bg-slate-950 dark:focus:bg-slate-900 border border-slate-200 dark:border-slate-700 text-slate-900 dark:text-slate-100 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500/40 focus:border-blue-500 transition-all placeholder:text-slate-400 dark:placeholder:text-slate-500 shadow-xs"
                />
              </div>

              <div className="space-y-1.5">
                <label htmlFor="message" className="text-xs font-bold uppercase tracking-wider text-slate-700 dark:text-slate-300">
                  Message <span className="text-red-500">*</span>
                </label>
                <textarea
                  id="message"
                  required
                  rows={4}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  placeholder="Hi Shailesh, I reviewed your portfolio and would like to discuss..."
                  className="w-full px-4 py-2.5 rounded-xl bg-slate-50/90 focus:bg-white dark:bg-slate-950 dark:focus:bg-slate-900 border border-slate-200 dark:border-slate-700 text-slate-900 dark:text-slate-100 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500/40 focus:border-blue-500 transition-all placeholder:text-slate-400 dark:placeholder:text-slate-500 resize-y shadow-xs"
                />
              </div>

              {/* Action Buttons */}
              <div className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
                {/* Primary Button: Standard / Mobile Mail App */}
                <button
                  type="submit"
                  className="flex-1 inline-flex items-center justify-center gap-2.5 px-6 py-3.5 rounded-xl font-bold text-sm text-white bg-gradient-to-r from-blue-600 via-indigo-600 to-violet-600 hover:from-blue-500 hover:to-violet-500 shadow-lg shadow-blue-700/25 active:scale-98 transition-all focus-visible:outline focus-visible:outline-2 focus-visible:outline-blue-400 cursor-pointer"
                >
                  <Send className="w-4 h-4" />
                  <span>Send via Mail App</span>
                </button>

                {/* Secondary Button: Gmail Web */}
                <button
                  type="button"
                  onClick={handleOpenGmailWeb}
                  className="inline-flex items-center justify-center gap-2 px-5 py-3.5 rounded-xl font-bold text-sm text-slate-800 dark:text-slate-200 bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 border border-slate-200 dark:border-slate-700 active:scale-98 transition-all shadow-xs focus-visible:outline focus-visible:outline-2 focus-visible:outline-blue-400 cursor-pointer"
                  title="Open in Gmail Web in a new tab"
                >
                  <GmailIcon className="w-4.5 h-4.5 text-red-500" />
                  <span>Gmail Web</span>
                </button>

                {/* Optional 1-click copy full message */}
                <button
                  type="button"
                  onClick={handleCopyMessage}
                  title="Copy pre-formatted message text to clipboard"
                  className="inline-flex items-center justify-center p-3.5 rounded-xl text-slate-600 dark:text-slate-400 bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 border border-slate-200 dark:border-slate-700 active:scale-98 transition-all shadow-xs focus-visible:outline focus-visible:outline-2 focus-visible:outline-blue-400 cursor-pointer"
                >
                  {copiedMessage ? (
                    <Check className="w-4.5 h-4.5 text-emerald-500" />
                  ) : (
                    <Copy className="w-4.5 h-4.5" />
                  )}
                </button>
              </div>

              <p className="text-[11px] text-slate-500 dark:text-slate-400 text-center sm:text-left pt-1">
                💡 Works on all devices: Opens your default mail client (Gmail, Apple Mail, Outlook) with your message pre-filled to <span className="font-semibold text-blue-600 dark:text-blue-400">{contactInfo.email}</span>.
              </p>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
