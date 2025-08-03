'use client'

import { useEffect, useRef, useState } from 'react'

const Features = () => {
  const [isVisible, setIsVisible] = useState({})
  const featureRefs = useRef([])

  useEffect(() => {
    const observers = []
    
    featureRefs.current.forEach((ref, index) => {
      if (ref) {
        const observer = new IntersectionObserver(
          (entries) => {
            entries.forEach((entry) => {
              if (entry.isIntersecting) {
                setIsVisible((prev) => ({ ...prev, [index]: true }))
              }
            })
          },
          { threshold: 0.3 }
        )
        
        observer.observe(ref)
        observers.push(observer)
      }
    })

    return () => {
      observers.forEach((observer) => observer.disconnect())
    }
  }, [])

  return (
    <div id="features" className="scroll-mt-16">
      {/* Our Games Section - Regular White Background */}
      <section className="bg-gray-100 py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-5xl font-bold text-center text-black mb-20">Our Games</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 max-w-6xl mx-auto">
            {/* Teen Patti */}
            <div 
              ref={(el) => (featureRefs.current[0] = el)}
              className={`text-center transition-all duration-1000 ${isVisible[0] ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}
            >
  <div className="mb-8 flex justify-center">
                {/* Icon - 3 curved lines */}
               <img src="/website/icon1.png" className='h-24 w-24'/>
               
              </div>
              <h3 className="text-2xl font-semibold text-blue-600 mb-6">Teen Patti and More</h3>
              <p className="text-gray-700 leading-relaxed text-base">
                Enjoy a wide range of games including Teen Patti, Ludo, and other popular titles. Experience the thrill of real money gaming and compete with genuine players for exciting wins.
              </p>
              
            </div>

            {/* Instant Withdrawals */}
            <div 
              ref={(el) => (featureRefs.current[1] = el)}
              className={`text-center transition-all duration-1000 delay-200 ${isVisible[1] ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}
            >
              <div className="mb-8 flex justify-center">
                {/* Icon - 3 curved lines */}
               <img src="/website/icon2.png" className='h-24 w-24'/>
               
              </div>
              <h3 className="text-2xl font-semibold text-blue-600 mb-6">Instant Withdrawals</h3>
              <p className="text-gray-700 leading-relaxed text-base">
                Withdraw your winnings instantly with DESI GAMES. No more waiting - get quick and secure withdrawals whenever you strike gold in your favorite games.
              </p>
            </div>

            {/* Player Safety */}
            <div 
              ref={(el) => (featureRefs.current[2] = el)}
              className={`text-center transition-all duration-1000 delay-400 ${isVisible[2] ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}
            >
                <div className="mb-8 flex justify-center">
                {/* Icon - 3 curved lines */}
               <img src="/website/icon3.png" className='h-24 w-24'/>
               
              </div>
              <h3 className="text-2xl font-semibold text-blue-600 mb-6">Player Safety</h3>
              <p className="text-gray-700 leading-relaxed text-base">
                At DESI GAMES, player safety is our top priority. Play with peace of mind knowing that all players are genuine, and the app is built with robust security measures to ensure a safe gaming experience.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Game of the Month Section - With Fixed Background */}
      <section className="relative overflow-hidden">
        {/* Fixed Background Container */}
        <div className="relative h-[600px]">
          {/* Background Image */}
          <div className="absolute inset-0">
            <img 
              src="/website/Capture.JPG" 
              alt="Game of the Month Background" 
              className="absolute inset-0 w-full h-full object-cover"
            />
            {/* Optional overlay for better text readability */}
            <div className="absolute inset-0 bg-black/30"></div>
          </div>

          {/* Scrollable Content Overlay */}
          <div className="absolute inset-0 overflow-y-auto">
            <div className="h-full flex items-center">
              <div 
                ref={(el) => (featureRefs.current[3] = el)}
                className={`w-full px-4 transition-all duration-1000 ${isVisible[3] ? 'scale-100 opacity-100' : 'scale-95 opacity-0'}`}
              >
                <div className="max-w-2xl mx-auto bg-black/40 backdrop-blur-sm rounded-2xl p-8 shadow-2xl border border-white/20">
                  <h2 className="text-3xl font-bold text-yellow-400 mb-4">Month's Game of the Month</h2>
                  <h3 className="text-2xl font-bold text-white mb-3">Game of the Month: Teen Patti</h3>
                  <p className="text-gray-100 leading-relaxed">
                    Get ready for endless fun with Teen Patti, the game of the month on DESI GAMES. Dive into a world of strategy, skill, and excitement as you compete for big wins!
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose DESI GAMES Section - Regular Background */}
      <section className="bg-white py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-5xl font-bold text-blue-600 mb-16 ml-6">Why Choose DESI GAMES</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {/* Real Money Gaming */}
            <div 
              ref={(el) => (featureRefs.current[4] = el)}
              className={`relative overflow-hidden rounded-lg shadow-xl h-80 transition-all duration-1000 ${isVisible[4] ? 'translate-x-0 opacity-100' : '-translate-x-10 opacity-0'}`}
            >
              {/* Background Image */}
              <img 
                src="/website/feature4.jpg" 
                alt="Real Money Gaming" 
                className="absolute inset-0 w-full h-full object-cover"
              />
              
              {/* Text Card Overlay */}
              <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 bg-white rounded-lg shadow-lg p-6 w-5/6 max-w-xs">
                <h3 className="text-2xl font-bold text-blue-600 mb-2">Real Money Gaming</h3>
                <p className="text-gray-700">Safe & Genuine</p>
              </div>
            </div>

            {/* Instant Withdrawals */}
            <div 
              ref={(el) => (featureRefs.current[5] = el)}
              className={`relative overflow-hidden rounded-lg shadow-xl h-80 transition-all duration-1000 delay-200 ${isVisible[5] ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}
            >
              {/* Background Image */}
              <img 
                src="/website/feature5.jpg" 
                alt="Instant Withdrawals" 
                className="absolute inset-0 w-full h-full object-cover"
              />
              
              {/* Text Card Overlay */}
              <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 bg-white rounded-lg shadow-lg p-6 w-5/6 max-w-xs">
                <h3 className="text-2xl font-bold text-blue-600 mb-2">Instant Withdrawals</h3>
                <p className="text-gray-700">Variety of Games</p>
              </div>
            </div>

            {/* Player Safety */}
            <div 
              ref={(el) => (featureRefs.current[6] = el)}
              className={`relative overflow-hidden rounded-lg shadow-xl h-80 transition-all duration-1000 delay-400 ${isVisible[6] ? 'translate-x-0 opacity-100' : 'translate-x-10 opacity-0'}`}
            >
              {/* Background Image */}
              <img 
                src="/website/feature6.jpg" 
                alt="Player Safety" 
                className="absolute inset-0 w-full h-full object-cover"
              />
              
              {/* Text Card Overlay */}
              <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 bg-white rounded-lg shadow-lg p-6 w-5/6 max-w-xs">
                <h3 className="text-2xl font-bold text-blue-600 mb-2">Player Safety</h3>
                <p className="text-gray-700">24/7 Support</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CSS for animations */}
      <style jsx>{`
        @keyframes float {
          0%, 100% {
            transform: translateY(0) translateX(0);
          }
          25% {
            transform: translateY(-20px) translateX(10px);
          }
          50% {
            transform: translateY(0) translateX(-10px);
          }
          75% {
            transform: translateY(20px) translateX(5px);
          }
        }
      `}</style>
    </div>
  )
}

export default Features