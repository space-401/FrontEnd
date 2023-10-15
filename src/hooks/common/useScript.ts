import { useEffect, useState } from 'react';

const useScript = (src: string) => {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<Event | string | Error | null>(null);

  useEffect(() => {
    let script: HTMLScriptElement = document.querySelector(`script[src="${src}"]`)!;

    if (!script) {
      script = document.createElement('script');
      script.src = src;
      script.async = true;
    }

    const handleLoad = () => setLoading(false);
    const handleError = (error: Event | string | Error) => setError(error);

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
