import { LineChart, Line, XAxis, YAxis, Tooltip, ResponsiveContainer } from 'recharts';


const formatSessions = (sessions) => {
	return [{ name: '', sessionLength: 30 }, ...sessions, { name: '', sessionLength: 30 }];
};

function CustomTooltip ({ payload }) {
	if (payload.length) {
		return (
			<div
				className='custom-tooltip'
				style={{ padding: '10px', backgroundColor: 'white' }}
			>
				<p>{`${payload[0].value} min`}</p>
			</div>
		);
	}
	return null;
};

export default function LineGraph({data}) {

    const formattedSessions = formatSessions(data);

    return (
        <ResponsiveContainer
			width='100%'
			height='100%'
		>
			<LineChart
                data={formattedSessions}
                margin={{top: 0, right: -10, left: -12, bottom: 10 }}

			>
                <defs>
                    <linearGradient id="lineGradient" x1="0" y1="0" x2="1" y2="0">
                        <stop offset="0%" stopColor="#FF8C8C" />
                        <stop offset="50%" stopColor="#FF8C8C" />
                        <stop offset="100%" stopColor="white" />
                    </linearGradient>
                </defs>
				<XAxis
					dataKey='name'
					axisLine={false}
					tickLine={false}
					tick={{ fill: '#FF8C8C', fontSize: 14 }}
					padding={{ left: 0, right: 0 }}
				/>
				<YAxis
					hide={true}
                    domain={['dataMin - 10', 'dataMax + 50']}
				/>
				<Tooltip 
                content={<CustomTooltip />} 
                />
                <Line
                    type="monotone"
                    dataKey="sessionLength"
                    stroke="url(#lineGradient)"
                    dot={false}
                    strokeWidth={2}
                />
			</LineChart>
		</ResponsiveContainer>
    )
}