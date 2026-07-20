import projectsMap from 'src/constants/projectMap';
import Page from 'src/lib/components/Page';
import SideBar from 'src/lib/components/SideBar';
import ProjectSection from 'src/lib/sections/projects/ProjectSections';

const ProjectList = projectsMap.map(project => (
  <ProjectSection
    key={project.title}
    title={project.title}
    description={project.description}
    technologies={project.technologies}
    websiteUrl={project.websiteUrl || ''}
    githubUrl={project.githubUrl || ''}
    imageSrc={project.imageSrc || ''}
  />
));

const ProjectsPage = () => {
  return (
    <SideBar>
      <Page>{ProjectList}</Page>
    </SideBar>
  );
};

export default ProjectsPage;
