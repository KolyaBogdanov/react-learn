import './Content.css'

let callAlert = () => {
    alert('Вы нажали на кнопачку');
};

export default function Banner () {
    return (
        <div className='banner'>
            <div className='banner_links'>
                <a className='banner_link' href="">sell online</a>
                <a className='banner_link' href="">member areas</a>
            </div> 
            <div className='banner_txt'>
                <p className='banner_bold_txt'>
                    Create <br/> members‑only content.
                </p>
                <p className='banner_light_txt'>
                    Monetize your content with Member Areas. Add <br/> paid areas to an existing Squarespace site or build <br/> a new one with our award-winning templates.
                </p>
            </div>
                <button className='start_btn' onClick={callAlert}>get started</button>
        </div>
    )
}