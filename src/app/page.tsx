import Image from 'next/image';
import {
  Phone,
  ArrowRight,
  Search,
  MapPin,
  Mail,
  Check,
} from 'lucide-react';

export default function Home() {
  return (
    <div className="w-full min-h-screen bg-white">
      {/* Header */}
      <header className="absolute top-0 left-0 w-full h-24 z-20 border-b border-white/30 bg-zinc-900/50 backdrop-blur-sm">
        <div className="container mx-auto flex items-center justify-between h-full px-5">
          <div className="w-28 h-24">
            <Image
              src="https://placehold.co/120x90"
              alt="Logo"
              width={120}
              height={90}
              data-ai-hint="logo"
            />
          </div>
          <nav className="hidden lg:flex items-center space-x-12 h-full text-white">
            <a
              href="#"
              className="h-full flex items-center border-b-[3px] border-white text-base font-semibold uppercase"
            >
              Home
            </a>
            <a
              href="#"
              className="h-full flex items-center border-b-[3px] border-transparent hover:border-white text-base font-semibold uppercase"
            >
              About
            </a>
            <a
              href="#"
              className="h-full flex items-center border-b-[3px] border-transparent hover:border-white text-base font-semibold uppercase"
            >
              Pages
            </a>
            <a
              href="#"
              className="h-full flex items-center border-b-[3px] border-transparent hover:border-white text-base font-semibold uppercase"
            >
              Elements
            </a>
          </nav>
          <div className="flex items-center gap-4">
            <button className="w-11 h-11 bg-white/10 rounded-full flex items-center justify-center">
              <Search className="w-4 h-4 text-white" />
            </button>
            <button className="w-11 h-11 bg-white/10 rounded-full flex items-center justify-center">
              <svg
                width="14"
                height="14"
                viewBox="0 0 14 14"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M7 0C3.13 0 0 3.13 0 7C0 10.87 3.13 14 7 14C10.87 14 14 10.87 14 7C14 3.13 10.87 0 7 0ZM7 12.6C3.91 12.6 1.4 10.09 1.4 7C1.4 3.91 3.91 1.4 7 1.4C10.09 1.4 12.6 3.91 12.6 7C12.6 10.09 10.09 12.6 7 12.6ZM9.8 4.2H8.75V7.35H4.2V8.75H9.8V4.2Z"
                  fill="white"
                />
              </svg>
            </button>
            <button className="bg-teal-500 rounded-md shadow-sm px-6 py-3 flex items-center gap-3">
              <svg
                width="20"
                height="20"
                viewBox="0 0 20 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M16.6666 5.83333H14.1666V3.33333C14.1666 2.41667 13.4166 1.66667 12.5 1.66667H7.5C6.58332 1.66667 5.83332 2.41667 5.83332 3.33333V5.83333H3.33332C2.41666 5.83333 1.66666 6.58333 1.66666 7.5V16.6667C1.66666 17.5833 2.41666 18.3333 3.33332 18.3333H16.6666C17.5833 18.3333 18.3333 17.5833 18.3333 16.6667V7.5C18.3333 6.58333 17.5833 5.83333 16.6666 5.83333ZM7.49999 3.33333H12.5V5.83333H7.49999V3.33333ZM11.6666 13.3333H10.8333V14.1667H9.16666V13.3333H8.33332V11.6667H9.16666V10.8333H10.8333V11.6667H11.6666V13.3333Z"
                  fill="white"
                />
              </svg>
              <span className="text-white text-sm font-bold leading-none">
                Make an Appointment
              </span>
            </button>
          </div>
        </div>
      </header>

      <main>
        {/* Hero Section */}
        <section className="h-[939px] relative bg-zinc-900 text-white">
          <Image
            src="https://placehold.co/1425x939"
            alt="Clinic background"
            fill
            className="object-cover"
            data-ai-hint="clinic interior"
          />
          <div className="absolute inset-0 bg-gradient-to-l from-white via-white/5 to-black/0" />
          <div className="relative container mx-auto px-4 sm:px-6 lg:px-8 flex flex-col justify-center h-full">
            <div className="max-w-4xl mt-32">
              <div className="w-72 h-16 relative mb-8">
                <Image
                  src="https://placehold.co/280x65"
                  alt="Cliniq Logo"
                  width={280}
                  height={65}
                  data-ai-hint="logo"
                />
              </div>
              <h1 className="text-8xl font-bold font-headline leading-tight">
                Our expertise
              </h1>
              <h1 className="text-8xl font-bold font-headline leading-tight">
                at your service
              </h1>
            </div>

            <div className="absolute bottom-16 left-4 right-4 lg:left-8 lg:right-8 xl:left-28 xl:right-28">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-0 max-w-7xl mx-auto">
                <div className="group bg-white/20 p-6 rounded-t-lg md:rounded-tr-none md:rounded-l-lg shadow-lg border-t border-white/30 backdrop-blur-sm relative overflow-hidden">
                  <h3 className="text-2xl font-bold font-body leading-loose">
                    Our Service
                  </h3>
                  <h3 className="text-2xl font-bold font-body leading-loose">
                    Providers
                  </h3>
                  <div className="w-36 h-0.5 bg-white mt-2" />
                  <div className="w-10 h-10 absolute right-4 top-4 bg-white/10 rounded-full flex items-center justify-center">
                    <ArrowRight className="w-5 h-5 text-white" />
                  </div>
                </div>

                <div className="group bg-white/20 p-6 shadow-lg border-t border-l md:border-l-0 border-white/30 backdrop-blur-sm relative overflow-hidden">
                  <h3 className="text-2xl font-bold font-body leading-loose">
                    Book an
                  </h3>
                  <h3 className="text-2xl font-bold font-body leading-loose">
                    Appointment
                  </h3>
                  <div className="w-40 h-0.5 bg-white mt-2" />
                  <div className="w-10 h-10 absolute right-4 top-4 bg-white/10 rounded-full flex items-center justify-center">
                    <ArrowRight className="w-5 h-5 text-white" />
                  </div>
                </div>

                <div className="group bg-white/20 p-6 rounded-b-lg md:rounded-bl-none md:rounded-r-lg shadow-lg border-t border-l border-white/30 backdrop-blur-sm relative overflow-hidden">
                  <h3 className="text-2xl font-bold font-body leading-loose">
                    Have an Emergency?
                  </h3>
                  <div className="w-60 h-0.5 bg-white mt-2 mb-4" />
                  <div className="flex items-center gap-4">
                    <Phone className="h-8 w-8 text-white" />
                    <div>
                      <p className="text-xs font-bold font-body tracking-wider">
                        EMERGENCY LINE
                      </p>
                      <p className="text-xl font-bold font-body">1-800-900</p>
                    </div>
                  </div>
                  <div className="w-10 h-10 absolute right-4 top-4 bg-white/10 rounded-full flex items-center justify-center">
                    <ArrowRight className="w-5 h-5 text-white" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Working Hours & Info Cards Section */}
        <section className="py-24 bg-gradient-to-b from-white via-white/0 to-white">
          <div className="container mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {/* Working Hours */}
              <div className="bg-teal-500 rounded-lg p-8 text-white">
                <h3 className="text-3xl font-bold font-body mb-8">
                  Working Hours
                </h3>
                <div className="space-y-4">
                  <div className="flex justify-between items-center border-b border-white/50 py-4">
                    <div>
                      <p className="font-semibold">Mon - Wed</p>
                      <p>8AM - 7PM</p>
                    </div>
                    <button className="bg-white text-teal-500 rounded-md px-6 py-2 font-bold text-sm flex items-center gap-2">
                      <Check className="w-4 h-4" /> Book
                    </button>
                  </div>
                   <div className="flex justify-between items-center border-b border-white/50 py-4">
                    <div>
                      <p className="font-semibold">Thursday</p>
                      <p>8AM - 7PM</p>
                    </div>
                    <button className="bg-white text-teal-500 rounded-md px-6 py-2 font-bold text-sm flex items-center gap-2">
                      <Check className="w-4 h-4" /> Book
                    </button>
                  </div>
                   <div className="flex justify-between items-center border-b border-white/50 py-4">
                    <div>
                      <p className="font-semibold">Friday</p>
                      <p>8AM - 7PM</p>
                    </div>
                    <button className="bg-white text-teal-500 rounded-md px-6 py-2 font-bold text-sm flex items-center gap-2">
                      <Check className="w-4 h-4" /> Book
                    </button>
                  </div>
                  <div className="flex justify-between items-center pt-4">
                    <p className="font-semibold">Sat - Sunday</p>
                    <p>Closed</p>
                  </div>
                </div>
                 <div className="mt-8 pt-8 border-t border-white/50">
                    <h4 className="text-base font-medium mb-2">Time's not Flexible?</h4>
                    <p className="text-sm font-light">We provide high quality, integrated healthcare services, based on a patient–centered</p>
                    <button className="mt-6 w-full border border-white rounded-md py-3 font-bold text-sm">SUGGEST CHECKUP TIME</button>
                 </div>
              </div>

              {/* Covid-19 Response Card */}
              <div className="rounded-lg shadow-lg overflow-hidden">
                <Image
                  src="https://placehold.co/385x321"
                  alt="Doctor with mask"
                  width={385}
                  height={321}
                  className="w-full"
                  data-ai-hint="doctor mask"
                />
                <div className="p-8 bg-white">
                    <div className="w-20 h-20 bg-teal-500 rounded-md flex items-center justify-center -mt-20 mb-6">
                        <svg width="44" height="44" viewBox="0 0 44 45" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M43.9999 22.5119C43.9999 34.3912 34.3911 44.0001 22.5118 44.0001C10.6325 44.0001 1 34.3912 1 22.5119C1 10.6326 10.6325 1.0238 22.5118 1.0238C34.3911 1.0238 43.9999 10.6326 43.9999 22.5119Z" fill="white"/></svg>
                    </div>
                  <h3 className="text-3xl font-bold font-body text-blue-950 mb-4">
                    Our Covid-19 Response
                  </h3>
                  <p className="text-zinc-500 leading-relaxed mb-6">
                    For everyday care or life-changing care, you can count on us to keep you and your loved ones safe and healthy.
                  </p>
                  <a href="#" className="font-bold text-teal-500 flex items-center gap-2">
                    READ MORE <ArrowRight className="w-4 h-4" />
                  </a>
                </div>
              </div>
              
              {/* Vistors & Patients Card */}
              <div className="rounded-lg shadow-lg overflow-hidden">
                 <Image
                  src="https://placehold.co/385x321"
                  alt="Hospital hallway"
                  width={385}
                  height={321}
                  className="w-full"
                  data-ai-hint="hospital hallway"
                />
                <div className="p-8 bg-white">
                    <div className="w-20 h-20 bg-teal-500 rounded-md flex items-center justify-center -mt-20 mb-6">
                        <svg width="44" height="41" viewBox="0 0 44 41" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M22.0001 2.86011C27.9601 2.86011 34.2001 7.10011 39.0001 14.3001C39.4801 15.0201 39.1201 16.0201 38.2801 16.3801C37.5601 16.7401 36.5601 16.3801 36.2001 15.6601C31.8801 8.94011 26.1601 5.14011 22.0001 5.14011C17.8401 5.14011 12.1201 8.94011 7.80011 15.6601C7.44011 16.3801 6.44011 16.7401 5.72011 16.3801C4.88011 16.0201 4.52011 15.0201 5.00011 14.3001C9.80011 7.10011 16.0401 2.86011 22.0001 2.86011ZM22.0001 11.2601C25.4001 11.2601 28.0001 13.8601 28.0001 17.2601C28.0001 20.6601 25.4001 23.2601 22.0001 23.2601C18.6001 23.2601 16.0001 20.6601 16.0001 17.2601C16.0001 13.8601 18.6001 11.2601 22.0001 11.2601ZM22.0001 25.6601C28.4001 25.6601 35.2801 28.0601 39.0001 34.3001C39.4801 35.0201 39.1201 36.0201 38.2801 36.3801C37.5601 36.7401 36.5601 36.3801 36.2001 35.6601C32.8401 30.1001 27.5201 27.9401 22.0001 27.9401C16.4801 27.9401 11.1601 30.1001 7.80011 35.6601C7.44011 36.3801 6.44011 36.7401 5.72011 36.3801C4.88011 36.0201 4.52011 35.0201 5.00011 34.3001C8.72011 28.0601 15.6001 25.6601 22.0001 25.6601Z" fill="white"/></svg>
                    </div>
                  <h3 className="text-3xl font-bold font-body text-blue-950 mb-4">
                    Visitors & Patiens Information
                  </h3>
                  <p className="text-zinc-500 leading-relaxed mb-6">
                    No-commitment packages will give you peace of mind and an extra set of hands without the commitment.
                  </p>
                  <a href="#" className="font-bold text-teal-500 flex items-center gap-2">
                    READ MORE <ArrowRight className="w-4 h-4" />
                  </a>
                </div>
              </div>

            </div>
          </div>
        </section>

        {/* About Us Section */}
        <section className="py-24 bg-white">
          <div className="container mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <Image 
                    src="https://placehold.co/512x1102"
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
                    <div>
                        <div className="w-11 h-11 bg-gray-100 rounded-md mb-4 flex items-center justify-center">
                            <svg width="28" height="36" viewBox="0 0 28 36" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M25.4799 11.25L13.9999 0L2.5199 11.25H8.7599V22.5H19.2399V11.25H25.4799Z" fill="#0D2E6E"/></svg>
                        </div>
                        <h3 className="text-blue-950 font-bold font-body text-base mb-2">Our Approach</h3>
                        <p className="text-sm text-blue-950">For everyday care or life-changing care, you can count the patient on us to keep you and loved ones safe and healthy.</p>
                    </div>
                    <div className="bg-zinc-100 p-6 rounded-lg">
                        <h3 className="font-bold text-blue-950 font-body text-base mb-2">A community in which all people achieve their full potential for health and well-being across the lifespan. We work to be trusted by patients, a valued partner in the community, and creators of positive change.</h3>
                        <p className="text-sm text-blue-950 mt-4">We use a team approach to providing health care, and involve the patient as part of our team. Health our staff in the community enhances our ability to provide of often highly specialized effective.</p>
                    </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
                    <div className="bg-white p-6 rounded-lg shadow-md">
                        <div className="w-11 h-11 bg-gray-100 rounded-md mb-4 flex items-center justify-center">
                           <svg width="40" height="36" viewBox="0 0 40 36" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M37.64 18C37.64 8.059 29.581 0 19.64 0C9.699 0 1.64 8.059 1.64 18C1.64 27.941 9.699 36 19.64 36C29.581 36 37.64 27.941 37.64 18Z" fill="#01CAB8"/></svg>
                        </div>
                        <h4 className="font-bold text-blue-950 font-body text-base mb-2">Our Vision</h4>
                        <p className="text-sm text-blue-950">A community in which our vision is to establish all people achieve their full potential for health and well-being across complexity the lifespan.</p>
                    </div>
                    <div className="bg-white p-6 rounded-lg shadow-md">
                        <div className="w-11 h-11 bg-gray-100 rounded-md mb-4 flex items-center justify-center">
                            <svg width="40" height="37" viewBox="0 0 40 37" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M1.74219 18.7891C1.74219 8.68359 9.57031 0.601562 19.3672 0.601562C29.1641 0.601562 37.0312 8.68359 37.0312 18.7891V36.0352H1.74219V18.7891Z" fill="#01CAB8"/></svg>
                        </div>
                        <h4 className="font-bold text-blue-950 font-body text-base mb-2">Our Values</h4>
                        <p className="text-sm text-blue-950">We care for the whole person, see the complexity of each person’s life, and believe that addressing a broad range of human needs is the best.</p>
                    </div>
                    <div className="bg-white p-6 rounded-lg shadow-md">
                        <div className="w-11 h-11 bg-gray-100 rounded-md mb-4 flex items-center justify-center">
                            <svg width="29" height="36" viewBox="0 0 29 36" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M28.4023 18C28.4023 27.9414 20.3437 36 10.4023 36C0.460938 36 -7.59766 27.9414 -7.59766 18C-7.59766 8.05859 0.460938 0 10.4023 0C20.3437 0 28.4023 8.05859 28.4023 18Z" fill="#01CAB8"/></svg>
                        </div>
                        <h4 className="font-bold text-blue-950 font-body text-base mb-2">Our Team</h4>
                        <p className="text-sm text-blue-950">Provide patient-centered healthcare with excellence in quality, service, and access. A community in which all people to provide our patients.</p>
                    </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Guided by patients section */}
        <section className="relative h-[833px]">
             <Image
                src="https://placehold.co/1425x818"
                alt="Patient and doctor"
                fill
                className="object-cover"
                data-ai-hint="patient doctor"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-white via-white/80 to-transparent" />
            <div className="relative container mx-auto h-full flex items-center">
                <div className="w-1/2"></div>
                <div className="w-1/2 space-y-6 text-blue-950">
                    <h2 className="text-6xl font-bold font-body leading-tight">Guided by the needs of our patients</h2>
                    <p className="text-xl font-semibold">Delivering world class medical care</p>
                    <p className="leading-relaxed">Our Hospital provide the highest quality care to improve the health of our entire community through innovation, collaboration, service excellence, diversity and a commitment to patient safety</p>
                    <div className="space-y-2">
                        <p className="flex items-center gap-3"><Check className="w-4 h-4 text-teal-500 bg-white rounded-full p-0.5" /> Diagnostic services</p>
                        <p className="flex items-center gap-3"><Check className="w-4 h-4 text-teal-500 bg-white rounded-full p-0.5" /> Surgery services</p>
                        <p className="flex items-center gap-3"><Check className="w-4 h-4 text-teal-500 bg-white rounded-full p-0.5" /> Therapy services</p>
                    </div>
                    <button className="border border-black text-black rounded-md px-8 py-4 font-bold text-sm">About Medical Center</button>
                </div>
            </div>
        </section>
        
        {/* Providers Section */}
        <section className="py-24 bg-white">
            <div className="container mx-auto">
                <div className="flex justify-between items-center mb-12">
                    <h2 className="text-6xl font-bold text-blue-950 font-body">Our Providers</h2>
                    <button className="border border-teal-500 text-blue-950 font-bold text-sm px-6 py-4 rounded-md flex items-center gap-2">
                        <svg width="14" height="16" viewBox="0 0 14 16" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M1.74121 1.74133H12.2586V10.2587H1.74121V1.74133Z" stroke="#01CAB8" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/><path d="M10.5173 13.9999H3.48287" stroke="#01CAB8" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
                        All Providers
                    </button>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {/* Provider Card 1 */}
                    <div className="rounded-lg shadow-lg overflow-hidden group">
                        <div className="relative overflow-hidden">
                            <Image src="https://placehold.co/385x319" alt="Dr. Barbara Hodgin" width={385} height={319} className="w-full transition-transform duration-300 group-hover:scale-105" data-ai-hint="doctor portrait female"/>
                        </div>
                        <div className="p-8 bg-white relative">
                            <div className="w-20 h-20 bg-teal-500 rounded-md flex items-center justify-center -mt-20 mb-6 z-10 relative">
                                <svg width="44" height="44" viewBox="0 0 44 44" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M19.1602 43.6802V24.5202H0.320151L24.8402 0.32019L22.6802 20.3202H43.6802L19.1602 43.6802Z" fill="white"/></svg>
                            </div>
                            <p className="text-teal-500 font-bold text-base">CARDIOLOGY</p>
                            <h3 className="text-3xl text-blue-950 font-body mb-3"><span className="font-normal">Barbara</span> <span className="font-bold">Hodgin</span></h3>
                             <hr className="border-neutral-300 my-4"/>
                            <p className="text-zinc-500 text-sm leading-relaxed mb-6">Aenean aliquam tincidunt nibh, at sollicitudin orci. Integer sed lacus ex. Suspendisse eu tortor eget felis pellentesque rhoncus quis ut diam.</p>
                            <div className="flex justify-between items-center">
                                <div className="flex gap-2">
                                     <a href="#" className="w-8 h-8 border border-teal-500 rounded-full flex items-center justify-center text-teal-500 hover:bg-teal-500 hover:text-white"></a>
                                     <a href="#" className="w-8 h-8 border border-teal-500 rounded-full flex items-center justify-center text-teal-500 hover:bg-teal-500 hover:text-white"></a>
                                </div>
                                <a href="#" className="font-bold text-teal-500 flex items-center gap-2">READ MORE <ArrowRight className="w-4 h-4"/></a>
                            </div>
                        </div>
                    </div>
                     {/* Provider Card 2 */}
                    <div className="rounded-lg shadow-lg overflow-hidden group">
                        <div className="relative overflow-hidden">
                            <Image src="https://placehold.co/385x319" alt="Dr. Jeanette Bowman" width={385} height={319} className="w-full transition-transform duration-300 group-hover:scale-105" data-ai-hint="doctor portrait female"/>
                        </div>
                        <div className="p-8 bg-white relative">
                            <div className="w-20 h-20 bg-teal-500 rounded-md flex items-center justify-center -mt-20 mb-6 z-10 relative">
                                <svg width="44" height="45" viewBox="0 0 44 45" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M43.8242 22.5C43.8242 10.6207 34.2154 1 22.3361 1C10.4568 1 0.847901 10.6207 0.847901 22.5C0.847901 34.3793 10.4568 44 22.3361 44C34.2154 44 43.8242 34.3793 43.8242 22.5Z" fill="white"/></svg>
                            </div>
                            <p className="text-teal-500 font-bold text-base">PULMOLOGY</p>
                            <h3 className="text-3xl text-blue-950 font-body mb-3"><span className="font-normal">Jeanette</span> <span className="font-bold">Bowman</span></h3>
                             <hr className="border-neutral-300 my-4"/>
                            <p className="text-zinc-500 text-sm leading-relaxed mb-6">Proin non nibh id massa accumsan bibendum in id magna. Suspendisse potenti. Mauris lobortis scelerisque , eget scelerisque nulla fringilla ac.</p>
                            <div className="flex justify-between items-center">
                                <div className="flex gap-2">
                                     <a href="#" className="w-8 h-8 border border-teal-500 rounded-full flex items-center justify-center text-teal-500 hover:bg-teal-500 hover:text-white"></a>
                                     <a href="#" className="w-8 h-8 border border-teal-500 rounded-full flex items-center justify-center text-teal-500 hover:bg-teal-500 hover:text-white"></a>
                                </div>
                                <a href="#" className="font-bold text-teal-500 flex items-center gap-2">READ MORE <ArrowRight className="w-4 h-4"/></a>
                            </div>
                        </div>
                    </div>
                     {/* Provider Card 3 */}
                    <div className="rounded-lg shadow-lg overflow-hidden group">
                        <div className="relative overflow-hidden">
                            <Image src="https://placehold.co/385x319" alt="Dr. Adam Hwang" width={385} height={319} className="w-full transition-transform duration-300 group-hover:scale-105" data-ai-hint="doctor portrait male"/>
                        </div>
                        <div className="p-8 bg-white relative">
                            <div className="w-20 h-20 bg-teal-500 rounded-md flex items-center justify-center -mt-20 mb-6 z-10 relative">
                               <svg width="44" height="41" viewBox="0 0 44 41" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M22.0001 2.86011C27.9601 2.86011 34.2001 7.10011 39.0001 14.3001C39.4801 15.0201 39.1201 16.0201 38.2801 16.3801C37.5601 16.7401 36.5601 16.3801 36.2001 15.6601C31.8801 8.94011 26.1601 5.14011 22.0001 5.14011C17.8401 5.14011 12.1201 8.94011 7.80011 15.6601C7.44011 16.3801 6.44011 16.7401 5.72011 16.3801C4.88011 16.0201 4.52011 15.0201 5.00011 14.3001C9.80011 7.10011 16.0401 2.86011 22.0001 2.86011ZM22.0001 11.2601C25.4001 11.2601 28.0001 13.8601 28.0001 17.2601C28.0001 20.6601 25.4001 23.2601 22.0001 23.2601C18.6001 23.2601 16.0001 20.6601 16.0001 17.2601C16.0001 13.8601 18.6001 11.2601 22.0001 11.2601ZM22.0001 25.6601C28.4001 25.6601 35.2801 28.0601 39.0001 34.3001C39.4801 35.0201 39.1201 36.0201 38.2801 36.3801C37.5601 36.7401 36.5601 36.3801 36.2001 35.6601C32.8401 30.1001 27.5201 27.9401 22.0001 27.9401C16.4801 27.9401 11.1601 30.1001 7.80011 35.6601C7.44011 36.3801 6.44011 36.7401 5.72011 36.3801C4.88011 36.0201 4.52011 35.0201 5.00011 34.3001C8.72011 28.0601 15.6001 25.6601 22.0001 25.6601Z" fill="white"/></svg>
                            </div>
                            <p className="text-teal-500 font-bold text-base">UROLOGY</p>
                            <h3 className="text-3xl text-blue-950 font-body mb-3"><span className="font-normal">Adam</span> <span className="font-bold">Hwang</span></h3>
                             <hr className="border-neutral-300 my-4"/>
                            <p className="text-zinc-500 text-sm leading-relaxed mb-6">Integer vel nisl varius, finibus orci et, congue sapien. Fusce congue nunc quis elit eget porta. Magna nisi, varius ut risus in, porta aliquet.</p>
                            <div className="flex justify-between items-center">
                                <div className="flex gap-2">
                                     <a href="#" className="w-8 h-8 border border-teal-500 rounded-full flex items-center justify-center text-teal-500 hover:bg-teal-500 hover:text-white"></a>
                                     <a href="#" className="w-8 h-8 border border-teal-500 rounded-full flex items-center justify-center text-teal-500 hover:bg-teal-500 hover:text-white"></a>
                                </div>
                                <a href="#" className="font-bold text-teal-500 flex items-center gap-2">READ MORE <ArrowRight className="w-4 h-4"/></a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        
        {/* Services Section */}
        <section className="py-24 bg-white relative">
             <Image src="https://placehold.co/1425x1302" alt="Medical equipment" fill className="object-cover" data-ai-hint="medical equipment"/>
             <div className="absolute inset-0 bg-white/80" />
            <div className="container mx-auto relative">
                 <div className="flex justify-between items-center mb-12">
                    <div>
                        <h2 className="text-6xl font-bold text-blue-950 font-body">Our Services</h2>
                        <p className="text-xl font-semibold text-blue-950">Delivering world class medical care</p>
                    </div>
                    <button className="border border-teal-500 bg-white text-blue-950 font-bold text-sm px-6 py-4 rounded-md flex items-center gap-2">
                        Full List of Services
                    </button>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {/* Service Card 1 */}
                    <div className="space-y-3">
                         <div className="w-16 h-20 bg-teal-500 rounded-full flex items-center justify-center">
                            <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M39.6398 20.28C39.6398 9.324 30.6758 0.360001 19.7198 0.360001C8.76384 0.360001 -0.199849 9.324 -0.199849 20.28C-0.199849 31.236 8.76384 40.2 19.7198 40.2C30.6758 40.2 39.6398 31.236 39.6398 20.28Z" fill="white"/></svg>
                        </div>
                        <h4 className="text-blue-950 font-bold font-body text-base">COVID-19 Services</h4>
                        <p className="text-blue-950 text-sm">Integer vel nisl varius, finibus orci et, congue sapien fusce.</p>
                        <a href="#" className="font-bold text-teal-500 flex items-center gap-2">READ MORE <ArrowRight className="w-4 h-4"/></a>
                    </div>
                     {/* Service Card 2 */}
                    <div className="space-y-3">
                         <div className="w-16 h-20 bg-teal-500 rounded-full flex items-center justify-center">
                            <svg width="34" height="40" viewBox="0 0 34 40" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M33.1799 20C33.1799 9.259 25.9399 0 17.1799 0C8.41992 0 1.17993 9.259 1.17993 20C1.17993 30.741 8.41992 40 17.1799 40C25.9399 40 33.1799 30.741 33.1799 20Z" fill="white"/></svg>
                        </div>
                        <h4 className="text-blue-950 font-bold font-body text-base">Cardiology</h4>
                        <p className="text-blue-950 text-sm">Nam at varius ut dignissim lorem, in condimentum leo. Vestibulum eget.</p>
                        <a href="#" className="font-bold text-teal-500 flex items-center gap-2">READ MORE <ArrowRight className="w-4 h-4"/></a>
                    </div>
                     {/* Service Card 3 */}
                    <div className="space-y-3">
                         <div className="w-16 h-20 bg-teal-500 rounded-full flex items-center justify-center">
                           <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M-0.280273 20.28C-0.280273 9.32403 8.68372 0.360031 19.6397 0.360031C30.5957 0.360031 39.5597 9.32403 39.5597 20.28C39.5597 31.236 30.5957 40.2 19.6397 40.2C8.68372 40.2 -0.280273 31.236 -0.280273 20.28Z" fill="white"/></svg>
                        </div>
                        <h4 className="text-blue-950 font-bold font-body text-base">Pulmology</h4>
                        <p className="text-blue-950 text-sm">Donec risus elit, facilisis at vel vulputate sit amet, hac finibus nec purus.</p>
                        <a href="#" className="font-bold text-teal-500 flex items-center gap-2">READ MORE <ArrowRight className="w-4 h-4"/></a>
                    </div>
                    {/* Service Card 4 */}
                    <div className="space-y-3">
                         <div className="w-16 h-20 bg-teal-500 rounded-full flex items-center justify-center">
                            <svg width="18" height="40" viewBox="0 0 18 40" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M17.1599 20C17.1599 30.741 9.91992 40 1.15991 40C-7.59998 40 -14.84 30.741 -14.84 20C-14.84 9.259 -7.59998 0 1.15991 0C9.91992 0 17.1599 9.259 17.1599 20Z" fill="white"/></svg>
                        </div>
                        <h4 className="text-blue-950 font-bold font-body text-base">Rheumatology</h4>
                        <p className="text-blue-950 text-sm">Fusce ac nulla diam. Nulla facilisi. Donec accumsan est nec laoreet.</p>
                        <a href="#" className="font-bold text-teal-500 flex items-center gap-2">READ MORE <ArrowRight className="w-4 h-4"/></a>
                    </div>
                </div>
            </div>
        </section>

        {/* Testimonial Section */}
        <section className="relative h-[615px] bg-blue-950">
             <Image src="https://placehold.co/512x1302" alt="Abstract background" fill className="object-cover opacity-10" data-ai-hint="abstract texture"/>
             <div className="container mx-auto h-full flex items-center justify-center text-white text-center">
                <div>
                    <div className="w-11 h-8 bg-white mx-auto mb-8"></div>
                    <blockquote className="text-3xl font-serif leading-relaxed max-w-4xl mx-auto">
                        All of the personnel I came in contact with, went above and beyond to help me with my medical problems. I am now enjoying a more active lifestyle and no longer feel the discomfort in chest.
                    </blockquote>
                    <footer className="mt-8">
                        <p className="text-base font-semibold">Rory Bowers, 67</p>
                        <p className="text-sm font-medium">— Bypass surgery</p>
                    </footer>
                </div>
             </div>
        </section>
        
        {/* Contact & Map Section */}
        <section className="relative h-[852px]">
            <div className="absolute inset-0 bg-stone-200">
                {/* This would be a map component */}
                 <Image src="https://placehold.co/1425x853" alt="Map" fill className="object-cover" data-ai-hint="map city"/>
            </div>
            <div className="relative container mx-auto h-full flex items-center">
                <div className="w-full md:w-1/3 bg-white rounded-lg shadow-lg p-8">
                    <Image src="https://placehold.co/376x304" alt="Clinic exterior" width={376} height={304} className="w-full rounded-t-lg" data-ai-hint="clinic exterior"/>
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

      </main>

      {/* Footer */}
      <footer className="bg-zinc-900 text-white pt-24 pb-12">
        <div className="container mx-auto">
            {/* CTA Banner */}
            <div className="bg-white/10 rounded-lg p-12 flex justify-between items-center mb-24">
                <h3 className="text-4xl">
                    <span className="font-light">COVID-19</span> <span className="text-teal-500 font-normal">Antigen Test</span>
                </h3>
                 <button className="border border-teal-500 text-white font-bold text-sm px-6 py-4 rounded-md flex items-center gap-2">
                    <Check className="w-5 h-5 text-teal-500"/>
                    Book Covid-19 Antigen Test
                </button>
            </div>
            
            {/* Footer Links */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
                <div>
                     <div className="w-32 h-14 mb-6">
                        <Image src="https://placehold.co/130x60" alt="logo" width={130} height={60} data-ai-hint="logo"/>
                     </div>
                     <p className="text-xs leading-tight">We bring the years, global experience, and stamina to guide our clients through new and often disruptive realities.</p>
                </div>
                <div>
                    <h4 className="font-medium text-base mb-4">Services</h4>
                    <ul className="space-y-2 text-xs">
                        <li><a href="#" className="hover:text-teal-500">Business Planning</a></li>
                        <li><a href="#" className="hover:text-teal-500">Feasibility Study</a></li>
                        <li><a href="#" className="hover:text-teal-500">Startup Funding</a></li>
                        <li><a href="#" className="hover:text-teal-500">Business Plan Review</a></li>
                        <li><a href="#" className="hover:text-teal-500">Investor Presentation</a></li>
                    </ul>
                </div>
                 <div>
                    <h4 className="font-medium text-base mb-4">Pricing & Fees</h4>
                    <ul className="space-y-2 text-xs">
                        <li><a href="#" className="hover:text-teal-500">Compare Insurance Plans</a></li>
                        <li><a href="#" className="hover:text-teal-500">Standard Plan – $499</a></li>
                        <li><a href="#" className="hover:text-teal-500">Plus Plan – $799</a></li>
                        <li><a href="#" className="hover:text-teal-500">Premium Plan – $999</a></li>
                        <li><a href="#" className="hover:text-teal-500">Pro Plan – $1399</a></li>
                    </ul>
                </div>
                 <div>
                    <h4 className="font-medium text-base mb-4">Connect</h4>
                    <div className="flex gap-2 mb-4">
                        <a href="#" className="w-10 h-10 border border-white rounded-full flex items-center justify-center hover:bg-white hover:text-zinc-900"></a>
                        <a href="#" className="w-10 h-10 border border-white rounded-full flex items-center justify-center hover:bg-white hover:text-zinc-900"></a>
                        <a href="#" className="w-10 h-10 border border-white rounded-full flex items-center justify-center hover:bg-white hover:text-zinc-900"></a>
                        <a href="#" className="w-10 h-10 border border-white rounded-full flex items-center justify-center hover:bg-white hover:text-zinc-900"></a>
                    </div>
                     <ul className="space-y-2 text-sm">
                        <li className="flex items-center gap-2"><Phone className="w-3.5 h-3.5"/> 1-800-1-900</li>
                        <li className="flex items-center gap-2"><Mail className="w-3.5 h-3.5"/> info@cliniq.com</li>
                        <li className="flex items-center gap-2"><MapPin className="w-3.5 h-3.5"/> 60 East 65th Street, New York</li>
                    </ul>
                </div>
            </div>

            {/* Copyright & Bottom Links */}
            <div className="border-t border-neutral-300 pt-8 flex justify-between items-center">
                 <p className="text-xs">©2024 CLINIQ. All rights reserved</p>
                 <div className="flex gap-4 text-xs">
                    <a href="#" className="border-b border-transparent hover:border-white">Privacy Policy</a>
                    <a href="#" className="border-b border-transparent hover:border-white">Cookie Policy</a>
                 </div>
            </div>
        </div>
      </footer>
    </div>
  );
}
