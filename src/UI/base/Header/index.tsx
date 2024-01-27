import { useState } from 'react';

import { openPrintDialog } from 'src/utils/pdf';
import { changeLanguage, currentLang } from 'src/utils/url';

import Icons from '../Icons';
import Loading from '../Loading';
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
        <Selector>
          <option>Template 1</option>
        </Selector>
        <Selector defaultValue={currentLang} onChange={e => changeLanguage(e.target.value)}>
          <option value="en">English</option>
          <option value="pt">Português</option>
          <option value="es">Spanish</option>
        </Selector>
        <DownloadButton onClick={onDownload}>
          <Icons type="download" />
          Save as PDF
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
