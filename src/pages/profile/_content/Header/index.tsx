import { Card, Section } from 'src/lib/base/StyledComponents/Containers';
import { Hr } from 'src/lib/base/StyledComponents/Divisors';
import { ColumnLeft, Row } from 'src/lib/base/StyledComponents/Flex';
import { Avatar } from 'src/lib/base/StyledComponents/User';
import Text from 'src/lib/base/Text';

const ProfileHeader = () => {
  return (
    <Section>
      <Card>
        <Row gap={4}>
          <Avatar />
          <ColumnLeft>
            <Text tag="h1" path="header_name" />
            <Row>
              <ColumnLeft gap={2}>
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
                <label>
                  <b>Email</b>
                  <h6>
                    <a href="mailto:klessitonrds@gmail.com" target="blank">
                      klessitonrds@gmail.com
                    </a>
                  </h6>
                </label>
              </ColumnLeft>
              <ColumnLeft gap={2}>
                <label>
                  <b>Github</b>
                  <h6>
                    <a href="http://github.com/KlessitonRodrigues" target="blank">
                      KlessitonRodrigues
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
                <label>
                  <b>Page</b>
                  <h6>
                    <a href="http://github.com/KlessitonRodrigues" target="blank">
                      Github
                    </a>
                  </h6>
                </label>
              </ColumnLeft>
            </Row>
          </ColumnLeft>
        </Row>
        <ColumnLeft gap={0}>
          <Text tag="h2" path="cv_resume_title" />
          <Hr />
          <Text tag="span" path="cv_resume" />
        </ColumnLeft>
      </Card>
    </Section>
  );
};

export default ProfileHeader;
