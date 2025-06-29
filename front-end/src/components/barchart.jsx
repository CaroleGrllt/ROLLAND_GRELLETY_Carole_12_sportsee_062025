

import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

function CustomTooltip ({ active, payload }) {
  if (active && payload && payload.length) { // on vérifie si survol + si existe données
    const kg = payload.find(p => p.dataKey === 'kg')?.value; //cherche objet avec clé kg
    const kCal = payload.find(p => p.dataKey === 'kCal')?.value;

    return (
      <div className='popup'
        style={{
          
        }}
      >
        <div>{kg}kg</div>
        <div>{kCal}kCal</div>
      </div>
    );
  }

  return null;
};

export default function BarGraph ({data}) {
    return (
      <ResponsiveContainer width="100%" height={190}>
        <BarChart
            data={data}
            barGap={4}
            barSize={15}
            margin={{ top: 16}}
        >
            <CartesianGrid strokeDasharray="3" vertical={false} />
            <XAxis  
                dataKey="name"                 
                tickLine={false}
                tick={{
                    fontSize: 12,
                    fill: '#74798C',  
                    fontWeight: 500,
                }}
                tickMargin={10}
                axisLine={{ stroke: '#74798C', strokeWidth: 1 }}                
            />
            <YAxis 
                orientation='right'
                axisLine={false}
                tickLine={false}  
                tick={{
                    fontSize: 12,
                    fill: '#74798C',  
                    fontWeight: 500,
                }}
                tickMargin={10}
                interval={0}
                domain={[0, 500]}
            />
            <Tooltip content={<CustomTooltip />} />

            <Bar dataKey="kg" fill="#282D30" name='Poids (kg)' radius={[10, 10, 0, 0]} barSize={7} />
            <Bar dataKey="kCal" fill="#FF0101" name='Calories brûlées' radius={[10, 10, 0, 0]} barSize={7} />
        </BarChart>
      </ResponsiveContainer>
    );
}