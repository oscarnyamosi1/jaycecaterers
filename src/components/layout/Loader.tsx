import { useEffect, useState } from "react";

export default function Loader() {
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setVisible(false);
    }, 2500);

    return () => clearTimeout(timer);
  }, []);

  if (!visible) return null;

  return (
    <div id="loader">
    
      <img src="https://res.cloudinary.com/dw0l7b86h/image/upload/v1780993490/logo_ojm8gr.webp" alt="Benkiz Logo" />
      <div className="loader-logo">
        Benkiz <span>Events & Caterers.</span>
      </div>

      <div className="loader-bar">
        <div className="loader-fill"></div>
      </div>
    </div>
  );
}