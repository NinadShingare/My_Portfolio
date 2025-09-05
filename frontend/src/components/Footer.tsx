import React from "react";
import Link from "next/link";
import { EnvelopeIcon } from "@heroicons/react/24/outline";

const Footer: React.FC = () => {
  return (
    <footer className="fixed bottom-0 left-0 w-full bg-gray-900 text-gray-300 py-4 border-t border-gray-700 z-50">
      <div className="max-w-6xl mx-auto px-4 flex flex-col md:flex-row items-center justify-between">
        <p className="text-sm">&copy; {new Date().getFullYear()} Ninad Shingare. All rights reserved.</p>
        <div className="flex space-x-6 mt-2 md:mt-0">
          <Link href="https://github.com/NinadShingare" target="_blank" className="hover:text-white">
            <span>GitHub</span>
          </Link>
          <Link href="https://www.linkedin.com/in/ninadshingare/" target="_blank" className="hover:text-white">
            <span>LinkedIn</span>
          </Link>
          <Link href="mailto:nvshingare67@gmail.com" className="hover:text-white flex items-center gap-1">
            <EnvelopeIcon className="h-5 w-5" /> Email
          </Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
