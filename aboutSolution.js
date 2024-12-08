```javascript
// pages/aboutSolution.js
import { useState, useEffect } from 'react';

export default function About() {
  const [date, setDate] = useState(null);

  useEffect(() => {
    setDate(new Date());
  }, []);

  if (!date) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h1>About Page</h1>
      <p>The current date and time is: {date.toLocaleString()}</p>
    </div>
  );
}
```