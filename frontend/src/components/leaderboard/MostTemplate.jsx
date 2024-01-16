const MostTemplate = ({ name, stats }) => {
  const sortedStats = [...stats].sort((a, b) => b.cope - a.cope);

  return (
    <div
      style={{
        backgroundColor: "#3D3D3D",
        borderRadius: 6,
        marginLeft: 10,
        marginRight: 10,
        paddingLeft: 10,
        width: 200,
      }}
    >
      <p style={{ color: "white", fontSize: 20, fontWeight: "bold" }}>
        {name} top 3
      </p>
      {sortedStats.slice(0, 3).map((stat, index) => (
        <div key={index}>
          <p style={{ color: "white" }}>{`${index + 1}. ${stat.person} : ${
            stat.cope
          }`}</p>
        </div>
      ))}
    </div>
  );
};

export default MostTemplate;
