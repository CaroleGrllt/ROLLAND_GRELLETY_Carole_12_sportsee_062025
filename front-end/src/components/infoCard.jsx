export default function InfoCard ({icon, data, unit, name}) {
    return (
        <article>
            <img className={name} src={icon} alt="Icone" />
            <div className="data__container">
                <span className="data__unit">
                    {data}{unit}
                </span>
                <span className="data__name">{name}</span>
            </div>
        </article>
    )
}