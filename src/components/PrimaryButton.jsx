import React from 'react';
import { Link } from 'react-router-dom';

export default function PrimaryButton({ to, href, children, icon: Icon, onClick }) {
  const css = "w-full bg-wafd-dark hover:bg-gray-800 text-white transition-colors border-none p-4 rounded font-bold text-base flex items-center justify-center gap-2 cursor-pointer mb-6 uppercase no-underline shadow-md hover:shadow-lg";
  
  if (to) {
    return (
      <Link to={to} className={css} onClick={onClick}>
        {Icon && <Icon size={20} />}
        {children}
      </Link>
    );
  }

  if (href) {
    return (
      <a href={href} className={css} onClick={onClick}>
        {Icon && <Icon size={20} />}
        {children}
      </a>
    );
  }

  return (
    <button className={css} onClick={onClick}>
      {Icon && <Icon size={20} />}
      {children}
    </button>
  );
}
