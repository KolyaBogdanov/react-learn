import './Content.css'

export default function ScrollBannerImgs() {
    let cardsInfo = [
      {
        imgSrc: "ScrollImgOne.png",
        imgTitle: "Myhra",
      },
      {
        imgSrc: "ScrollImgTwo.png",
        imgTitle: "Grown Well",
      },
      {
        imgSrc: "ScrollImgOne.png",
        imgTitle: "Myhra",
      },
      {
        imgSrc: "ScrollImgTwo.png",
        imgTitle: "Grown Well",
      },
      {
        imgSrc: "ScrollImgOne.png",
        imgTitle: "Myhra",
      },
      {
        imgSrc: "ScrollImgTwo.png",
        imgTitle: "Grown Well",
      },
      
    ];
    return (
        <div className="scroll_banner_imgs_container">
                {cardsInfo.map((cardInfo) => {
                    return (
                        <div className="card">
                            <img  src={ cardInfo.imgSrc } alt="" /> 
                        <div className='card_txt'>
                            { cardInfo.imgTitle }
                        </div>
                        </div> 
                    ) ;
                })}
          <div className='scroll_banner_count'>
            Total count: {cardsInfo.length}
          </div>
          </div>
    );
  }
