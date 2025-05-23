import { Ghost } from 'lucide-react';

export function Header() {
  return (
    <header className="py-6 bg-background/80 backdrop-blur-md shadow-lg sticky top-0 z-50">
      <div className="container mx-auto flex items-center justify-center text-center">
        <Ghost className="h-12 w-12 mr-4 text-primary animate-float" />
        <h1 className="text-5xl md:text-6xl font-creepster text-primary animate-flicker-text">
          Spooky Greetings
        </h1>
         <Ghost className="h-12 w-12 ml-4 text-primary animate-float [animation-delay:-1.5s]" style={{transform: 'scaleX(-1)'}} />
      </div>
    </header>
  );
}
