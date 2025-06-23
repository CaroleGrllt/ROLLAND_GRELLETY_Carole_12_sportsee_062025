import InfoCard from "../components/infoCard"
import Energy from "../assets/img/energy.svg"
import Chicken from "../assets/img/chicken.svg"
import Apple from "../assets/img/apple.svg"
import Burger from "../assets/img/burger.svg"
import BarGraph from "../components/barchart"
import LineGraph from "../components/linechart"


const data = [
  {
    name: '1',
    kg: 68,
    kCal: 71,
    
  },
  {
    name: '2',
    kg: 69,
    kCal: 70,
    
  },
  {
    name: '3',
    kg: 68,
    kCal: 72,
    
  },
  {
    name: '4',
    kg: 68,
    kCal: 69,
    
  },
  {
    name: '5',
    kg: 68,
    kCal: 71,
    
  },
  {
    name: '6',
    kg: 69,
    kCal: 68,
   
  },
  {
    name: '7',
    kg: 68,
    kCal: 72,
    
  },
];

const sessions = [
	{
		name: 'L',
		sessionLength: 30,
	},
	{
		name: 'M',
		sessionLength: 23,
	},
	{
		name: 'M',
		sessionLength: 45,
	},
	{
		name: 'J',
		sessionLength: 50,
	},
	{
		name: 'V',
		sessionLength: 0,
	},
	{
		name: 'S',
		sessionLength: 0,
	},
	{
		name: 'D',
		sessionLength: 60,
	},
];

export default function Home () {
    return (
        <>
            <section className="greetings">
                <h1>Bonjour <span className="user__name">Thomas</span></h1>
                <p>Félicitations ! Vous avez explosé vos objectifs hier 👏</p>
            </section>
            <section className="dashboard">
                <div className="charts__container">
                    <div className="barchart__container">
                        <div className="chart__infos">
                            <div className="chart__title">
                                <span>Activité quotidienne</span>
                            </div>
                            <div className="chart__legend">
                                <div className="weight">
                                    <div className="weight__color"></div>
                                    <span className="weight__legend">Poids (kg)</span>
                                </div>
                                <div className="energy">
                                    <div className="energy__color"></div>
                                    <span className="energy__legend">Calories brûlées (kCal)</span>
                                </div>
                            </div>
                        </div>
                        <div className="chart__content">
                            <BarGraph data={data} />
                        </div>
                    </div>
                    <div className="metricscharts__container">
                        <div className="line__chart">
                            <span>Durée moyenne des sessions</span>
                            <LineGraph data={sessions}/>
                        </div>
                        <div className="radar__chart"></div>
                        <div className="radial__chart"></div>
                    </div>
                </div>
                <div className="infos__container">
                    <InfoCard 
                        icon={Energy}
                        data={1930}
                        unit={'Kcal'}
                        name={'Calories'}
                    />
                    <InfoCard 
                        icon={Chicken}
                        data={155}
                        unit={'g'}
                        name={'Proteines'}
                    />
                    <InfoCard 
                        icon={Apple}
                        data={290}
                        unit={'g'}
                        name={'Glucides'}
                    />
                    <InfoCard 
                        icon={Burger}
                        data={50}
                        unit={'g'}
                        name={'Lipides'}
                    />
                </div>
            </section>
        </>
    )
}