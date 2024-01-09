import Text from 'src/UI/base/Text';
import { Columns, Label, Dates, List, Title } from './styled';

export const CVExperience = () => {
  return (
    <>
      <Title>
        <Text>Experience</Text>
      </Title>

      <Columns mb={4}>
        <div>
          <Dates>
            <Text>2021/12 - 2023/12</Text>
          </Dates>
        </div>
        <div>
          <h6>
            <a href="https://www.westpoint.io/">
              <Text>Westpoint</Text>
            </a>
          </h6>
          <p>
            <Text>United Kingdown componany that provides software development services</Text>
          </p>

          <List>
            <li>
              <Label>
                <Text>Collums</Text>
              </Label>
              <Text>
                &nbsp;Online platform used to manage Aesthetic clinics with more than 11 franchises
                as client, built using ReactJS, NodeJS, Mongodb and Docker.
              </Text>
            </li>
            <li>
              <Label>
                <Text>Vouch IO</Text>
              </Label>
              <Text>
                &nbsp;Mobile Application used to handles vehicles like Lightyear one and Vitage
                broncos
              </Text>
            </li>
            <li>
              <Label>
                <Text>Quarx</Text>
              </Label>
              <Text>
                &nbsp;Browser extension that provides real-time guides to help users to do complex
                tasks on many Websites, built using React, Chrome APIs and AWS services.
              </Text>
            </li>
            <li>
              <Label>
                <Text>TalentId</Text>
              </Label>
              <Text>
                &nbsp;Online platform that uses the powers of chat GPT to evaluate candidates' CVs
                and assign them a score. built using NextJS with MatineUI, OpenAI API and AWS
                services.
              </Text>
            </li>
            <li>
              <Label>
                <Text>Vintage Acquisitions</Text>
              </Label>
              <Text>
                &nbsp;Dashboard to handle stock and sales of casks, sychonized with Google
                spreadsheets, built using ViteJS with MantineUI, Google APIs and AWS services.
              </Text>
            </li>
            <li>
              <Label>
                <Text>Westpoint Website</Text>
              </Label>
              <Text>&nbsp;Company website built using NextJS and Styled Components.</Text>
            </li>
          </List>
        </div>
      </Columns>

      <Columns mb={4}>
        <div>
          <Dates>
            <Text>2018/08 - 2020/01</Text>
          </Dates>
        </div>
        <div>
          <h6>
            <Text>WTCS</Text>
          </h6>
          <p>
            <Text>Application with geolocation to map waring point at city streats.</Text>
          </p>
        </div>
      </Columns>
    </>
  );
};
