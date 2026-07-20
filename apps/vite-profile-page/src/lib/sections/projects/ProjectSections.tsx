import If from 'src/lib/common/If';
import LinkAndIcon from 'src/lib/common/Links/LinkAndIcon';
import { Card, Section } from 'src/lib/common/StyledComponents/Containers';
import { Column, Row } from 'src/lib/common/StyledComponents/Flex';
import { Image, ImageContainer } from 'src/lib/common/StyledComponents/Images';
import Text from 'src/lib/common/Text';

type ProjectSectionProps = {
  title: string;
  description: string;
  technologies: string;
  websiteUrl: string;
  githubUrl: string;
  imageSrc: string;
};

const ProjectSection = (props: ProjectSectionProps) => {
  const { title, description, technologies, websiteUrl, githubUrl, imageSrc } = props;

  return (
    <Section>
      <Card>
        <Row responsive gap={4}>
          <Column left gap={4}>
            <Text tag="h2" path={title} />
            <Text tag="p" path={description} />
            <Text tag="small" path={technologies} />
            <Row left gap={4}>
              <If check={!!websiteUrl}>
                <LinkAndIcon icon="website" label="Website" url={websiteUrl} />
              </If>
              <If check={!!githubUrl}>
                <LinkAndIcon icon="github" label="GitHub" url={githubUrl} />
              </If>
            </Row>
          </Column>
          <ImageContainer>
            <Image src={imageSrc} />
          </ImageContainer>
        </Row>
      </Card>
    </Section>
  );
};

export default ProjectSection;
