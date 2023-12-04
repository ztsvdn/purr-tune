import play from "../../assets/play.svg";
import save from "../../assets/icon_save.png";
import instagram from "../../assets/icon_instagram.png";
import telegram from "../../assets/icon_telegram.png";
import tiktok from "../../assets/icon_tiktok.png";
import twitter from "../../assets/icon_twitter.png";
import React from "react";
import './Results.css';


function Results() {
    return (
        <div className="Content-wrapper-results">
            <button className="Play-button">
                <img src={play} className="Play-icon" alt="play" />
            </button>
            <div className="Controls">
                <div className="Text">Save on your device</div>
                <button className="Icon-button">
                    <img src={save} className="Icon" alt="save" />
                </button>
                <div className="Text">Share</div>
                <div>
                    <button className="Icon-button">
                        <img src={twitter} className="Icon" alt="twitter" />
                    </button>
                    <button className="Icon-button">
                        <img src={telegram} className="Icon" alt="telegram" />
                    </button>
                    <button className="Icon-button">
                        <img src={instagram} className="Icon" alt="instagram" />
                    </button>
                    <button className="Icon-button">
                        <img src={tiktok} className="Icon" alt="tiktok" />
                    </button>
                </div>
            </div>
        </div>
    );
}

export default Results;
