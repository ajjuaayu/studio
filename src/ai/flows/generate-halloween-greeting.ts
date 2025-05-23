// use server'

/**
 * @fileOverview AI-powered Halloween greeting generator.
 *
 * - generateHalloweenGreeting - A function that generates a Halloween greeting.
 * - GenerateHalloweenGreetingInput - The input type for the generateHalloweenGreeting function.
 * - GenerateHalloweenGreetingOutput - The return type for the generateHalloweenGreeting function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const GenerateHalloweenGreetingInputSchema = z.object({
  userName: z.string().describe('The name of the user to greet.'),
  theme: z
    .string() 
    .optional()
    .describe('Optional theme for the Halloween greeting, e.g., spooky, funny, or classic.'),
});
export type GenerateHalloweenGreetingInput = z.infer<typeof GenerateHalloweenGreetingInputSchema>;

const GenerateHalloweenGreetingOutputSchema = z.object({
  greeting: z.string().describe('The generated Halloween greeting.'),
});
export type GenerateHalloweenGreetingOutput = z.infer<typeof GenerateHalloweenGreetingOutputSchema>;

export async function generateHalloweenGreeting(
  input: GenerateHalloweenGreetingInput
): Promise<GenerateHalloweenGreetingOutput> {
  return generateHalloweenGreetingFlow(input);
}

const prompt = ai.definePrompt({
  name: 'generateHalloweenGreetingPrompt',
  input: {schema: GenerateHalloweenGreetingInputSchema},
  output: {schema: GenerateHalloweenGreetingOutputSchema},
  prompt: `You are a creative Halloween greeting writer. Generate a personalized Halloween greeting for {{userName}}.\n\n{% if theme %} The theme is {{theme}}.{% endif %}\n\nGreeting:`, 
});

const generateHalloweenGreetingFlow = ai.defineFlow(
  {
    name: 'generateHalloweenGreetingFlow',
    inputSchema: GenerateHalloweenGreetingInputSchema,
    outputSchema: GenerateHalloweenGreetingOutputSchema,
  },
  async input => {
    const {output} = await prompt(input);
    return output!;
  }
);
