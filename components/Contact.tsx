"use client";
import { motion } from "framer-motion";
import { Mail, MapPin, Send, Sparkles, MessageCircle } from "lucide-react";

export default function Contact() {
  // Replace this with your actual phone number in international format (without + or spaces)
  const phoneNumber = "91XXXXXXXXXX"; 
  const message = encodeURIComponent("Hello Saksham");
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${message}`;

  return (
    <div className="w-full max-w-4xl px-4 mx-auto">
      {/* Header */}
      <div className="text-center mb-12">
        <div className="inline-block px-3 py-1 rounded-full bg-zinc-800 border border-white/5 text-zinc-500 text-[10px] uppercase tracking-widest mb-4">
          Contact
        </div>
        <h2 className="text-4xl font-bold text-white leading-tight">
          Let's Build <span className="text-blue-500 italic">Future</span> Together
        </h2>
      </div>

      <div className="grid md:grid-cols-5 gap-6">
        {/* Form Section */}
        <div className="md:col-span-3 bg-zinc-900/60 backdrop-blur-xl border border-white/10 p-6 rounded-3xl">
          <h3 className="text-white font-bold mb-6 text-sm uppercase tracking-wider">Send a Message</h3>
          <form className="space-y-4">
            <input 
              type="text" 
              placeholder="Name" 
              className="w-full bg-black/40 border border-white/5 rounded-xl p-3 text-sm text-white focus:border-blue-500 outline-none transition-all placeholder:text-zinc-600" 
            />
            <input 
              type="email" 
              placeholder="Email" 
              className="w-full bg-black/40 border border-white/5 rounded-xl p-3 text-sm text-white focus:border-blue-500 outline-none transition-all placeholder:text-zinc-600" 
            />
            <textarea 
              rows={3} 
              placeholder="Message" 
              className="w-full bg-black/40 border border-white/5 rounded-xl p-3 text-sm text-white focus:border-blue-500 outline-none resize-none transition-all placeholder:text-zinc-600" 
            />
            <button className="w-full bg-blue-600 hover:bg-blue-500 py-3 rounded-xl text-white font-bold text-sm transition-all flex items-center justify-center gap-2">
              <Send size={16} /> Send Message
            </button>
          </form>
        </div>

        {/* Info & WhatsApp Section */}
        <div className="md:col-span-2 space-y-4">
          <h3 className="text-zinc-500 font-bold text-[10px] uppercase tracking-[0.2em] mb-2 px-2">Direct Contact</h3>
          
          {/* Email Card */}
          <div className="bg-zinc-900/40 border border-white/5 p-4 rounded-2xl flex items-center gap-4 group hover:border-blue-500/20 transition-all">
            <div className="p-2 bg-blue-500/10 rounded-lg text-blue-500 group-hover:scale-110 transition-transform">
              <Mail size={18} />
            </div>
            <span className="text-xs text-zinc-300 truncate">sakshamguptaa17@gmail.com</span>
          </div>

          {/* WhatsApp Card - New Section */}
          <a 
            href={whatsappUrl} 
            target="_blank" 
            rel="noopener noreferrer"
            className="bg-zinc-900/40 border border-white/5 p-4 rounded-2xl flex items-center gap-4 group hover:border-green-500/30 transition-all cursor-pointer"
          >
            <div className="p-2 bg-green-500/10 rounded-lg text-green-500 group-hover:scale-110 transition-transform">
              <MessageCircle size={18} />
            </div>
            <div className="flex flex-col">
              <span className="text-xs text-zinc-200 font-bold">Connect on WhatsApp</span>
              <span className="text-[10px] text-zinc-500">Fast Response</span>
            </div>
          </a>

          {/* Location Card */}
          <div className="bg-zinc-900/40 border border-white/5 p-4 rounded-2xl flex items-center gap-4">
            <div className="p-2 bg-zinc-800 rounded-lg text-zinc-400">
              <MapPin size={18} />
            </div>
            <span className="text-xs text-zinc-300">Noida, UP</span>
          </div>

          {/* Availability Status */}
          <div className="bg-blue-500/5 border border-blue-500/10 p-5 rounded-2xl relative overflow-hidden group">
            <div className="absolute top-0 right-0 p-4 opacity-5 group-hover:opacity-10 transition-opacity">
              <Sparkles size={40} className="text-blue-500" />
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
              <span className="text-green-500 text-[10px] font-bold uppercase tracking-widest">Available</span>
            </div>
            <p className="text-[10px] text-zinc-500 mt-2 uppercase tracking-tighter">
              Currently accepting new projects.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}