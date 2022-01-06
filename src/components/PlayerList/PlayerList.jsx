import { useState, useEffect, useRef } from "react";
import playerDetailsService from "../../services/http/PlayerDetails";
import PlayerCard from "./PlayerCard/PlayerCard";
import Spinner from "../../core/Spinner/Spinner";
import "./player-list.css";

const PlayerList = () => {
  // state and ref variables
  let [playerInfo, setPlayerInfo] = useState([]);
  let [searchPlayerTeam, setSearchPlayerTeam] = useState("");
  let [loadingStatus, setLoadingStatus] = useState(false);
  let firstLoad = useRef(true);

  let sortedPlayerInfo = [];

  // fetching player details
  useEffect(() => {
    setTimeout(() => {
      playerDetailsService("get-details", setPlayerInfo);
    }, 1000);

    setTimeout(() => {
      setLoadingStatus(true);
    }, 2500);
    firstLoad.current = false;
  }, []);

  // sorting player details by value and their name
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

  // setting search string that is inputed by user
  const handleChange = (e) => {
    setSearchPlayerTeam(e.target.value);
  };

  // rendering player details
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
          {sortedPlayerInfo.length !== 0 ? (
            sortedPlayerInfo.map((player, index) => {
              return <PlayerCard key={index} data={player} />;
            })
          ) : firstLoad.current && loadingStatus === false ? (
            <div className='player-spinner'>
              <Spinner />
            </div>
          ) : loadingStatus === true && playerInfo.length === 0 ? (
            <div className='player-not-found'>
              <strong>Failed fetching details</strong> 😥
            </div>
          ) : (
            <div className='player-not-found'>
              <strong>No Player(s) Found</strong> 😥
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default PlayerList;
