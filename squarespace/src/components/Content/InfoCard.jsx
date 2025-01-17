import './Content.css'


export default function InfoCard({ title, description, imageSrc, flexDirection, isBackgroundColorWhite }) {
    const infoCardClassName = "info_card " + (flexDirection ==  "reverse" ? "info_card_reverse" : "") + " " + (isBackgroundColorWhite ? "info_card_white" : "")
    return (
        <div className={ infoCardClassName }>
            <div className="info_card_txt">
                <p className="info_card_bold_txt">
                    {title}
                </p>
                <p className="info_card_light_txt">
                    {description}
                </p>
            </div>
            <img className="info_card_img" src={imageSrc} />
        </div>
    )
}

