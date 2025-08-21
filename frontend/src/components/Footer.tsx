import React from "react";
import Link from "next/link";
import { EnvelopeIcon } from "@heroicons/react/24/outline";

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 text-gray-300 py-6 mt-12">
      <div className="max-w-6xl mx-auto px-4 flex flex-col md:flex-row items-center justify-between">
        <p className="text-sm">&copy; {new Date().getFullYear()} Your Name. All rights reserved.</p>
        <div className="flex space-x-6 mt-4 md:mt-0">
          <Link href="https://github.com/yourusername" target="_blank" className="hover:text-white">
            <span>GitHub</span>
          </Link>
          <Link href="https://linkedin.com/in/yourusername" target="_blank" className="hover:text-white">
            <span>LinkedIn</span>
          </Link>
          <Link href="mailto:your@email.com" className="hover:text-white flex items-center gap-1">
            <EnvelopeIcon className="h-5 w-5" /> Email
          </Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
