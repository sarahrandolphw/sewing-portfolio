import Image from "next/legacy/image";
import Link from "next/link";
import projects from "../../data/projects";

export default function ProjectGallery() {
  return (
    <div className="gallery">
      {projects.map((project) => (
        <Link key={project.id} href={`/projects/${project.id}`} legacyBehavior>
          <a className="project-card">
            <div className="project-info">
              <h3>{project.title}</h3>
              <p>{project.description}</p>
            </div>
            <Image src={project.image} alt={project.title} width={400} height={500} priority/>
            <Image src={project.image2} alt={project.title} width={400} height={500} priority/>
          </a>
        </Link>
      ))}
    </div>
  );
}
