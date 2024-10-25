import React from 'react';
import Navbar from './components/Navbar';
import SatelliteAnalysis from './components/SatelliteAnalysis';
import IoTDashboard from './components/IoTDashboard';
import MarketPlace from './components/MarketPlace';
import { Satellite, Cpu, Store } from 'lucide-react';

function App() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-green-800 to-green-900 text-white py-16">
        <div className="max-w-7xl mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Smart Farm Platform</h1>
          <p className="text-xl text-green-100">Transform your farm with AI, IoT, and market insights</p>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 py-8">
        <div className="space-y-8">
          {/* Section Headers */}
          <div className="flex items-center gap-3 border-b border-gray-200 pb-4">
            <Satellite className="w-6 h-6 text-green-600" />
            <h2 className="text-2xl font-bold">Visual Understanding</h2>
          </div>
          <SatelliteAnalysis />

          <div className="flex items-center gap-3 border-b border-gray-200 pb-4">
            <Cpu className="w-6 h-6 text-blue-600" />
            <h2 className="text-2xl font-bold">Physical Understanding</h2>
          </div>
          <IoTDashboard />

          <div className="flex items-center gap-3 border-b border-gray-200 pb-4">
            <Store className="w-6 h-6 text-purple-600" />
            <h2 className="text-2xl font-bold">Market Connect</h2>
          </div>
          <MarketPlace />
        </div>
      </div>
    </div>
  );
}

export default App;