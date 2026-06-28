import React from 'react'
import Card from './Card' 

function Cardarea({ projects }) {
  const projectEntries = Object.entries(projects || {})

  return (
    <section className="w-full bg-linear-to-b from-gray-50 via-white to-white py-24 relative overflow-hidden">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-125 h-125 bg-emerald-500/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-6xl mx-auto px-6 mb-16 relative z-10">
        <h2 className="text-3xl md:text-5xl font-black tracking-tighter text-slate-950">
          What Foodeo Builds.
        </h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-12 max-w-6xl mx-auto px-6 relative z-10">
        
        {projectEntries.length === 0 ? (
          <div className="text-slate-500 text-lg col-span-3 text-center py-8">
            Loading project data from server...
          </div>
        ) : (
          projectEntries.map(([id, project]) => (
            <Card 
              key={id}
              icon={id}
              title={project.product_name}
       description={(
  <>
    Main Ingredient: {project.ingredient} <br />
    Package Weight: {project.weight}g <br />
    Brand Tone: {project.tone}
  </>
)}
            />
          ))
        )}

      </div>
    </section>
  )
}

export default Cardarea