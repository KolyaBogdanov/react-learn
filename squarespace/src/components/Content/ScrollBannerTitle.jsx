import './Content.css'

export default function ScrollBannerTitle ({title}) {
    return (
        <div className="scroll_banner_title">
            <p className="scroll_banner_title_txt">
                {title}
            </p>
        </div>
    )

}