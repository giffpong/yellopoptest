import logo from './logo.svg';
import './App.css';
import NavigateBarComponent from './components/NavigateBarComponent';
import ProfileHeaderComponent from './components/ProfileHeaderComponent';
import ProfileDetailComponent from './components/ProfileDetailComponent';

function App() {
  return (
    <div className="App">
      <NavigateBarComponent></NavigateBarComponent>
      <ProfileHeaderComponent></ProfileHeaderComponent>
      <ProfileDetailComponent></ProfileDetailComponent>
    </div>
  );
}

export default App;
