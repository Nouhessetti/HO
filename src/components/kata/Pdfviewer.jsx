import React from 'react';
import './Pdfviewer.css';

const Pdfviewer = ({ fileUrl }) => {
  // We don't need useEffect or window resize events anymore 
  // because the browser handles the layout natively.

  if (!fileUrl) {
    return <div className="pdf-viewer-jail">Select a document to begin.</div>;
  }

  return (
    <div className="pdf-viewer-jail">
      {/* 
          Native browser embed:
          - No watermarks.
          - Zero extra 'npm' package weight.
          - Built-in zoom and print controls.
      */}
      <embed
        src={`${fileUrl}#toolbar=1&navpanes=0&scrollbar=1`}
        type="application/pdf"
        width="100%"
        height="100%"
        className="pdf_viewer_embed"
      />
    </div>
  );
};

export default Pdfviewer;