import './Content.css'

export default function Questions () {
    let questionsList = [
        {
          content:'Can I use Member Areas with any Squarespace website plan?',
          img:'Plus.png',  
        },
        {
        content:'Do Member Areas integrate with Squarespace Email Campaigns?',
        img:'Plus.png',  
        },
        {
        content:'Can I protect everything on my website?',
        img:'Plus.png',  
        },
        {
        content:'Can I create Member Areas but not charge a fee to users?',
        img:'Plus.png',  
        },
        {
        content:'Can I use Member Areas with a non-Squarespace website?',
        img:'Plus.png',  
        },
    ]
    return (
        <div className='questions_wrapp'>
            <div className="questions_title">
                <p className="questions_title_txt">
                    Frequently Asked Questions
                </p>
            </div>
            <div className="questions_inner">
                {questionsList.map((question) => {
                    return (
                        <>
                        <div className='question'>
                            <p className="questions_txt">
                                {question.content}
                            </p>
                            <img src={question.img} alt="" />
                        </div>  
                        </>  
                    )
                })}
            </div>
        </div>
    )
}