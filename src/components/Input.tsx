import React, { Fragment } from "react";

interface Props {
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  label: string;
  id: string;
  className?: string;
  placeHolder?: string;
  errorMessage?: string;
  type?: string;
}

const Input: React.FC<Props> = (props) => {
  const { onChange, label, placeHolder, errorMessage, id, className, type } =
    props;
  return (
    <Fragment>
      <input
        className={`peer w-full p-3 rounded hover:ring-1 hover:ring-slate-300 focus:bg-white placeholder-transparent placeholder-shown:bg-slate-100 placeholder-shown:ring-none placeholder-shown:ring-0 focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary ring-1 ring-slate-300 ${className}`}
        type={type}
        placeholder={placeHolder}
        autoComplete="none"
        id={id}
        onChange={onChange}
      />
      <label
        htmlFor={id}
        className="absolute peer-placeholder-shown:text-base peer-placeholder-shown:top-3 peer-placeholder-shown:bg-slate-100 peer-placeholder-shown:left-3 text-xs -top-3 left-2 peer-focus:text-xs peer-focus:-top-3 peer-focus:left-2 px-2 peer-focus:bg-white peer-focus:text-slate-800 transition-all bg-white text-slate-500"
      >
        {label}
      </label>
      <span className=" block invisible peer-invalid:visible text-primary text-sm mb-4 mt-1.5">
        {errorMessage}
      </span>
    </Fragment>
  );
};

export default Input;
