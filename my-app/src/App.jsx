import { useState, useEffect } from "react";
import "./App.css";

function App() {
  const [showPhoto, setShowPhoto] = useState(false);
  
  // Change this to your actual photo filename
  const photoPath = "/photoPath.jpeg"; // Place your photo in the public folder

  // Create snowflakes and particles
  useEffect(() => {
    const snowflakesContainer = document.querySelector('.snowflakes');
    const particlesContainer = document.querySelector('.particles');
    const decorationsContainer = document.querySelector('.decorations');
    const heartsContainer = document.querySelector('.hearts');
    
    // Create snowflakes
    for (let i = 0; i < 50; i++) {
      const snowflake = document.createElement('div');
      snowflake.className = 'snowflake';
      snowflake.textContent = '❄';
      snowflake.style.left = `${Math.random() * 100}%`;
      snowflake.style.animationDuration = `${Math.random() * 3 + 5}s`;
      snowflake.style.animationDelay = `${Math.random() * 5}s`;
      snowflake.style.fontSize = `${Math.random() * 10 + 10}px`;
      snowflakesContainer.appendChild(snowflake);
    }
    
    // Create particles
    for (let i = 0; i < 30; i++) {
      const particle = document.createElement('div');
      particle.className = 'particle';
      particle.style.left = `${Math.random() * 100}%`;
      particle.style.top = `${Math.random() * 100}%`;
      particle.style.animationDuration = `${Math.random() * 20 + 10}s`;
      particle.style.animationDelay = `${Math.random() * 5}s`;
      particle.style.opacity = Math.random() * 0.6 + 0.4;
      particle.style.width = particle.style.height = `${Math.random() * 4 + 2}px`;
      particlesContainer.appendChild(particle);
    }
    
    // Create decorations
    const decorations = ['✨', '🎄', '🎁', '⭐', '❄', '🎀', '💝'];
    for (let i = 0; i < 15; i++) {
      const decoration = document.createElement('div');
      decoration.className = 'decoration';
      decoration.textContent = decorations[Math.floor(Math.random() * decorations.length)];
      decoration.style.left = `${Math.random() * 100}%`;
      decoration.style.top = `${Math.random() * 100}%`;
      decoration.style.animationDuration = `${Math.random() * 20 + 15}s`;
      decoration.style.animationDelay = `${Math.random() * 10}s`;
      decoration.style.opacity = Math.random() * 0.3 + 0.2;
      decorationsContainer.appendChild(decoration);
    }
    
    // Create hearts when photo is shown
    if (showPhoto) {
      for (let i = 0; i < 20; i++) {
        const heart = document.createElement('div');
        heart.className = 'heart';
        heart.textContent = '❤️';
        heart.style.left = `${Math.random() * 100}%`;
        heart.style.top = `${Math.random() * 100}%`;
        heart.style.animationDuration = `${Math.random() * 8 + 4}s`;
        heart.style.animationDelay = `${Math.random() * 5}s`;
        heart.style.opacity = Math.random() * 0.5 + 0.3;
        heart.style.fontSize = `${Math.random() * 15 + 15}px`;
        heartsContainer.appendChild(heart);
      }
    }
    
    // Cleanup function
    return () => {
      // Remove any dynamically added elements if needed
    };
  }, [showPhoto]);

  const handleButtonClick = () => {
    setShowPhoto(true);
    // Add a small delay to ensure the card expands smoothly
    setTimeout(() => {
      document.querySelector('.card').classList.add('expanded');
    }, 100);
  };

  return (
    <div className="container">
      <div className="snowflakes"></div>
      <div className="particles"></div>
      <div className="decorations"></div>
      <div className="hearts"></div>
      
      <div className={`card ${showPhoto ? 'expanded' : ''}`}>
        <h1>🎄 Merry Christmas 🎄</h1>
        <h2>My Dear Sarangi ❤️</h2>

        <p>
          This Christmas feels magical because you are in my life.
          Thank you for being my happiness, my peace, and my smile.
          I'm grateful for you today and always.
        </p>

        {!showPhoto ? (
          <button onClick={handleButtonClick}>
            Click for a Special Surprise 🎁
          </button>
        ) : (
          <div className="photo-container">
            <div className="photo-frame">
              <img 
                src={photoPath} 
                alt="Special Memory" 
                className="special-photo"
                onError={(e) => {
                  e.target.onerror = null;
                  e.target.src = "https://images.unsplash.com/photo-1541961017774-22349e4a1262?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80";
                }}
              />
            </div>
            <p className="photo-caption">✨ A Beautiful Memory With You ✨</p>
            
            <div className="surprise-text">
              Every moment with you is precious ❤️<br />
              Merry Christmas, my love! 🎄✨
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default App;