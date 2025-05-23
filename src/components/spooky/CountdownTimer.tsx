'use client';

import { useEffect, useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Hourglass } from 'lucide-react';

interface TimeLeft {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

export function CountdownTimer() {
  const [timeLeft, setTimeLeft] = useState<TimeLeft | null>(null);
  const [isHalloween, setIsHalloween] = useState(false);

  useEffect(() => {
    const calculateTimeLeft = () => {
      const now = new Date();
      let year = now.getFullYear();
      let halloweenDate = new Date(year, 9, 31, 23, 59, 59); // October 31st

      if (now > halloweenDate) {
        // If Halloween has passed this year, count to next year's
        if (now.getMonth() === 9 && now.getDate() === 31) {
             setIsHalloween(true);
             setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
             return;
        }
        halloweenDate = new Date(year + 1, 9, 31, 23, 59, 59);
      }
      setIsHalloween(false);

      const difference = halloweenDate.getTime() - now.getTime();

      if (difference > 0) {
        setTimeLeft({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
          minutes: Math.floor((difference / 1000 / 60) % 60),
          seconds: Math.floor((difference / 1000) % 60),
        });
      } else {
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
        if (now.getMonth() === 9 && now.getDate() === 31) {
            setIsHalloween(true);
        }
      }
    };

    calculateTimeLeft(); // Initial calculation
    const timer = setInterval(calculateTimeLeft, 1000);

    return () => clearInterval(timer);
  }, []);

  if (isHalloween) {
    return (
      <Card className="w-full max-w-2xl mx-auto shadow-xl bg-card/70 backdrop-blur-sm border-primary">
        <CardHeader className="pb-2">
          <CardTitle className="text-4xl font-creepster text-center text-primary animate-flicker-text">
            It's Halloween!
          </CardTitle>
        </CardHeader>
        <CardContent className="text-center">
          <p className="text-2xl text-accent">🎃👻🍬 Happy Halloween! 🍬👻🎃</p>
        </CardContent>
      </Card>
    );
  }

  if (!timeLeft) {
    return (
      <Card className="w-full max-w-2xl mx-auto shadow-xl bg-card/70 backdrop-blur-sm">
        <CardHeader>
          <CardTitle className="text-3xl font-creepster text-center text-accent flex items-center justify-center">
            <Hourglass className="h-8 w-8 mr-2 animate-spin" /> Loading Countdown...
          </CardTitle>
        </CardHeader>
      </Card>
    );
  }

  return (
    <Card className="w-full max-w-2xl mx-auto shadow-xl bg-card/70 backdrop-blur-sm border-accent">
      <CardHeader className="pb-2">
        <CardTitle className="text-4xl font-creepster text-center text-accent">
          Halloween Countdown
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 text-center">
          {Object.entries(timeLeft).map(([unit, value]) => (
            <div key={unit} className="bg-muted p-4 rounded-lg shadow-md">
              <div className="text-5xl font-bold text-primary animate-flicker-text">
                {String(value).padStart(2, '0')}
              </div>
              <div className="text-sm uppercase text-muted-foreground">{unit}</div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}
