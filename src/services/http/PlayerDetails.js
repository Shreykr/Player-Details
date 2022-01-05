export default function playerDetailsService(type, operation) {
  const fetchDetails = (operation) => {
    fetch("https://api.npoint.io/20c1afef1661881ddc9c/playerList")
      .then((res) => res.json())
      .then((result) => {
        operation([...result]);
      });
  };
  if (type === "get-details") {
    return fetchDetails(operation);
  }
}
