{/* SQUARE CONTAINER for AP, SR, JR */}
<div className="w-32 h-32 rounded-xl overflow-hidden shadow-md mb-3 group">
  <Image
    src={getImagePath(item.name)}
    alt={item.name}
    width={128}
    height={128}
    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
  />
</div>