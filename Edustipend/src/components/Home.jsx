import Container from "react-bootstrap/Container";
import Buttons from "../shared/Button";

import SongList from "./SongList";

function Home() {
  return (
    <div className=" me-md-5">
      <div className="row">
        <div className="col-lg-8 col-md-6 ">
          <div className="md-ps-5 md-pt-5 ps-4 pt-3">
            <div className="ps-md-5 ps-2 pt-md-5 pt-2">
              <h2 className="fs-1 fw-bold">Make your party fun!</h2>
              <p className="fs-5">Create your own custom playlist today.</p>
              <Buttons style={"py-1"}> Create Playlist </Buttons>
            </div>
          </div>
        </div>
        <div className="col-lg-4 col-md-6">
          <SongList />
        </div>
      </div>
    </div>
  );
}

export default Home;
