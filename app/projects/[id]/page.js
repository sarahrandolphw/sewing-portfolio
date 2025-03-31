'use client';
import Image from "next/legacy/image";
import { notFound } from "next/navigation";
import { useParams } from "next/navigation"; 
import projects from "../../../data/projects";
import Link from "next/link";

export default function ProjectPage() {
  const { id } = useParams();
  const project = projects.find((p) => p.id === id);
  if (!project) {
    notFound();
  }
  return (
    <div className="project-detail">
      <h2>{project.title}</h2>
        <p>Check back soon! I haven’t built this page out yet.</p>
        <Link href="/" className="back-home-link">Go Back Home</Link>
    </div>
  );
  
}