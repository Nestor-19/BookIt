import './MailingList.css'

const MailingList = () => {
  return (
    <div className='mailingList'>
        <h1 className='mTitle'>Save time, save money!</h1>
        <span className='mDescription'>Sign up to receive the best deals</span>
        <div className='mContainer'>
            <input type="text" placeholder="Enter Email"></input>
            <button>Subscribe</button>
        </div>
    </div>
  )
}

export default MailingList