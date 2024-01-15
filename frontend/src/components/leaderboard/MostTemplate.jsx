const MostTemplate = ({ name, stats }) => {
  return (
    <>
      <p style={{ color: "black" }}>{name} top 3</p>
      {stats.map((stat, index) => (
        <div key={index}>
          <p>{`Person: ${stat.person}, Cope: ${stat.cope}`}</p>
        </div>
      ))}
    </>
  );
};

export default MostTemplate;
