/**
 * App.jsx — Root Application Component
 * =======================================
 * CO1: Component composition — AppProvider wraps the entire component tree
 *      so that any descendant can consume shared state (Context API).
 *      React Router provides declarative, client-side routing.
 *      Unidirectional data flow — state is defined in AppContext
 *      and flows downward through the tree.
 * CO2: ES6 modules, arrow function component, destructuring.
 */

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { AppProvider } from './context/AppContext';
import HomePage from './pages/HomePage';

const App = () => {
  return (
    // CO1: AppProvider at the top ensures unidirectional data flow
    <AppProvider>
      {/* CO1: Declarative routing — describes WHICH component to render for WHICH path */}
      <Router>
        <Routes>
          <Route path="/" element={<HomePage />} />
          {/* Additional routes can be added here in the future */}
        </Routes>
      </Router>
    </AppProvider>
  );
};

export default App;
