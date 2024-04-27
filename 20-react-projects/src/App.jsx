import './App.css';
import Accordion from './Components/accordion';
import RandomColor from './Components/random-color';
import StarRating from './Components/star-rating';
import ImageSlider from './Components/image-slider';

function App() {
  return (
    <div>
      {/* Accordion component */}
      {/* <Accordion /> */}

      {/* Random color component */}
      {/* <RandomColor /> */}

      {/* Star rating component */}
      {/* <StarRating noOfStarts={10} /> */}

      {/* Image slider component */}
      <ImageSlider
        url={'https://picsum.photos/v2/list'}
        page={'1'}
        limit={'10'}
      />
    </div>
  );
}

export default App;
