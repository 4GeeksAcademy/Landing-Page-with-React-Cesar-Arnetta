const Card = ({ selectImg }) => {

    const carImg = ["https://cdn.pixabay.com/photo/2014/01/14/16/07/kansas-city-244682_1280.jpg",
        "https://cdn.pixabay.com/photo/2020/04/30/07/43/kansas-city-5111833_1280.jpg",
        "https://cdn.pixabay.com/photo/2020/04/30/07/42/kansas-city-5111832_1280.jpg",
        "https://cdn.pixabay.com/photo/2016/09/05/23/31/new-york-1648012_1280.jpg"
    ]

    return (
        <div className="card" style={{ width: '18rem' }}>
            <img src={carImg[selectImg]} className="card-img-top" alt="..." style={{ objectFit: 'cover', width: '16rem', height: '8rem' }} />
            <div className="card-body">
                <h5 className="card-title">Card title</h5>
                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                <a href="#" className="btn btn-primary">Go somewhere</a>
            </div>
        </div>
    )
}

export default Card