const MostTemplate = ({ name, stats }) => {
  const sortedStats = [...stats].sort((a, b) => b.cope - a.cope);

  return (
    <div
      style={{
        backgroundColor: "gray",
        borderRadius: 6,
        marginLeft: -10,
        marginRight: -10,
        paddingBottom: 5,
      }}
    >
      <p style={{ color: "white", fontSize: 20 }}>{name} top 3</p>
      {sortedStats.slice(0, 3).map((stat, index) => (
        <div key={index}>
          <p style={{ color: "white" }}>{`${stat.person} : ${stat.cope}`}</p>
        </div>
      ))}
    </div>
  );
};

export default MostTemplate;
