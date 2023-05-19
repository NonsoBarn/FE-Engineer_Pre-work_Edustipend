import { Plus } from "react-bootstrap-icons";
const Song = ({ props }) => {
  return (
    <>
      {props.map((item) => (
        <div
          key={item.id}
          className="d-inline-flex justify-content-center square border border-dark mx-3 my-2 rounded bg-white py-2  "
          role="button"
        >
          <div>
            {item.SongTitle} by {item.ArtistName}
          </div>
          <Plus className="ms-2 " size={25} />
        </div>
      ))}
    </>
  );
};

export default Song;
