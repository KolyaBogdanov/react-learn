import './Header.css'

export default function HeaderCenter () {
    let links = [
        {
            title:'products',
            herf:'#'
        },
        {
            title:'templates',
            herf:'#'
        },
        {
            title:'resources',
            herf:'#'
        },
    ]
    return (
        <div className="header_center">
            {links.map((link) => {
                return (
                    <a href={link.href} className='header_center_links'>{link.title}</a>
                )
            })}
            
        </div>
    )
}


