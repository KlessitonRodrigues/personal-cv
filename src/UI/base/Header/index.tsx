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
            <SelectItem value="en">English</SelectItem>
            <SelectItem value="pt">Português</SelectItem>
            <SelectItem value="es">Spanish (auto)</SelectItem>
            <SelectItem value="fr">French (auto)</SelectItem>
          </Select>
        </SelectBox>

        <SelectBox>
          <Icons type="template" />
          <Select>
            <SelectItem>Template 1</SelectItem>
          </Select>
        </SelectBox>

        <DownloadButton onClick={onDownload}>
          <Icons type="download" />
          <Text path="header_pdf_btn" />
        </DownloadButton>
      </Centered>

      <GitHubButton href="https://github.com/KlessitonRodrigues/personal-cv" target="_blank">
        <Icons type="github" />
        GitHub
      </GitHubButton>

      <Loading type="fullScreen" show={loading} />
    </Container>
  );
};

export default Header;
