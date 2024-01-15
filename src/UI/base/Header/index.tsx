import { openPrintDialog } from 'src/utils/pdf';
import Icons from '../Icons';
import { Container, DownloadButton, Selector } from './styled';
import { changeLanguage, currentLang } from 'src/utils/url';
import Loading from '../Loading';
import { useState } from 'react';

const Header = () => {
  const [loading, setLoading] = useState(false);

  const onDownload = async () => {
    setLoading(true);
    await openPrintDialog();
    setLoading(false);
  };

  return (
    <Container>
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

      <Loading type="fullScreen" show={loading} />
    </Container>
  );
};

export default Header;
