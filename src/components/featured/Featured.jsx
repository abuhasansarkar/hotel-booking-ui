import "./featured.scss"

const Featured = () => {
  return (
    <div className="featured">
        <div className="featuredItem">
            <img src="https://cdn.pixabay.com/photo/2019/03/28/18/01/national-martys-4087688_1280.jpg" alt="featured Img" />
            <div className="featurdTitle">
                <h1>Dhaka</h1>
                <h3>123 Propertises</h3>
            </div>
        </div>
        <div className="featuredItem">
            <img src="https://cdn.pixabay.com/photo/2014/08/30/06/49/singapore-431421_1280.jpg" alt="featured Img" />
            <div className="featurdTitle">
                <h1>Singapur</h1>
                <h3>123 Propertises</h3>
            </div>
        </div>
        <div className="featuredItem">
            <img src="https://cdn.pixabay.com/photo/2017/04/08/10/42/burj-khalifa-2212978_1280.jpg" alt="featured Img" />
            <div className="featurdTitle">
                <h1>Dubai</h1>
                <h3>123 Propertises</h3>
            </div>
        </div>
    </div>
  )
}

export default Featured