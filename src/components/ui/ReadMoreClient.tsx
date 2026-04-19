"use client";
import React, { useState } from "react";

export default function ReadMoreClient({ fullBio }: { fullBio: string }) {
  const [expanded, setExpanded] = useState(false);

  return (
    <div className="space-y-4">
      {expanded && (
        <div className="space-y-4">
          {fullBio.split("\n\n").map((para, i) => (
           <p key={i} className="text-gray-600 text-sm leading-relaxed">{para}</p>
          ))}
        </div>
      )}
      <button
        onClick={() => setExpanded(!expanded)}
        className="inline-flex items-center gap-2 border border-secondary text-secondary px-5 py-2 text-sm hover:bg-secondary hover:text-white transition-all duration-200"
      >
        {expanded ? "Show Less" : "Read More"}
      </button>
    </div>
  );
}