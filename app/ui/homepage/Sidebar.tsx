import Link from "next/link";

const Sidebar = ({
  isOpen,
  toggle,
}: {
  isOpen: boolean;
  toggle: () => void;
}): JSX.Element => {
  return (

    <div
      className={`fixed flex flex-col justify-center items-center z-20 top-0 right-0 h-screen w-full bg-white text-black transition-transform duration-300 transform ${
        isOpen ? 'translate-x-0' : 'translate-x-full'
      }`}
    >
        <button className="absolute right-0 p-5" onClick={toggle}>
        {/* Close icon */}
          <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24"> 
            <path
              fill="currentColor"
              d="M19 6.41L17.59 5L12 10.59L6.41 5L5 6.41L10.59 12L5 17.59L6.41 19L12 13.41L17.59 19L19 17.59L13.41 12L19 6.41Z"
            />
          </svg>
        </button>

        <ul className="sidebar-nav text-center leading-relaxed text-xl">
          <li key={"five"}>
            <Link href="/#events" onClick={toggle}><p>What's On?</p></Link>
          </li>
          <li key={"six"}>
            <Link href="/menu" onClick={toggle}><p>Menu</p></Link>
          </li>
          <li key={"seven"}>
            <Link href="/booking" onClick={toggle}><p>Book a Table</p></Link>
          </li>
          <li key={"eight"}>
            <Link href="#footer" scroll={true} onClick={toggle}><p>Contact</p></Link>
          </li>
        </ul>
      </div>
  );
};

export default Sidebar;