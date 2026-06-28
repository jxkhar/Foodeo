import React from 'react'
import Card from './Card' 

function Cardarea() {
  const featuresData = [
    {
      id: 1,
      icon: "📦",
      title: "Amazon SEO Engine",
      description: "Instantly converts raw processing parameters into high-ranking, keyword-optimized product feature bullets designed to pass retail compliance and scale organic search visibility."
    },
    {
      id: 2,
      icon: "📸",
      title: "Multi-Vibe Content Copilot",
      description: "Automatically drafts tailored social media captions and hashtags based on your brand's specific tone—instantly switching between premium luxury tones or deeply rooted traditional messaging."
    },
    {
      id: 3,
      icon: "💡",
      title: "Market Intelligence",
      description: "Generates actionable B2B marketing strategies, visual hooks, and audience targeting profiles alongside your copy to help grassroots food brands capture premium consumer interest."
    }
  ]

  return (
    <section className="w-full bg-linear-to-b from-gray-50 via-white to-white py-24 relative overflow-hidden">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-125 h-125 bg-emerald-500/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-6xl mx-auto px-6 mb-16 relative z-10">
        <h2 className="text-3xl md:text-5xl font-black tracking-tighter text-slate-950">
          What Foodeo Builds.
        </h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-12 max-w-6xl mx-auto px-6 relative z-10">
        
        {featuresData.map((feature) => (
          <Card 
            key={feature.id}
            icon={feature.icon}
            title={feature.title}
            description={feature.description}
          />
        ))}

      </div>
    </section>
  )
}

export default Cardarea