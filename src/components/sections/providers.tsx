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
              <p className="text-xl text-gray-600">Meet our experienced Medical Professionals</p>
            </div>
            
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">

            {/* Provider Card 2 */}
            <div className="bg-white rounded-2xl shadow-xl overflow-hidden group hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2">
              <div className="relative overflow-hidden h-80">
                <Image 
                  src="https://images.unsplash.com/photo-1594824475317-d0d4e0b0e5e8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80" 
                  alt="Dr. Jeanette Bowman" 
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-110" 
                  quality={85}
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  loading="lazy"
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
                    <p className="text-blue-600 font-bold text-sm uppercase tracking-wider">UNIT 2</p>
                    <h3 className="text-2xl font-bold text-blue-950 font-headline">Dr. Prem Singla</h3>
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
                    <Mail className="w-4 h-4 text-blue-500" />
                    <span>j.bowman@gmcpatiala.edu</span>
                  </div>
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
                  quality={85}
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  loading="lazy"
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
                    <p className="text-purple-600 font-bold text-sm uppercase tracking-wider">UNIT 3</p>
                    <h3 className="text-2xl font-bold text-blue-950 font-headline">Dr. H.S Rekhi</h3>
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
                    <Mail className="w-4 h-4 text-purple-500" />
                    <span>a.hwang@gmcpatiala.edu</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Provider Card 4 */}
            <div className="bg-white rounded-2xl shadow-xl overflow-hidden group hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2">
              <div className="relative overflow-hidden h-80">
                <Image 
                  src="https://images.unsplash.com/photo-1582750433449-648ed127bb54?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80" 
                  alt="Dr. Sarah Johnson" 
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-110" 
                  quality={85}
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
              <div className="p-8">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-16 h-16 bg-gradient-to-br from-green-400 to-green-600 rounded-xl flex items-center justify-center shadow-lg">
                    <svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M14 2C19.5 2 24 6.5 24 12C24 17.5 19.5 22 14 22C8.5 22 4 17.5 4 12C4 6.5 8.5 2 14 2Z" fill="white" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-green-600 font-bold text-sm uppercase tracking-wider">UNIT 4</p>
                    <h3 className="text-2xl font-bold text-blue-950 font-headline">Dr. D.J.S Wallia</h3>
                  </div>
                </div>
                
                <p className="text-gray-600 leading-relaxed mb-6">
                  Experienced general surgeon with expertise in laparoscopic procedures and emergency surgery.
                </p>
                
                <div className="space-y-3 mb-6">
                  <div className="flex items-center gap-3 text-sm text-gray-600">
                    <MapPin className="w-4 h-4 text-green-500" />
                    <span>Surgery Department, Floor 1</span>
                  </div>
                  
                  <div className="flex items-center gap-3 text-sm text-gray-600">
                    <Mail className="w-4 h-4 text-green-500" />
                    <span>s.johnson@gmcpatiala.edu</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Provider Card 5 */}
            <div className="bg-white rounded-2xl shadow-xl overflow-hidden group hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2">
              <div className="relative overflow-hidden h-80">
                <Image 
                  src="https://images.unsplash.com/photo-1559839734-2b71ea197ec2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80" 
                  alt="Dr. Michael Chen" 
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-110" 
                  quality={85}
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
              <div className="p-8">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-16 h-16 bg-gradient-to-br from-orange-400 to-orange-600 rounded-xl flex items-center justify-center shadow-lg">
                    <svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M14 2C19.5 2 24 6.5 24 12C24 17.5 19.5 22 14 22C8.5 22 4 17.5 4 12C4 6.5 8.5 2 14 2Z" fill="white" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-orange-600 font-bold text-sm uppercase tracking-wider">UNIT 5</p>
                    <h3 className="text-2xl font-bold text-blue-950 font-headline">Dr. Sanjeev Gupta</h3>
                  </div>
                </div>
                
                <p className="text-gray-600 leading-relaxed mb-6">
                  Orthopedic surgeon specializing in joint replacement and sports medicine with advanced training.
                </p>
                
                <div className="space-y-3 mb-6">
                  <div className="flex items-center gap-3 text-sm text-gray-600">
                    <MapPin className="w-4 h-4 text-orange-500" />
                    <span>Orthopedics Department, Floor 2</span>
                  </div>
                  
                  <div className="flex items-center gap-3 text-sm text-gray-600">
                    <Mail className="w-4 h-4 text-orange-500" />
                    <span>m.chen@gmcpatiala.edu</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Provider Card 6 */}
            <div className="bg-white rounded-2xl shadow-xl overflow-hidden group hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2">
              <div className="relative overflow-hidden h-80">
                <Image 
                  src="https://images.unsplash.com/photo-1594824475317-d0d4e0b0e5e8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80" 
                  alt="Dr. Emily Rodriguez" 
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-110" 
                  quality={85}
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
              <div className="p-8">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-16 h-16 bg-gradient-to-br from-pink-400 to-pink-600 rounded-xl flex items-center justify-center shadow-lg">
                    <svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M14 2C19.5 2 24 6.5 24 12C24 17.5 19.5 22 14 22C8.5 22 4 17.5 4 12C4 6.5 8.5 2 14 2Z" fill="white" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-pink-600 font-bold text-sm uppercase tracking-wider">UNIT 6</p>
                    <h3 className="text-2xl font-bold text-blue-950 font-headline">Dr. R.S Mohi </h3>
                  </div>
                </div>
                
                <p className="text-gray-600 leading-relaxed mb-6">
                  Gynecologist with expertise in women's health, reproductive medicine, and minimally invasive procedures.
                </p>
                
                <div className="space-y-3 mb-6">
                  <div className="flex items-center gap-3 text-sm text-gray-600">
                    <MapPin className="w-4 h-4 text-pink-500" />
                    <span>Gynecology Department, Floor 3</span>
                  </div>
                  
                  <div className="flex items-center gap-3 text-sm text-gray-600">
                    <Mail className="w-4 h-4 text-pink-500" />
                    <span>e.rodriguez@gmcpatiala.edu</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Provider Card 7 */}
            <div className="bg-white rounded-2xl shadow-xl overflow-hidden group hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2">
              <div className="relative overflow-hidden h-80">
                <Image 
                  src="https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80" 
                  alt="Dr. David Kumar" 
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-110" 
                  quality={85}
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
              <div className="p-8">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-16 h-16 bg-gradient-to-br from-indigo-400 to-indigo-600 rounded-xl flex items-center justify-center shadow-lg">
                    <svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M14 2C19.5 2 24 6.5 24 12C24 17.5 19.5 22 14 22C8.5 22 4 17.5 4 12C4 6.5 8.5 2 14 2Z" fill="white" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-indigo-600 font-bold text-sm uppercase tracking-wider">UNIT 7</p>
                    <h3 className="text-2xl font-bold text-blue-950 font-headline">Dr. Vikas Goyal</h3>
                  </div>
                </div>
                
                <p className="text-gray-600 leading-relaxed mb-6">
                  Neurosurgeon specializing in brain and spine surgery with expertise in complex neurological procedures.
                </p>
                
                <div className="space-y-3 mb-6">
                  <div className="flex items-center gap-3 text-sm text-gray-600">
                    <MapPin className="w-4 h-4 text-indigo-500" />
                    <span>Neurosurgery Department, Floor 4</span>
                  </div>
                  
                  <div className="flex items-center gap-3 text-sm text-gray-600">
                    <Mail className="w-4 h-4 text-indigo-500" />
                    <span>d.kumar@gmcpatiala.edu</span>
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
