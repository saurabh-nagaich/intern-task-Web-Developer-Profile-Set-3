import React from 'react'
import "./../assets/styles/ratePlate.scss"
import RateRow from './RateRow'
import image1 from "./../assets/images/bitbns.dcee6cf4.png"

function RatePalate() {
    return (
        <div>
            <div className="index_title">
                <div className="track_rate">#</div>
                <div className="track_rate">Platform</div>
                <div className="track_rate">Last Traded Price</div>
                <div className="track_rate">Buy / Sell Price</div>
                <div className="track_rate">Difference</div>
                <div className="track_rate">Savings</div>
            </div>
            <div>
                <RateRow image={image1} id="1" name="WazirX" price="₹ 40,72,732" buy="₹ 40,72,732" sell="₹ 40,77,592" diff="0.23%" saving="▲ ₹ 2,54,077"  />
                <RateRow image={image1} id="2" name="Bitns" price="₹ 40,75,076" buy="₹ 40,60,563" sell="₹ 40,79,469" diff="-0.13 %" saving="▼ ₹ 9,587" lose={true} />
                <RateRow image={image1} id="3" name="Giotus" price="₹ 40,80,000" buy="₹ 40,72,732" sell="₹ 40,77,592" diff="6.58 %" saving="▲ ₹ 2,51,714" />
                <RateRow image={image1} id="4" name="Giotus" price="₹ 40,80,000" buy="₹ 40,72,732" sell="₹ 40,77,592" diff="6.58 %" saving="▲ ₹ 2,51,714" />
                <RateRow image={image1} id="5" name="Giotus" price="₹ 40,80,000" buy="₹ 40,72,732" sell="₹ 40,77,592" diff="6.58 %" saving="▲ ₹ 2,51,714" />
            </div>
        </div>
    )
}

export default RatePalate
