'use client';

import React, { useState, useTransition } from 'react';
import { getProcedureSummary } from '@/app/actions';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Bot, LoaderCircle, Sparkles } from 'lucide-react';
import { useToast } from "@/hooks/use-toast";

export function AiSummarizerSection() {
  const [summary, setSummary] = useState('');
  const [error, setError] = useState('');
  const [isPending, startTransition] = useTransition();
  const { toast } = useToast();

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    
    setError('');
    setSummary('');

    startTransition(async () => {
      const result = await getProcedureSummary(formData);
      if (result.error) {
        setError(result.error);
        toast({
            title: "Error",
            description: result.error,
            variant: "destructive",
        });
      } else {
        setSummary(result.summary || '');
      }
    });
  };

  return (
    <section id="ai-summarizer" className="bg-secondary">
      <div className="container mx-auto px-4 py-16 sm:py-24">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            <div className="flex items-center gap-3 mb-2">
               <Bot className="h-8 w-8 text-primary"/>
               <h2 className="font-headline text-3xl font-bold md:text-4xl">AI Procedure Summarizer</h2>
            </div>
            <p className="mt-4 text-lg text-muted-foreground">
              Understanding a surgical procedure can be complex. Use our AI tool to get a simplified explanation tailored to your reading level.
            </p>
            <form onSubmit={handleSubmit} className="mt-6 space-y-4">
              <div>
                <Label htmlFor="procedureName">Surgical Procedure Name</Label>
                <Input
                  id="procedureName"
                  name="procedureName"
                  placeholder="e.g., Appendectomy, Cholecystectomy"
                  required
                  className="mt-1"
                />
              </div>
              <div>
                <Label htmlFor="patientReadingLevel">Patient Reading Level</Label>
                <Select name="patientReadingLevel" defaultValue="general-public" required>
                  <SelectTrigger id="patientReadingLevel" className="mt-1">
                    <SelectValue placeholder="Select a reading level" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="elementary-school">Elementary School</SelectItem>
                    <SelectItem value="high-school">High School</SelectItem>
                    <SelectItem value="general-public">General Public</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <Button type="submit" className="w-full" disabled={isPending}>
                {isPending ? (
                  <>
                    <LoaderCircle className="mr-2 h-4 w-4 animate-spin" />
                    Generating...
                  </>
                ) : (
                   <>
                    <Sparkles className="mr-2 h-4 w-4" />
                    Generate Summary
                  </>
                )}
              </Button>
            </form>
          </div>
          <div>
            <Card className="min-h-[300px] flex flex-col justify-center shadow-lg">
              <CardHeader>
                <CardTitle>Your Simplified Summary</CardTitle>
                <CardDescription>The explanation will appear below.</CardDescription>
              </CardHeader>
              <CardContent>
                {isPending && (
                  <div className="flex items-center justify-center text-muted-foreground">
                    <LoaderCircle className="mr-2 h-5 w-5 animate-spin" />
                    Our AI is thinking...
                  </div>
                )}
                {summary && <p className="text-foreground whitespace-pre-wrap">{summary}</p>}
                {error && <p className="text-destructive">{error}</p>}
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}
