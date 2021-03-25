import React from 'react'
import image from "./../assets/images/BannerFTXNews.d0cd974b.png"
import "./../assets/styles/footer.scss"


function Footer() {
    return (
        <div>
            <div className="image_section">
                <img src={image} className="footer_img banner1" />
            </div>
            <div className="footer_section">
                <div className="left_part">
                    <div>Copyright © 2019</div>
                    <div>HodlInfo.com</div>
                    <div>Developed By <span className="change">QuadBTech</span></div>
                </div>
                <div className="right_part">Support</div>
            </div>
        </div>
    )
}

export default Footer
