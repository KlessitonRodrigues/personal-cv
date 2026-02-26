import gameFinderImg from 'src//public/images/game_finder_img.png';
import { urls } from 'src/constants/urls';
import LinkAndIcon from 'src/lib/common/Links/LinkAndIcon';
import { Card, Section } from 'src/lib/common/StyledComponents/Containers';
import { Column, Row } from 'src/lib/common/StyledComponents/Flex';
import { Image, ImageContainer } from 'src/lib/common/StyledComponents/Images';
import Text from 'src/lib/common/Text';

const GameFinderProjectSection = () => {
  return (
    <Section>
      <Card>
        <Row responsive gap={4}>
          <Column left gap={4}>
            <Text tag="h2" path="extraworks_game_finder" />
            <Text tag="p" path="extraworks_game_finder_text" />
            <Text tag="small" path="extraworks_game_finder_tech" />
            <Row left gap={4}>
              <LinkAndIcon icon="website" label="Website" url={urls.gameFinderRepo} />
              <LinkAndIcon icon="github" label="GitHub" url={urls.gameFinderPage} />
            </Row>
          </Column>
          <ImageContainer>
            <Image src={gameFinderImg} />
          </ImageContainer>
        </Row>
      </Card>
    </Section>
  );
};

export default GameFinderProjectSection;
