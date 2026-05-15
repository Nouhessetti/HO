// App.jsx
import React, { useState, useMemo } from 'react';
import Sidebar from './Sidebar';
import PDFScreen from './PDFScreen';

export default function Pdfselection() {
  const [selection, setSelection] = useState({
    subject: "Mathematics",
    topic: "Algebra",
    level: "Beginner"
  });

  // This function creates the URL. For 1000 files, we pick a random number.
  const pdfUrl = useMemo(() => {
    const { subject, topic, level } = selection;
    const randomId = Math.floor(Math.random() * 1000) + 1;
    
    // Constructing the path based on your folder structure
    return `/assets/pdfs/${subject}/${topic}/${level}/file_${randomId}.pdf`;
  }, [selection]); // Only recalculates when a filter changes

  return (
    <div className="app-layout">
      <Sidebar 
        Subject={data} 
        Level={levels} 
        selection={selection} 
        setSelection={setSelection} 
      />
      
      <main className="content">
        <button onClick={() => setSelection({...selection})}>🔀 Shuffle PDF</button>
        <PDFScreen fileUrl={pdfUrl} />
      </main>
    </div>
  );
}