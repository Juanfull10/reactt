import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { GIFExpertApp } from './GIFExpertApp';
import './style.css'
import { GifExpertApp2 } from './GifExpertApp2';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <GifExpertApp2/>
  </StrictMode>,
)
