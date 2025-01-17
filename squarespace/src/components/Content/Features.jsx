import './Content.css'

export default function Features () {
    let featuresList = [
        {
            content: 'Create a website with Squarespace, and decide on a name for your member area.',
        },
        {
            content: 'Add members-only content, from classes to newsletters, guides to videos.',
        },
        {
            content: 'Customize your member area landing and sign-up page with details about what you offer.',
        },
        {
            content: 'Connect your preferred processor so you can start receiving fees.',
        },
        {
            content: 'Add a Member Areas subscription to your existing Squarespace website plan.',
        },
    ]
    return (
        <div className="features__wrapp">
            <div className="features_title">
                <p className="features_title_txt">
                    How to get started with Member Areas
                </p>
                <a href="" className="features_title_link">
                    <p className='features_title_link_txt'>GET STARTED</p>
                    <img src="ArrowWhite.png" alt="" />
                </a>
            </div>
            <div className="features_list">
                    {featuresList.map ((listItem, index) => {
                        return (
                            <>
                            <div className='features_list__inner'>
                                <p className="features_number">
                                    { '0' + (index + 1) + '.' }</p>
                                <p className="features_list_txt">
                                    { listItem.content }</p>
                            </div>
                            </>
                        );   
                    })}
            </div>
          
        </div>
    )
}
