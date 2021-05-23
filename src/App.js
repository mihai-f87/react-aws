import logo from './logo.svg';
import './App.css';
import { withAuthenticator, AmplifySignOut } from '@aws-amplify/ui-react'
import MyChart from './Charts'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        {/*<img src={logo} className="App-logo" alt="logo" />*/}
        <h1>Sample Charts</h1>
      </header>
      <MyChart/>
      <AmplifySignOut />
    </div>
  );
}

export default withAuthenticator(App);
