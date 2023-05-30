import { BrowserRouter, Routes, Route } from 'react-router-dom';
import HomePage from '../pages/HomePage';
import TicketsPage from '../pages/TicketsPage';

export default function MyFunction() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<HomePage />} />
        <Route exact path="/tickets" element={<TicketsPage />} />
      </Routes>
    </BrowserRouter>
  );
}
