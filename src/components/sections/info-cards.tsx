{/* OPD + OT Info Card */}
<div className="bg-teal-500 rounded-lg p-8 text-white shadow-xl flex flex-col h-full">
  <h3 className="text-3xl font-bold font-body mb-6 text-center">
    OPD & OT Schedule
  </h3>
  
  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 flex-grow">
    {/* OPD Section */}
    <div className="flex flex-col">
      <h4 className="text-xl font-semibold mb-3 flex items-center">
        <span className="mr-2">OPD Days</span>
        <span className="text-sm font-normal opacity-80">(8am - 2.30pm)</span>
      </h4>
      <div className="max-h-64 overflow-y-auto border border-white/30 rounded-lg bg-white/10 p-3 backdrop-blur-sm shadow-inner flex-grow">
        {[
          'Unit 1 - Mon-Thu, Room No:8',
          'Unit 2 - Tue-Fri, Room No:8',
          'Unit 3 - Wed-Sat, Room No:8',
          'Unit 4 - Mon-Thu, Room No:7',
          'Unit 5 - Tue-Fri, Room No:7',
          'Unit 6 - Wed-Sat, Room No:7',
          'Unit 7 - Mon-Thu, Room No:3',
        ].map((item, index) => (
          <div
            key={index}
            className="p-2 mb-2 last:mb-0 rounded-md bg-white/20 hover:bg-white/30 transition-colors text-sm"
          >
            <p className="font-medium">{item}</p>
          </div>
        ))}
      </div>
    </div>
    
    {/* OT Section */}
    <div className="flex flex-col">
      <h4 className="text-xl font-semibold mb-3">OT Days</h4>
      <div className="max-h-64 overflow-y-auto border border-white/30 rounded-lg bg-white/10 p-3 backdrop-blur-sm shadow-inner flex-grow">
        {[
          'Unit 1 - Tue - Fri',
          'Unit 2 - Wed - Sat',
          'Unit 3 - Mon - Thu',
          'Unit 4 - Tue - Fri',
          'Unit 5 - Wed - Sat',
          'Unit 6 - Mon - Thu',
          'Unit 7 - Wed - Sat',
        ].map((item, index) => (
          <div
            key={index}
            className="p-2 mb-2 last:mb-0 rounded-md bg-white/20 hover:bg-white/30 transition-colors text-sm"
          >
            <p className="font-medium">{item}</p>
          </div>
        ))}
      </div>
    </div>
  </div>
</div>