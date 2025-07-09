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
					cornerRadius={50}
				/>

				<Customized
					component={({ width, height }) => {
						if (!width || !height) return null;

						const centerX = width / 2;
						const centerY = height / 2;
						const radius = '33%'

						const titleFontSize = Math.min(width, height) * 0.1;
						const subtitleFontSize = Math.min(width, height) * 0.06; // 4.5%

						return (
							<>
								{/* FOND BLANC ROND */}
								<circle
									cx={centerX}
									cy={centerY}
									r={radius}
									fill="white"
								/>
								{/* TEXTE */}
								<text
									x={centerX}
									y={centerY - 5}
									textAnchor="middle"
									fontSize={titleFontSize}
									fontWeight="bold"
								>
									{value}%
								</text>
								<text
									x={centerX}
									y={centerY + 15}
									textAnchor="middle"
									fontSize={subtitleFontSize}
									fill="grey"
								>
									de votre objectif
								</text>
							</>
						);
					}}
				/>			
			</RadialBarChart>
		</ResponsiveContainer>
	);
};

