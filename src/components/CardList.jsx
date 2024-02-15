import Card from "./Card";

const CardList = ({ robots }) => {
  if (true) {
    throw new Error("NOOOOOOOOO");
  }
  return (
    <div>
      {robots.map((robot) => {
        return (
          <Card
            key={robot.id}
            name={robot.name}
            email={robot.email}
            id={robot.id}
          />
        );
      })}
    </div>
  );
};

export default CardList;
