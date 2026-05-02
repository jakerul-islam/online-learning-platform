import Link from 'next/link';
import React from 'react';

const NotFound = () => {
    return (
         <div className="min-h-screen flex flex-col items-center justify-center text-center px-4">
      <div className="flex items-center gap-2 text-[120px] font-medium leading-none tracking-tighter">
        <span>4</span>
        <div className="w-[72px] h-[72px] rounded-full border-[3px] border-foreground flex items-center justify-center">
          <svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/>
            <line x1="11" y1="8" x2="11" y2="14"/><line x1="8" y1="11" x2="14" y2="11"/>
          </svg>
        </div>
        <span>4</span>
      </div>

      <h1 className="text-xl font-medium mt-6">Page not found</h1>
      <div className="w-10 h-0.5 bg-border my-4 rounded" />
      <p className="text-muted-foreground text-sm max-w-sm leading-relaxed">
        The page you're looking for doesn't exist or has been moved somewhere else.
      </p>

      <Link href="/" className="mt-6 inline-flex items-center gap-2 px-6 py-2.5 rounded-md border text-sm font-medium hover:bg-accent transition-colors">
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <polyline points="15 18 9 12 15 6"/>
        </svg>
        Go back home
      </Link>
    </div>
    );
};

export default NotFound;