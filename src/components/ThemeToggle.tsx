'use client';

import clsx from 'clsx';
import { useEffect, useState } from 'react';
import { LuMoon, LuSun } from 'react-icons/lu';

import { useTheme } from './ThemeProvider';

type ThemeToggleProps = {
  className?: string;
};

const ThemeToggle: React.FC<ThemeToggleProps> = ({ className }) => {
  const { theme, toggleTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const isDark = mounted ? theme === 'dark' : false;

  return (
    <button
      type="button"
      onClick={toggleTheme}
      aria-label="Toggle color theme"
      className={clsx(
        'flex items-center justify-center gap-2 rounded-full border border-border px-3 py-2 text-sm font-medium text-foreground transition-colors hover:bg-muted focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary',
        className,
      )}
    >
      {isDark ? <LuSun size={18} /> : <LuMoon size={18} />}
      <span className="hidden sm:inline">{isDark ? 'Light' : 'Dark'} mode</span>
    </button>
  );
};

export default ThemeToggle;

