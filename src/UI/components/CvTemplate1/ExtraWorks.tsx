import Text from 'src/UI/base/Text';

import { Columns, Dates, Label, Title } from './styled';

export const CVExtraWorks = () => {
  return (
    <>
      <Title>
        <Text path="extraworks_title" />
      </Title>

      <Columns>
        <div>
          <Dates>2024</Dates>
        </div>
        <div>
          <Label>
            <b>Game Finder</b>
            <Text path="extraworks_gamefinder_text" />
          </Label>
        </div>
      </Columns>

      <Columns>
        <div>
          <Dates>2024</Dates>
        </div>
        <div>
          <Label>
            <b>Personal CV</b>
            <Text path="extraworks_personalcv_text" />
          </Label>
        </div>
      </Columns>

      <Columns>
        <div>
          <Dates>2023</Dates>
        </div>
        <div>
          <Label>
            <b>Console UI for desktops</b>
            <Text path="extraworks_consoleui_text" />
          </Label>
        </div>
      </Columns>
      <Columns>
        <div>
          <Dates>2023</Dates>
        </div>
        <div>
          <Label>
            <b>Easy Encrypt</b>
            <Text path="extraworks_easyencrypt_text" />
          </Label>
        </div>
      </Columns>
      <Columns>
        <div>
          <Dates>2022</Dates>
        </div>
        <div>
          <Label>
            <b>Task Manager</b>
            <Text path="extraworks_taskmanage_text" />
          </Label>
        </div>
      </Columns>
      <Columns>
        <div>
          <Dates>2021</Dates>
        </div>
        <div>
          <Label>
            <b>Translation PWA</b>
            <Text path="extraworks_translationpwa_text" />
          </Label>
        </div>
      </Columns>
    </>
  );
};
