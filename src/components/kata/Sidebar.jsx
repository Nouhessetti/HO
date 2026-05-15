import React from 'react'
import { useNavigate } from 'react-router-dom';
import './Sidebar.css'
import Train from '@/pages/Train';
// Helper function remains the same
export function genertingRandomId(){
    return Math.floor(Math.random() * 4) + 1;
}

export default function Sidebar({ Subject, Level, selection, setSelection }) {
  
  // A helper to update the parent state object correctly
  const updateSelection = (updates) => {
    setSelection(prev => ({
      ...prev,
      ...updates
    }));
  };

  //navigate function 
  const navigate = useNavigate();

    
  

  return (
    <div className='sidebar'>
    
         {/* SUBJECT SELECT */}
         <div className='options_containner'>
           <div className='level_span'>
             <span className='level_span_subject'>Subject</span>
           </div>

           <select
              className='level'
              value={selection.subject}
              onChange={(e) => {
                const newSubject = e.target.value;
                updateSelection({ 
                  subject: newSubject, 
                  topic: Subject[newSubject][0], // Reset topic to the first one of the new subject
                  id: 1 
                });
              }}
            >
             {Object.keys(Subject).map((subject) => (
               <option className='level' key={subject} value={subject}>
                  {subject}
               </option>
            ))}
           </select>
          </div>

         {/* TOPIC SELECT */}
         <div className='options_containner'>
           <div className='level_span'>
             <span className='level_span_subject'>Topic</span>
           </div>

           <select
              className='level'
              value={selection.topic}
              onChange={(e) => updateSelection({ topic: e.target.value, id: 1 })}
            >
              {Subject[selection.subject].map((topic) => (
                <option key={topic} value={topic}>
                  {topic}
                </option>
              ))}
           </select>
       </div>

         {/* LEVEL SELECT */}
         <div className='options_containner'>
            <div className='level_span'> 
                <span className='level_span_subject'>Level</span>
            </div>
                   
            <select 
              className='level' 
              value={selection.level} 
              onChange={(e) => updateSelection({ level: e.target.value })}
            >
              {Level.map((level) => (
                <option className='level' key={level} value={level}>{level}</option>
              ))}
            </select>
         </div>

         {/* TRAIN AND SKIP LOGIC */}
         <div className='Train_skip_btn'>
             <button className='train_btn'
                     onClick={() => navigate('/train', { 
                         state: {
                                  subject: selection.subject,
                                  topic: selection.topic,
                                  level: selection.level,
                                  id: selection.id
                                } 
                      })}
             >
              Train</button>
             <button 
                className='skip_btn'
                onClick={() => updateSelection({ id: genertingRandomId() })}
             >
                Skip
             </button>
         </div>
         
    </div>
  )
}