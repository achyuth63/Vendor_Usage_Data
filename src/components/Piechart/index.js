import React from "react";
import { PieChart, Pie, Legend, Cell, ResponsiveContainer } from "recharts"
import LongMenu from "./components/LongMenu"

import './index.css'

const A = 60;
const e = 7;
const d = 8;
const c = 15;
const B = 10;


const data = [
  
  {
    count: (A/100) * 17711034,
    language: "Dell EMC",
  },
  {
    count: (B/100) * 17711034,
    language: "Netapp",
  },
  {
    count: (c/100) * 17711034,
    language: "Hitachi",
  },
  {
    count: (d/100) * 17711034,
    language: "HP",
  },
 
  {
    count: (e/100) * 17711034,
    language: "IBM",
  },
  
  
]

const Piechart = () => {
    
  return (
<>
   <div className="card">
     <div className="head">
       <h1 className="heading">Vendor Usage</h1>
      <LongMenu />
     </div>
    <ResponsiveContainer  width="100%" height={120}>
    
      <PieChart>
      
        <Pie
          cx="45%"
          cy="50%"
          data={data}
          startAngle={-60}
          endAngle={-470}
          innerRadius="80%"
          outerRadius="100%"
          dataKey="count"
          stroke = "#00000D"
          
        >
         
          <Cell name="Dell EMC" fill="#024087" />
          <Cell name="Hitachi" fill="#FDBA6A" />
          <Cell name="Netapp" fill="#BF66F3" />
          <Cell name="HP" fill="#E3C6FB" />
          <Cell name="IBM" fill="#9BC5FF" />
          
        </Pie>
       
        <Legend
          iconType="square"
          iconSize="8"
          layout="vertical"
          verticalAlign="start"
          height="5%"
          align="right"
          />
    </PieChart>
    </ResponsiveContainer>
    </div>
    </>
    
    
  )
}

export default Piechart