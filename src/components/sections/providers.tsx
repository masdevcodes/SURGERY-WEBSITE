import Image from 'next/image';
import { ArrowRight, MapPin, Phone, Mail } from 'lucide-react';

export function Providers() {
  return (
    <section id="providers" className="py-24 bg-gradient-to-br from-gray-50 to-white relative">
      {/* Background Image */}
      <div className="absolute inset-0 opacity-50">
        <Image
          src="/111 copy copy.png"
          alt="Geometric background pattern"
          fill
          className="object-cover"
        />
      </div>
      <div className="container mx-auto">
        <div className="relative z-10">
        <div className="flex justify-between items-center mb-16">
          <div>
            <h2 className="text-6xl font-bold text-blue-950 font-headline mb-4">Our Providers</h2>
            <p className="text-xl text-gray-600">Meet our experienced medical professionals</p>
          </div>
          <button className="border-2 border-teal-500 text-teal-600 hover:bg-teal-500 hover:text-white font-bold text-sm px-8 py-4 rounded-lg flex items-center gap-3 transition-all duration-300 shadow-lg hover:shadow-xl">
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M2.5 2.5H17.5V12.5H2.5V2.5Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              <path d="M15 17.5H5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
            All Providers
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Provider Card 1 */}
          <div className="bg-white rounded-2xl shadow-xl overflow-hidden group hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2">
            <div className="relative overflow-hidden h-80">
              <Image 
                src="https://images.unsplash.com/photo-1559839734-2b71ea197ec2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80" 
                alt="Dr. Barbara Hodgin" 
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-110" 
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </div>
            <div className="p-8">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-16 h-16 bg-gradient-to-br from-teal-400 to-teal-600 rounded-xl flex items-center justify-center shadow-lg">
                  <svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M14 2C19.5 2 24 6.5 24 12C24 17.5 19.5 22 14 22C8.5 22 4 17.5 4 12C4 6.5 8.5 2 14 2Z" fill="white" />
                  </svg>
                </div>
                <div>
                  <p className="text-teal-600 font-bold text-sm uppercase tracking-wider">CARDIOLOGY</p>
                  <h3 className="text-2xl font-bold text-blue-950 font-headline">Dr. Barbara Hodgin</h3>
                </div>
              </div>
              
              <p className="text-gray-600 leading-relaxed mb-6">
                Specialized in cardiovascular medicine with over 15 years of experience in treating complex heart conditions and preventive cardiology.
              </p>
              
              <div className="space-y-3 mb-6">
                <div className="flex items-center gap-3 text-sm text-gray-600">
                  <MapPin className="w-4 h-4 text-teal-500" />
                  <span>Cardiology Department, Floor 3</span>
                </div>
                <div className="flex items-center gap-3 text-sm text-gray-600">
                  <Phone className="w-4 h-4 text-teal-500" />
                  <span>+1 (555) 123-4567</span>
                </div>
                <div className="flex items-center gap-3 text-sm text-gray-600">
                  <Mail className="w-4 h-4 text-teal-500" />
                  <span>b.hodgin@gmcpatiala.edu</span>
                </div>
              </div>
              
              <div className="flex justify-between items-center pt-4 border-t border-gray-100">
                <div className="flex gap-3">
                  <a href="#" className="w-10 h-10 border-2 border-teal-500 rounded-full flex items-center justify-center text-teal-500 hover:bg-teal-500 hover:text-white transition-all duration-300">
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"/></svg>
                  </a>
                  <a href="#" className="w-10 h-10 border-2 border-teal-500 rounded-full flex items-center justify-center text-teal-500 hover:bg-teal-500 hover:text-white transition-all duration-300">
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>
                  </a>
                </div>
                <a href="#" className="font-bold text-teal-600 flex items-center gap-2 hover:gap-3 transition-all duration-300 group">
                  VIEW PROFILE 
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
                </a>
              </div>
            </div>
          </div>

          {/* Provider Card 2 */}
          <div className="bg-white rounded-2xl shadow-xl overflow-hidden group hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2">
            <div className="relative overflow-hidden h-80">
              <Image 
                src="https://images.unsplash.com/photo-1594824475317-d0d4e0b0e5e8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80" 
                alt="Dr. Jeanette Bowman" 
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-110" 
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </div>
            <div className="p-8">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-16 h-16 bg-gradient-to-br from-blue-400 to-blue-600 rounded-xl flex items-center justify-center shadow-lg">
                  <svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M14 2C19.5 2 24 6.5 24 12C24 17.5 19.5 22 14 22C8.5 22 4 17.5 4 12C4 6.5 8.5 2 14 2Z" fill="white" />
                  </svg>
                </div>
                <div>
                  <p className="text-blue-600 font-bold text-sm uppercase tracking-wider">PULMONOLOGY</p>
                  <h3 className="text-2xl font-bold text-blue-950 font-headline">Dr. Jeanette Bowman</h3>
                </div>
              </div>
              
              <p className="text-gray-600 leading-relaxed mb-6">
                Expert in respiratory medicine and critical care with extensive experience in treating lung diseases and sleep disorders.
              </p>
              
              <div className="space-y-3 mb-6">
                <div className="flex items-center gap-3 text-sm text-gray-600">
                  <MapPin className="w-4 h-4 text-blue-500" />
                  <span>Pulmonology Department, Floor 2</span>
                </div>
                <div className="flex items-center gap-3 text-sm text-gray-600">
                  <Phone className="w-4 h-4 text-blue-500" />
                  <span>+1 (555) 234-5678</span>
                </div>
                <div className="flex items-center gap-3 text-sm text-gray-600">
                  <Mail className="w-4 h-4 text-blue-500" />
                  <span>j.bowman@gmcpatiala.edu</span>
                </div>
              </div>
              
              <div className="flex justify-between items-center pt-4 border-t border-gray-100">
                <div className="flex gap-3">
                  <a href="#" className="w-10 h-10 border-2 border-blue-500 rounded-full flex items-center justify-center text-blue-500 hover:bg-blue-500 hover:text-white transition-all duration-300">
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"/></svg>
                  </a>
                  <a href="#" className="w-10 h-10 border-2 border-blue-500 rounded-full flex items-center justify-center text-blue-500 hover:bg-blue-500 hover:text-white transition-all duration-300">
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>
                  </a>
                </div>
                <a href="#" className="font-bold text-blue-600 flex items-center gap-2 hover:gap-3 transition-all duration-300 group">
                  VIEW PROFILE 
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
                </a>
              </div>
            </div>
          </div>

          {/* Provider Card 3 */}
          <div className="bg-white rounded-2xl shadow-xl overflow-hidden group hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2">
            <div className="relative overflow-hidden h-80">
              <Image 
                src="https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80" 
                alt="Dr. Adam Hwang" 
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-110" 
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </div>
            <div className="p-8">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-16 h-16 bg-gradient-to-br from-purple-400 to-purple-600 rounded-xl flex items-center justify-center shadow-lg">
                  <svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M14 2C19.5 2 24 6.5 24 12C24 17.5 19.5 22 14 22C8.5 22 4 17.5 4 12C4 6.5 8.5 2 14 2Z" fill="white" />
                  </svg>
                </div>
                <div>
                  <p className="text-purple-600 font-bold text-sm uppercase tracking-wider">UROLOGY</p>
                  <h3 className="text-2xl font-bold text-blue-950 font-headline">Dr. Adam Hwang</h3>
                </div>
              </div>
              
              <p className="text-gray-600 leading-relaxed mb-6">
                Leading urologist specializing in minimally invasive procedures and robotic surgery for urological conditions.
              </p>
              
              <div className="space-y-3 mb-6">
                <div className="flex items-center gap-3 text-sm text-gray-600">
                  <MapPin className="w-4 h-4 text-purple-500" />
                  <span>Urology Department, Floor 4</span>
                </div>
                <div className="flex items-center gap-3 text-sm text-gray-600">
                  <Phone className="w-4 h-4 text-purple-500" />
                  <span>+1 (555) 345-6789</span>
                </div>
                <div className="flex items-center gap-3 text-sm text-gray-600">
                  <Mail className="w-4 h-4 text-purple-500" />
                  <span>a.hwang@gmcpatiala.edu</span>
                </div>
              </div>
              
              <div className="flex justify-between items-center pt-4 border-t border-gray-100">
                <div className="flex gap-3">
                  <a href="#" className="w-10 h-10 border-2 border-purple-500 rounded-full flex items-center justify-center text-purple-500 hover:bg-purple-500 hover:text-white transition-all duration-300">
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"/></svg>
                  </a>
                  <a href="#" className="w-10 h-10 border-2 border-purple-500 rounded-full flex items-center justify-center text-purple-500 hover:bg-purple-500 hover:text-white transition-all duration-300">
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>
                  </a>
                </div>
                <a href="#" className="font-bold text-purple-600 flex items-center gap-2 hover:gap-3 transition-all duration-300 group">
                  VIEW PROFILE 
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
                </a>
              </div>
            </div>
          </div>
        </div>

        </div>
      </div>
    </section>
  );
}