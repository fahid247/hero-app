import React from "react";
import { BarChart, Bar, XAxis, YAxis, Tooltip, CartesianGrid } from "recharts";

const Rechart = ({ singleAppData }) => {
  return (
    <div className="max-w-[1440px] mx-auto mt-10 border-b border-[rgba(0,25,49,1)] pb-10">
        <h1 className="font-bold text-[min(2.2vw,24px)] ">Ratings</h1>
      <BarChart
        width={1440}
        height={356}
        data={[...singleAppData.ratings].reverse()} 
        layout="vertical" 
        margin={{ top: 20, right: 30, left: 80, bottom: 5 }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <YAxis dataKey="name" type="category" />
        <XAxis type="number" />
        <Tooltip />
        <Bar dataKey="count" fill="#FF8811" barSize={30}  />
      </BarChart>
    </div>
  );
};

export default Rechart;
