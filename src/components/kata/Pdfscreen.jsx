import React from 'react';

export default function PDFScreen({ fileUrl }) {
  return (
    <div className="pdf-container" style={{ width: '100%', height: '90vh' }}>
      <object
        data={fileUrl}
        type="application/pdf"
        width="100%"
        height="100%"
        key={fileUrl} // CRITICAL: Forces the browser to refresh the viewer when the URL changes
      >
        <div className="pdf-fallback">
          <p>Your browser doesn't support direct PDF preview.</p>
          <a href={fileUrl} target="_blank" rel="noopener noreferrer" className="download-btn">
            Open PDF in New Tab
          </a>
        </div>
      </object>
    </div>
  );
}