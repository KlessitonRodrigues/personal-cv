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
              <Label>
                <b>Collums</b>
                <Text path="experience_collums_text" />
              </Label>
            </li>
            <li>
              <Label>
                <b>Vouch IO</b>
                <Text path="experience_vouchio_text" />
              </Label>
            </li>
            <li>
              <Label>
                <b>TalentId</b>
                <Text path="experience_talentId_text" />
              </Label>
            </li>
            <li>
              <Label>
                <b>Vintage Acquisitions</b>
                <Text path="experience_vintage_text" />
              </Label>
            </li>
            <li>
              <Label>
                <b>Quarx</b>
                <Text path="experience_quarx_text" />
              </Label>
            </li>
            <li>
              <Label>
                <b>Westpoint Website</b>
                <Text path="experience_website_text" />
              </Label>
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
