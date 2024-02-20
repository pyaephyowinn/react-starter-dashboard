/* eslint-disable @typescript-eslint/no-unused-vars */
import { Abc } from '@mui/icons-material';
import { Button } from '@mui/material';
import { useState } from 'react';

export default function App() {
  const [count, setCount] = useState(0);
  return (
    <div>
      <h1>Vite + React</h1>
      <Button
        onClick={() => setCount((count) => count + 1)}
        variant="contained"
      >
        Hello world {count}
      </Button>
      <Abc />
    </div>
  );
}
