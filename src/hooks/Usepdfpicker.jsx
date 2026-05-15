import { useMemo } from 'react';
import { genertingRandomId } from '@/components/kata/Sidebar';



export const usePdfUrl = (selection) => {
  return useMemo(() => {
    const { subject, topic, level, id } = selection;
    
    if (!subject || !topic || !level) return null;

    // UPDATE THIS LINE:
    // Change 1000 to 4 so it only picks 1, 2, 3, or 4
   // const randomId = genertingRandomId()

    // Using your specific path from earlier
    return `/assets/Pdfs/${subject}/${topic}/${level}/${id}.pdf`;
    
  }, [selection.subject, selection.topic, selection.level, selection.id]);
};