import React from 'react'

function RateRow({id,image,name,price ,buy,sell,diff,saving,lose}) {
    return (
        <div>
           <div className="rate_row">
                <div className="track_rate_row">{id}</div>
                <div className="track_rate_row row_title">
                    <div className="row_image"><img src={image} className="img_set" /></div>
                    <div className="row_name">{name}</div>
                </div>
                <div className="track_rate_row">{price}</div>
                <div className="track_rate_row">{buy}/ {sell}</div>
                <div className="track_rate_row colors" style={lose===true?{color:"#7C4453"}:null}>{diff}</div>
                <div className="track_rate_row colors" style={lose===true?{color:"#7C4453"}:null}>{saving}</div>
            </div> 
        </div>
    )
}

export default RateRow
