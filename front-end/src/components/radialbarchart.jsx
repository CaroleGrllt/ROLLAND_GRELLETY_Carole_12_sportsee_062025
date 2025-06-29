import { RadialBarChart, RadialBar, ResponsiveContainer, Customized } from 'recharts';

export default function RadialBarGraph ({ data }) {
	const value = data * 100;

	const object = [
		{
			uv: value,
			fill: 'red',
		},
	];

	const startAngle = 215;

	return (
		<ResponsiveContainer
			width='100%'
			height='100%'
		>
			<RadialBarChart
				innerRadius='80%'
				outerRadius='80%'
				barSize={10}
				startAngle={startAngle}
				endAngle={startAngle - (value * 360) / 100}
				data={object}
			>
				<RadialBar
					dataKey='uv'
					cornerRadius={5}
				/>
				<Customized
					component={() => (
						<>
							<text
								x='50%'
								y='43%'
								textAnchor='middle'
								fontSize='18'
								fontWeight='bold'
							>
								{value}%
							</text>
							<text
								x='50%'
								y='57%'
								textAnchor='middle'
								fontSize='12'
								fill='grey'
								fontWeight='normal'
							>
								de votre objectif
							</text>
						</>
					)}
				/>
			</RadialBarChart>
		</ResponsiveContainer>
	);
};

