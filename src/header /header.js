import logo from './logo.png';
import './header.css';
export default () =>{
  return(
  <div> 
    <header class = "header">
            <img src={logo} alt="logo"></img>
            <nav class='nav'>
              <ul>
                <li><a href='#'>Билеты</a></li>
                <li><a href='#'>Галерея</a></li>
                <li><a href='#'>Правила</a></li>
                <li><a href='#'>Подробности</a></li>
              </ul>

            </nav>
    </header>
  </div>    
  );
};
