const Song = ({ props }) => {
  return (
    <>
      {props.map((item) => (
        <div
          key={item.id}
          className="square border border-dark mx-3 my-2 rounded bg-white py-2 "
        >
          {item.SongTitle} by {item.ArtistName}
        </div>
      ))}
    </>
  );
};

export default Song;
