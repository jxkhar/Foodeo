import React from 'react'

function Footer() {
  return (
    <footer className="w-full bg-white border-t border-slate-100 pt-20 pb-12 relative overflow-hidden">
      
      <div className="max-w-6xl mx-auto px-6 relative z-10 flex flex-col justify-between h-full space-y-16">

        <div className="flex flex-col sm:flex-row justify-between items-center text-[11px] font-poppins text-slate-400 space-y-4 sm:space-y-0">
          <div>
            &copy; {new Date().getFullYear()} Foodeo . All rights reserved.
          </div>
          <div className="flex space-x-4">
            <span className="bg-slate-50 px-2.5 py-1 rounded border border-slate-100">Made in India</span>
          </div>
        </div>

      </div>
    </footer>
  )
}

export default Footer