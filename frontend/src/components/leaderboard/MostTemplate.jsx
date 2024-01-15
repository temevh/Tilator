const MostTemplate = ({ name, stats }) => {
  return (
    <>
      <p style={{ color: "white" }}>{name} top 3</p>
      {stats.map((stat, index) => (
        <div key={index}>
          <p style={{ color: "white" }}>{`${stat.person} : ${stat.cope}`}</p>
        </div>
      ))}
    </>
  );
};

export default MostTemplate;
