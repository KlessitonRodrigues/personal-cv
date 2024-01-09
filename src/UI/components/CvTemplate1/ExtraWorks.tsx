import Text from 'src/UI/base/Text';
import { Columns, Dates, Label, Title } from './styled';

export const CVExtraWorks = () => {
  return (
    <>
      <Title>
        <Text>Extra Works</Text>
      </Title>

      <Columns mb={4}>
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

      <Columns mb={4}>
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
    </>
  );
};
