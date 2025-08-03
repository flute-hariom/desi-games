'use client'
import Image from 'next/image'

const Contact = () => {
  return (
    <section id="contact" className="relative bg-gradient-to-br from-teal-900 via-teal-800 to-emerald-900 py-20 min-h-screen flex items-center">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
          
          {/* Left Side - Laptop Image */}
          <div className="relative w-full h-[400px] lg:h-[500px] rounded-lg overflow-hidden shadow-2xl">
            <Image
              src="/website/laptop.jpg"
              alt="Laptop showing our application"
              fill
              className="object-cover hover:scale-105 transition-transform duration-300"
              priority
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 600px"
            />
            
            {/* Optional: Add a subtle overlay gradient */}
            <div className="absolute inset-0 bg-gradient-to-t from-teal-900/20 to-transparent pointer-events-none" />
          </div>
          
          {/* Right Side - Get in Touch Text */}
          <div className="relative z-10">
            <h2 className="text-5xl font-bold text-white mb-6 drop-shadow-lg">Get in Touch</h2>
            <p className="text-gray-100 text-lg leading-relaxed mb-8">
              Have a question or feedback? Reach out to us, and our dedicated support team will assist you promptly.
            </p>
            
            {/* Optional: Add a call-to-action button */}
            <button className="bg-white text-teal-900 px-8 py-3 rounded-full font-semibold hover:bg-gray-100 transition-colors duration-200 shadow-lg">
              Contact Us
            </button>
          </div>
        </div>
      </div>

      {/* CSS for keyboard glow animation (if you're using this elsewhere) */}
      <style jsx>{`
        @keyframes glow {
          0%, 100% {
            opacity: 0.7;
            background-color: rgb(55 65 81);
          }
          50% {
            opacity: 1;
            background-color: rgb(251 146 60 / 0.5);
          }
        }
      `}</style>
    </section>
  )
}

export default Contact