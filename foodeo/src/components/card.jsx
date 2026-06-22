import React from 'react'

// We destructure the data props directly from the arguments
function Card({ icon, title, description }) {
  return (
    <div className="bg-linear-to-b from-green-200/20 to-green-300/20  p-8 rounded-2xl border border-slate-100 shadow-xs transition-all duration-300 hover:-translate-y-1 hover:shadow-md flex flex-col h-full">
      
      {/* Icon Wrapper */}
      <div className="text-2xl mb-4 bg-emerald-50 w-12 h-12 flex items-center justify-center rounded-xl text-emerald-600 shrink-0">
        {icon}
      </div>
      
      {/* Card Content */}
      <h3 className="text-xl font-bold text-slate-950 mb-2">{title}</h3>
      <p className="text-sm text-slate-600 leading-relaxed">{description}</p>
      
    </div>
  )
}

export default Card