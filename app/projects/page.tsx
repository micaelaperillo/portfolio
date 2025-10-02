"use client";
import React, { useState } from "react";
import Project from "@/components/Project";
import { projects, ProjectType } from "@/data/projects";

const allTags = Array.from(
    new Set(projects.flatMap((project) => project.tags || []))
);

export default function Projects() {
    const [selectedTags, setSelectedTags] = useState<string[]>([]);

    // Filter projects by selected tags
    const filteredProjects = selectedTags.length
        ? projects.filter((project) =>
                project.tags?.some((tag) => selectedTags.includes(tag))
            )
        : projects;

    const handleTagToggle = (tag: string) => {
        setSelectedTags((prev) =>
            prev.includes(tag)
                ? prev.filter((t) => t !== tag)
                : [...prev, tag]
        );
    };

    return (
        <div className="m-10 max-w-2xl">
            <h1 className="mb-5 pt-10">Projects</h1>
            <p>Some of the projects I've build over the years</p>
            <p>Use the filters below to narrow down the projects by tags</p>
            <div className="mt-4 mb-4 flex flex-wrap gap-2">
                {allTags.map((tag) => (
                    <button
                        key={tag}
                        className={`px-2 py-1 text-md rounded border ${
                            selectedTags.includes(tag)
                                ? "bg-gray-500 text-gray-900"
                                : "bg-gray-300 text-gray-900 hover:bg-gray-400"
                        }`}
                        onClick={() => handleTagToggle(tag)}
                    >
                        {tag}
                    </button>
                ))}
            </div>
            <div className="m-10 max-w-2xl">
                {filteredProjects.map((project: ProjectType) => (
                    <Project key={project.title} {...project} />
                ))}
            </div>
        </div>
    );
}
