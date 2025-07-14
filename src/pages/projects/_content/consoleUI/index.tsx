import consoleUIImg from 'src//public/images/console_ui_img.png';
import { urls } from 'src/constants/urls';
import LinkAndIcon from 'src/lib/common/Links/LinkAndIcon';
import { Card, Section } from 'src/lib/common/StyledComponents/Containers';
import { Column, Row } from 'src/lib/common/StyledComponents/Flex';
import { Image, ImageContainer } from 'src/lib/common/StyledComponents/Images';
import Text from 'src/lib/common/Text';

const ConsoleUIProject = () => {
  return (
    <Section>
      <Card>
        <Row responsive gap={4}>
          <Column left gap={4}>
            <Text tag="h2" path="extraworks_console_ui" />
            <Text tag="p" path="extraworks_console_ui_text" />
            <Text tag="small" path="extraworks_console_ui_tech" />
            <Row left gap={4}>
              <LinkAndIcon icon="website" label="Website" url={urls.consoleUIPage} />
              <LinkAndIcon icon="github" label="GitHub" url={urls.consoleUIRepo} />
            </Row>
          </Column>
          <ImageContainer>
            <Image src={consoleUIImg} />
          </ImageContainer>
        </Row>
      </Card>
    </Section>
  );
};

export default ConsoleUIProject;
