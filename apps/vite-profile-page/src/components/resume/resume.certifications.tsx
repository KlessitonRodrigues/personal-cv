import { Link } from 'react-router-dom';

import { urls } from 'src/constants/constants.urls';

import LinkAndIcon from '../common/common.link.and.icon';
import Text from '../common/common.text';
import { Card, Section } from '../common/styled/styled.containers';
import { Hr } from '../common/styled/styled.divisors';
import { Column, Row } from '../common/styled/styled.flex';
import { List, ListItem } from '../common/styled/styled.list';

const ResumeEducationSection = () => {
  return (
    <Section>
      <Card>
        <Column left>
          <Row between>
            <Text tag="h4" path="education_title" />
            <LinkAndIcon icon="link" size={5} url={urls.personalPageCertificates} label="link" />
          </Row>
          <Hr />
        </Column>

        <Column left gap={0}>
          <Row left responsive>
            <Text tag="h6" path="education_udemy_title" />
            <Text tag="small">{new Date().getFullYear()}</Text>
          </Row>
          <List>
            <ListItem>
              <Text tag="p" path="education_udemy_course_1" />
            </ListItem>
            <ListItem>
              <Text tag="p" path="education_udemy_course_4" />
            </ListItem>
            <ListItem>
              <Text tag="p" path="education_udemy_course_6" />
            </ListItem>
            <ListItem>
              <Text tag="p" path="education_udemy_course_13" />
            </ListItem>
            <ListItem>
              <Text tag="p" path="education_udemy_course_8" />
            </ListItem>
            <ListItem>
              <Link to={urls.personalPageCertificates}>
                <Text tag="small" path="see_more">
                  Ver Todos
                </Text>
              </Link>
            </ListItem>
          </List>
        </Column>

        <Column left>
          <Row left responsive>
            <Text tag="h6" path="education_ifpi_title" />
            <Text tag="small" path="education_ifpi_date" />
          </Row>
          <Text tag="p" path="education_ifpi" />
        </Column>

        <Column left>
          <Row left responsive>
            <Text tag="h6" path="education_school_title" />
            <Text tag="small" path="education_school_date" />
          </Row>
          <Text tag="p" path="education_school" />
        </Column>
      </Card>
    </Section>
  );
};

export default ResumeEducationSection;
