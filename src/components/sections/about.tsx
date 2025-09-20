import Image from 'next/image';
import { Stethoscope, Globe, Heart, Users } from 'lucide-react';

export function About() {
  return (
    <section id="about" className="py-24 bg-white relative">
      <Image
        src="/111.png"
        alt="Abstract background"
        fill
        className="object-cover opacity-50"
        data-ai-hint="abstract texture"
      />
      <div className="container mx-auto relative">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-16 items-start"> {/* Changed from items-center to items-start */}
          <div className="lg:col-span-2">
            <div className="relative overflow-hidden rounded-lg">
              <Image
                src="/kun.png"
                alt="Doctors consulting with patient in hospital"
                width={512}
                height={1102}
                className="rounded-lg object-cover w-full h-full transition-transform duration-700 hover:scale-110"
                quality={85}
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                loading="lazy"
                data-ai-hint="doctors patient consultation"
              />
            </div>
          </div>
          <div className="lg:col-span-3 space-y-12">
            <h2 className="text-4xl font-bold text-blue-950 font-body leading-tight">
              For everyday care or life changing care, you can count on us to keep you and your loved ones safe and healthy.
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-white/10 backdrop-blur-md border border-white/20 p-6 rounded-lg shadow-lg hover:bg-white/15 hover:scale-105 transition-all duration-300 flex flex-col items-center text-center md:text-left md:items-start md:col-span-1">
                <Stethoscope className="w-10 h-10 text-teal-500 mb-4" />
                <h4 className="text-blue-950 font-bold font-body text-xl mb-2">Our Approach</h4>
                <p className="text-sm text-center text-blue-950/80">
                We are committed to providing care that meets your needs, whether it’s routine check-ups or critical treatments. Our team works with compassion and expertise to ensure the best outcomes for every patient.You can rely on us to keep you and your loved ones safe, healthy and supported at every step.
                </p>
              </div>
              <div className="md:col-span-2">
                <p className="text-base text-blue-950/80 text-justify leading-relaxed">
                  We aspire to build a community where every individual has the opportunity to achieve their highest potential for health and well-being at every stage of life. Guided by compassion, excellence, and innovation, we aim to be more than just a healthcare provider, we strive to be a trusted partner in your journey toward better health, a valued member of the community, and a catalyst for positive change.
                </p>
                <p className="text-base text-blue-950/80 text-justify leading-relaxed mt-4">
               At the heart of our care is a team-based model that places the patient at the center. We believe that healthcare works best when patients are active participants in their treatment, supported by a multidisciplinary team of skilled professionals. This collaborative approach ensures that care is not only comprehensive but also personalized to meet each individual’s unique needs.
                </p>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
              <div className="bg-white/10 backdrop-blur-md border border-white/20 p-6 rounded-lg shadow-lg hover:bg-white/15 hover:scale-105 transition-all duration-300">
                <Globe className="w-10 h-10 text-teal-500 mb-4" />
                <h4 className="font-bold text-blue-950 font-body text-base mb-2">Our Vision</h4>
                <p className="text-sm text-center text-blue-950/80">
                  A community in which our vision is to establish all people achieve their full potential for health and well-being across complexity the lifespan.
                </p>
              </div>
              <div className="bg-white/10 backdrop-blur-md border border-white/20 p-6 rounded-lg shadow-lg hover:bg-white/15 hover:scale-105 transition-all duration-300">
                <Heart className="w-10 h-10 text-teal-500 mb-4" />
                <h4 className="font-bold text-blue-950 font-body text-base mb-2">Our Values</h4>
                <p className="text-sm text-center text-blue-950/80">
                  We care for the whole person, see the complexity of each person's life, and believe that addressing a broad range of human needs is the best.
                </p>
              </div>
              <div className="bg-white/10 backdrop-blur-md border border-white/20 p-6 rounded-lg shadow-lg hover:bg-white/15 hover:scale-105 transition-all duration-300">
                <Users className="w-10 h-10 text-teal-500 mb-4" />
                <h4 className="font-bold text-blue-950 font-body text-base mb-2">Our Team</h4>
                <p className="text-sm text-blue-950/80">
                  Provide patient-centered healthcare with excellence in quality, service, and access. A community in which all people to provide our patients.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}