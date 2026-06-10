import { urls } from 'src/constants/urls';
import LinkAndIcon from 'src/lib/common/Links/LinkAndIcon';
import { Card, Section } from 'src/lib/common/StyledComponents/Containers';
import { Hr } from 'src/lib/common/StyledComponents/Divisors';
import { Column, Row } from 'src/lib/common/StyledComponents/Flex';
import Text from 'src/lib/common/Text';
import { isMobileScreen } from 'src/styles/utils';

const ResumeHeaderSection = () => {
  const isMobile = isMobileScreen();

  return (
    <Section>
      <Card>
        <Row top gap={8} responsive>
          <Column left>
            <Row between responsive="reverse-left">
              <b>
                <Text tag="h1" path="header_name" />
              </b>
            </Row>
            <Text tag="h3" path="header_work" />
            <Row top responsive>
              <Column left gap={2}>
                <label>
                  <b>Email</b>
                  <h6>
                    <a href={urls.krdsEmail} target="blank">
                      klessitonrds@gmail.com
                    </a>
                  </h6>
                </label>

                <label>
                  <Text tag="b" path="header_city" />
                  <Text tag="h6" path="header_city_name" />
                </label>
              </Column>
              <Column left gap={2}>
                <label>
                  <Text tag="b" path="header_page" />
                  <a href={urls.personalPage} target="blank">
                    <Text tag="h6" path="header_page_text" />
                  </a>
                </label>
                <label>
                  <Text tag="b" path="header_phone" />
                  <a href={urls.whatsappWeb} target="blank">
                    <Text tag="h6" path="header_phone_number" />
                  </a>
                </label>
              </Column>
              <Column left>
                <label>
                  <b>LinkedIn</b>
                  <a href={urls.linkedin} target="blank">
                    <h6>Klessitonrds</h6>
                  </a>
                </label>
                <label>
                  <b>Github</b>
                  <a href={urls.github} target="blank">
                    <h6>KlessitonRodrigues</h6>
                  </a>
                </label>
              </Column>
            </Row>
          </Column>
        </Row>
        <Column left>
          <Text tag="h4" path="cv_resume_title" />
          <Hr />
          <Text tag="p" path="cv_resume" />
        </Column>
        <Row left responsive>
          <LinkAndIcon icon="website" path="header_page_text" url={urls.personalPage} />
        </Row>
        <Row left responsive gap={8}>
          <LinkAndIcon icon="linkedin" label="LinkedIn" url={urls.linkedin} />
          <LinkAndIcon icon="github" label="Github" url={urls.githubProfile} />
          <LinkAndIcon
            icon="whatsapp"
            label="WhatsApp"
            url={isMobile ? urls.whatsapp : urls.whatsappWeb}
          />
        </Row>
      </Card>
    </Section>
  );
};

export default ResumeHeaderSection;
