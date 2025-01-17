import './Content.css'

export default function InfoBanner () {
    return (
        <div className='info_banner'>
            <div className="info_banner_logo">
                <img src="BlackLogo.png" alt="" />
                <img src="Cross.png" alt="" />
            </div>   
            <div className="info_banner_title">
                <p className='info_banner_title_bold_txt'>All-in-one tools.</p>
                <p className='info_banner_title_light_txt'>Get everything you need to create, share, and manage paid <br/> content with our versatile Member Areas.</p>
            </div>
            <div className="info_banner_cards">
                <div className="info_banner_card">
                    <img src="CardLeft.png" alt="" />
                    <p className="info_banner_card_bold_txt">
                        Share your expertise.
                    </p>
                    <p className="info_banner_card_light_txt">
                        Create classes, training, and packages for people of all skill levels and communities.
                    </p>
                </div>
                <div className="info_banner_card">
                    <img src="CardCenter.png" alt="" />
                    <p className="info_banner_card_bold_txt">
                        Choose how you charge.
                    </p>
                    <p className="info_banner_card_light_txt">
                        Charge a fee every week, month, or all at once. You can also make it completely free.
                    </p>
                </div>
                <div className="info_banner_card">
                    <img src="CardRight.png" alt="" /> 
                    <p className="info_banner_card_bold_txt">
                        Everything in one place.
                    </p>
                    <p className="info_banner_card_light_txt">
                        Send emails, get insights, manage members, and choose where visitors sign up.
                    </p>
                </div>
            </div>
        </div>
    )
}