'use server';

import { procedureSummarizer, ProcedureSummarizerInput } from '@/ai/flows/procedure-summarizer';
import { z } from 'zod';

const inputSchema = z.object({
  procedureName: z.string().min(3, 'Procedure name must be at least 3 characters.'),
  patientReadingLevel: z.string().min(1, 'Please select a reading level.'),
});

export async function getProcedureSummary(formData: FormData) {
  try {
    const data = {
      procedureName: formData.get('procedureName'),
      patientReadingLevel: formData.get('patientReadingLevel'),
    };
    
    const validatedData = inputSchema.safeParse(data);
    
    if (!validatedData.success) {
      return { error: validatedData.error.errors.map(e => e.message).join(', ') };
    }
    
    const result = await procedureSummarizer(validatedData.data as ProcedureSummarizerInput);
    return { summary: result.summary };
  } catch (e) {
    console.error(e);
    const errorMessage = e instanceof Error ? e.message : 'An unexpected error occurred.';
    return { error: `An error occurred while generating the summary. Please try again. Details: ${errorMessage}` };
  }
}
