import React from 'react';
import icon1 from "../../../assets/leaderboard-card-icon1.png"
import icon2 from "../../../assets/leaderboard-card-icon2.png"
import icon3 from "../../../assets/leaderboard-card-icon3.png"
import './Instructions.css';

function CardGroup() {
    const content = [{ heading: "After you’ve posted, viewers can interact with your clip to give you points!", icon: icon1, points: ["1 point for each emotion that is tapped", "3 points every time the 💯 is tapped", "1 point for each comment", "25 points for each gift you receive", "1 point for every view"] }, { heading: `You can get more points by interact with someone else's clip:`, icon: icon2, points: ["Giving a gift - 25 points each gift", "Taping 1 or more emotion - 1 point per clip", "Leaving a comment - 1 point per clip", "Taping the 💯- 1 point per clip (💯 is Zecue for “WOW that was some real SH*T!”)"] }, { heading: "You can also refer your friends to come and play Zecue with you!", icon: icon3, points: ["You’ll earn 100 points for each new user that signs up using your referral code."] }]
    return (
        <div className="card-group">
            {
                content.map(({ heading, icon, points }, index) => (
                    <div className="instruction__card">
                        <img src={icon} alt={`Card image-` + index} />
                        <div className="card-body">
                            <h5 className="instruction__card__title">{heading}</h5>
                            <div className="instruction__card__list__group">

                                <ul className="instruction__card__list">
                                    {
                                        points.map(point => (
                                            <li><span className="bullet"></span>{point}</li>
                                        ))
                                    }
                                </ul>

                            </div>
                        </div>
                    </div>
                ))
            }
        </div>
    );
}

export default CardGroup;
