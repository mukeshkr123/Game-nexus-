import useGames from "../../hooks/useGame.";

const GameGrid = () => {
  const { data, isloading, error } = useGames();

  return <div>GameGrid</div>;
};

export default GameGrid;
