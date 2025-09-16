import Image from 'next/image';

export function MedicalSpecialties() {
  return (
    <section id="head-of-surgery" className="py-24 bg-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0">
        <Image
          src="/Gemini_Generated_Image_d69dd3d69dd3d69d.png"
          alt="Abstract geometric background"
          fill
          className="object-cover opacity-10"
          data-ai-hint="geometric pattern background"
        />
      </div>
      
      <div className="container mx-auto relative">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left Side - Doctor Image */}
          <div className="relative">
            <div className="relative w-full h-[600px] rounded-2xl overflow-hidden shadow-2xl">
              <Image
                src="/Gemini_Generated_Image_d69dd3d69dd3d69d.png"
                alt="Head of Surgery - Dr. Rajesh Kumar"
                fill
                className="object-cover"
                data-ai-hint="doctor portrait professional"
              />
              {/* Overlay gradient for better text readability */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
            </div>
            
            {/* Decorative elements */}
            <div className="absolute -top-4 -right-4 w-24 h-24 bg-teal-500/20 rounded-full blur-xl"></div>
            <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-blue-500/10 rounded-full blur-2xl"></div>
          </div>
          
          {/* Right Side - Testimony Content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-16 h-1 bg-teal-500"></div>
                <span className="text-teal-600 font-semibold text-sm uppercase tracking-wider">
                  Head of Department
                </span>
              </div>
              
              <h2 className="text-5xl font-bold text-blue-950 font-headline leading-tight">
                Message from our
                <span className="text-teal-600"> Head of Surgery</span>
              </h2>
            </div>
            
            {/* Quote Icon */}
            <div className="w-16 h-16 bg-teal-100 rounded-full flex items-center justify-center">
              <svg className="w-8 h-8 text-teal-600" fill="currentColor" viewBox="0 0 24 24">
                <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h4v10h-10z"/>
              </svg>
            </div>
            
            {/* Testimony Text */}
            <blockquote className="text-lg leading-relaxed text-gray-700 italic">
              "As the Head of the Department of Surgery, I am proud of the commitment and dedication shown by our team in providing the highest standard of surgical care. Our department combines advanced clinical expertise with compassion, ensuring that every patient receives personalized treatment tailored to their needs. We place a strong emphasis on continuous learning, innovation, and research to keep pace with the latest developments in the field. It is our mission to not only treat patients but also to guide and support them through every step of their surgical journey. I am confident that with our skilled doctors, modern facilities, and patient-centered approach, we will continue to deliver excellence in surgical care."
            </blockquote>
            
            {/* Doctor Info */}
            <div className="pt-6 border-t border-gray-200">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-teal-600 rounded-full flex items-center justify-center">
                  <span className="text-white font-bold text-lg">RK</span>
                </div>
                <div>
                  <h4 className="font-bold text-blue-950 text-lg">Dr. Rajesh Kumar</h4>
                  <p className="text-teal-600 font-medium">Head of Surgery Department</p>
                  <p className="text-gray-600 text-sm">GMC Patiala</p>
                </div>
              </div>
            </div>
            
            {/* Call to Action */}
            <div className="pt-4">
              <button className="bg-teal-600 text-white font-bold px-8 py-4 rounded-lg hover:bg-teal-700 transition-colors duration-300 flex items-center gap-2">
                Learn More About Our Surgery Department
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}