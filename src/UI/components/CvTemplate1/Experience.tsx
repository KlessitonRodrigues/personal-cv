import { List, ListItem } from 'src/UI/base/StyledComponents/List';
import Text from 'src/UI/base/Text';

import { Columns, Dates, Label, Title } from './styled';

export const CVExperience = () => {
  return (
    <>
      <Title>
        <Text path="experience_title" />
      </Title>

      <Columns>
        <div>
          <Dates>2024/01 - 2024/02</Dates>
        </div>
        <div>
          <Title>Centro Educacional De Floriano</Title>
          <p>
            <Text path="experience_cef_text" />
          </p>
        </div>
      </Columns>

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
            <ListItem>
              <b>Collums</b>
              <Text path="experience_collums_text" />
            </ListItem>
            <ListItem>
              <b>Vouch IO</b>
              <Text path="experience_vouchio_text" />
            </ListItem>
            <ListItem>
              <b>TalentId</b>
              <Text path="experience_talentId_text" />
            </ListItem>
            <ListItem>
              <b>Vintage Acquisitions</b>
              <Text path="experience_vintage_text" />
            </ListItem>
            <ListItem>
              <b>Quarx</b>
              <Text path="experience_quarx_text" />
            </ListItem>
            <ListItem>
              <b>WestPoint Website</b>
              <Text path="experience_website_text" />
            </ListItem>
          </List>
        </div>
      </Columns>

      <Columns>
        <div>
          <Dates>2021/03 - 2021/09</Dates>
        </div>
        <div>
          <Title>Central Fitness</Title>
          <p>
            <Text path="experience_centralacademy_text" />
          </p>
        </div>
      </Columns>

      <Columns>
        <div>
          <Dates>2018/11 - 2019/11</Dates>
        </div>
        <div>
          <Title>SocialPower</Title>
          <p>
            <Text path="experience_socialpower_text" />
          </p>
        </div>
      </Columns>
    </>
  );
};
