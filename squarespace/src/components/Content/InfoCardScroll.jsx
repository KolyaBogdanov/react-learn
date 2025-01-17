import './Content.css'

export default function InfoCardScroll () {
    return (
        <div className="info_scroll_card_white">
                <img className='info_card_scroll_img' src="VerticallScroll.png" alt="" /> 
                <div className="info_card_txt">
                    <p className='info_card_bolder_txt'>
                        Protect your content.
                    </p>
                    <p className='info_card_light_txt'>
                        Other platforms allow users to bypass paywalls. Our tools ensure a seamless and secure member experience.
                    </p> 
                </div>        
            </div>
    )
}