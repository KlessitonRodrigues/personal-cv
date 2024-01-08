// https://www.npmjs.com/package/html2pdf.js
import html2pdf from "./libs/html2pdf.bundle.min.js";

export const convertToPDF = async () => {
  const element = document.getElementById("doc-content");
  const opt = {
    margin: 1,
    filename: "myfile.pdf",
    image: { type: "jpeg", quality: 0.98 },
    html2canvas: { scale: 1 },
    jsPDF: { unit: "in", format: "letter", orientation: "portrait" },
  };

  await html2pdf().set(opt).from(element).save();
};

export const openPrintDialog = async () => {
  const docContent = document.getElementById("doc-content");
  const iFrame = document.createElement("iframe");
  document.body.appendChild(iFrame);

  const iFrameDocument = iFrame.contentDocument;
  iFrameDocument.head.innerHTML = document.head.innerHTML;
  iFrameDocument.body.innerHTML = docContent.innerHTML;

  iFrame.style.position = "absolute";
  iFrame.style.left = "100vh";
  iFrame.contentWindow.print();
};
