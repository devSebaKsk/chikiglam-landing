import React, { useEffect, useState } from 'react';
import HomePage from './pages/HomePage';
import FamilyPage from './pages/FamilyPage';
import AdultsPage from './pages/AdultsPage';
import ColorPalette from './components/ui/ColorPalette';

function App() {
  const [currentPath, setCurrentPath] = useState(window.location.pathname);

  useEffect(() => {
    const handlePopState = () => {
      setCurrentPath(window.location.pathname);
    };

    window.addEventListener('popstate', handlePopState);
    return () => window.removeEventListener('popstate', handlePopState);
  }, []);

  // Simple router function
  const renderPage = () => {
    switch (currentPath) {
      case '/':
        return <HomePage />;
      case '/familia':
        return <FamilyPage />;
      case '/adults':
        return <AdultsPage />;
      default:
        return <HomePage />;
    }
  };

  return (
    <div className="App">
      {renderPage()}
      {/* Mostrar paleta de colores en desarrollo */}
      <ColorPalette showPalette={false} />
    </div>
  );
}

export default App;