import Icons from 'src/lib/base/Icons';
import Text from 'src/lib/base/Text';
import { OutlineBtn } from 'src/lib/styled/Buttons';
import { Card, Section } from 'src/lib/styled/Containers';
import { Hr } from 'src/lib/styled/Divisors';
import { Column, Row } from 'src/lib/styled/Flex';
import { isMobileScreen } from 'src/styles/utils';
import { urls } from 'src/utils/constants/urls';

const ProfileHeader = () => {
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
          <a href={urls.personalPage} target="_blank">
            <OutlineBtn>
              <Icons size={8} type="website" />
              <Text tag="p" path="header_page_text" />
            </OutlineBtn>
          </a>
          <a href={urls.linkedin} target="_blank">
            <OutlineBtn>
              <Icons size={8} type="linkedin" />
              <p>LinkedIn</p>
            </OutlineBtn>
          </a>
          <a href={urls.githubProfile} target="_blank">
            <OutlineBtn>
              <Icons size={8} type="github" />
              <p>Github</p>
            </OutlineBtn>
          </a>

          <a href={isMobile ? urls.whatsapp : urls.whatsappWeb} target="_blank">
            <OutlineBtn>
              <Icons size={8} type="whatsapp" />
              <p>WhatsApp</p>
            </OutlineBtn>
          </a>
        </Row>
      </Card>
    </Section>
  );
};

export default ProfileHeader;
