'use client';

import Image from 'next/image';
import { useState } from 'react';
import { X } from 'lucide-react';
import { PreloadImages } from '@/components/common/PreloadImages';

// ---------------------------
// Doctor + Unit Data
// ---------------------------
interface Doctor {
  name: string;
  img: string;
}

interface UnitData {
  incharge: Doctor;
  associateProfessors: Doctor[];
  seniorResidents: Doctor[];
  juniorResidents: Doctor[];
}

const unit1Data: UnitData = {
  incharge: {
    name: "Dr. Ashwani Kumar",
    img: "/images/unit1/ashwini.png",
  },
  associateProfessors: [
    { name: "Dr. Rajeev Sharma", img: "/images/unit1/rajeev.png" },
    { name: "Dr. Amit Verma", img: "/images/unit1/amit.png" },
  ],
  seniorResidents: [
    { name: "Dr. Senior One", img: "/images/unit1/senior1.png" },
    { name: "Dr. Senior Two", img: "/images/unit1/senior2.png" },
  ],
  juniorResidents: [
    { name: "Dr. Junior One", img: "/images/unit1/junior1.png" },
    { name: "Dr. Junior Two", img: "/images/unit1/junior2.png" },
  ],
};

// ---------------------------
// Helper: Extract all image paths
// ---------------------------
const getAllImagePaths = (): string[] => {
  return [
    unit1Data.incharge.img,
    ...unit1Data.associateProfessors.map((doc) => doc.img),
    ...unit1Data.seniorResidents.map((doc) => doc.img),
    ...unit1Data.juniorResidents.map((doc) => doc.img),
  ];
};

// ---------------------------
// Doctor Card Component
// ---------------------------
function DoctorCard({ doctor }: { doctor: Doctor }) {
  const [open, setOpen] = useState(false);

  return (
    <>
      <div
        className="cursor-pointer p-4 border rounded-lg shadow hover:shadow-lg transition"
        onClick={() => setOpen(true)}
      >
        <Image
          src={doctor.img}
          alt={doctor.name}
          width={200}
          height={200}
          className="object-cover rounded-md"
        />
        <h3 className="mt-2 text-center text-sm font-semibold">{doctor.name}</h3>
      </div>

      {open && (
        <div className="fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center z-50">
          <div className="bg-white p-6 rounded-lg relative w-[320px]">
            <button
              onClick={() => setOpen(false)}
              className="absolute top-2 right-2 text-gray-600 hover:text-black"
            >
              <X size={20} />
            </button>
            <Image
              src={doctor.img}
              alt={doctor.name}
              width={300}
              height={300}
              className="object-cover rounded-md mx-auto"
            />
            <h3 className="mt-4 text-center text-lg font-bold">{doctor.name}</h3>
          </div>
        </div>
      )}
    </>
  );
}

// ---------------------------
// Main Component
// ---------------------------
export default function MedicalSpecialties() {
  const imagePaths = getAllImagePaths();

  return (
    <section className="py-12 bg-gray-50">
      {/* Preload all doctor images for faster modal/card rendering */}
      <PreloadImages imagePaths={imagePaths} />

      <div className="container mx-auto px-4">
        <h2 className="text-2xl font-bold text-center mb-8">
          Medical Specialties – Unit 1
        </h2>

        {/* Incharge */}
        <div className="mb-8">
          <h3 className="text-xl font-semibold mb-4">Unit Incharge</h3>
          <DoctorCard doctor={unit1Data.incharge} />
        </div>

        {/* Associate Professors */}
        <div className="mb-8">
          <h3 className="text-xl font-semibold mb-4">Associate Professors</h3>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
            {unit1Data.associateProfessors.map((doc, idx) => (
              <DoctorCard key={idx} doctor={doc} />
            ))}
          </div>
        </div>

        {/* Senior Residents */}
        <div className="mb-8">
          <h3 className="text-xl font-semibold mb-4">Senior Residents</h3>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
            {unit1Data.seniorResidents.map((doc, idx) => (
              <DoctorCard key={idx} doctor={doc} />
            ))}
          </div>
        </div>

        {/* Junior Residents */}
        <div className="mb-8">
          <h3 className="text-xl font-semibold mb-4">Junior Residents</h3>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
            {unit1Data.juniorResidents.map((doc, idx) => (
              <DoctorCard key={idx} doctor={doc} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
