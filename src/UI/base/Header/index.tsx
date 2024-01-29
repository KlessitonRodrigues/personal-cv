import { useState } from 'react';

import { openPrintDialog } from 'src/utils/pdf';
import { changeLanguage, currentLang } from 'src/utils/url';

import Icons from '../Icons';
import Loading from '../Loading';
import { Select, SelectBox, SelectItem, SelectTitle } from '../StyledComponents/Select';
import Text from '../Text';
import { Centered, Container, DownloadButton, GitHubButton, Selector } from './styled';

const Header = () => {
  const [loading, setLoading] = useState(false);

  const onDownload = async () => {
    setLoading(true);
    await openPrintDialog();
    setLoading(false);
  };

  return (
    <Container>
      <Centered>
        <SelectBox>
          <Icons type="language" />
          <Select defaultValue={currentLang} onChange={e => changeLanguage(e.target.value)}>
            <SelectItem label="English" value="en" selected />
            <SelectItem label="Português" value="pt" />
            <SelectItem label="Spanish (auto)" value="es" />
            <SelectItem label="French (auto)" value="fr" />
          </Select>
        </SelectBox>

        <SelectBox>
          <Icons type="template" />
          <Select>
            <SelectItem label="Template 1" value="0" />
          </Select>
        </SelectBox>

        <DownloadButton onClick={onDownload}>
          <Icons type="download" />
          <Text path="header_pdf_btn" />
        </DownloadButton>
      </Centered>

      <GitHubButton href="https://github.com/KlessitonRodrigues/personal-cv" target="_blank">
        <Icons size={7} type="github" />
        GitHub
      </GitHubButton>

      <Loading type="fullScreen" show={loading} />
    </Container>
  );
};

export default Header;
