import { useEffect } from 'react';

function App() {
  useEffect(() => {
    if (process.env.NODE_ENV === 'production') {
      // 1) Stub out window.clarity FIRST
      window.clarity = window.clarity || function () {
        (window.clarity.q = window.clarity.q || []).push(arguments);
      };

      // 2) Create the <script> tag
      const script = document.createElement('script');
      script.async = true;
      script.src = 'https://www.clarity.ms/tag/s45r7e1qd6';

      // 3) Insert it just before the first existing <script> on the page
      const firstScript = document.getElementsByTagName('script')[0];
      firstScript.parentNode.insertBefore(script, firstScript);
    }    <App />

  }, []);

  return (
    <div>
      {/* your app’s content */}
    </div>
  );
}

export default App;
