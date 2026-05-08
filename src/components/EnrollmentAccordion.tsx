"use client";
import { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

export default function EnrollmentAccordion() {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div className="border border-wafd-border rounded-lg mt-6 bg-gray-50 overflow-hidden">
      <button
        onClick={() => setIsExpanded(!isExpanded)}
        aria-expanded={isExpanded}
        aria-controls="enrollment-what-you-need"
        className="w-full flex justify-between items-center bg-transparent border-none text-wafd-dark font-semibold text-base cursor-pointer p-4 hover:bg-gray-100 transition-colors"
      >
        What You Need to Enroll
        {isExpanded ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
      </button>

      <div id="enrollment-what-you-need" hidden={!isExpanded} className="px-4 pb-4 pt-2 text-wafd-text bg-white border-t border-gray-200">
        <ol className="list-decimal pl-5 leading-relaxed space-y-2 pt-2">
          <li>Last Name</li>
          <li>Social Security Number</li>
          <li>Date of Birth</li>
        </ol>
      </div>
    </div>
  );
}
