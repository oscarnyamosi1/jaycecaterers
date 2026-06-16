import { createRoot } from "react-dom/client";
import { HelmetProvider } from "react-helmet-async";
import App from "./App";
import "./index.css";

if ('serviceWorker' in navigator) {
  window.addEventListener('load', () => {
    navigator.serviceWorker.register('/sw.js').then(() => {
      document.getElementById('pwa-badge')?.classList.remove('hidden');
    });
  });
}

createRoot(document.getElementById("root")!).render( 
  <HelmetProvider>
    <App />
  </HelmetProvider>
  );
