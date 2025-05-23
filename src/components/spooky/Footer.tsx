import { Skull } from 'lucide-react';

export function Footer() {
  const currentYear = new Date().getFullYear();
  return (
    <footer className="py-8 mt-12 border-t border-border/50">
      <div className="container mx-auto text-center text-muted-foreground">
        <Skull className="h-6 w-6 mx-auto mb-2 text-accent" />
        <p>&copy; {currentYear} Spooky Greetings. All rights reserved.</p>
        <p className="text-sm mt-1">Happy Halloween!</p>
      </div>
    </footer>
  );
}
