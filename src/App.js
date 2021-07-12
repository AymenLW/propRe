import Adress from './profile/component/Adress';
import FullName from './profile/component/FullName';
import Profession from './profile/component/Profession';
import Bio from './profile/component/Bio'
import ProfilePhoto from './profile/component/ProfilePhoto'
import './App.css';



function App() {
  return (
    <div className="App">
    {/* <FullName fullName="aymen"/> */}
    <FullName />
    {/* <Profession profession="developpeur"/>
    <Bio bio="freelance" />
    <ProfilePhoto  src ="/imagee.jpg"/>
    <Adress Adress ="Tunisie Ben Arous" /> */}
    </div>
    
  );
}

export default App;
