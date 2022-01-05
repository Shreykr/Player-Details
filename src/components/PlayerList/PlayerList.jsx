import { useState, useEffect } from "react";
import playerDetailsService from "../../services/http/PlayerDetails";
import "./player-list.css";
import PlayerCard from "./PlayerCard/PlayerCard";

const PlayerList = () => {
  let [playerInfo, setPlayerInfo] = useState([]);
  let [searchPlayerTeam, setSearchPlayerTeam] = useState("");
  let sortedPlayerInfo = [];

  useEffect(() => {
    playerDetailsService("get-details", setPlayerInfo);
  }, []);

  sortedPlayerInfo = playerInfo
    .filter(
      (ele) =>
        ele.PFName.toLowerCase().includes(searchPlayerTeam.toLowerCase()) ||
        ele.TName.toLowerCase().includes(searchPlayerTeam.toLowerCase()) ||
        searchPlayerTeam === ""
    )
    .sort((a, b) => {
      return a.Value - b.Value || (a.PFName > b.PFName) - (a.PFName < b.PFName);
    });

  const handleChange = (e) => {
    setSearchPlayerTeam(e.target.value);
  };

  return (
    <>
      <div className='main-container'>
        <div className='search'>
          <input
            type='text'
            className='search-input'
            onChange={handleChange}
            placeholder='Search'
          />
        </div>
        <div className='player-container'>
          {sortedPlayerInfo.map((player, index) => {
            return <PlayerCard key={index} data={player} />;
          })}
        </div>
      </div>
    </>
  );
};

export default PlayerList;
