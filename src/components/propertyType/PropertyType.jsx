import "./propertyType.css"

import React from 'react'
import Card from "../../ui-component/Card"

const PropertyType = () => {

        const cardsList = [
                { id: 1, title: 'Hotel', content: '9721 Hotel', imgUrl: 'https://cf.bstatic.com/xdata/images/xphoto/square300/57584488.webp?k=bf724e4e9b9b75480bbe7fc675460a089ba6414fe4693b83ea3fdd8e938832a6&o=' },
                { id: 2, title: 'Mumbai', content: '6212 Flats', imgUrl: 'https://cf.bstatic.com/static/img/theme-index/carousel_320x240/card-image-apartments_300/9f60235dc09a3ac3f0a93adbc901c61ecd1ce72e.jpg' },
                { id: 3, title: 'Resorts', content: '2273 Hotel', imgUrl: 'https://cf.bstatic.com/static/img/theme-index/carousel_320x240/bg_resorts/6f87c6143fbd51a0bb5d15ca3b9cf84211ab0884.jpg' },
                { id: 4, title: 'Villas', content: '3541 Properties', imgUrl: 'https://cf.bstatic.com/static/img/theme-index/carousel_320x240/card-image-villas_300/dd0d7f8202676306a661aa4f0cf1ffab31286211.jpg' },
                { id: 5, title: 'Tree Houses', content: '982 Properties', imgUrl: 'https://5.imimg.com/data5/SELLER/Default/2021/6/UZ/HJ/PV/2599162/cheap-tree-house-hyderabad-visakhapatnam-warangal-andhra-pradesh-500x500.jpg' },
                { id: 6, title: 'Desart', content: '1117 Hotels', imgUrl: 'https://media.architecturaldigest.com/photos/5daa22362c53cb000890322d/master/w_3508,h_2339,c_limit/Panorama_Pool_Villa-outdoor_terrace2_%5B8040-A4%5D.jpg' },
                { id: 7, title: 'Cabins', content: '2213 Properties', imgUrl: 'https://cf.bstatic.com/static/img/theme-index/carousel_320x240/card-image-chalet_300/8ee014fcc493cb3334e25893a1dee8c6d36ed0ba.jpg' },
                ]

        const propertiesList = cardsList.map((card)=>(
                <div className="pListItem">
                        <Card
                                imgUrl={card.imgUrl}
                                title={card.title}
                                content={card.title}
                        />
                </div>
        ))

  return (
          <div className="pList">

                  {propertiesList}

          </div>
  )
}

export default PropertyType
