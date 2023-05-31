import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { MdTravelExplore } from 'react-icons/md';
import { HiOutlineMail } from 'react-icons/hi';
import { AiOutlineWhatsApp } from 'react-icons/ai';
import {
  Headerr,
} from './style';

export default function Header() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.pageYOffset;
      setScrolled(scrollTop > 330);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <Headerr scrolled={scrolled}>
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
