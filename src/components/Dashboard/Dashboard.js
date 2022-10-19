import React from 'react';
import MyAreaChart from '../AreaChart/AreaChart';
import MyBarChart from '../BarChart/BarChart';
import MyLineChart from '../LineChart/LineChart';
import MyPieChart from '../PieChart/PieChart';

const Dashboard = () => {
  return (
    <div>
      <h2 className="text-3xl font-semibold mt-3 mx-4 bg-slate-800 text-cyan-100 p-2 border rounded-lg text-center">
        Dashboard
      </h2>
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-3 p-4 justify-center text-cyan-100">
        <div className="bg-slate-800 p-2 border rounded-lg h-72 w-80">
          <MyLineChart></MyLineChart>
        </div>
        <div className="bg-slate-800 p-2 border rounded-lg h-72 w-80">
          <MyBarChart></MyBarChart>
        </div>
        <div className="bg-slate-800 p-2 border rounded-lg h-72 w-80">
          <MyAreaChart></MyAreaChart>
        </div>
        <div className="bg-slate-800 p-2 border rounded-lg h-72 w-80">
          <MyPieChart></MyPieChart>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
