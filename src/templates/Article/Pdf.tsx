import dynamic from 'next/dynamic';

const PDFViewer = dynamic(() => import('./PdfViewer'), {
  ssr: false,
});

export const Pdf: React.FC<{ url: string }> = ({ url }) => {
  return <PDFViewer url={url} />;
};
