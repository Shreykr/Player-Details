import "./player-card.css";

const PlayerCard = ({ data, players }) => {
  let UTCDate = `${data.UpComingMatchesList[0].MDate}  UTC`;
  let localDate = new Date(UTCDate);

  let nextMatchStatus = !data.UpComingMatchesList[0].CCode
    ? `N/A`
    : `${data.UpComingMatchesList[0].CCode} vs.
  ${data.UpComingMatchesList[0].VsCCode}`;

  let matchTime =
    nextMatchStatus === "N/A" ? "N/A" : localDate.toLocaleString();

  return (
    <>
      <div className='card__container'>
        <div className='card__image'>
          <img
            src={require(`../../../assets/player-images/${data.Id}.jpg`)}
            width={"294"}
            height={"294"}
            alt='player'
          />
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
