import './propertylist.scss'

const PropertyList = () => {
  return (
    <div className='propertylist'>
        <div className="propertyItem">
            <img src="https://cdn.pixabay.com/photo/2016/11/18/17/20/living-room-1835923_1280.jpg" alt="propertyimg" />

            <div className="propertytitle">
                <h2>Hotels</h2>
                <span>206 Hotels</span>
            </div>
        </div>
        <div className="propertyItem">
            <img src="https://cdn.pixabay.com/photo/2016/11/18/14/05/brick-wall-1834784_1280.jpg" alt="propertyimg" />

            <div className="propertytitle">
                <h2>Resturent</h2>
                <span>206 Hotels</span>
            </div>
        </div>
        <div className="propertyItem">
            <img src="https://cdn.pixabay.com/photo/2019/09/12/15/21/resort-4471852_1280.jpg" alt="propertyimg" />

            <div className="propertytitle">
                <h2>Resort</h2>
                <span>206 Hotels</span>
            </div>
        </div>
        <div className="propertyItem">
            <img src="https://cdn.pixabay.com/photo/2018/02/13/11/09/home-3150500_1280.jpg" alt="propertyimg" />

            <div className="propertytitle">
                <h2>villas</h2>
                <span>206 Hotels</span>
            </div>
        </div>
        <div className="propertyItem">
            <img src="https://cdn.pixabay.com/photo/2021/12/11/07/59/hotel-6862159_1280.jpg" alt="propertyimg" />

            <div className="propertytitle">
                <h2>Combins</h2>
                <span>206 Hotels</span>
            </div>
        </div>
    </div>
  )
}

export default PropertyList