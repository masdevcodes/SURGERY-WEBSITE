import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { FileText } from 'lucide-react';

const publications = [
  {
    title: 'Innovations in Minimally Invasive Hernia Repair',
    authors: 'Sharma R, Verma P, et al.',
    journal: 'Journal of Surgical Innovation, 2023',
    link: '#',
  },
  {
    title: 'Outcomes of a Novel Suture Technique in GI Anastomosis',
    authors: 'Gupta A, Kaur S, et al.',
    journal: 'Indian Journal of Surgery, 2022',
    link: '#',
  },
  {
    title: 'A Comparative Study of Staplers in Laparoscopic Surgery',
    authors: 'Verma P, Sharma R, et al.',
    journal: 'Annals of Surgical Oncology, 2021',
    link: '#',
  },
];

export function ResearchSection() {
  return (
    <section id="research" className="bg-secondary">
      <div className="container mx-auto px-4 py-16 sm:py-24">
        <div className="text-center mb-12">
          <h2 className="font-headline text-3xl font-bold md:text-4xl">Research and Publications</h2>
          <p className="mt-4 max-w-2xl mx-auto text-lg text-muted-foreground">
            Our department is at the forefront of surgical research, constantly striving to improve patient outcomes through innovation.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {publications.map((pub) => (
            <Card key={pub.title} className="flex flex-col shadow-lg hover:shadow-xl transition-shadow duration-300">
              <CardHeader>
                <div className="flex items-start gap-4">
                  <div className="bg-primary/20 p-3 rounded-full">
                    <FileText className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <CardTitle className="text-xl">{pub.title}</CardTitle>
                    <CardDescription className="mt-1">{pub.authors}</CardDescription>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="flex-grow">
                <p className="text-muted-foreground">{pub.journal}</p>
              </CardContent>
              <div className="p-6 pt-0">
                <Button asChild variant="link" className="p-0 h-auto">
                  <a href={pub.link} target="_blank" rel="noopener noreferrer">Read Publication &rarr;</a>
                </Button>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
