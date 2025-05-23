import { Ghost } from 'lucide-react';
import { cn } from '@/lib/utils';

interface AnimatedGhostProps {
  className?: string;
  size?: number;
  delay?: string;
}

export function AnimatedGhost({ className, size = 24, delay = '0s' }: AnimatedGhostProps) {
  return (
    <div
      className={cn('animate-float opacity-70', className)}
      style={{ animationDelay: delay }}
    >
      <Ghost className="text-accent" style={{ width: size, height: size }} />
    </div>
  );
}
