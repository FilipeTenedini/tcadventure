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
        <span>AC Adventure</span>
      </div>
      <div>
        <HiOutlineMail />
        <AiOutlineWhatsApp />
      </div>
    </Headerr>
  );
}
