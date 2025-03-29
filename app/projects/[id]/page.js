import { notFound } from "next/navigation";
import projects from "@/data/projects";

export default function ProjectPage({ params }) {
  const project = projects.find((p) => p.id === params.id);
  if (!project) return notFound();

  return (
    <div>
      <h2>{project.title}</h2>
      <p>{project.description}</p>
      {project.images.map((img, index) => (
        <img key={index} src={img} alt={project.title} style={{ width: "100%" }} />
      ))}
    </div>
  );
}
