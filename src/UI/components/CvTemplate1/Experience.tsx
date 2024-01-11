import Text from 'src/UI/base/Text';
import { Columns, Label, Dates, List, Title } from './styled';

export const CVExperience = () => {
  return (
    <>
      <Title>
        <Text path="experience_title" />
      </Title>

      <Columns>
        <div>
          <Dates>2021/12 - 2023/12</Dates>
        </div>
        <div>
          <Title>WestPoint Software Solutions</Title>
          <p>
            <Text path="experience_westpoint_text" />
          </p>

          <List>
            <li>
              <Label>Collums</Label>
              <Text path="experience_collums_text" />
            </li>
            <li>
              <Label>Vouch IO</Label>
              <Text path="experience_vouchio_text" />
            </li>
            <li>
              <Label>TalentId</Label>
              <Text path="experience_talentId_text" />
            </li>
            <li>
              <Label>Vintage Acquisitions</Label>
              <Text path="experience_vintage_text" />
            </li>
            <li>
              <Label>Quarx</Label>
              <Text path="experience_quarx_text" />
            </li>
            <li>
              <Label>Westpoint Website</Label>
              <Text path="experience_website_text" />
            </li>
          </List>
        </div>
      </Columns>

      <Columns>
        <div>
          <Dates>2018/08 - 2019/11</Dates>
        </div>
        <div>
          <Title>SocialPower </Title>
          <p>
            <Text path="experience_socialpower_text" />
          </p>
        </div>
      </Columns>
    </>
  );
};
