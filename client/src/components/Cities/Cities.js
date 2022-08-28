import "./Cities.css";

const Cities = () => {
  return (
    <div className="cities">
        <div className="cityItem">
            <img src="https://cf.bstatic.com/xdata/images/city/max500/689874.webp?k=5a29b0d987e962b9ce2c78ae5dae52d02fb2ed959b1e2b00faf022306e103f8b&o=" alt="" className="cityImage"/>
            <div className="cityTitle">
                <h1>Reno</h1>
            </div>
        </div>
        <div className="cityItem">
            <img src="https://cf.bstatic.com/xdata/images/city/max500/689418.webp?k=d39081abcd45a070b313a85e992b6849b0503d7f1f7e4fb7effae77c9a2c019f&o=" alt="" className="cityImage"/>
            <div className="cityTitle">
                <h1>South Lake Tahoe</h1>
            </div>
        </div>
        <div className="cityItem">
            <img src="https://cf.bstatic.com/xdata/images/city/max500/690329.webp?k=330403cfa8e49ee98d01a4808f169d520e49f24348154b8cb7f637497015802f&o=" alt="" className="cityImage"/>
            <div className="cityTitle">
                <h1>Austin</h1>
            </div>
        </div>
    </div>
  )
}

export default Cities