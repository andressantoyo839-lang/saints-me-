import React from 'react';

interface SaintsMeLogoProps {
  size?: number;
  className?: string;
  showTextBeside?: boolean;
}

export const SaintsMeLogo: React.FC<SaintsMeLogoProps> = ({
  size = 48,
  className = '',
  showTextBeside = false,
}) => {
  return (
    <div className={`flex items-center gap-3 ${className}`}>
      <div
        style={{ width: size, height: size }}
        className="relative rounded-full bg-white p-[1px] shadow-lg shadow-black/40 ring-1 ring-[#c59e5f]/70 shrink-0 select-none overflow-hidden flex items-center justify-center"
      >
        <img
          src="/logo.jpg"
          alt="Saints Me Coffee Farm"
          className="w-full h-full object-cover scale-[1.12]"
        />
      </div>

      {showTextBeside && (
        <div className="flex flex-col text-left">
          <span className="font-['Cinzel',serif] tracking-[0.2em] text-lg sm:text-xl font-bold text-[#f5eee4] uppercase leading-none">
            Saints Me
          </span>
          <span className="font-['Cinzel',serif] tracking-[0.35em] text-[10px] text-[#c59e5f] uppercase mt-1">
            Coffee Farm
          </span>
        </div>
      )}
    </div>
  );
};
