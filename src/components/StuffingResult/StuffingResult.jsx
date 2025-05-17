import React from 'react';
import Header from '../Header/Header';
import SubHeader from '../SubHeader/SuBheader';
import {
  PieChart, Pie, Cell, Tooltip,
  BarChart, Bar, XAxis, YAxis, ResponsiveContainer
} from 'recharts';
import {motion} from "motion/react"
const COLORS = ["#4F46E5", "#D946EF", "#10B981"];
const data = [
  { name: "Big bags", volume: 10, weight: 9000 },
  { name: "Sacks", volume: 13.5, weight: 4500 },
  { name: "Boxes 1", volume: 4.8, weight: 800 },
];

const StuffingResult = () => {
  const totalVolume = data.reduce((sum, d) => sum + d.volume, 0);
  const totalWeight = data.reduce((sum, d) => sum + d.weight, 0);

  return (
    <div>
      <Header />
      <SubHeader />

      <motion.div
       animate={{
                scale:[0,1],
                rotate:[0,,0],
                 }}
                transition={{duration:2}}
       className="p-4 sm:p-6 bg-red-100 rounded-2xl shadow-lg grid grid-cols-1 md:grid-cols-2 gap-6">

        <div className="flex flex-col items-center text-center">
          <h3 className="text-lg font-bold mt-2">20 Standard #1</h3>
          <p className="text-sm text-gray-500">1 Unit</p>
          <p className="text-sm mt-2">
            <strong>Volume:</strong> 28.30 m³ <br />
            <strong>Weight:</strong> 14,300.00 kg
          </p>
        </div>

        <div>
          <h4 className="text-lg font-semibold mb-2">Cargo Summary</h4>

          <div className="flex flex-col sm:flex-row gap-4 items-center sm:items-start">
            <div className="w-full flex justify-center sm:w-1/3">
              <PieChart width={120} height={120}>
                <Pie
                  data={data}
                  dataKey="volume"
                  cx="50%"
                  cy="50%"
                  innerRadius={40}
                  outerRadius={55}
                  paddingAngle={3}
                >
                  {data.map((_, i) => (
                    <Cell key={i} fill={COLORS[i % COLORS.length]} />
                  ))}
                </Pie>
                <Tooltip />
              </PieChart>
            </div>

            <div className="w-full sm:w-2/3 h-32">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={data}>
                  <XAxis dataKey="name" />
                  <YAxis hide />
                  <Tooltip />
                  <Bar dataKey="weight" fill="#60A5FA" radius={[4, 4, 0, 0]} />
                </BarChart>
              </ResponsiveContainer>
            </div>
          </div>
        </div>

        <div className="col-span-1 md:col-span-2 overflow-x-auto">
          <table className="w-full mt-4 text-sm min-w-[500px]">
            <thead>
              <tr className="text-gray-500 border-b">
                <th className="text-left py-2">Name</th>
                <th>Packages</th>
                <th>Volume</th>
                <th>Weight</th>
              </tr>
            </thead>
            <tbody>
              {data.map((item, i) => (
                <tr key={i} className="text-center border-b">
                  <td className="flex items-center gap-2 text-left py-2">
                    <span className={`w-3 h-3 rounded-full`} style={{ backgroundColor: COLORS[i] }}></span>
                    <strong>{item.name}</strong>
                  </td>
                  <td>{item.name === "Big bags" ? 10 : item.name === "Sacks" ? 100 : 80}</td>
                  <td>{item.volume.toFixed(2)} m³</td>
                  <td>{item.weight.toFixed(2)} kg</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="col-span-1 md:col-span-2 flex flex-col sm:flex-row justify-center gap-3 mt-6">
          <button className="px-4 py-2 bg-gray-200 rounded-lg w-full sm:w-auto">Back</button>
          <button className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 w-full sm:w-auto">
            Export to PDF
          </button>
          <button className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 w-full sm:w-auto">
            Copy request
          </button>
        </div>
      </motion.div>
    </div>
  );
};

export default StuffingResult;
