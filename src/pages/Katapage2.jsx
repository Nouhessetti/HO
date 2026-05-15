import React, { useState } from 'react' // Added useState
import Sidebar from '@/components/kata/Sidebar'
import Pdfviewer from '@/components/kata/Pdfviewer';
import { usePdfUrl } from '@/hooks/Usepdfpicker'; // Check this filename on disk!
import './Katapage2.css'

const Subject = {
  Mathematics: ["Algebra", "Geometry", "Trigonometry", "Calculus", "Differential Equations", "Linear Algebra", "Probability", "Statistics", "Number Theory", "Discrete Mathematics", "Complex Analysis", "Numerical Methods"],
  Physics: ["Mechanics", "Optics", "Thermodynamics", "Electromagnetism", "Waves", "Quantum Mechanics", "Relativity", "Nuclear Physics", "Particle Physics", "Solid State Physics", "Fluid Mechanics", "Astrophysics"]
};
const Level = ["Beginner", "Intermediate", "Advanced"]

export default function Katapage2() {
  // 1. You must define the state here
  const [selection, setSelection] = useState({
    subject: "Mathematics",
    topic: "Algebra",
    level: "Beginner",
    id:1
  });

  // 2. HOOK RULE: Hooks must be called INSIDE the component
  const fileUrl = usePdfUrl(selection);

  return (
    <div className='main-kata'>
      <div className='sidebar_section'>
        <Sidebar  
          Subject={Subject}
          Level={Level}
          selection={selection}      // Pass state
          setSelection={setSelection} // Pass setter
        />
      </div>
      
      <div className='pdf_container'>
        {/* Pass the dynamic URL to your viewer */}
        <Pdfviewer key={fileUrl} fileUrl={fileUrl} />
      </div>

      <div className='ai_section'>
        Ai support coming soon
      </div>
    </div>
  )
}