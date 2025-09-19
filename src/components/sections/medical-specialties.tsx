"use client";

import { useState } from "react";
import Image from "next/image";

export function MedicalSpecialties() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <section id="head-of-surgery" className="py-24 bg-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0">
        <Image
          src="/hod.png"
          alt="Abstract geometric background"
          fill
          className="object-cover opacity-10"
        />
      </div>

      <div className="container mx-auto relative">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left Side */}
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
              <svg
                className="w-8 h-8 text-teal-600"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h4v10h-10z" />
              </svg>
            </div>

            {/* Testimony Text */}
            <blockquote className="text-lg leading-relaxed text-justify text-gray-700 italic">
              "As the Head of the Department of Surgery, I am proud of the
              commitment and dedication shown by our team in providing the
              highest standard of surgical care. Our department combines
              advanced clinical expertise with compassion, ensuring that every
              patient receives personalized treatment tailored to their needs.
              We place a strong emphasis on continuous learning, innovation, and
              research to keep pace with the latest developments in the field.
              It is our mission to not only treat patients but also to guide and
              support them through every step of their surgical journey. I am
              confident that with our skilled doctors, modern facilities, and
              patient-centered approach, we will continue to deliver excellence
              in surgical care."
            </blockquote>

            {/* Doctor Info + Button */}
            <div className="pt-6 border-t border-gray-200 flex items-center justify-between">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-teal-600 rounded-lg flex items-center justify-center">
                  <span className="text-white font-bold text-lg">AK</span>
                </div>
                <div>
                  <h4 className="font-bold text-blue-950 text-lg">
                    Dr. Ashwani Kumar
                  </h4>
                  <p className="text-teal-600 font-medium">
                    Prof & Head of Surgery Department
                  </p>
                  <p className="text-teal-600 font-medium">Unit 1 Incharge</p>
                  <p className="text-gray-600 text-sm">GMC Patiala</p>
                </div>
              </div>

              <button
                onClick={() => setIsModalOpen(true)}
                className="px-6 py-2 bg-teal-600 text-white font-semibold rounded-full shadow-md hover:bg-teal-700 transition"
              >
                View Unit 1 Details
              </button>
            </div>
          </div>

          {/* Right Side */}
          <div className="relative">
            <div className="relative w-full h-[700px] rounded-2xl overflow-hidden shadow-2xl group">
              <Image
                src="/hod.png"
                alt="Head of Surgery - Dr. Ashwani Kumar"
                fill
                className="object-cover object-center transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
            </div>
          </div>
        </div>
      </div>

      {/* ✅ Popup Modal - UPDATED */}
      {isModalOpen && (
        <div
          className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4"
          onClick={() => setIsModalOpen(false)}
        >
          <div
            className="bg-white rounded-2xl shadow-xl max-w-6xl w-full max-h-[95vh] overflow-y-auto relative"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setIsModalOpen(false)}
              className="absolute top-4 right-4 text-gray-500 hover:text-gray-800 z-10 bg-white rounded-full p-1 shadow-md"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>

            <div className="p-6 md:p-8">
              <h3 className="text-2xl font-bold text-blue-950 mb-6 text-center">
                Unit 1 Team Details
              </h3>

              <div className="space-y-10">
                {/* Incharge */}
                <div className="text-center">
                  <h4 className="text-xl font-semibold text-teal-600 mb-6">
                    Unit Incharge
                  </h4>
                  <div className="flex justify-center">
                    <div className="flex flex-col items-center">
                      <div className="w-40 h-40 rounded-xl overflow-hidden shadow-md mb-4 group">
                        <Image
                          src="/images/ashwini.png"
                          alt="Dr. Ashwani Kumar"
                          width={160}
                          height={160}
                          className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                        />
                      </div>
                      <p className="font-bold text-blue-950 text-lg">Dr. Ashwani Kumar</p>
                      <p className="text-gray-600">
                        Prof & Head of Surgery Department
                      </p>
                    </div>
                  </div>
                </div>

                {/* Assistant Professors */}
                <div>
                  <h4 className="text-xl font-semibold text-teal-600 mb-6 text-center">
                    Associate Professors
                  </h4>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 justify-items-center">
                    <div className="flex flex-col items-center">
                      <div className="w-36 h-36 rounded-xl overflow-hidden shadow-md mb-4 group">
                        <Image
                          src="/images/jaswinder.jpg"
                          alt="Dr. Jaswinder Singh"
                          width={144}
                          height={144}
                          className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                        />
                      </div>
                      <p className="font-bold text-blue-950 text-center">Dr. Jaswinder Singh</p>
                    </div>
                    <div className="flex flex-col items-center">
                      <div className="w-36 h-36 rounded-xl overflow-hidden shadow-md mb-4 group">
                        <Image
                          src="/images/dineshkumar.png"
                          alt="Dr. Dinesh Kumar Passi"
                          width={144}
                          height={144}
                          className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                        />
                      </div>
                      <p className="font-bold text-blue-950 text-center">Dr. Dinesh Kumar Passi</p>
                    </div>
                  </div>
                </div>

                {/* Senior Residents */}
                <div>
                  <h4 className="text-xl font-semibold text-teal-600 mb-6 text-center">
                    Senior Residents
                  </h4>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 justify-items-center">
                    <div className="flex flex-col items-center">
                      <div className="w-32 h-32 rounded-xl overflow-hidden shadow-md mb-4 group">
                        <Image
                          src="/images/parth.png"
                          alt="Dr. Parth Dhamija"
                          width={128}
                          height={128}
                          className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                        />
                      </div>
                      <p className="font-medium text-blue-950 text-center">Dr. Parth Dhamija</p>
                    </div>
                    <div className="flex flex-col items-center">
                      <div className="w-32 h-32 rounded-xl overflow-hidden shadow-md mb-4 group">
                        <Image
                          src="/images/thalib.png"
                          alt="Dr. Talib Khan"
                          width={128}
                          height={128}
                          className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                        />
                      </div>
                      <p className="font-medium text-blue-950 text-center">Dr. Talib Khan</p>
                    </div>
                  </div>
                </div>

                {/* Junior Residents */}
                <div>
                  <h4 className="text-xl font-semibold text-teal-600 mb-6 text-center">
                    Junior Residents
                  </h4>
                  <div className="grid grid-cols-2 md:grid-cols-3 gap-6 md:gap-8 justify-items-center">
                    {[
                      { name: "Dr. Dinesh", img: "/images/dinesh.png" },
                      { name: "Dr. Navneeth Shankar", img: "/images/navneeth.png" },
                      { name: "Dr. Vineeth Sunaria", img: "/images/vineeth.png" },
                      { name: "Dr. Aseem Anand", img: "/images/aseem.png" },
                      { name: "Dr. Soumya A", img: "/images/soumya.png" },
                      { name: "Dr. Naveen Mangla", img: "/images/naveen.png" },
                      { name: "Dr. Yogyatha", img: "/images/yog.png" },
                      { name: "Dr. Priyanka", img: "/images/pri.png" },
                      { name: "Dr. Sooraj", img: "/images/sur.png" },
                    ].map((jr) => (
                      <div key={jr.name} className="flex flex-col items-center">
                        <div className="w-28 h-28 rounded-xl overflow-hidden shadow-md mb-3 group">
                          <Image
                            src={jr.img}
                            alt={jr.name}
                            width={112}
                            height={112}
                            className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                          />
                        </div>
                        <p className="font-medium text-blue-950 text-sm text-center">{jr.name}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}