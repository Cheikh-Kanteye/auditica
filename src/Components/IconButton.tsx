import React from "react";

interface IconButtonProps {
  children: React.ReactElement;
  onClick: () => void;
}

const IconButton = ({ children, onClick }: IconButtonProps) => {
  return <button onClick={onClick}>{children}</button>;
};

export default IconButton;
