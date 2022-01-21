import { useEffect } from 'react';
import { highlightAll } from 'prismjs';

export function Code({ code, language }) {
  useEffect(() => { highlightAll(); }, []);

  return (
    <div className="Code">
      <pre>
        <code className={`language-${language}`}>{code}</code>
      </pre>
    </div>
  );
}