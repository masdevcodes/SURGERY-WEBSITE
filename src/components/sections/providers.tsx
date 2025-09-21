<div 
  className="relative w-32 h-32 rounded-full overflow-hidden mb-4 border-2 border-gray-300 group cursor-pointer"
  onClick={() => setZoomedImage(getImagePath(selectedProvider.details.incharge))} // Fixed: wrapped in arrow function
>
  <Image
    src={getImagePath(selectedProvider.details.incharge)}
    alt={selectedProvider.details.incharge}
    fill
    className="object-cover w-full h-full transition-transform duration-500 group-hover:scale-110"
  />
</div>