import Carousel from "./components/Carousel";
import "./components/styles.css";
import data from './data/stepsData.json'

export default function App() {
  const slides = ["Delhi", "Mumbai", "Pune"];

  return <Carousel slides={data} />;
}
