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
          <Dates>
            <Text>2024</Text>
          </Dates>
        </div>
        <div>
          <Label>
            <Text>Personal CV</Text>
          </Label>
          <Text>&nbsp;This document wronte in react with support to multiple languages.</Text>
        </div>
      </Columns>

      <Columns>
        <div>
          <Dates>
            <Text>2023</Text>
          </Dates>
        </div>
        <div>
          <Label>
            <Text>Console UI for desktops</Text>
          </Label>
          <Text>
            &nbsp;Desktop application using electron and react to provide console experience like
            PS5/Xbox for PCs.
          </Text>
        </div>
      </Columns>
      <Columns>
        <div>
          <Dates>
            <Text>2023</Text>
          </Dates>
        </div>
        <div>
          <Label>
            <Text>Easy Encrypt</Text>
          </Label>
          <Text>&nbsp;Web and Mobile application to encrypt plan text.</Text>
        </div>
      </Columns>
      <Columns>
        <div>
          <Dates>
            <Text>2022</Text>
          </Dates>
        </div>
        <div>
          <Label>
            <Text>Task Manager</Text>
          </Label>
          <Text>&nbsp;Todo application with calendar and notes.</Text>
        </div>
      </Columns>
      <Columns>
        <div>
          <Dates>
            <Text>2021</Text>
          </Dates>
        </div>
        <div>
          <Label>
            <Text>Translation PWA</Text>
          </Label>
          <Text>&nbsp;Translation website with multiple language support.</Text>
        </div>
      </Columns>
    </>
  );
};
