import Image from 'next/image';

export function Contact() {
  return (
    <section id="contact" className="relative h-[852px]">
      <div className="absolute inset-0 bg-stone-200">
        {/* This would be a map component */}
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3445.8234567890123!2d76.3854301!3d30.3294288!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x391028dd695e0c2b%3A0xab9eccd20f905b2d!2sRajindra%20Hospital%20Patiala!5e0!3m2!1sen!2sin!4v1234567890123!5m2!1sen!2sin"
          width="100%"
          height="100%"
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          title="Rajindra Hospital Patiala Location"
        />
      </div>
      <div className="relative container mx-auto h-full flex items-center">
        <div className="w-full md:w-1/3 bg-white rounded-lg shadow-lg p-8">
          <Image 
            src="/gmcll.jpg"
            alt="GMC Patiala Hospital exterior" 
            width={376} 
            height={304} 
            className="w-full rounded-t-lg object-cover" 
            quality={85}
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            loading="lazy"
          />
          <div className="p-6">
            <div className="mb-6 pb-6 border-b">
              <h4 className="font-bold text-blue-950">Location</h4>
              <p className="text-blue-950">Government Medical College & Hospital</p>
              <p className="text-blue-950">Rajindra Hospital Campus</p>
              <p className="text-blue-950">Patiala, Punjab 147001, India</p>
            </div>
            
            <div>
              <h4 className="font-bold text-blue-950">Email</h4>
              <a href="mailto:surgery@gmcpatiala.edu.in" className="text-teal-500 font-bold">contact@gmcpatialasurgery.com</a>
            <p> <a href="mailto:surgery@gmcpatiala.edu.in" className="text-teal-500 font-bold">gmcpatialasurgery@gmail.com</a></p>
              
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
