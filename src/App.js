//import logo from './logo.svg';
import './App.css';
import React from 'react';
import ReactDOM from 'react-dom';
import Header from './header /header.js' ; 
import Welcomclass from './welcomclass/welcomclass.js';
import Info from './info/info.js' ; 
//import Gallary  from './galary/gallary.js';
import Gallerymin from './gallerymin/gallerymin.js'
import Basement from './basement/basement.js';
//import ListItem from './components/main_list.js';
//import {mainPageInfo} from './content/data_list.js';

function App() {
  return (
    <div id='general'>
      <Header />
      <Welcomclass/> 
      <Info/>
      <Gallerymin/>
      <Basement/>
     </div>
  );
}
 export default App;
ReactDOM.render(<App/>,document.getElementById('root'));
