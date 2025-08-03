'use client'

import Image from 'next/image'
import Link from 'next/link'

const HomeScreen = () => {
  return (
    <div id="home" className="relative min-h-screen">
      {/* Main Hero Section */}
      <div className="flex flex-col md:flex-row min-h-screen pt-20">
        {/* Left Content Section */}
        <div className="flex-1 bg-gradient-to-br from-gray-50 to-gray-100 flex items-center px-8 md:px-16 py-12">
          <div className="max-w-xl">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Play DESI GAMES. Win Cash!
            </h1>
            <p className="text-lg md:text-xl text-gray-700 mb-8 leading-relaxed">
              Experience the thrill of real money gaming with DESI GAMES. Dive into 
              a world of Teen Patti, Poker, and other exciting games. Join now and 
              start winning big!
            </p>
           <div className='flex flex-col space-y-6'>
             {/* <Link href='http://desi-game-apk.s3.ap-south-1.amazonaws.com/desi-game-release.apk'> */}
             <a href='http://desi-game-apk.s3.ap-south-1.amazonaws.com/desi-game-release.apk' target='blank'>
 <button className="cursor-pointer bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white font-bold py-4 px-12 rounded-full text-xl shadow-lg transform transition-transform hover:scale-105">
              Download App
            </button>
             </a>
            
            {/* </Link> */}
           

            <button className="w-max bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white font-bold py-4 px-12 rounded-full text-xl shadow-lg transform transition-transform hover:scale-105">
              Play Now
            </button>
           </div>
          </div>
        </div>

        {/* Right Image Section */}
          <img src="/website/home.jpg"/>
        
      </div>

      {/* Auto-scrolling Text Banner */}
      <div className="absolute bottom-0 w-full bg-gradient-to-r from-orange-700 to-orange-600 py-3 overflow-hidden">
        <div className="relative">
          <div className="flex animate-scroll whitespace-nowrap">
            <span className="text-white text-xl font-semibold mx-4">
              PLAY TEEN PATTI ONLINE ON DESI GAMES ◇ PLAY TEEN PATTI ONLINE ON DESI GAMES ◇ PLAY TEEN PATTI ONLINE ON DESI GAMES ◇ PLAY TEEN PATTI ONLINE ON DESI GAMES ◇
            </span>
            <span className="text-white text-xl font-semibold mx-4">
              PLAY TEEN PATTI ONLINE ON DESI GAMES ◇ PLAY TEEN PATTI ONLINE ON DESI GAMES ◇ PLAY TEEN PATTI ONLINE ON DESI GAMES ◇ PLAY TEEN PATTI ONLINE ON DESI GAMES ◇
            </span>
          </div>
        </div>
      </div>

      {/* Custom CSS for animation */}
      <style jsx>{`
        @keyframes scroll {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }
        
        .animate-scroll {
          animation: scroll 30s linear infinite;
        }
      `}</style>
    </div>
  )
}

export default HomeScreen