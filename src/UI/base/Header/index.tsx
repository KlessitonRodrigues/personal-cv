import { convertToPDF, openPrintDialog } from "src/utils/pdf";
import Icons from "../Icons";
import {
  Container,
  DownloadButton,
  LanguangeSelector,
  PageCount,
} from "./styled";

const Header = () => {
  return (
    <Container>
      <PageCount>1 / 1</PageCount>
      <LanguangeSelector>
        <Icons type="selector" />
        Português
      </LanguangeSelector>
      <DownloadButton onClick={openPrintDialog}>
        <Icons type="download" />
        Download as PDF
      </DownloadButton>
    </Container>
  );
};

export default Header;
