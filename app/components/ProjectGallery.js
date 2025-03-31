import Image from "next/legacy/image";
import Link from "next/link";
import projects from "../../data/projects";

export default function ProjectGallery() {
  return (
    <div className="gallery">
      {projects.map((project) => (
        <Link key={project.id} href={`/projects/${project.id}`} legacyBehavior>
          <a className="project-card">
            <Image src={project.image} alt={project.title} width={300} height={300} priority/>
            <h3>{project.title}</h3>
          </a>
        </Link>
      ))}
    </div>
  );
}
