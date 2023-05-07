import React from 'react';
import { Document, Page, pdfjs } from 'react-pdf/dist/esm/entry.webpack';
import 'react-pdf/dist/esm/Page/AnnotationLayer.css';

// eslint-disable-next-line
const pdfWorkerSrc = require('pdfjs-dist/build/pdf.worker.min.js').default;

pdfjs.GlobalWorkerOptions.workerSrc = `/${pdfWorkerSrc}`;

const options = {
  cMapUrl: 'cmaps/',
  cMapPacked: true,
};

const PdfViewer: React.FC<{ url: string }> = ({ url }) => {
  const [numPages, setNumPages] = React.useState(null);

  function onDocumentLoadSuccess({ numPages: nextNumPages }: any) {
    setNumPages(nextNumPages);
  }

  return (
    <div className="pdf-container">
      <div className="document">
        <Document
          file={url}
          onLoadSuccess={onDocumentLoadSuccess}
          options={options}
        >
          {Array.from(new Array(numPages), (_, index) => (
            <Page
              key={`page_${index + 1}`}
              pageNumber={index + 1}
              width={900}
            />
          ))}
        </Document>
      </div>
    </div>
  );
};

export default PdfViewer;
