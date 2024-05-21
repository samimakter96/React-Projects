import './App.css';
import Accordion from './Components/accordion';
import RandomColor from './Components/random-color';
import StarRating from './Components/star-rating';
import ImageSlider from './Components/image-slider';
import LoadMoreData from './Components/load-more-data';
import TreeView from './Components/tree-view';
import menus from './Components/tree-view/data';
import QRCodeGenerator from './Components/qr-code-generator';
import LightDarkMode from './Components/light-dark-mode';

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
      {/* <ImageSlider
        url={'https://picsum.photos/v2/list'}
        page={'1'}
        limit={'10'}
      /> */}

      {/* Load more data */}
      {/* <LoadMoreData /> */}

      {/* Tree view component / menu UI component / recursive  navigation menu */}
      {/* <TreeView menus={menus}/> */}

      {/* QR Code Generator */}
      {/* <QRCodeGenerator /> */}

      {/* Light Dark Mode */}
      <LightDarkMode />
    </div>
  );
}

export default App;
