import { openPrintDialog } from 'src/utils/pdf';
import Icons from '../Icons';
import { Container, DownloadButton, Selector } from './styled';
import { changeLanguage, currentLang } from 'src/utils/url';

const Header = () => {
  return (
    <Container>
      <Selector>
        <option>Template 1</option>
      </Selector>

      <Selector defaultValue={currentLang} onChange={e => changeLanguage(e.target.value)}>
        <option value="en">English</option>
        <option value="pt">Português</option>
      </Selector>

      <DownloadButton onClick={openPrintDialog}>
        <Icons type="download" />
        Save as PDF
      </DownloadButton>
    </Container>
  );
};

export default Header;
