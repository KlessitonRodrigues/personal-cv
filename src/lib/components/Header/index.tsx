import { useState } from 'react';

import Icons from 'src/lib/base/Icons';
import Loading from 'src/lib/base/Loading';
import { Select, SelectBox, SelectItem } from 'src/lib/base/StyledComponents/Select';
import Text from 'src/lib/base/Text';
import { changeLanguage, getLanguage } from 'src/utils/i18n';
import { openPrintDialog } from 'src/utils/pdf';

import { Centered, Container, DownloadButton, GitHubButton } from './styled';

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
          <Select defaultValue={getLanguage()} onChange={e => changeLanguage(e.target.value)}>
            <SelectItem label="English" value="en" />
            <SelectItem label="Português" value="pt" />
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
        Github
      </GitHubButton>

      <Loading type="fullScreen" show={loading} />
    </Container>
  );
};

export default Header;
