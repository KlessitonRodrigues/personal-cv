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
            <span>Personal CV</span>
          </Label>
          <Text path="extraworks_personalcv_text" />
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
          <Text path="extraworks_consoleui_text" />
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
          <Text path="extraworks_easyencrypt_text" />
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
          <Text path="extraworks_taskmanage_text" />
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
          <Text path="extraworks_translationpwa_text" />
        </div>
      </Columns>
    </>
  );
};
