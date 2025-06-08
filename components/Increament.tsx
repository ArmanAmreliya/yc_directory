// components/IncrementViews.tsx
'use client';

import { useEffect } from 'react';




const IncrementViews = ({ id }: { id: string }) => {
  useEffect(() => {
    console.log("Calling increment views for:", id);
    fetch('my-app\app\api\increament\route.ts', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ id }),
    });
  }, [id]);

  return null;
};

export default IncrementViews;
