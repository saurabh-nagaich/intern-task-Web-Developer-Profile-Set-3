import React, { useState } from 'react'

import "./../assets/styles/header.scss"
import "./../assets/styles/header.scss"

import image1 from "./../assets/images/HODLINFO.8f78fc06.png"
import plane from "./../assets/images/download.png"
import Footer from './Footer'

function Header() {
    let [check,setCheck]=useState(true)

    let handleToggle=()=>{

        check==true?setCheck(false):setCheck(true);

    }

    return (
        <div>
            <div className="header" >
                <div className="Title_heder">
                    <div className="logo">
                        <div className="logo_img">
                            <img src={image1} className="img_logo" />
                        </div>
                        <div className="logo_footer">
                            powered by <span>finstreet</span>
                        </div>
                    </div>
                    <div className="drop_down_btns">
                        <div className="first_drop">
                            <select name="INR" id="INR">
                                <option value="INR">INR   </option>
                            </select>
                        </div>
                        <div className="second_drop">
                            <select name="BTC" id="BTC">
                                <option value="BTC">BTC</option>
                                <option value="ETH">ETH</option>
                                <option value="USDT">USDT</option>
                                <option value="XRP">XRP</option>
                                <option value="TRX">TRX</option>
                                <option value="ZEC">ZEC</option>
                                <option value="XEM">XEM</option>
                                <option value="LOST">LOST</option>
                                <option value="DASH">DASH</option>
                            </select>
                        </div>
                        <button className="thired_btn" >
                            BUY BTC
                        </button>
                    </div>
                    <div className="connect_with_us">
                        <div className="count_down dis">
                            24
                        </div>
                        <div className="tel_icon dis" >
                            <img src={plane} className="plane_icon" />
                            <div className="connect_title">Connect Telegram</div>
                        </div>
                        <div className="color_btn dis">
                            <label class="switch">
                                <input type="checkbox" onChange={handleToggle} checked={check}/>
                                <span class="slider round"></span>
                            </label>
                        </div>
                    </div>
                </div>
                <div className="price_section">
                    <div className="rate">
                        <div className="percentage">0.22%</div>
                        <div className="time">5 mins</div>
                    </div>
                    <div className="rate">
                        <div className="percentage">0.48%</div>
                        <div className="time">1 hour</div>
                    </div>
                    
                    <div className="total_price">
                        <div className="price_title">best price to trade</div>
                        <div className="total_cost"> RS 42,73,695</div>
                        <div className="price_footer">average BTX/INR net price including commision</div>
                    </div>
                    
                    <div className="rate">
                        <div className="percentage">6.62%</div>
                        <div className="time">1 Day</div>
                    </div>
                    <div className="rate">
                        <div className="percentage">16.31%</div>
                        <div className="time">7Days</div>
                    </div>
                </div>
            </div>
            
        </div>
    )
}

export default Header
