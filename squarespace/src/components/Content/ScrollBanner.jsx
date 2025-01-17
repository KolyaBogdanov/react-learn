import './Content.css'
import ScrollBannerImgs from './ScrollBannerImgs'
import ScrollBannerLink from './ScrollBannerLink'
import ScrollBannerTitle from './ScrollBannerTitle'
import ScrollBannerTxt from './ScrollBannerTxt'


export default function ScrollBanner () {
    return (
        <div className='scroll_banner'>
            <ScrollBannerTitle 
            title='Pick your starting point.'/>
            <ScrollBannerTxt 
            description='Templates make it easy to get started. Just select a Member Areas template, then customize it to suit your needs.'/>
            <ScrollBannerLink 
            description='Browse Templates'
            imgSrc='Arrow.png'/>
            <ScrollBannerImgs />
        </div>
    )

}