import { useParams } from "react-router-dom"
import DataUser from "../utils/model"
import { getFirstName, getTodayScore, getKeyData, getActivity, getSessions, getPerformance } from "../utils/controller"
import InfoCard from "../components/infoCard"
import Energy from "../assets/img/energy.svg"
import Chicken from "../assets/img/chicken.svg"
import Apple from "../assets/img/apple.svg"
import Burger from "../assets/img/burger.svg"
import BarGraph from "../components/barchart"
import LineGraph from "../components/linechart"
import RadarGraph from "../components/radarchart"
import RadialBarGraph from "../components/radialbarchart"


export default function Home () {

    const params = useParams()
    // console.log(params)
    const userId = parseInt(params.id)
    // console.log(typeof userId)

    const user = new DataUser(userId)
    // console.log(user)
    const firstName = getFirstName(user)
    const score = getTodayScore(user)
    // console.log(score)
    const keyData = getKeyData(user)
    const activity = getActivity(user)
    // console.log(activity)
    const sessions = getSessions(user)
    const performance = getPerformance(user)
    console.log(performance)

    return (
        <>
            <section className="greetings">
                <h1>Bonjour <span className="user__name">{firstName}</span>,</h1>
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
                            <BarGraph data={activity} />
                        </div>
                    </div>
                    <div className="metricscharts__container">
                        <div className="line__chart">
                            <span>Durée moyenne des sessions</span>
                            <LineGraph data={sessions}/>
                        </div>
                        <div className="radar__chart">
                            <RadarGraph data={performance} />
                        </div>
                        <div className="radial__chart">
                            <RadialBarGraph data={score} />
                        </div>
                    </div>
                </div>
                <div className="infos__container">
                    <InfoCard 
                        icon={Energy}
                        data={keyData.calorieCount}
                        unit={'Kcal'}
                        name={'Calories'}
                    />
                    <InfoCard 
                        icon={Chicken}
                        data={keyData.proteinCount}
                        unit={'g'}
                        name={'Proteines'}
                    />
                    <InfoCard 
                        icon={Apple}
                        data={keyData.carbohydrateCount}
                        unit={'g'}
                        name={'Glucides'}
                    />
                    <InfoCard 
                        icon={Burger}
                        data={keyData.lipidCount}
                        unit={'g'}
                        name={'Lipides'}
                    />
                </div>
            </section>
        </>
    )
}