import { Card, Section } from 'src/lib/base/StyledComponents/Containers';
import { Hr } from 'src/lib/base/StyledComponents/Divisors';
import { Column, Row } from 'src/lib/base/StyledComponents/Flex';
import { Avatar } from 'src/lib/base/StyledComponents/User';
import Text from 'src/lib/base/Text';

const ProfileHeader = () => {
  return (
    <Section>
      <Card>
        <Row top gap={8} responsive>
          <Avatar />
          <Column left>
            <b>
              <Text tag="h1" path="header_name" />
            </b>
            <Text tag="h4" path="header_work" />
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
                <label>
                  <Text tag="b" path="header_phone" />
                  <Text tag="h6" path="header_phone_number" />
                </label>
              </Column>
              <Column left gap={2}>
                <label>
                  <b>Email</b>
                  <h6>
                    <a href="mailto:klessitonrds@gmail.com" target="blank">
                      klessitonrds@gmail.com
                    </a>
                  </h6>
                </label>
                <label>
                  <b>LinkedIn</b>
                  <h6>
                    <a href="http://linkedin.com/in/klessitonrds" target="blank">
                      Klessitonrds
                    </a>
                  </h6>
                </label>
              </Column>
              <Column left>
                <label>
                  <b>Github</b>
                  <h6>
                    <a href="http://github.com/KlessitonRodrigues" target="blank">
                      KlessitonRodrigues
                    </a>
                  </h6>
                </label>
                <label>
                  <b>Page</b>
                  <h6>
                    <a href="http://github.com/KlessitonRodrigues" target="blank">
                      Profile Page
                    </a>
                  </h6>
                </label>
              </Column>
            </Row>
          </Column>
        </Row>
        <Column left>
          <Text tag="h3" path="cv_resume_title" />
          <Hr />
          <Text tag="p" path="cv_resume" />
        </Column>
      </Card>
    </Section>
  );
};

export default ProfileHeader;
