import { PropsWithChildren } from "react";
import Sidebar from "./Sidebar";
import Player from "./MusicPlayer";
import { IoMenu } from "react-icons/io5";
import { useGlobaleState } from "../context";

type PagelayoutProps = PropsWithChildren;

export const PageLayout = ({ children }: PagelayoutProps) => {
  const { toggleSidebar } = useGlobaleState();
  return (
    <main>
      <div className="row main-content">
        <Sidebar />
        <div onClick={toggleSidebar} className="toggle-menu open">
          <IoMenu size={20} color="white" />
        </div>
        {children}
      </div>
      <Player />
    </main>
  );
};
