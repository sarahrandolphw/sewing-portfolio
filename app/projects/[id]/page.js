'use client';
import Image from "next/image";
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
      <h1>{project.title}</h1>
      <Image src={project.image} alt={project.title} width={600} height={400} />
      <p>{project.description}</p>
      {/* Add any other details you want to include */}
    </div>
  );
}