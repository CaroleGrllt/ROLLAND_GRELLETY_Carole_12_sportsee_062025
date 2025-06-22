import InfoCard from "../components/infoCard"
import Energy from "../assets/img/energy.svg"
import Chicken from "../assets/img/chicken.svg"
import Apple from "../assets/img/apple.svg"
import Burger from "../assets/img/burger.svg"


export default function Home () {
    return (
        <>
            <section className="greetings">
                <h1>Bonjour <span className="user__name">Thomas</span></h1>
                <p>Félicitations ! Vous avez explosé vos objectifs hier 👏</p>
            </section>
            <section className="dashboard">
                <div className="charts__container">
                    <p>Ici apparaîtront un jour des charts</p>
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