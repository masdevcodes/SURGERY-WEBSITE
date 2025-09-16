import Image from 'next/image';
import { Stethoscope, Globe, Heart, Users } from 'lucide-react';

export function About() {
  return (
    <section id="about" className="py-24 bg-white relative">
      <Image
        src="/111.png"
        alt="Abstract background"
        fill
        className="object-cover opacity-30"
        data-ai-hint="abstract texture"
      />
      <div className="container mx-auto relative">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-16 items-center">
          <div className="lg:col-span-2">
            <Image
              src="/Gemini_Generated_Image_ywjevmywjevmywje.png"
              alt="Doctors consulting with patient in hospital"
              width={512}
              height={1102}
              className="rounded-lg object-cover w-full h-full"
              data-ai-hint="doctors patient consultation"
            />
          </div>
          <div className="lg:col-span-3 space-y-12">
            <h2 className="text-4xl font-bold text-blue-950 font-body leading-tight">
              For everyday care or life-changing care, you can count on us to keep you and your loved ones safe and healthy.
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-white/10 backdrop-blur-md border border-white/20 p-6 rounded-lg shadow-lg hover:bg-white/15 hover:scale-105 transition-all duration-300 flex flex-col items-center text-center md:text-left md:items-start md:col-span-1">
                <Stethoscope className="w-10 h-10 text-teal-500 mb-4" />
                <h3 className="text-blue-950 font-bold font-body text-xl mb-2">Our Approach</h3>
                <p className="text-sm text-blue-950/80">
                  For everyday care or life-changing care, you can count the patient on us to keep you and loved ones safe and healthy.
                </p>
              </div>
              <div className="md:col-span-2">
                <p className="text-base text-blue-950/80 leading-relaxed">
                  A community in which all people achieve their full potential for health and well-being across the lifespan. We work to be trusted by patients, a valued partner in the community, and creators of positive change.
                </p>
                <p className="text-base text-blue-950/80 leading-relaxed mt-4">
                  We use a team approach to providing health care, and involve the patient as part of our team. Health our staff in the community enhances our ability to provide of often highly specialized effective.
                </p>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
              <div className="bg-white/10 backdrop-blur-md border border-white/20 p-6 rounded-lg shadow-lg hover:bg-white/15 hover:scale-105 transition-all duration-300">
                <Globe className="w-10 h-10 text-teal-500 mb-4" />
                <h4 className="font-bold text-blue-950 font-body text-base mb-2">Our Vision</h4>
                <p className="text-sm text-blue-950/80">
                  A community in which our vision is to establish all people achieve their full potential for health and well-being across complexity the lifespan.
                </p>
              </div>
              <div className="bg-white/10 backdrop-blur-md border border-white/20 p-6 rounded-lg shadow-lg hover:bg-white/15 hover:scale-105 transition-all duration-300">
                <Heart className="w-10 h-10 text-teal-500 mb-4" />
                <h4 className="font-bold text-blue-950 font-body text-base mb-2">Our Values</h4>
                <p className="text-sm text-blue-950/80">
                  We care for the whole person, see the complexity of each person’s life, and believe that addressing a broad range of human needs is the best.
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
