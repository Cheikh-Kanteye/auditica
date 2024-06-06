import { IconType } from "react-icons";
import { RiHome5Fill, RiHome5Line } from "react-icons/ri";
import { Link, useLocation } from "react-router-dom";
import { useGlobaleState } from "../context";
import { IoClose, IoHeartOutline, IoHeartSharp } from "react-icons/io5";
import {
  MdDashboard,
  MdOutlineDashboard,
  MdHeadset,
  MdOutlineHeadphones,
} from "react-icons/md";
import logo from "../assets/logo.png";
import logoshape from "../assets/logoshape.png";
import { useWindowDimensions } from "../hooks";

type tab = {
  label: string;
  activeIcon: IconType;
  inactiveIcon: IconType;
  playlist?: string[];
};

const tabs: tab[] = [
  {
    label: "home",
    activeIcon: RiHome5Fill,
    inactiveIcon: RiHome5Line,
    playlist: [
      "For workplace",
      "Rich Brian's",
      "collections",
      "deep focus",
      "lo-Fi jazz updeat",
      "Christmas playlist",
    ],
  },
  {
    label: "browse",
    activeIcon: MdDashboard,
    inactiveIcon: MdOutlineDashboard,
  },
  {
    label: "favorite",
    activeIcon: IoHeartSharp,
    inactiveIcon: IoHeartOutline,
  },
  {
    label: "library",
    activeIcon: MdHeadset,
    inactiveIcon: MdOutlineHeadphones,
  },
];

const Sidebar = () => {
  const { openSidebar } = useGlobaleState();
  const { toggleSidebar } = useGlobaleState();
  const { width } = useWindowDimensions();

  return (
    <div className={`col sidebar border-r ${openSidebar && "shown"}`}>
      <div className="sidebar-header row">
        <Link to="/" className="logo">
          <img src={width <= 968 ? logoshape : logo} alt="logo" />
        </Link>{" "}
        <div onClick={toggleSidebar} className="toggle-menu close">
          <IoClose size={20} color="white" />
        </div>
      </div>
      <ul className="col">
        {tabs.map((t, index) => {
          return (
            <Tab key={index} t={t} i={index} toggleSidebar={toggleSidebar} />
          );
        })}
      </ul>
    </div>
  );
};

export default Sidebar;

type TabProps = { t: tab; i: number; toggleSidebar: () => void };
const Tab = ({ t, i, toggleSidebar }: TabProps) => {
  const location = useLocation();
  const active = t.label === location.pathname.replace("/", "");
  const Icon = active ? t.activeIcon : t.inactiveIcon;
  return (
    <li onClick={toggleSidebar}>
      <Link to={`/${t.label}`} className={`row navitem ${active && "active"}`}>
        <Icon color="white" size={20} />
        <p>{t.label}</p>
      </Link>
    </li>
  );
};
