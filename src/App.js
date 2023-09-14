import { useState } from 'react';
import NavBar from './components/NavBar';
import HeadMenu from './components/overview/HeadMenu';

export default function App() {
  const [navValue, setNavValue] = useState(null);
  console.log(navValue)
  return (
    <div >
      <NavBar setNavValue={setNavValue}/>
      <HeadMenu/>
    </div>
  );
}
