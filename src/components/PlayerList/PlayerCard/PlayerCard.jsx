import Image from "../../../core/Image/Image";
import LazyLoad from "react-lazyload";
import "./player-card.css";

const PlayerCard = ({ data, players }) => {
  // converting UTC datetime to local datetime
  let UTCDate = `${data.UpComingMatchesList[0].MDate}  UTC`;
  let localDate = new Date(UTCDate);

  // conditionally setting next match status
  let nextMatchStatus = !data.UpComingMatchesList[0].CCode
    ? `N/A`
    : `${data.UpComingMatchesList[0].CCode} vs.
  ${data.UpComingMatchesList[0].VsCCode}`;

  // conditionally setting next match time
  let matchTime =
    nextMatchStatus === "N/A" ? "N/A" : localDate.toLocaleString();

  return (
    <>
      <div className='card__container'>
        <div className='card__image'>
          <LazyLoad throttle={100} height={100}>
            <Image
              src={require(`../../../assets/player-images/${data.Id}.jpg`)}
              alt='player'
            />
          </LazyLoad>
        </div>
        <div className='card__player-name'>
          <strong>{data.PFName}</strong>
        </div>
        <div className='card__details'>
          <div className='card__details-skill'>
            <strong>Position:</strong> {data.SkillDesc}
          </div>
          <div className='card__details-value'>
            <strong>Value:</strong> ${data.Value}
          </div>
          <div className='card__details-value'>
            <strong>Next Match:</strong> {nextMatchStatus}
          </div>
          <div className='card__details-value'>
            <strong>Match Time:</strong>{" "}
            <span className='card__match-time'>{matchTime}</span>
          </div>
        </div>
      </div>
    </>
  );
};

export default PlayerCard;
