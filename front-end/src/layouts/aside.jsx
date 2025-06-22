import Yoga from '../assets/img/yoga.svg'
import Swim from '../assets/img/swim.svg'
import Bike from '../assets/img/bike.svg'
import BodyBuilding from '../assets/img/bodybuilding.svg'

export default function Aside () {
    return (
        <aside>
            <div className="aside__icons__container">
                <img src={Yoga} alt="Yoga" />
                <img src={Swim} alt="Natation" />
                <img src={Bike} alt="Vélo" />
                <img src={BodyBuilding} alt="Musculation" />
            </div>
            <span>Copyright, SportSee 2020</span>
        </aside>
    )
}