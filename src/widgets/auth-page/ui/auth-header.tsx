"use client";

import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";

interface AuthHeaderProps {}

export function AuthHeader({}: AuthHeaderProps) {
  return (
    <motion.header
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="flex justify-between mr-[28px]"
    >
      <div className="flex items-center gap-2">
        <h1 className="text-xl font-bold text-slate-800">Resume Builder</h1>

        <span className="bg-green-500 text-white text-xs px-2 py-1 rounded-full font-medium">
          AI Powered ✨
        </span>
      </div>

      <nav className="hidden md:flex items-center gap-6 text-sm text-slate-600">
        <Link href="/about" className="hover:text-slate-800 transition-colors">
          About Us
        </Link>

        <Link href="/explore" className="hover:text-slate-800 transition-colors">
          Explore
        </Link>
        
        <Link href="/faqs" className="hover:text-slate-800 transition-colors">
          FAQs
        </Link>
      </nav>
    </motion.header>
  );
}
