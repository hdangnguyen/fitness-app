import React from "react";

interface Props {
  onClick: () => void;
  bgColor: string;
  textColor: string;
  title: string;
  additionalClassName?: string;
  icon?: React.ReactNode;
}

const Button: React.FC<Props> = (props) => {
  const { onClick, bgColor, textColor, title, icon, additionalClassName } =
    props;
  return (
    <div>
      <button
        onClick={onClick}
        className={`bg-${bgColor} text-${textColor} text-center rounded py-3 mt-10 font-semibold hover:shadow-hoverButton transition-all ${additionalClassName}`}
      >
        {icon}
        {title}
      </button>
    </div>
  );
};

export default Button;
