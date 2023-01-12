import React from 'react';
import { Project } from './Project';

interface ProjectListProps {
    projects: Project[];
}

function ProjectList({ projects }: ProjectListProps) {
    return (
        <ul className="row">
            {
                projects.map((project) => (
                    <li key={project.id}>{project.name}</li>
                ))
            }

        </ul>
    )
}

export default ProjectList;
