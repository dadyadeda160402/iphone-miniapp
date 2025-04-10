import React, { useEffect, useState } from 'react';

function App() {
  const [result, setResult] = useState(null);

  useEffect(() => {
    const query = new URLSearchParams(window.location.search);
    const diagnosis = query.get("result");
    if (diagnosis) {
      setResult(decodeURIComponent(diagnosis));
    }
  }, []);

  return (
    <div style={{ padding: 20, fontFamily: 'sans-serif' }}>
      <h2>🔍 Диагностика iPhone по Panic Full</h2>
      {result ? (
        <div style={{ marginTop: 20, background: '#f2f2f2', padding: 10, borderRadius: 8 }}>
          <strong>Результат анализа:</strong>
          <pre>{result}</pre>
        </div>
      ) : (
        <p>Ожидание данных от Telegram-бота...</p>
      )}
    </div>
  );
}

export default App;
