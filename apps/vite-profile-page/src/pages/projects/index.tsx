import Page from 'src/components/common/Page';
import SideBar from 'src/components/common/SideBar';
import ProjectSection from 'src/components/projects/projects.list';
import projectsMap from 'src/constants/projectMap';

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
