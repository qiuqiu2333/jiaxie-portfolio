const pdfViewer = document.getElementById('pdfViewer');
const fileNameLabel = document.getElementById('fileName');

const defaultPdf = 'Detective.pdf';

fileNameLabel.textContent = 'Detective.pdf';
pdfViewer.src = defaultPdf;
pdfViewer.style.display = 'block';
