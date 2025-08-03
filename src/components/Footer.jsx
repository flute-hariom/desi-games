'use client'

const Footer = () => {
  return (
    <footer className="bg-gray-100 border-t-4 border-teal-800 py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          
          {/* Left Column - Logo and Contact */}
          <div className="space-y-4">
            <h2 className="text-4xl font-bold text-black">DESI GAMES</h2>
            
            <div className="space-y-2 text-gray-700">
              <p>+91 76782 20774</p>
              <p>Svtechno23@gmail.com</p>
              <div>
                <p>22 Floor Tower G11 Nirala Greenshire</p>
                <p>Gh3 Sector 2, Noida, Uttar Pradesh</p>
                <p>India - 203207</p>
              </div>
            </div>
          </div>
          
          {/* Middle Column - Empty for spacing */}
          <div></div>
          
          {/* Right Column - Empty */}
          <div></div>
        </div>
        
        {/* Bottom Copyright */}
        <div className="mt-12 pt-8 border-t border-gray-300 text-center">
          <p className="text-gray-600 text-sm">
            © 2025 by DESI GAMES. All rights reserved. Powered and secured by{' '}
            <a href="#" className="hover:text-teal-700 underline">Gaming Authority</a>.
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer