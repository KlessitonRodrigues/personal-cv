import Text from 'src/UI/base/Text';
import { Columns, Label, Dates, List, Title } from './styled';

export const CVExperience = () => {
  return (
    <>
      <Title>
        <Text>Experience</Text>
      </Title>

      <Columns>
        <div>
          <Dates>
            <Text>2021/12 - 2023/12</Text>
          </Dates>
        </div>
        <div>
          <Title>
            <Text>WestPoint Software Solutions</Text>
          </Title>
          <p>
            <Text>
              UK software company that provides software development services to third-party
              companies.
            </Text>
          </p>

          <List>
            <li>
              <Label>
                <Text>Collums</Text>
              </Label>
              <Text>
                &nbsp;Online platform used to manage Aesthetic clinics with more than 11 franchises
                as client, built with ReactJS, NodeJS, Mongodb and Docker.
              </Text>
            </li>
            <li>
              <Label>
                <Text>Vouch IO</Text>
              </Label>
              <Text>
                &nbsp;Mobile Application used to handles vehicles (open/close doors, start/stop
                engine, etc), built with ClojureScript, React Native, Blockchain API, Android/IOS
                APIs.
              </Text>
            </li>
            <li>
              <Label>
                <Text>TalentId</Text>
              </Label>
              <Text>
                &nbsp;Online platform that uses the powers of GPT chat to evaluate candidates' CVs
                and assign them a score. built with NextJS with MatineUI, OpenAI API and AWS
                services.
              </Text>
            </li>
            <li>
              <Label>
                <Text>Vintage Acquisitions</Text>
              </Label>
              <Text>
                &nbsp;Dashboard for inventory management and barrel sales, synchronized with Google
                spreadsheets, built with ViteJS with MantineUI, Google APIs and AWS services.
              </Text>
            </li>
            <li>
              <Label>
                <Text>Quarx</Text>
              </Label>
              <Text>
                &nbsp;Browser extension that provides real-time guides to help users perform complex
                tasks across many Websites (AWS, Google cloud, etc), built with React, Chrome APIs
                and AWS services.
              </Text>
            </li>
            <li>
              <Label>
                <Text>Westpoint Website</Text>
              </Label>
              <Text>&nbsp;Company website built with NextJS and Styled Components.</Text>
            </li>
          </List>
        </div>
      </Columns>

      <Columns>
        <div>
          <Dates>
            <Text>2018/08 - 2019/11</Text>
          </Dates>
        </div>
        <div>
          <Title>
            <Text>SocialPower</Text>
          </Title>
          <p>
            <Text>
              Web application with geolocation to map streets points that need attention from the
              city hall, built using nodeJS and AngularJS.
            </Text>
          </p>
        </div>
      </Columns>
    </>
  );
};
