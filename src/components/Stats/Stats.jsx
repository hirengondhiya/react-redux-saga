import { useSelector } from "react-redux";
import "./styles.css";

const Stats = ({ imageId }) => {
  const stats = useSelector((state) => state.imageStats[imageId]);
  if (!stats) {
    // loading not yet started
    return <span className="stats">Loading...</span>;
  }
  return (
    <span className="stats">
      {stats.errorMessage && "🤯 Error!"}
      {stats.loading && "🙄 Loading..."}
      {stats.downloads !== null && `🤘 ${stats.downloads}`}
    </span>
  );
};

export default Stats;
