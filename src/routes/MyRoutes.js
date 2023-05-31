import { BrowserRouter, Routes, Route } from 'react-router-dom';
import HomePage from '../pages/HomePage';
import TicketsPage from '../pages/TicketsPage';
import TicketItemPage from '../pages/TicketItemPage';
import HotelsPage from '../pages/HotelsPage';
import HotelItemPage from '../pages/HotelItemPage';

export default function MyFunction() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<HomePage />} />
        <Route exact path="/tickets/item/:id?" element={<TicketItemPage />} />
        <Route exact path="/tickets/:id?" element={<TicketsPage />} />
        <Route exact path="/hotels/item/:id?" element={<HotelItemPage />} />
        <Route exact path="/hotels/:id?" element={<HotelsPage />} />
      </Routes>
    </BrowserRouter>
  );
}
