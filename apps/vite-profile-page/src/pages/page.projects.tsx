import Page from 'src/components/common/common.page';
import ProjectSection from 'src/components/projects/projects.list';
import projectsMap from 'src/constants/constants.projects.map';

const ProjectList = projectsMap.map(project => (
  <ProjectSection
    key={project.title}
    title={project.title}
    description={project.description}
    technologies={project.technologies}
    websiteUrl={project.websiteUrl || ''}
    githubUrl={project.githubUrl || ''}
    imageSrc={project.imageSrc || ''}
    swaggerUrl={project.swaggerUrl || ''}
  />
));

const ProjectsPage = () => {
  return <Page>{ProjectList}</Page>;
};

export default ProjectsPage;
