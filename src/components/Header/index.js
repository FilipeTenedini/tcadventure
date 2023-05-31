import { Link } from 'react-router-dom';
import { MdTravelExplore } from 'react-icons/md';
import { HiOutlineMail } from 'react-icons/hi';
import { AiOutlineWhatsApp } from 'react-icons/ai';
import {
  Headerr,
} from './style';

export default function Header() {
  return (
    <Headerr>
      <div>
        <MdTravelExplore />
        <h1>
          <Link to="/">
            AC Adventure
          </Link>
        </h1>
      </div>
      <div>
        <HiOutlineMail />
        <AiOutlineWhatsApp />
      </div>
    </Headerr>
  );
}
