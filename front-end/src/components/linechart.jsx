import { LineChart, Line, XAxis, YAxis, Tooltip, ResponsiveContainer } from 'recharts';

export default function LineGraph({data}) {
    return (
        <ResponsiveContainer
			width='100%'
			height={150}
		>
			<LineChart
                data={data}
                margin={{ right: 0, left: 5, bottom: 16 }}

			>
				<XAxis
                
					dataKey='name'
					axisLine={false}
					tickLine={false}
					tick={{ fill: 'white', fontSize: 14 }}
					padding={{ left: 0, right: 0 }}
				/>
				<YAxis
					hide={true}
				/>
				<Tooltip />
				<Line
					type='monotone'
					dataKey='sessionLength'
					stroke='white'
					dot={false}
					strokeWidth={2}
				/>
			</LineChart>
		</ResponsiveContainer>
    )
}