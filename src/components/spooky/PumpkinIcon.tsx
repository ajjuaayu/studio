import type { SVGProps } from 'react';

export function PumpkinIcon(props: SVGProps<SVGSVGElement>) {
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
      <path d="M12 2C7.5 2 4 6.72 4 11c0 2.85 1.81 5.09 3.33 6.25.17.13.33.26.5.39C8.81 18.43 10.18 19 12 19s3.19-.57 4.17-1.36c.17-.13.33-.26.5-.39C18.19 16.09 20 13.85 20 11c0-4.28-3.5-9-8-9zM12 4c2.76 0 5 2.24 5 5s-2.24 5-5 5-5-2.24-5-5 2.24-5 5-5z" />
      <path d="M12 0c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z" />
      <path d="M6 10c-1.1 0-2 .9-2 2s.9 2 2 2" />
      <path d="M18 10c-1.1 0-2 .9-2 2s.9 2 2 2" />
      <path d="M9.5 14c.83 1.17 2.08 2 3.5 2s2.67-.83 3.5-2H9.5z" />
    </svg>
  );
}
