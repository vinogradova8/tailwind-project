// import { useState } from 'react';
// import reactLogo from './assets/react.svg';
// import viteLogo from '/vite.svg';
import './App.css';

const App = () => {
	return (
    <div>
      <section className='h-screen bg-green-600 p-20 m-8'>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam
          voluptas harum quis perspiciatis porro consequuntur ratione odit in,
          quae minus rerum, incidunt esse officia earum quidem voluptatem, atque
          ea quas?
        </p>
      </section>
    </div>
  );
};

// function App() {
//   const [count, setCount] = useState(0);

//   return (
//     <>
//       <div>
//         <div className='text-red-500'>This is red text</div>
//         <a href='https://vite.dev' target='_blank'>
//           <img src={viteLogo} className='logo' alt='Vite logo' />
//         </a>
//         <a href='https://react.dev' target='_blank'>
//           <img src={reactLogo} className='logo react' alt='React logo' />
//         </a>
//       </div>
//       <h1>Vite + React</h1>
//       <div className='card'>
//         <button onClick={() => setCount((count) => count + 1)}>
//           count is {count}
//         </button>
//         <p>
//           Edit <code>src/App.jsx</code> and save to test HMR
//         </p>
//       </div>
//       <p className='read-the-docs'>
//         Click on the Vite and React logos to learn more
//       </p>
//     </>
//   );
// }

export default App;
