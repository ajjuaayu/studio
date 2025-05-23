import type { SVGProps } from 'react';

export function BatIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="currentColor"
      stroke="currentColor"
      strokeWidth="1"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="h-6 w-6"
      {...props}
    >
      <path d="M12 2c-4.42 0-8 3.58-8 8 0 2.53.99 4.82 2.75 6.39L12 22l5.25-5.61A7.96 7.96 0 0020 10c0-4.42-3.58-8-8-8zm0 4a1 1 0 110 2 1 1 0 010-2zm-4 5a1 1 0 110 2 1 1 0 010-2zm8 0a1 1 0 110 2 1 1 0 010-2z"/>
      <path d="M2 10C2 6.48 4.03 3.55 7 2.51M22 10c0-3.97-2.03-6.9-5-7.94"/>
      <path d="M6.34 15.34a4 4 0 005.66 0m0 0a4 4 0 005.66 0"/>
    </svg>
  );
}
