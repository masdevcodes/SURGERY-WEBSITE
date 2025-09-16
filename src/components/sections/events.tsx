import Image from 'next/image';
import { Calendar, MapPin, Users, Clock } from 'lucide-react';

export function Events() {
  const events = [
    {
      id: 1,
      title: "Annual Surgery Conference 2024",
      date: "March 15, 2024",
      location: "GMC Patiala Auditorium",
      attendees: "200+",
      time: "9:00 AM - 5:00 PM",
      image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      description: "A comprehensive conference featuring latest surgical techniques and innovations in medical practice."
    },
    {
      id: 2,
      title: "Medical Workshop on Laparoscopic Surgery",
      date: "February 28, 2024",
      location: "Surgery Department",
      attendees: "50+",
      time: "10:00 AM - 4:00 PM",
      image: "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      description: "Hands-on workshop for medical students and residents on advanced laparoscopic techniques."
    },
    {
      id: 3,
      title: "Health Awareness Camp",
      date: "January 20, 2024",
      location: "Community Center",
      attendees: "500+",
      time: "8:00 AM - 2:00 PM",
      image: "https://images.unsplash.com/photo-1582750433449-648ed127bb54?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      description: "Free health screening and awareness program for the local community members."
    },
    {
      id: 4,
      title: "Surgical Skills Training Program",
      date: "December 10, 2023",
      location: "Skills Lab",
      attendees: "30+",
      time: "9:00 AM - 6:00 PM",
      image: "https://images.unsplash.com/photo-1551601651-2a8555f1a136?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      description: "Intensive training program for junior doctors on essential surgical skills and procedures."
    },
    {
      id: 5,
      title: "International Surgery Symposium",
      date: "November 25, 2023",
      location: "Main Conference Hall",
      attendees: "300+",
      time: "8:30 AM - 6:30 PM",
      image: "https://images.unsplash.com/photo-1587825140708-dfaf72ae4b04?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      description: "International symposium featuring renowned surgeons sharing their expertise and research."
    },
    {
      id: 6,
      title: "Student Research Presentation",
      date: "October 15, 2023",
      location: "Lecture Hall",
      attendees: "100+",
      time: "2:00 PM - 5:00 PM",
      image: "https://images.unsplash.com/photo-1559757175-0eb30cd8c063?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      description: "Annual presentation of research projects by medical students and residents."
    }
  ];

  return (
    <section id="events" className="py-24 bg-gradient-to-br from-gray-50 to-white relative overflow-hidden">
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
        <div className="text-center mb-16">
          <div className="flex items-center justify-center gap-4 mb-6">
            <div className="w-16 h-1 bg-teal-500"></div>
            <span className="text-teal-600 font-semibold text-sm uppercase tracking-wider">
              Department Activities
            </span>
            <div className="w-16 h-1 bg-teal-500"></div>
          </div>
          
          <h2 className="text-5xl font-bold text-blue-950 font-headline leading-tight mb-6">
            Recent Events & Activities
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Showcasing our commitment to medical education, research, and community service through various events and programs.
          </p>
        </div>

        {/* Events Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {events.map((event) => (
            <div
              key={event.id}
              className="group bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2"
            >
              {/* Event Image */}
              <div className="relative overflow-hidden h-64">
                <Image
                  src={event.image}
                  alt={event.title}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                
                {/* Date Badge */}
                <div className="absolute top-4 left-4 bg-teal-500 text-white px-3 py-1 rounded-full text-sm font-semibold">
                  {event.date}
                </div>
              </div>

              {/* Event Content */}
              <div className="p-6">
                <h3 className="text-xl font-bold text-blue-950 mb-3 group-hover:text-teal-600 transition-colors duration-300">
                  {event.title}
                </h3>
                
                <p className="text-gray-600 text-sm leading-relaxed mb-4">
                  {event.description}
                </p>

                {/* Event Details */}
                <div className="space-y-2 mb-4">
                  <div className="flex items-center gap-2 text-sm text-gray-500">
                    <MapPin className="w-4 h-4 text-teal-500" />
                    <span>{event.location}</span>
                  </div>
                  
                  <div className="flex items-center gap-2 text-sm text-gray-500">
                    <Clock className="w-4 h-4 text-teal-500" />
                    <span>{event.time}</span>
                  </div>
                  
                  <div className="flex items-center gap-2 text-sm text-gray-500">
                    <Users className="w-4 h-4 text-teal-500" />
                    <span>{event.attendees} Attendees</span>
                  </div>
                </div>

                {/* View Details Button */}
                <button className="w-full bg-gradient-to-r from-teal-500 to-blue-600 text-white font-semibold py-2 px-4 rounded-lg hover:from-teal-600 hover:to-blue-700 transition-all duration-300 transform hover:scale-105">
                  View Details
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* View All Events Button */}
        <div className="text-center mt-12">
          <button className="inline-flex items-center gap-3 bg-blue-950 hover:bg-blue-900 text-white font-bold px-8 py-4 rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl">
            <Calendar className="w-5 h-5" />
            View All Events
          </button>
        </div>
      </div>
    </section>
  );
}