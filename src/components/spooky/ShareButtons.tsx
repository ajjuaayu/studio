'use client';

import { Button } from '@/components/ui/button';
import { useToast } from '@/hooks/use-toast';
import { Share2, Twitter, Copy, MessageCircle } from 'lucide-react'; // Using MessageCircle for WhatsApp like icon

interface ShareButtonsProps {
  greetingText: string;
}

export function ShareButtons({ greetingText }: ShareButtonsProps) {
  const { toast } = useToast();
  const pageUrl = typeof window !== 'undefined' ? window.location.href : '';

  const shareActions = [
    {
      name: 'Twitter',
      icon: <Twitter className="h-5 w-5 mr-2" />,
      action: () => {
        const text = `🎃 My AI Halloween Greeting: "${greetingText}" 👻 #SpookyGreetings`;
        const twitterUrl = `https://twitter.com/intent/tweet?text=${encodeURIComponent(text)}&url=${encodeURIComponent(pageUrl)}`;
        window.open(twitterUrl, '_blank');
      },
    },
    {
      name: 'WhatsApp',
      icon: <MessageCircle className="h-5 w-5 mr-2" />,
      action: () => {
        const text = `🎃 My AI Halloween Greeting: "${greetingText}" 👻\n\nCheck out Spooky Greetings: ${pageUrl}`;
        const whatsappUrl = `https://wa.me/?text=${encodeURIComponent(text)}`;
        window.open(whatsappUrl, '_blank');
      }
    },
    {
      name: 'Copy',
      icon: <Copy className="h-5 w-5 mr-2" />,
      action: () => {
        navigator.clipboard.writeText(greetingText)
          .then(() => {
            toast({
              title: 'Copied to clipboard!',
              description: 'Your spooky greeting is ready to be pasted.',
            });
          })
          .catch(err => {
            console.error('Failed to copy: ', err);
            toast({
              title: 'Error copying',
              description: 'Could not copy greeting to clipboard.',
              variant: 'destructive',
            });
          });
      },
    },
  ];

  return (
    <div className="mt-6">
      <h3 className="text-lg font-semibold mb-3 text-center text-accent font-creepster tracking-wider">Share Your Greeting:</h3>
      <div className="flex flex-wrap justify-center gap-3">
        {shareActions.map(item => (
          <Button
            key={item.name}
            onClick={item.action}
            variant="outline"
            className="bg-accent/20 hover:bg-accent/40 border-accent text-accent-foreground hover:text-foreground"
            aria-label={`Share on ${item.name}`}
          >
            {item.icon}
            {item.name}
          </Button>
        ))}
      </div>
    </div>
  );
}
