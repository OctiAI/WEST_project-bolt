// src/components/AnalyticsStuff.tsx
import { useEffect } from 'react';

export default function AnalyticsStuff() {
  useEffect(() => {
    // 1) stub clarity
    window.clarity = window.clarity || function () {
      (window.clarity.q = window.clarity.q || []).push(arguments);
    };
    // 2) inject script before first <script>
    const script = document.createElement('script');
    script.async = true;
    script.src = 'https://www.clarity.ms/tag/s45r7e1qd6';
    const firstScript = document.getElementsByTagName('script')[0];
    firstScript.parentNode.insertBefore(script, firstScript);
  }, []);

  return null; // this component doesn't render anything visible
}
