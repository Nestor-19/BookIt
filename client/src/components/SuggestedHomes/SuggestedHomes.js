import './SuggestedHomes.css'

const SuggestedHomes = () => {
  return (
    <div className='suggestedHomes'>
        <div className='suggestedHomesItem'>
            <img src='https://cf.bstatic.com/xdata/images/hotel/max500/74594395.jpg?k=d5a71c0578774c302d2b8854482beaa8785077c616f956aac74766124023a319&o=' alt='' className='suggestedHomeImage'/>
            <span className='shName'>Sun Spalato Views</span>
            <span className='shCity'>Split</span>
            <span className='shPrice'>Starting from $180</span>
            <div className='shRating'>
                <button>9.2</button>
                <span>Wonderful</span>
            </div>
        </div>

        <div className='suggestedHomesItem'>
            <img src='https://cf.bstatic.com/xdata/images/hotel/max500/77765526.jpg?k=af77ae28b7b1118e4982d1d4c72ec3b370e171ac653d2aec569a75db55669445&o=' alt='' className='suggestedHomeImage'/>
            <span className='shName'>Templova 6 Old Town Apartment</span>
            <span className='shCity'>Prague</span>
            <span className='shPrice'>Starting from $140</span>
            <div className='shRating'>
                <button>9.1</button>
                <span>Wonderful</span>
            </div>
        </div>

        <div className='suggestedHomesItem'>
            <img src='https://cf.bstatic.com/xdata/images/hotel/max500/75328633.jpg?k=87304e5542c63c022f2cbc134b02b85b65496a9ed8c6ca129b49c02f817589db&o=' alt='' className='suggestedHomeImage'/>
            <span className='shName'>Citadines Les Halles</span>
            <span className='shCity'>Paris</span>
            <span className='shPrice'>Starting from $320</span>
            <div className='shRating'>
                <button>8.9</button>
                <span>Excellent</span>
            </div>
        </div>

        <div className='suggestedHomesItem'>
            <img src='https://cf.bstatic.com/xdata/images/hotel/max500/112346687.jpg?k=b0c1b36d31151ed463b8960c21e868584043522f4f380c0f382994d4b3e7ada2&o=' alt='' className='suggestedHomeImage'/>
            <span className='shName'>A case de Edi</span>
            <span className='shCity'>Rome</span>
            <span className='shPrice'>Starting from $190</span>
            <div className='shRating'>
                <button>10</button>
                <span>Exceptional</span>
            </div>
        </div>
    </div>
  )
}

export default SuggestedHomes