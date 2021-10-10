import { LoadImages } from './components/ImageLoader.js';
import { images } from './components/Images.js';


ReactDOM.render (
    <LoadImages images={images} interval="3000"/>,
    document.getElementById('react-app')
);


// const firstElement = React.createElement(
//     'p',
//     {},
//     'First react element!'
// );

// const firstJSXElement = <p id='p-id-1'>Go to the app component</p>

// class App extends React.Component {
//     render() {
//         return (<LoadImages images={images} interval="3000"/>
//         )};
// }
