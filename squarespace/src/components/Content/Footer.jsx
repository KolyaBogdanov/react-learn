import './Content.css'

let callAlert = () => {
    alert('Вы нажали на кнопачку');
};

export default function Footer () {
    
    let footerList = [
            {
                title:{
                    name:'Products',
                    href:'#',
                },
                items:[
                    {
                        name:'Website Templates',
                        href:'#',
                    },
                    {
                        name:'Websites',
                        href:'#',
                    },
                    {
                        name:'Domains',
                        href:'#',
                    },
                    {
                        name:'Online Stores',
                        href:'#',
                    },
                    {
                        name:'Point of Sale',
                        href:'#',
                    },
                    {
                        name:'Extensions',
                        href:'#',
                    },
                    {
                        name:'Marketing Tools',
                        href:'#',
                    },
                    {
                        name:'Email Marketing',
                        href:'#',
                    },
                    {
                        name:'Scheduling',
                        href:'#',
                    },
                    {
                        name:'Stories',
                        href:'#',
                    },
                    {
                        name:'Professional Email',
                        href:'#',
                    },
                    {
                        name:'Logo Maker',
                        href:'#',
                    },
                    {
                        name:'Enterprise',
                        href:'#',
                    },
                    {
                        name:'Pricing',
                        href:'#',
                    },
                    {
                        name:'Feature List',
                        href:'#',
                    },
                ],
            },
            {
                title:{
                    name:'Customers',
                    href:'#',
                },

                items:[
                    {
                        name:'Featured',
                        href:'#',
                    },
                    {
                        name:'Small Businesses',
                        href:'#',
                    },
                    {
                        name:'Photographers',
                        href:'#',
                    },
                    {
                        name:'Bloggers',
                        href:'#',
                    },
                    {
                        name:'Artists',
                        href:'#',
                    },
                    {
                        name:'Restaurants',
                        href:'#',
                    },
                    {
                        name:'Musicians',
                        href:'#',
                    },
                    {
                        name:'Weddings',
                        href:'#',
                    },
                    {
                        name:'Students',
                        href:'#',
                    },
                ],
            },
            {
                title:{
                    name:'Company',
                    href:'#',
                },

                items:[
                    {
                        name:'About',
                        href:'#',
                    },
                    {
                        name:'Careers',
                        href:'#',
                    },
                    {
                        name:'Our Brand',
                        href:'#',
                    },
                    {
                        name:'Affiliates',
                        href:'#',
                    },
                    {
                        name:'Press & Media',
                        href:'#',
                    },
                    {
                        name:'Terms of Service',
                        href:'#',
                    },
                    {
                        name:'Privacy Policy',
                        href:'#',
                    },
                    {
                        name:'Contact Us',
                        href:'#',
                    },
                    
                ],
            },
            {
                title:{
                    name:'Community',
                    href:'#',
                },

                items:[
                    {
                        name:'Help & Support',
                        href:'#',
                    },
                    {
                        name:'Hire an Expert',
                        href:'#',
                    },
                    {
                        name:'Forum',
                        href:'#',
                    },
                    {
                        name:'Webinars',
                        href:'#',
                    },
                    {
                        name:'Developer Platform',
                        href:'#',
                    },
                    {
                        name:'Circle',
                        href:'#',
                    }, 
                ],
            },
            {
                title:{
                    name:'Follow',
                    href:'#',
                },

                items:[
                    {
                        name:'Newsroom',
                        href:'#',
                    },
                    {
                        name:'Squarespace Blog',
                        href:'#',
                    },
                    {
                        name:'Creative Blog',
                        href:'#',
                    },
                    {
                        name:'Engineering Blog',
                        href:'#',
                    },
                    {
                        name:'Service Status',
                        href:'#',
                    },
                    {
                        name:'Instagram',
                        href:'#',
                    }, 
                    {
                        name:'YouTube',
                        href:'#',
                    },
                    {
                        name:'LinkedIn',
                        href:'#',
                    },
                    {
                        name:'Facebook',
                        href:'#',
                    },
                    {
                        name:'Twitter',
                        href:'#',
                    },
                ],
            },
        ]
    return (
        <div className="footer_wrapp">
            <div className="footer_btns">
                <a href="">
                    <img src="LogoF.png" className="footer_logo_img" />
                </a>
                <button className='footer_btn' onClick={callAlert}>$ USD</button>
                <button className='footer_btn' onClick={callAlert}>ENGLISH</button>
            </div>
            <div className="footer_links">
                {footerList.map((column) => (
                    <div className='footer_column'>
                        <div className="footer_title_name">
                            <a href={column.title.href}>{column.title.name}</a>
                        </div>
                        {column.items.map((link) => (
                            <div className="footer_link_item">
                                    <a href={link.href}>{link.name}</a>
                            </div>
                        ))} 
                    </div>
                ))}  
            </div>
        </div>
    )
}