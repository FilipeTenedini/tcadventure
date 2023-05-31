import { BrowserRouter, Routes, Route } from 'react-router-dom';
import HomePage from '../pages/HomePage';
import TicketsPage from '../pages/TicketsPage';
import TicketItemPage from '../pages/TicketItemPage';

export default function MyFunction() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<HomePage />} />
        <Route exact path="/tickets/:id?" element={<TicketsPage />} />
        <Route exact path="/tickets/item/:id?" element={<TicketItemPage />} />
      </Routes>
    </BrowserRouter>
  );
}
