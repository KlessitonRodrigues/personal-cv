import Text from 'src/UI/base/Text';
import { Columns, Dates, Label, Title } from './styled';

export const CVExtraWorks = () => {
  return (
    <>
      <Title>
        <Text>Extra Works</Text>
      </Title>

      <Columns>
        <div>
          <Dates>2024</Dates>
        </div>
        <div>
          <Label>
            <span>Personal CV</span>
          </Label>
          <Text>&nbsp;This document available in multiple languages. built with ReactJS.</Text>
        </div>
      </Columns>

      <Columns>
        <div>
          <Dates>2023</Dates>
        </div>
        <div>
          <Label>
            <span>Console UI for desktops</span>
          </Label>
          <Text>
            &nbsp;Application that provide console interface like PS5/Xbox for PCs. built with React
            and Electron.
          </Text>
        </div>
      </Columns>
      <Columns>
        <div>
          <Dates>2023</Dates>
        </div>
        <div>
          <Label>
            <span>Easy Encrypt</span>
          </Label>
          <Text>
            &nbsp;Web and Mobile application to encrypt plan text. built with React, React Native
            and CryptoJS.
          </Text>
        </div>
      </Columns>
      <Columns>
        <div>
          <Dates>2022</Dates>
        </div>
        <div>
          <Label>
            <span> Task Manager</span>
          </Label>
          <Text>&nbsp;Todo application with calendar and notes. built with React.</Text>
        </div>
      </Columns>
      <Columns>
        <div>
          <Dates>2021</Dates>
        </div>
        <div>
          <Label>
            <span>Translation PWA</span>
          </Label>
          <Text>
            &nbsp;Translation website with multiple language support. built with React and Google
            APIs.
          </Text>
        </div>
      </Columns>
    </>
  );
};
