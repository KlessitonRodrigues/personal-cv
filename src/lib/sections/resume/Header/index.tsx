import { urls } from 'src/constants/urls';
import LinkAndIcon from 'src/lib/base/Links/LinkAndIcon';
import { Card, Section } from 'src/lib/base/StyledComponents/Containers';
import { Hr } from 'src/lib/base/StyledComponents/Divisors';
import { Column, Row } from 'src/lib/base/StyledComponents/Flex';
import Text from 'src/lib/base/Text';
import { isMobileScreen } from 'src/styles/utils';

const ResumeHeader = () => {
  const isMobile = isMobileScreen();

  return (
    <Section>
      <Card>
        <Row top gap={8} responsive>
          <Column left>
            <b>
              <Text tag="h1" path="header_name" />
            </b>
            <Text tag="h3" path="header_work" />
            <Row top responsive>
              <Column left gap={2}>
                <label>
                  <Text tag="b" path="header_city" />
                  <Text tag="h6" path="header_city_name" />
                </label>
                <label>
                  <Text tag="b" path="header_address" />
                  <Text tag="h6" path="header_address_name" />
                </label>
              </Column>
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
                  <Text tag="b" path="header_phone" />
                  <Text tag="h6" path="header_phone_number" />
                </label>
              </Column>
              <Column left>
                <label>
                  <b>LinkedIn</b>
                  <h6>
                    <a href={urls.linkedin} target="blank">
                      Klessitonrds
                    </a>
                  </h6>
                </label>
                <label>
                  <b>Github</b>
                  <h6>
                    <a href={urls.github} target="blank">
                      KlessitonRodrigues
                    </a>
                  </h6>
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
        <Row left responsive gap={8}>
          <LinkAndIcon icon="website" path="header_page_text" url={urls.personalPage} />
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

export default ResumeHeader;
