// use server'

/**
 * @fileOverview AI tool which is used to generate descriptions of common surgical procedures and treatment plans.
 *
 * - procedureSummarizer - A function that handles the procedure summarization process.
 * - ProcedureSummarizerInput - The input type for the procedureSummarizer function.
 * - ProcedureSummarizerOutput - The return type for the procedureSummarizer function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const ProcedureSummarizerInputSchema = z.object({
  procedureName: z.string().describe('The name of the surgical procedure.'),
  patientReadingLevel: z
    .string()
    .describe(
      'The target reading level of the patient (e.g., elementary school, high school, general public).'
    ),
});
export type ProcedureSummarizerInput = z.infer<typeof ProcedureSummarizerInputSchema>;

const ProcedureSummarizerOutputSchema = z.object({
  summary: z
    .string()
    .describe(
      'A simplified explanation of the surgical procedure tailored to the patient reading level.'
    ),
});
export type ProcedureSummarizerOutput = z.infer<typeof ProcedureSummarizerOutputSchema>;

export async function procedureSummarizer(
  input: ProcedureSummarizerInput
): Promise<ProcedureSummarizerOutput> {
  return procedureSummarizerFlow(input);
}

const prompt = ai.definePrompt({
  name: 'procedureSummarizerPrompt',
  input: {schema: ProcedureSummarizerInputSchema},
  output: {schema: ProcedureSummarizerOutputSchema},
  prompt: `You are a medical communication expert tasked with explaining surgical procedures to patients.

  Provide a simplified explanation of the following surgical procedure, tailored to the patient's reading level.

  Procedure Name: {{{procedureName}}}
  Patient Reading Level: {{{patientReadingLevel}}}

  Summary:
  `,
});

const procedureSummarizerFlow = ai.defineFlow(
  {
    name: 'procedureSummarizerFlow',
    inputSchema: ProcedureSummarizerInputSchema,
    outputSchema: ProcedureSummarizerOutputSchema,
  },
  async input => {
    const {output} = await prompt(input);
    return output!;
  }
);
