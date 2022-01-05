export default function playerDetailsService(type, operation) {
  const fetchDetails = (operation) => {
    fetch(`${process.env.REACT_APP_API_URL}/20c1afef1661881ddc9c/playerList`)
      .then((res) => res.json())
      .then((result) => {
        operation([...result]);
      });
  };
  if (type === "get-details") {
    return fetchDetails(operation);
  }
}
