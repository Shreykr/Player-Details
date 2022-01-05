import { BrowserRouter, Route, Navigate, Routes } from "react-router-dom";
import PlayerList from "./components/PlayerList/PlayerList";
function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route
            path='/'
            render={() => <Navigate to='/player-list' />}
            element={<PlayerList />}
          />
          <Route path='player-list' element={<PlayerList />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
