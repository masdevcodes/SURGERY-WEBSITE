import Image from 'next/image';

export function About() {
  return (
    <section id="about" className="py-24 bg-white">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <Image
              src="/home_01_image_01.avif"
              alt="Doctor smiling"
              width={512}
              height={1102}
              className="rounded-lg"
              data-ai-hint="doctor smiling"
            />
          </div>
          <div className="space-y-8">
            <h2 className="text-3xl font-bold text-blue-950 font-body leading-tight">For everyday care or life-changing care, you can count on us to keep you and your loved ones safe and healthy.</h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="md:col-span-2 bg-zinc-100 p-6 rounded-lg">
                <div className="flex items-start gap-4">
                    <div className="w-11 h-11 bg-gray-100 rounded-md flex-shrink-0 flex items-center justify-center">
                        <svg width="28" height="36" viewBox="0 0 28 36" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M25.4799 11.25L13.9999 0L2.5199 11.25H8.7599V22.5H19.2399V11.25H25.4799Z" fill="#0D2E6E" /></svg>
                    </div>
                    <div>
                        <h3 className="text-blue-950 font-bold font-body text-base mb-2">Our Approach to Trusted, Patient-Centered Care</h3>
                        <p className="text-sm text-blue-950">A community in which all people achieve their full potential for health and well-being across the lifespan. We work to be trusted by patients, a valued partner in the community, and creators of positive change. We use a team approach to providing health care, and involve the patient as part of our team. Health our staff in the community enhances our ability to provide of often highly specialized effective.</p>
                    </div>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              <div className="bg-white p-6 rounded-lg shadow-md">
                <div className="w-11 h-11 bg-gray-100 rounded-md mb-4 flex items-center justify-center">
                  <svg width="40" height="36" viewBox="0 0 40 36" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M37.64 18C37.64 8.059 29.581 0 19.64 0C9.699 0 1.64 8.059 1.64 18C1.64 27.941 9.699 36 19.64 36C29.581 36 37.64 27.941 37.64 18Z" fill="#01CAB8" /></svg>
                </div>
                <h4 className="font-bold text-blue-950 font-body text-base mb-2">Our Vision</h4>
                <p className="text-sm text-blue-950">A community in which our vision is to establish all people achieve their full potential for health and well-being across complexity the lifespan.</p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md">
                <div className="w-11 h-11 bg-gray-100 rounded-md mb-4 flex items-center justify-center">
                  <svg width="40" height="37" viewBox="0 0 40 37" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M1.74219 18.7891C1.74219 8.68359 9.57031 0.601562 19.3672 0.601562C29.1641 0.601562 37.0312 8.68359 37.0312 18.7891V36.0352H1.74219V18.7891Z" fill="#01CAB8" /></svg>
                </div>
                <h4 className="font-bold text-blue-950 font-body text-base mb-2">Our Values</h4>
                <p className="text-sm text-blue-950">We care for the whole person, see the complexity of each person’s life, and believe that addressing a broad range of human needs is the best.</p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md sm:col-span-2">
                <div className="w-11 h-11 bg-gray-100 rounded-md mb-4 flex items-center justify-center">
                  <svg width="29" height="36" viewBox="0 0 29 36" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M28.4023 18C28.4023 27.9414 20.3437 36 10.4023 36C0.460938 36 -7.59766 27.9414 -7.59766 18C-7.59766 8.05859 0.460938 0 10.4023 0C20.3437 0 28.4023 8.05859 28.4023 18Z" fill="#01CAB8" /></svg>
                </div>
                <h4 className="font-bold text-blue-950 font-body text-base mb-2">Our Team</h4>
                <p className="text-sm text-blue-950">Provide patient-centered healthcare with excellence in quality, service, and access. A community in which all people to provide our patients.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
