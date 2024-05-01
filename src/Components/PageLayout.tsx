import React, { PropsWithChildren } from "react";
import Sidebar from "./Sidebar";
import Player from "./MusicPlayer";

type PagelayoutProps = PropsWithChildren;

export const PageLayout = ({ children }: PagelayoutProps) => {
  return (
    <main>
      <div className="row main-content">
        <Sidebar />
        {children}
      </div>
      <Player />
    </main>
  );
};
