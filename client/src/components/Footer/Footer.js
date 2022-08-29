import './Footer.css';

const Footer = () => {
  return (
    <div className='footer'>
        <div className='footerLists'>
            <ul className='footerList'>
                <li className='footerListItem'>Countries</li>
                <li className='footerListItem'>Regions</li>
                <li className='footerListItem'>Cities</li>
                <li className='footerListItem'>Districts</li>
                <li className='footerListItem'>Airports</li>
            </ul>
            <ul className='footerList'>
                <li className='footerListItem'>Homes</li>
                <li className='footerListItem'>Apartments</li>
                <li className='footerListItem'>Resorts</li>
                <li className='footerListItem'>Villas</li>
                <li className='footerListItem'>Hostels</li>
            </ul>
            <ul className='footerList'>
                <li className='footerListItem'>Unique places to stay</li>
                <li className='footerListItem'>All destinations</li>
                <li className='footerListItem'>Discover</li>
                <li className='footerListItem'>Reviews</li>
                <li className='footerListItem'>Unpacked: Travel articles</li>
            </ul>
            <ul className='footerList'>
                <li className='footerListItem'>Car rental</li>
                <li className='footerListItem'>Flight finder</li>
                <li className='footerListItem'>Restaurant reservations</li>
                <li className='footerListItem'>Booking.com for Travel Agents</li>
            </ul>
            <ul className='footerList'>
                <li className='footerListItem'>(COVID-19) FAQs</li>
                <li className='footerListItem'>About Booking.com</li>
                <li className='footerListItem'>Customer Service</li>
                <li className='footerListItem'>Partner help</li>
                <li className='footerListItem'>Careers</li>
            </ul>
        </div>

        <div className='copyrightText'>Copyright © 2022 BookIt</div>
    </div>
  )
}

export default Footer