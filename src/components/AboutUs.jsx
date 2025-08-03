'use client'

import Image from 'next/image'

const AboutUs = () => {
  return (
    <section id="about" className="relative bg-gradient-to-br from-blue-400 via-purple-400 to-blue-400 py-20">
      <div className="container mx-auto px-4">
        {/* About Content */}
        <div className="max-w-4xl mx-auto text-center mb-16">
          <h2 className="text-5xl font-bold text-black mb-8">About DESI GAMES</h2>
          
          <p className="text-lg text-gray-900 leading-relaxed mb-8 max-w-3xl mx-auto">
            DESI GAMES is a real money gaming app that offers a safe and 
            genuine platform for players to enjoy popular games like Teen Patti, 
            Poker, and more. With instant withdrawals and genuine players, 
            DESI GAMES is your ultimate gaming destination!
          </p>

          {/* Learn More Button */}
          <div className="flex justify-end max-w-3xl mx-auto">
            <button className="bg-blue-700 hover:bg-blue-800 text-white font-semibold py-3 px-8 rounded-lg shadow-lg transition-all duration-300 transform hover:scale-105">
              Learn More
            </button>
          </div>
        </div>

        {/* Game Preview Images */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6   mx-auto">
          {/* Using Next.js Image component for better performance and consistent sizing */}
          <div className="relative h-[400px] w-full overflow-hidden rounded-lg shadow-lg">
            <Image 
              src="/website/about1.jpg" 
              alt="Teen Patti Game Preview"
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
          </div>
          
          <div className="relative h-[400px] w-full overflow-hidden rounded-lg shadow-lg">
            <Image 
              src="/website/about2.jpg" 
              alt="Poker Game Preview"
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
          </div>
        </div>
      </div>
    </section>
  )
}

export default AboutUs