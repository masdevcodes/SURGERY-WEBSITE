import Image from 'next/image';

export function Contact() {
  return (
    <section id="contact" className="relative h-[852px]">
      <div className="absolute inset-0 bg-stone-200">
        {/* This would be a map component */}
        <Image src="https://placehold.co/1425x853" alt="Map" fill className="object-cover" data-ai-hint="map city" />
      </div>
      <div className="relative container mx-auto h-full flex items-center">
        <div className="w-full md:w-1/3 bg-white rounded-lg shadow-lg p-8">
          <Image src="https://placehold.co/376x304" alt="Clinic exterior" width={376} height={304} className="w-full rounded-t-lg" data-ai-hint="clinic exterior" />
          <div className="p-6">
            <div className="mb-6 pb-6 border-b">
              <h4 className="font-bold text-blue-950">Location</h4>
              <p className="text-blue-950">60 East 65th Street, New York</p>
            </div>
            <div className="mb-6 pb-6 border-b">
              <h4 className="font-bold text-blue-950">Phone</h4>
              <p className="text-blue-950">1-800-100-900</p>
            </div>
            <div>
              <h4 className="font-bold text-blue-950">Email</h4>
              <a href="mailto:appointement@cliniq.com" className="text-teal-500 font-bold">appointement@cliniq.com</a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
