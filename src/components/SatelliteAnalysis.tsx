import { Scan, AlertCircle, Leaf, Activity } from 'lucide-react';

interface HealthMetric {
  label: string;
  value: number;
  status: 'good' | 'warning' | 'critical';
}

export default function SatelliteAnalysis() {
  const healthMetrics: HealthMetric[] = [
    { label: 'Crop Health Index', value: 87, status: 'good' },
    { label: 'Disease Risk', value: 12, status: 'warning' },
    { label: 'Growth Rate', value: 92, status: 'good' },
    { label: 'Soil Quality', value: 78, status: 'good' }
  ];

  return (
    <div className="bg-white rounded-lg shadow-lg p-6">
      <div className="flex items-center gap-3 mb-6">
        <Scan className="w-6 h-6 text-green-600" />
        <h2 className="text-2xl font-bold">Satellite Analysis</h2>
      </div>

      <div className="space-y-6">
        {/* Satellite Image */}
        <div className="relative">
          <img 
            src="https://images.unsplash.com/photo-1570586437263-ab629fccc818?auto=format&fit=crop&q=80" 
            alt="Farm Satellite View"
            className="w-full h-64 object-cover rounded-lg"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent rounded-lg">
            <div className="absolute bottom-4 left-4 text-white">
              <p className="font-semibold">Last Updated: Today, 10:30 AM</p>
              <p className="text-sm">Resolution: 0.5m/pixel</p>
            </div>
          </div>
        </div>

        {/* Health Metrics */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {healthMetrics.map((metric, index) => (
            <div key={index} className="bg-gray-50 p-4 rounded-lg">
              <div className="flex items-center gap-2 mb-2">
                <span className={`h-2 w-2 rounded-full ${
                  metric.status === 'good' ? 'bg-green-500' :
                  metric.status === 'warning' ? 'bg-yellow-500' : 'bg-red-500'
                }`} />
                <span className="text-sm text-gray-600">{metric.label}</span>
              </div>
              <p className="text-2xl font-bold">{metric.value}%</p>
            </div>
          ))}
        </div>

        {/* Disease Detection */}
        <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4">
          <div className="flex items-center gap-2 mb-2">
            <AlertCircle className="w-5 h-5 text-yellow-600" />
            <h3 className="font-semibold text-yellow-800">Early Warning</h3>
          </div>
          <p className="text-yellow-800">Potential early signs of leaf blight detected in the northeast section.</p>
        </div>
      </div>
    </div>
  );
}