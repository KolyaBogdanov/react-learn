import './Content.css'

export default function ScrollBannerTxt ({description}) {
    return (
        <div className="scroll_banner_inner_txt">
            <p className="scroll_banner_inner_txt_content">
                {description}
            </p>
        </div>
    )

}