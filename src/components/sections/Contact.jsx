import { useState } from 'react';
import SectionHeader from '../common/SectionHeader';
import { PORTFOLIO_DATA } from '../../constants/portfolioData';
import { Mail, Phone, MapPin, Send, Copy, Check, MessageSquare } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from '../common/Icons';

const Contact = () => {
  const { personalInfo } = PORTFOLIO_DATA;
  const [copiedType, setCopiedType] = useState(null);
  const [formData, setFormData] = useState({ name: '', email: '', subject: '', message: '' });
  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleCopy = (text, type) => {
    navigator.clipboard.writeText(text);
    setCopiedType(type);
    setTimeout(() => setCopiedType(null), 2000);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;

    setIsSubmitting(true);

    try {
      // Free Web3Forms API endpoint (Delivers directly to logeshlp25@gmail.com)
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json'
        },
        body: JSON.stringify({
          access_key: 'YOUR_WEB3FORMS_ACCESS_KEY', // Get 1-click free key at web3forms.com
          name: formData.name,
          email: formData.email,
          subject: formData.subject || `New Portfolio Message from ${formData.name}`,
          message: formData.message
        })
      });

      const result = await response.json();
      if (result.success) {
        setSubmitted(true);
      } else {
        // Fallback: Open mailto directly if API key is pending
        const mailSubject = encodeURIComponent(formData.subject || `Portfolio Inquiry from ${formData.name}`);
        const mailBody = encodeURIComponent(`Hi Logesh,\n\n${formData.message}\n\nFrom: ${formData.name} (${formData.email})`);
        window.location.href = `mailto:${personalInfo.email}?subject=${mailSubject}&body=${mailBody}`;
        setSubmitted(true);
      }
    } catch {
      // Fallback
      const mailSubject = encodeURIComponent(formData.subject || `Portfolio Inquiry from ${formData.name}`);
      const mailBody = encodeURIComponent(`Hi Logesh,\n\n${formData.message}\n\nFrom: ${formData.name} (${formData.email})`);
      window.location.href = `mailto:${personalInfo.email}?subject=${mailSubject}&body=${mailBody}`;
      setSubmitted(true);
    } 
    finally {
      setIsSubmitting(false);
      setTimeout(() => {
        setSubmitted(false);
        setFormData({ name: '', email: '', subject: '', message: '' });
      }, 5000);
    }
  };

  return (
    <section id="contact" className="py-20 relative">
      <div className="max-w-[1536px] mx-auto px-4 sm:px-10 lg:px-12">
        
        <SectionHeader
          badge="Get In Touch"
          title="Let's Build Something"
          highlight="Great Together"
        />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* Contact Details Card */}
          <div className="lg:col-span-5">
            <div className="bg-slate-900 border border-slate-800 rounded-2xl p-4 sm:p-8 space-y-6 shadow-xl h-full flex flex-col justify-between">
              <div>
                <h3 className="text-xl font-bold text-white flex items-center gap-2 mb-2">
                  <MessageSquare className="w-5 h-5 text-cyan-400 shrink-0" />
                  Contact Information
                </h3>
                <p className="text-slate-400 text-xs sm:text-sm leading-relaxed mb-6">
                  Feel free to reach out directly via email or phone. I'm quick to respond!
                </p>

                <div className="space-y-4">
                  {/* Email Box */}
                  <div className="p-3.5 sm:p-4 rounded-xl bg-slate-950/60 border border-slate-800 flex items-center justify-between gap-2 group min-w-0">
                    <div className="flex items-center gap-2.5 sm:gap-3 min-w-0 flex-1">
                      <div className="p-2.5 rounded-lg bg-cyan-500/10 text-cyan-400 shrink-0">
                        <Mail className="w-5 h-5" />
                      </div>
                      <div className="min-w-0 flex-1">
                        <p className="text-xs text-slate-400">Email Address</p>
                        <p className="text-xs sm:text-sm font-semibold text-white truncate max-w-full">
                          {personalInfo.email}
                        </p>
                      </div>
                    </div>
                    <button
                      onClick={() => handleCopy(personalInfo.email, 'email')}
                      className="p-2 rounded-lg bg-slate-800 text-slate-400 hover:text-cyan-400 hover:bg-slate-700 transition shrink-0"
                      title="Copy Email"
                    >
                      {copiedType === 'email' ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4" />}
                    </button>
                  </div>

                  {/* Phone Box */}
                  <div className="p-3.5 sm:p-4 rounded-xl bg-slate-950/60 border border-slate-800 flex items-center justify-between gap-2 group min-w-0">
                    <div className="flex items-center gap-2.5 sm:gap-3 min-w-0 flex-1">
                      <div className="p-2.5 rounded-lg bg-teal-500/10 text-teal-400 shrink-0">
                        <Phone className="w-5 h-5" />
                      </div>
                      <div className="min-w-0 flex-1">
                        <p className="text-xs text-slate-400">Phone / WhatsApp</p>
                        <p className="text-xs sm:text-sm font-semibold text-white truncate">
                          {personalInfo.phone}
                        </p>
                      </div>
                    </div>
                    <button
                      onClick={() => handleCopy(personalInfo.phone, 'phone')}
                      className="p-2 rounded-lg bg-slate-800 text-slate-400 hover:text-teal-400 hover:bg-slate-700 transition shrink-0"
                      title="Copy Phone"
                    >
                      {copiedType === 'phone' ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4" />}
                    </button>
                  </div>

                  {/* Location Box */}
                  <div className="p-3.5 sm:p-4 rounded-xl bg-slate-950/60 border border-slate-800 flex items-center gap-2.5 sm:gap-3 min-w-0">
                    <div className="p-2.5 rounded-lg bg-blue-500/10 text-blue-400 shrink-0">
                      <MapPin className="w-5 h-5" />
                    </div>
                    <div className="min-w-0 flex-1">
                      <p className="text-xs text-slate-400">Location</p>
                      <p className="text-xs sm:text-sm font-semibold text-white truncate">
                        {personalInfo.location}
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Social Links */}
              <div className="pt-6 border-t border-slate-800 flex items-center gap-3 mt-6">
                <a
                  href={personalInfo.github}
                  target="_blank"
                  rel="noreferrer"
                  className="flex-1 flex items-center justify-center gap-2 p-3 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-200 hover:text-white font-semibold text-xs transition border border-slate-700"
                >
                  <GithubIcon className="w-4 h-4" /> GitHub
                </a>
                <a
                  href={personalInfo.linkedin}
                  target="_blank"
                  rel="noreferrer"
                  className="flex-1 flex items-center justify-center gap-2 p-3 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-200 hover:text-white font-semibold text-xs transition border border-slate-700"
                >
                  <LinkedinIcon className="w-4 h-4" /> LinkedIn
                </a>
              </div>

            </div>
          </div>

          {/* Interactive Form */}
          <div className="lg:col-span-7 bg-slate-900 border border-slate-800 rounded-2xl p-6 sm:p-8 shadow-xl h-full flex flex-col justify-between">
            {submitted ? (
              <div className="py-12 text-center space-y-4 animate-in fade-in duration-300 my-auto">
                <div className="w-16 h-16 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center mx-auto border border-emerald-500/40">
                  <Check className="w-8 h-8" />
                </div>
                <h3 className="text-2xl font-bold text-white">Opening Email Client...</h3>
                <p className="text-slate-400 text-sm max-w-md mx-auto">
                  Thank you, {formData.name}! Your message has been prepared for <strong className="text-cyan-400">logeshlp25@gmail.com</strong>.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4 h-full flex flex-col justify-between">
                <div>
                  <h3 className="text-xl font-bold text-white mb-4">Send Me a Message</h3>

                  <div className="space-y-4">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div className="space-y-1.5">
                        <label className="text-xs font-semibold text-slate-300">Your Name *</label>
                        <input
                          type="text"
                          required
                          placeholder="Enter your name"
                          value={formData.name}
                          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                          className="w-full px-4 py-3 rounded-xl bg-slate-800/60 border border-slate-700/80 text-white placeholder-slate-500 text-sm outline-none focus:outline-none focus:border-cyan-400 focus:ring-0 transition-colors duration-150 shadow-inner"
                        />
                      </div>

                      <div className="space-y-1.5">
                        <label className="text-xs font-semibold text-slate-300">Your Email *</label>
                        <input
                          type="email"
                          required
                          placeholder="Enter your email"
                          value={formData.email}
                          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                          className="w-full px-4 py-3 rounded-xl bg-slate-800/60 border border-slate-700/80 text-white placeholder-slate-500 text-sm outline-none focus:outline-none focus:border-cyan-400 focus:ring-0 transition-colors duration-150 shadow-inner"
                        />
                      </div>
                    </div>

                    <div className="space-y-1.5">
                      <label className="text-xs font-semibold text-slate-300">Subject</label>
                      <input
                        type="text"
                        placeholder="Enter your subject"
                        value={formData.subject}
                        onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl bg-slate-800/60 border border-slate-700/80 text-white placeholder-slate-500 text-sm outline-none focus:outline-none focus:border-cyan-400 focus:ring-0 transition-colors duration-150 shadow-inner"
                      />
                    </div>

                    <div className="space-y-1.5">
                      <label className="text-xs font-semibold text-slate-300">Message *</label>
                      <textarea
                        required
                        rows={4}
                        placeholder="Enter your message"
                        value={formData.message}
                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl bg-slate-800/60 border border-slate-700/80 text-white placeholder-slate-500 text-sm outline-none focus:outline-none focus:border-cyan-400 focus:ring-0 transition-colors duration-150 shadow-inner resize-none"
                      ></textarea>
                    </div>
                  </div>
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full py-3.5 px-6 rounded-xl bg-cyan-500 hover:bg-cyan-400 text-slate-950 font-bold text-sm shadow-lg shadow-cyan-500/20 active:scale-98 transition flex items-center justify-center gap-2 disabled:opacity-50 group mt-2"
                >
                  <Send className="w-4 h-4 me-1 group-hover:translate-x-1.5 group-hover:rotate-45 transition-transform duration-300" />
                  <span>{isSubmitting ? 'Sending Message...' : 'Send Message'}</span>
                </button>
              </form>
            )}
          </div>

        </div>

      </div>
    </section>
  );
};

export default Contact;
