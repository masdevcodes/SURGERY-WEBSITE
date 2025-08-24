import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { GraduationCap, BriefcaseMedical } from 'lucide-react';

const facultyMembers = [
  {
    name: 'Dr. Ramesh Sharma',
    qualifications: 'MS, FRC',
    specialization: 'Head of Department, General Surgery',
    image: 'https://placehold.co/100x100.png',
  },
  {
    name: 'Dr. Priya Verma',
    qualifications: 'MS, DNB',
    specialization: 'Professor, Laparoscopic Surgery',
    image: 'https://placehold.co/100x100.png',
  },
  {
    name: 'Dr. Ankit Gupta',
    qualifications: 'MS',
    specialization: 'Associate Professor, Trauma Care',
    image: 'https://placehold.co/100x100.png',
  },
  {
    name: 'Dr. Sunita Kaur',
    qualifications: 'MS',
    specialization: 'Assistant Professor, Pediatric Surgery',
    image: 'https://placehold.co/100x100.png',
  },
];

export function FacultySection() {
  return (
    <section id="faculty" className="bg-secondary">
      <div className="container mx-auto px-4 py-16 sm:py-24">
        <div className="text-center mb-12">
          <h2 className="font-headline text-3xl font-bold md:text-4xl">Meet Our Expert Faculty</h2>
          <p className="mt-4 max-w-2xl mx-auto text-lg text-muted-foreground">
            Our team of highly qualified and experienced surgeons is committed to providing the best possible care.
          </p>
        </div>
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {facultyMembers.map((member) => (
            <Card key={member.name} className="flex flex-col items-center text-center p-6 shadow-lg hover:shadow-xl transition-shadow duration-300">
              <Avatar className="h-24 w-24 mb-4 border-4 border-primary/50">
                <AvatarImage src={member.image} alt={member.name} data-ai-hint="doctor portrait" />
                <AvatarFallback>{member.name.charAt(0)}</AvatarFallback>
              </Avatar>
              <CardHeader className="p-0">
                <CardTitle className="text-xl font-bold">{member.name}</CardTitle>
              </CardHeader>
              <CardContent className="p-0 mt-4 flex-grow">
                <div className="space-y-2 text-muted-foreground">
                  <div className="flex items-center justify-center gap-2">
                    <GraduationCap className="h-4 w-4 text-primary" />
                    <span>{member.qualifications}</span>
                  </div>
                  <div className="flex items-center justify-center gap-2">
                     <BriefcaseMedical className="h-4 w-4 text-primary" />
                     <span>{member.specialization}</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
