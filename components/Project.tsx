"use client";

import { Github } from "lucide-react";

interface ProjectProps {
  title: string;
  description: string;
  github?: string;
  tags: string[];
}

export default function Project({ title, description, github, tags }: ProjectProps) {
  return (
    <div className="pt-5 mb-5">
      <div className="flex items-center justify-between mb-2">
        <h4>{title}</h4>
        {github && (
          <a href={github} target="_blank" rel="noreferrer" className="text-gray-400 hover:text-gray-200 transition-colors">
            <Github className="w-5 h-5" />
          </a>
        )}
      </div>
      <p className="text-gray-300 mb-3">{description}</p>
      <div className="flex flex-wrap gap-2">
        {tags.map((tag) => (
          <span key={tag} className="text-sm bg-gray-300 bg-opacity-60 hover:bg-gray-400 text-gray-900 px-2 py-1 rounded">
            {tag}
          </span>
        ))}
      </div>
      <hr className="mt-5 border-gray-800" />
    </div>
  );
}
