import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';

const services = [
  {
    title: "General Surgery",
    description: "Our general surgery unit handles a wide range of common surgical problems, from appendicitis and hernias to gallbladder and intestinal issues, using both open and minimally invasive techniques.",
  },
  {
    title: "Laparoscopic Surgery",
    description: "We specialize in minimally invasive laparoscopic surgery (keyhole surgery), which offers patients benefits such as smaller incisions, less pain, shorter hospital stays, and faster recovery times.",
  },
  {
    title: "Trauma & Emergency Surgery",
    description: "Our department provides 24/7 comprehensive care for trauma and surgical emergencies, with a dedicated team ready to handle critical injuries and life-threatening conditions.",
  },
  {
    title: "Oncosurgery (Cancer Surgery)",
    description: "We offer advanced surgical treatment for various types of cancers. Our multidisciplinary team works together to provide comprehensive cancer care, from diagnosis to treatment and recovery.",
  },
  {
    title: "Pediatric Surgery",
    description: "Specialized surgical care for infants, children, and adolescents. Our team is trained to handle the unique surgical needs of young patients with compassion and expertise.",
  }
];

export function ServicesSection() {
  return (
    <section id="services" className="bg-background">
      <div className="container mx-auto px-4 py-16 sm:py-24">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="md:pr-8">
            <h2 className="font-headline text-3xl font-bold md:text-4xl">Our Surgical Services</h2>
            <p className="mt-4 text-lg text-muted-foreground">
              We offer a comprehensive range of surgical services, utilizing the latest technology and techniques to ensure the best outcomes for our patients.
            </p>
          </div>
          <Accordion type="single" collapsible className="w-full">
            {services.map((service, index) => (
              <AccordionItem value={`item-${index}`} key={service.title}>
                <AccordionTrigger className="text-lg font-semibold hover:no-underline">
                  {service.title}
                </AccordionTrigger>
                <AccordionContent className="text-base text-muted-foreground">
                  {service.description}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
}
