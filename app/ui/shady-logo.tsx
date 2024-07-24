import { GlobeAltIcon } from '@heroicons/react/24/outline';
import { lusitana } from '@/app/ui/fonts';
import logowhite1 from '@/public/logowhite1.png'
import Image from 'next/image';

export default function ShadyLogo() {
  return (
    <div
      className={`${lusitana.className} flex items-center leading-none text-white`}
    >
    <Image 
          src={logowhite1}
          alt= "shady_logo"
          height={160}
          width={160}
          className=''
        />

    </div>
  );
}
