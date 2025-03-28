export const openPrintDialog = async () => {
  const docContent = document.getElementById('doc-content');
  const iFrame = document.createElement('iframe');
  document.body.appendChild(iFrame);

  const iFrameDocument = iFrame.contentDocument;
  if (!iFrame || !docContent || !iFrameDocument) return;
  iFrameDocument.head.innerHTML = document.head.innerHTML;
  iFrameDocument.body.innerHTML = docContent.innerHTML;

  iFrame.style.position = 'absolute';
  iFrame.style.left = '100%';
  iFrame.style.top = '0';

  await new Promise(r => setTimeout(r, 1000));
  // @ts-ignore
  iFrame?.contentWindow.print();

  await new Promise(r => setTimeout(r, 100));
  iFrame.remove();
};

export const downloadPdfFile = (url: string, name: string) => {
  const link = document.createElement('a');
  link.href = url;
  link.download = name;
  link.target = '_blank';
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
};
