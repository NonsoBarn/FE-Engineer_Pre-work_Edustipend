import Container from "react-bootstrap/Container";
import Buttons from "../shared/Button";

import SongList from "./SongList";

function Home() {
  return (
    <div>
      <div className="row">
        <div className="col-lg-8">
          <div className="md-ps-5 md-pt-5 ps-4 pt-3">
            <div className="md-ps-5 md-pt-5">
              <h2 className="fs-1">Make your party fun!</h2>
              <p className="fs-5">Create your own custom playlist today.</p>
              <Buttons> Create Playlist </Buttons>
            </div>
          </div>
        </div>
        <div className="col-lg-4">
          <SongList />
        </div>
      </div>
    </div>
  );
}

export default Home;
