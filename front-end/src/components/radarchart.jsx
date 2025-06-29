import { RadarChart, Radar, PolarGrid, PolarAngleAxis, ResponsiveContainer } from 'recharts';

export default function RadarGraph ({ data }) {
	return (
		<ResponsiveContainer
			width='100%'
			height='100%'
		>
			<RadarChart
				data={data}
				margin={{ top: 0, right: 35, bottom: 0, left: 35 }}
			>
				<PolarGrid radialLines={false} />
				<PolarAngleAxis
					dataKey='subject'
					tick={{ fill: 'white', fontSize: 12 }}
				/>
				<Radar
					dataKey='A'
					stroke='red'
					fill='red'
					fillOpacity={0.75}
				/>
			</RadarChart>
		</ResponsiveContainer>
	);
};

