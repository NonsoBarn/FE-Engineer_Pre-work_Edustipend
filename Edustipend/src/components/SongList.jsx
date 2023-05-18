import Container from "react-bootstrap/Container";
import Buttons from "../shared/Button";
import "../styles/sample.css";
import Song from "../shared/SongTab";

const trendingSongs = [
  {
    id: 1,
    ArtistName: "Davido",
    SongTitle: "Unavailable",
  },
  {
    id: 2,
    ArtistName: "Davido",
    SongTitle: "Unavailable",
  },
  {
    id: 3,
    ArtistName: "Davido",
    SongTitle: "Unavailable",
  },
  {
    id: 4,
    ArtistName: "Davido",
    SongTitle: "Unavailable",
  },
  {
    id: 5,
    ArtistName: "Davido",
    SongTitle: "Unavailable",
  },
];

function SongList() {
  return (
    <div className="">
      <Container className="">
        <div className="test bg-secondary square border border-dark mx-3 my-2 d-flex flex-column  text-center ">
          <h3 className="pt-4">Trending Songs</h3>
          <Song props={trendingSongs} />
          <div>
            <Buttons> View More</Buttons>
          </div>
        </div>
      </Container>
    </div>
  );
}

export default SongList;
