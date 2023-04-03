
import './App.css';
import Articles from './Components/Articles';

// import Accordion from './Components/Accordion';

function App() {
  // const navigationBar = (
  //   <div className="navBar">
  //     <a href="#NFL">NFL</a>
  //     <a href="#college-football">College Football</a>
  //     <a href="#NBA">NBA</a>
  //     <a href="#college-basketball">College Basketball</a>
  //     <a href="#MLB">MLB</a>
  //     <a href="#NHL">NHL</a>
  //   </div>
  // )

  const navigationBar = (
      <nav className="navBar">
        <h1>The Press Box</h1>
        <ul style={{ display: 'flex', justifyContent: 'space-around', listStyle: 'none', margin: 0, padding: 0 }}>
          <li>NFL</li>
          <li>College Football</li>
          <li>NBA</li>
          <li>College Basketball</li>
          <li>MLB</li>
          <li>NHL</li>
        </ul>
      </nav>
  )

const headlines = (
  <div className="top-headlines">
  <div className="top-headlines-title">
    <h2>Trending Stories</h2>
  </div>
  <ul>
    <li>2023 NFL Mock Draft 3.0</li>
    <li>Final Four Preview: Who Will Cut Down the Nets in Houston?</li>
    <li>What to Make of Lamar Jackson's Tweet</li>
    <li>It's Do or Die Time for the Dallas Mavericks</li>
    <li>Texas Inks Rodney Terry to 5-Year Deal</li>
    <li>How Scottie Scheffler Can Defend His Masters Crown</li>
    <li>Why Isn't Aaron Rodgers a New York Jet Yet?</li>
  </ul>
  <div className="newsletter">
    <h2>Sign Up for Our Newsletter!</h2>
    <p>Get the latest news sent to your inbox every morning!</p>
    <button>Click Here!</button>
  </div>
  <div className="gambling">
    <h2>Gambling Center</h2>
    <li>Our Best Bets for the 2023 National Championship Game</li>
    <li>Player Props</li>
    <li>Daily Fantasy</li>
    <li>Sign up for Fantasy baseball</li>
  </div>
  <div className="front-page-logo">
    <img src="../imgs/pressboxlogo.png" alt="Press Box logo"/>
  </div>
  </div>
)

// const stories = (
//   <div className="articles">

//   </div>
// )
// const accordian = (
//   <div>
//     <Accordion title="Section 1" content="Lorem ipsum dolor sit amet." />
//     <Accordion title="Section 2" content="Consectetur adipiscing elit." />
//     <Accordion title="Section 3" content="Sed do eiusmod tempor incididunt." />
//   </div>
// );


  return (
    <div className="App">
      {navigationBar}
      <Articles/>
      {headlines}
      
    </div>
  );
}

export default App;
