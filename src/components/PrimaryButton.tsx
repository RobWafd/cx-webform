import React from 'react';
import Link from 'next/link';

interface PrimaryButtonProps {
  to?: string;
  href?: string;
  children: React.ReactNode;
  icon?: React.ElementType;
  onClick?: () => void;
}

export default function PrimaryButton({ to, href, children, onClick }: Omit<PrimaryButtonProps, 'icon'>) {
  const css = "w-full bg-wafd-blue hover:bg-wafd-blue-dark active:bg-wafd-blue-dark text-white transition-colors border-none py-[16px] rounded-[12px] font-bold text-[16px] flex items-center justify-center cursor-pointer mb-6 no-underline shadow-md";
  
  if (to) {
    return (
      <Link href={to} className={css} onClick={onClick}>
        {children}
      </Link>
    );
  }

  if (href) {
    return (
      <a href={href} className={css} onClick={onClick}>
        {children}
      </a>
    );
  }

  return (
    <button className={css} onClick={onClick}>
      {children}
    </button>
  );
}



