import './Content.css'
import InfoCard from './InfoCard'
import InfoCardScroll from './InfoCardScroll'


export default function VideoBanner () {
    return (
        <div className='info_wrapp'>
           <div className="info_title">
                <p className="info_title_bold_txt">
                    Engage your audience <br/> with exclusive content.
                </p>
                <p className="info_title_light_txt">
                    From virtual classes and workshops to newsletters, podcasts,<br/> and video series, Member Areas help you build, harness, and <br/>monetize the power of your online community.
                </p>
           </div>
           <div className="info_cards"  >
                <InfoCard 
                    title="Promote premium content." 
                    description="Whether you’re a chef selling recipes and cooking videos or a financial planner sharing newsletters and podcasts, Squarespace has the tools you need to protect and share your content."
                    imageSrc="InfoFirst.png" 
                />
                <InfoCard 
                    title="Share online classes." 
                    description="From virtual yoga classes to writing workshops, digital networking events to 1:1 coaching, our platform helps creators educate and inspire members."
                    imageSrc="InfoSecond.png"
                    flexDirection="reverse"  
                />
                <InfoCard 
                    title="Build a community." 
                    description="Help members connect with one another through virtual events, email updates, shared event calendars, and group workshops."
                    imageSrc="InfoThird.png"  
                />
                <InfoCard 
                    title="Integrate your newsletter." 
                    description="Member areas connect with Squarespace Email Campaigns. So you can manage lists and send newsletters all from the same place."
                    imageSrc="InfoFourth.png"
                    flexDirection="reverse" 
                />
                <InfoCardScroll />
                <InfoCard 
                    title="Integrate your newsletter." 
                    description="Member areas connect with Squarespace Email Campaigns. So you can manage lists and send newsletters all from the same place."
                    imageSrc="InfoFourth.png" 
                />
           </div>
        </div>
    )
}