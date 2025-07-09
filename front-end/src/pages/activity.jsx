import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import DataUser from "../utils/model"
import { getFirstName, getKeyData, getActivity } from "../utils/controller"
import InfoCard from "../components/infoCard"
import Energy from "../assets/img/energy.svg"
import Chicken from "../assets/img/chicken.svg"
import Apple from "../assets/img/apple.svg"
import Burger from "../assets/img/burger.svg"
import BarGraph from "../components/barchart"


export default function Performance () {
    const params = useParams()
    const userId = parseInt(params.id)

    //changer commentaire de la variable env pour changer d'environnement : developpement ou production
    const env = 'prod' // on choisit qu'on est en prod => call API
    // const env = 'dev' // on choisit qu'on est en dev => call données mockées

    const [user, setUser] = useState(null)
    console.log(user)

    useEffect(() => {
        async function fetchData() {
        const userInfo = new DataUser(userId, env)
        await userInfo.getData()
        setUser(userInfo)
        }

        fetchData()
    }, [userId])

    if (!user) return  // corrige bug chargement données (user = null au chargement page => aucune donnée envoyée au controller)

    const firstName = getFirstName(user)
    const keyData = getKeyData(user)
    const activity = getActivity(user)

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