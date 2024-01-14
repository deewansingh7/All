// import logo from './logo.svg';
// import './App.css';
import Card from './components/card';

function App() {
  const gridBox = {
    display: 'grid',
    gridTemplateColumns: 'repeat(3,1f)'
  }
  return (
    <div style={gridBox}>
      <Card ame="nitin" email='nitin@gmail.com' image='https://via.placeholder.com/200' />
      <Card ame="ashutosh" email='ashutosh@gmail.com' image='https://via.placeholder.com/200' />
      <Card ame="DEEWAN" email='deewan@gmail.com' image='https://via.placeholder.com/200' />
      <h1>Hello</h1>
    </div>
  );
}

export default App;
