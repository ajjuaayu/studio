import Image from 'next/image';
import { Header } from '@/components/spooky/Header';
import { Footer } from '@/components/spooky/Footer';
import { CountdownTimer } from '@/components/spooky/CountdownTimer';
import { GreetingGenerator } from '@/components/spooky/GreetingGenerator';
import { AnimatedGhost } from '@/components/spooky/AnimatedGhost';
import { BatIcon } from '@/components/spooky/BatIcon';
import { PumpkinIcon } from '@/components/spooky/PumpkinIcon';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";


export default function HomePage() {
  return (
    <div className="flex flex-col min-h-screen bg-background overflow-x-hidden relative">
      {/* Floating elements for spooky atmosphere */}
      <AnimatedGhost className="absolute top-1/4 left-[5%] opacity-30" size={60} delay="0s" />
      <AnimatedGhost className="absolute top-1/2 right-[8%] opacity-20" size={40} delay="-1s" />
      <BatIcon className="absolute top-[10%] right-[15%] w-12 h-12 text-foreground/30 animate-bat-float" />
      <BatIcon className="absolute bottom-[15%] left-[10%] w-10 h-10 text-foreground/20 animate-bat-float [animation-delay:-2.5s]" style={{transform: 'scaleX(-1)'}}/>
      
      <Header />

      <main className="flex-grow container mx-auto px-4 py-8 md:py-16 space-y-16 md:space-y-24 relative z-10">
        <section id="hero" className="text-center">
          <PumpkinIcon className="h-24 w-24 md:h-32 md:w-32 mx-auto text-primary mb-6 animate-pulse" data-ai-hint="pumpkin halloween" />
          <h2 className="text-5xl md:text-7xl font-creepster mb-4 text-transparent bg-clip-text bg-gradient-to-r from-primary via-accent to-primary animate-flicker-text">
            Welcome, Ghouls and Goblins!
          </h2>
          <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto">
            Get ready for a spooktacular Halloween! Generate unique, AI-powered greetings and count down the seconds until the witching hour.
          </p>
        </section>

        <section id="countdown" className="relative">
           <AnimatedGhost className="absolute -top-12 -left-12 opacity-40 hidden md:block" size={80} delay="-0.5s" />
          <CountdownTimer />
        </section>

        <section id="generator" className="relative">
           <BatIcon className="absolute -top-10 -right-10 w-16 h-16 text-foreground/40 animate-bat-float hidden md:block [animation-delay:-1s]" />
          <GreetingGenerator />
        </section>

        <section id="about-halloween" className="max-w-3xl mx-auto">
          <Card className="bg-card/50 backdrop-blur-sm border-accent/30">
            <CardHeader>
              <CardTitle className="text-3xl font-creepster text-center text-accent">
                What's Halloween All About?
              </CardTitle>
            </CardHeader>
            <CardContent className="text-muted-foreground space-y-4 text-lg">
              <p>
                Halloween, celebrated each year on October 31, has roots in the ancient Celtic festival of Samhain. People would light bonfires and wear costumes to ward off ghosts. 
              </p>
              <p>
                Today, it's a day of fun activities like trick-or-treating, carving jack-o'-lanterns, festive gatherings, donning costumes, and eating treats. It's a time for spooky fun and imagination!
              </p>
               <div className="flex justify-around items-center pt-4">
                <PumpkinIcon className="h-12 w-12 text-primary" />
                <Image src="https://placehold.co/80x80.png" alt="Ghost illustration" data-ai-hint="ghost cartoon" width={80} height={80} className="rounded-full opacity-80" />
                <BatIcon className="h-12 w-12 text-accent" />
              </div>
            </CardContent>
          </Card>
        </section>

      </main>
      
      <Footer />
    </div>
  );
}
