// import { StrictMode } from 'react';
import ReactDOM from 'react-dom/client';
import '@components/common/Calender/Calender.css';
import '@components/Create/ImageEditModal/Cropper.css';
import '@components/Create/ImgSlider/style.css';
import App from './App';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(<App />);
