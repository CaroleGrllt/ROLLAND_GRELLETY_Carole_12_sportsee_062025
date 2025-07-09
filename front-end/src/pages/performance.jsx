import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import DataUser from "../utils/model"
import { getFirstName, getTodayScore, getPerformance } from "../utils/controller"
import RadarGraph from "../components/radarchart"
import RadialBarGraph from "../components/radialbarchart"



export default function Average () {
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
    const score = getTodayScore(user)
    const performance = getPerformance(user)

    return (
        <>
            <section className="greetings">
                <h1>Bonjour <span className="user__name">{firstName}</span>,</h1>
                <p>Félicitations ! Vous avez explosé vos objectifs hier 👏</p>
            </section>
            <section className="dashboard">
                <div className="radar__chart">
                    <RadarGraph data={performance} />
                </div>
                <div className="radial__chart">
                    <span>Score</span>
                    <RadialBarGraph data={score} />  
                </div>
            </section>
        </>
    )
}