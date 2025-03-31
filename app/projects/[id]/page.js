'use client';
import Image from "next/legacy/image";
import { notFound } from "next/navigation";
import { useParams } from "next/navigation"; 
import projects from "../../../data/projects";

export default function ProjectPage() {
  const { id } = useParams();
  const project = projects.find((p) => p.id === id);
  if (!project) {
    notFound();
  }
  return (
    <div className="project-detail">
      <h2>{project.title}</h2>
        <div className="project-layout">
          <div className="image-grid">
            {project.images.map((imgSrc, index) => (
                <Image 
                  key={index} 
                  src={imgSrc} 
                  alt={`${project.title} image ${index + 1}`} 
                  layout="responsive" 
                  width={1} 
                  height={1} 
                />
              ))}
          </div>
        <div className="project-description">
          <p>{project.description}</p>
        </div>
      </div>
    </div>
  );
  
}