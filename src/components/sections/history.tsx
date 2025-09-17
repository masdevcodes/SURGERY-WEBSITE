import Image from 'next/image';

export function History() {
  return (
    <section id="history" className="py-16 bg-gradient-to-br from-gray-50 to-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-20">
        <Image
          src="/111.png"
          alt="Abstract background pattern"
          fill
          className="object-cover"
        />
      </div>

      <div className="container mx-auto relative">
        {/* Header */}
        <div className="text-center mb-8">
          <div className="flex items-center justify-center gap-4 mb-4">
            <div className="w-16 h-1 bg-teal-500"></div>
            <span className="text-teal-600 font-semibold text-sm uppercase tracking-wider">
              Our Legacy
            </span>
            <div className="w-16 h-1 bg-teal-500"></div>
          </div>
          
          <h2 className="text-5xl font-bold text-blue-950 font-headline leading-tight mb-4">
            A Rich History of Excellence
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Serving the community with dedication and surgical expertise since the 1950s
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
          {/* Left Side - Content */}
          <div className="space-y-6">
            <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 shadow-lg border border-white/20">
              <h3 className="text-3xl font-bold text-blue-950 font-headline mb-6">
                Surgery Department at Rajindra Medical College: A Pillar of Surgical Care Since the 1950s
              </h3>
              
              <div className="space-y-6 text-gray-700 leading-relaxed">
                <p>
                  While an exact inauguration date for the Department of Surgery at Government Medical College, Patiala (formerly known as Rajendra Medical College) remains unrecorded in readily available public records, it is evident that the department was established in the mid-1950s, shortly after the college's inception in 1953 and the inauguration of its affiliated Rajindra Hospital in 1954. A significant marker of its early establishment and functional prowess is the commencement of the Master of Surgery (MS) program in General Surgery in 1960, indicating that a well-established department with the necessary infrastructure and qualified faculty was already in place.
                </p>

                <div className="bg-teal-50 rounded-lg p-6 border-l-4 border-teal-500">
                  <h4 className="text-xl font-bold text-blue-950 mb-4">A Brief History</h4>
                  <p>
                    Government Medical College, Patiala, was founded on September 29, 1953, to address the need for qualified medical professionals in the erstwhile Patiala and East Punjab States Union (PEPSU). The college's clinical training was intrinsically linked to the Rajindra Hospital, a large multi-specialty institution inaugurated in 1954.
                  </p>
                </div>

                <p>
                  The Department of Surgery was a cornerstone of the new hospital, providing essential surgical care to the region. Although the names of the pioneering surgeons who first headed and staffed the department are not easily traceable in digital archives, their contributions were pivotal in laying the foundation for a department that would go on to become a major surgical center in Punjab.
                </p>

                <p>
                  The introduction of the MS in General Surgery program in 1960 was a testament to the department's rapid development and its commitment to academic excellence. This postgraduate course signaled the presence of experienced surgeons capable of training the next generation of surgical specialists.
                </p>

                <p>
                  Over the decades, the Department of Surgery at Government Medical College, Patiala, has expanded its scope and services. It now encompasses various surgical sub-specialties and is equipped with modern facilities to provide comprehensive surgical care. The department plays a crucial role in the medical education of undergraduate (MBBS) and postgraduate students, continuing the legacy of its founding members by combining clinical practice with academic rigor.
                </p>

                <div className="bg-blue-50 rounded-lg p-6 border-l-4 border-blue-500">
                  <p className="font-medium text-blue-950">
                    While the precise date of its opening may be a detail lost to time, the legacy of the Department of Surgery is evident in its continuous service to the community and its contributions to medical education and surgical advancement in the region for over six decades.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Side - Images */}
          <div className="space-y-6">
            {/* First Image Holder */}
            <div className="relative h-80 rounded-2xl overflow-hidden shadow-xl group">
              <Image
                src="/public/gmcll.jpg"
                alt="Historical view of Rajindra Hospital"
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-110"
                quality={85}
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 50vw"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>
              <div className="absolute bottom-6 left-6 text-white">
                <h4 className="text-lg font-bold mb-2">Rajindra Hospital - 1954</h4>
                <p className="text-sm opacity-90">The foundation of surgical excellence</p>
              </div>
            </div>

            {/* Second Image Holder */}
            <div className="relative h-80 rounded-2xl overflow-hidden shadow-xl group">
              <Image
                src="https://images.unsplash.com/photo-1582750433449-648ed127bb54?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                alt="Government Medical College Patiala historical building"
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-110"
                quality={85}
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 50vw"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>
              <div className="absolute bottom-6 left-6 text-white">
                <h4 className="text-lg font-bold mb-2">GMC Patiala - 1953</h4>
                <p className="text-sm opacity-90">Established to serve PEPSU region</p>
              </div>
            </div>
 {/* Third Image Holder */}
            <div className="relative h-80 rounded-2xl overflow-hidden shadow-xl group">
              <Image
                src="https://images.unsplash.com/photo-1582750433449-648ed127bb54?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                alt="Government Medical College Patiala historical building"
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-110"
                quality={85}
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 50vw"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>
              <div className="absolute bottom-6 left-6 text-white">
                <h4 className="text-lg font-bold mb-2">GMC Patiala - 1953</h4>
                <p className="text-sm opacity-90">Established to serve PEPSU region</p>
              </div>
            </div>
            {/* Timeline Stats */}
            <div className="bg-white/90 backdrop-blur-sm rounded-2xl p-8 shadow-lg border border-white/20">
              <h4 className="text-2xl font-bold text-blue-950 mb-6 text-center">Key Milestones</h4>
              <div className="space-y-4">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-teal-500 rounded-full flex items-center justify-center text-white font-bold">
                    1953
                  </div>
                  <div>
                    <p className="font-semibold text-blue-950">College Founded</p>
                    <p className="text-sm text-gray-600">GMC Patiala established</p>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-blue-500 rounded-full flex items-center justify-center text-white font-bold">
                    1954
                  </div>
                  <div>
                    <p className="font-semibold text-blue-950">Hospital Inaugurated</p>
                    <p className="text-sm text-gray-600">Rajindra Hospital opens</p>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-purple-500 rounded-full flex items-center justify-center text-white font-bold">
                    1960
                  </div>
                  <div>
                    <p className="font-semibold text-blue-950">MS Program Begins</p>
                    <p className="text-sm text-gray-600">Postgraduate surgery training</p>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-green-500 rounded-full flex items-center justify-center text-white font-bold">
                    70+
                  </div>
                  <div>
                    <p className="font-semibold text-blue-950">Years of Service</p>
                    <p className="text-sm text-gray-600">Continuous excellence</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
