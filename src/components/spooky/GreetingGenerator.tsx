'use client';

import { useFormState, useFormStatus } from 'react-dom';
import { handleGenerateGreeting, type GenerateGreetingState } from '@/lib/actions';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { ShareButtons } from './ShareButtons';
import { Wand2, Loader2, AlertTriangle } from 'lucide-react';
import { PumpkinIcon } from './PumpkinIcon';

function SubmitButton() {
  const { pending } = useFormStatus();
  return (
    <Button type="submit" disabled={pending} className="w-full bg-primary hover:bg-primary/90 text-primary-foreground text-lg py-6">
      {pending ? (
        <>
          <Loader2 className="h-5 w-5 mr-2 animate-spin" /> Generating...
        </>
      ) : (
        <>
          <Wand2 className="h-5 w-5 mr-2" /> Conjure Greeting
        </>
      )}
    </Button>
  );
}

export function GreetingGenerator() {
  const initialState: GenerateGreetingState = {};
  const [state, formAction] = useFormState(handleGenerateGreeting, initialState);

  return (
    <Card className="w-full max-w-lg mx-auto shadow-2xl bg-card/70 backdrop-blur-sm border-primary/50">
      <CardHeader className="text-center">
        <PumpkinIcon className="h-16 w-16 mx-auto text-primary mb-2" />
        <CardTitle className="text-4xl font-creepster text-primary">AI Greeting Generator</CardTitle>
        <CardDescription className="text-muted-foreground text-base">
          Let our AI spook-master conjure a unique Halloween greeting for you!
        </CardDescription>
      </CardHeader>
      <form action={formAction}>
        <CardContent className="space-y-6">
          <div className="space-y-2">
            <Label htmlFor="userName" className="text-lg text-accent font-semibold">Your Name (or a spooky alias!)</Label>
            <Input
              id="userName"
              name="userName"
              placeholder="e.g., Count Dracula"
              required
              className="text-base py-3"
              aria-describedby="userName-error"
            />
            {state?.fieldErrors?.userName && (
              <p id="userName-error" className="text-sm text-destructive flex items-center">
                <AlertTriangle className="h-4 w-4 mr-1" />
                {state.fieldErrors.userName.join(', ')}
              </p>
            )}
          </div>
          <div className="space-y-2">
            <Label htmlFor="theme" className="text-lg text-accent font-semibold">Greeting Theme (Optional)</Label>
            <Input
              id="theme"
              name="theme"
              placeholder="e.g., funny, classic horror, kid-friendly"
              className="text-base py-3"
              aria-describedby="theme-error"
            />
            {state?.fieldErrors?.theme && (
              <p id="theme-error" className="text-sm text-destructive flex items-center">
                <AlertTriangle className="h-4 w-4 mr-1" />
                {state.fieldErrors.theme.join(', ')}
              </p>
            )}
          </div>
        </CardContent>
        <CardFooter className="flex flex-col">
          <SubmitButton />
          {state?.error && !state.fieldErrors && (
            <p className="mt-4 text-sm text-destructive flex items-center justify-center bg-destructive/10 p-2 rounded-md">
              <AlertTriangle className="h-4 w-4 mr-2" /> {state.error}
            </p>
          )}
        </CardFooter>
      </form>

      {state?.greeting && (
        <div className="p-6 mt-6 border-t border-border/50">
          <h3 className="text-2xl font-creepster text-center mb-4 text-accent">Your Spooky Greeting:</h3>
          <blockquote className="p-4 bg-muted rounded-lg shadow text-center text-lg italic">
            <p>"{state.greeting}"</p>
          </blockquote>
          <ShareButtons greetingText={state.greeting} />
        </div>
      )}
    </Card>
  );
}
