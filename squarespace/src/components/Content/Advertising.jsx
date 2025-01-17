import './Content.css'

export default function Advertising () {
    let linksList = [
        {
            content:'Visit Help Center',
            href:'#',
        },
        {
            content:'Contact Support',
            href:'#',
        },
        {
            content:'Webinars',
            href:'#',
        },
    ]
    return (
        <div className='advertising_wrapp'>
            <img src="VerticallScroll.png" alt="" />
            <div className='advertising_content_inner'>
            <div className="advertising_title">
                    Award-winning customer support
                </div>
                <div className="advertising_content">
                    Think of Squarespace as your very own IT department. Alongside unlimited hosting and enterprise-grade infrastructure, we offer dedicated 24/7 support.
                </div>
                {linksList.map((link) => {
                    return (
                        <>
                        <div className='advertising_links'>
                            <a href={link.href} className='advertising_link'>{link.content}</a>
                        </div>
                        </>
                    )
                })}
            </div>
            </div>
    )
}