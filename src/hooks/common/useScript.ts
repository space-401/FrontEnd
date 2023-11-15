import { useEffect, useState } from 'react';
import AOS from 'aos';

const useScript = (src: string): [boolean, Error | Event | null] => {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<Error | Event | null>(null);

  useEffect(() => {
    let script: HTMLScriptElement = document.querySelector(
      `script[src="${src}"]`
    )!;

    if (!script) {
      script = document.createElement('script');
      script.src = src;
      script.async = true;
    }

    const handleLoad = () => {
      setLoading(false);
      AOS.init();
    };
    const handleError = (error: Error | null | Event) => setError(error);

    script.addEventListener('load', handleLoad);
    script.addEventListener('error', handleError);

    document.body.appendChild(script);

    return () => {
      script.removeEventListener('load', handleLoad);
      script.removeEventListener('error', handleError);
    };
  }, [src]);

  return [loading, error];
};

export default useScript;
