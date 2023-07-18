const DevlogTile = ({ devlog }) => {
  return (
    <div className="devlog-details">
      <h3>{devlog.title}</h3>
      <p>{devlog.type}</p>
    </div>
  );
};

export default DevlogTile;
