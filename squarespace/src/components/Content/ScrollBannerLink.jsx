import './Content.css'

export default function ScrollBannerLink ({description,imgSrc}) {
    return (
        <div className='scroll_banner_link_inner'>
            <p className='scroll_banner_link_inner_txt'>
                {description}
            </p>
            <img src={imgSrc} alt="" />
        </div>
    )

}