'use server';

import { generateHalloweenGreeting, type GenerateHalloweenGreetingInput } from '@/ai/flows/generate-halloween-greeting';
import { z } from 'zod';

const GreetingSchema = z.object({
  userName: z.string().min(1, { message: "Name is required." }).max(50, { message: "Name is too long." }),
  theme: z.string().max(50, { message: "Theme is too long." }).optional(),
});

export interface GenerateGreetingState {
  greeting?: string;
  error?: string;
  fieldErrors?: {
    userName?: string[];
    theme?: string[];
  };
}

export async function handleGenerateGreeting(
  prevState: GenerateGreetingState,
  formData: FormData
): Promise<GenerateGreetingState> {
  const rawFormData = {
    userName: formData.get('userName'),
    theme: formData.get('theme'),
  };

  const validatedFields = GreetingSchema.safeParse(rawFormData);

  if (!validatedFields.success) {
    return {
      error: "Invalid input.",
      fieldErrors: validatedFields.error.flatten().fieldErrors,
    };
  }
  
  const input: GenerateHalloweenGreetingInput = {
    userName: validatedFields.data.userName,
    ...(validatedFields.data.theme && { theme: validatedFields.data.theme }),
  };

  try {
    const result = await generateHalloweenGreeting(input);
    if (result.greeting) {
      return { greeting: result.greeting };
    } else {
      return { error: 'Failed to generate greeting. Please try again.' };
    }
  } catch (e) {
    console.error(e);
    return { error: 'An unexpected error occurred. Please try again later.' };
  }
}
