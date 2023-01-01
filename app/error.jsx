'use client';

import { useEffect } from 'react';

export default function Error({ error, reset }) {
  useEffect(() => {
    console.log('logging error:', error);
  }, [error]);

  return (
    <div className="space-y-4">
      <div className="text-sm text-red-800">
        <strong className="font-bold">Error:</strong> {error?.message}
      </div>
    </div>
  );
}