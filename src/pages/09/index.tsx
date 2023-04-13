// Themes

import { useState } from "react";

function hexToRgb(hex: string): string {
  const regex = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i;
  const result = regex.exec(hex);
  if (!result) {
    throw Error();
  }
  const r = parseInt(result[1], 16);
  const g = parseInt(result[2], 16);
  const b = parseInt(result[3], 16);
  return `${r}, ${g}, ${b}`;
}

export default () => {
  const [currentColor, setCurrentColor] = useState("0, 0, 0");
  const handleColorChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = event.target;
    const rgb = hexToRgb(value);
    setCurrentColor(value);
    document.documentElement.style.setProperty("--color-secondary-100", rgb);
  };
  return (
    <>
      <div className="font-display m-8 relative z-10 rounded-xl shadow-xl ring-1 ring-secondary-900/5 dark:bg-secondary-800 dark:highlight-white/10">
        <article>
          <h2 className="text-lg font-semibold text-secondary-900 pt-4 pb-2 px-4 sm:px-6 lg:px-4 xl:px-6 dark:text-secondary-100 transition-opacity duration-[1.5s] delay-500 opacity-25">
            Weekly one-on-one
          </h2>
          <dl className="flex flex-wrap divide-y divide-secondary-200 border-b border-secondary-200 text-sm sm:text-base lg:text-sm xl:text-base dark:divide-secondary-200/5 dark:border-secondary-200/5">
            <div className="px-4 sm:px-6 lg:px-4 xl:px-6 pb-4">
              <dt className="sr-only">Date and time</dt>
              <dd className="transition-opacity duration-[1.5s] delay-500 opacity-25">
                <time>Thu Nov 15, 2020 10:00am</time> -{" "}
                <time>
                  11:00am<span className="sr-only sm:not-sr-only"> EST</span>
                </time>
              </dd>
            </div>
            <div className="w-full flex-none flex items-center p-4 sm:p-6 lg:p-4 xl:p-6">
              <dt className="w-2/5 sm:w-1/4 flex-none text-secondary-900 font-medium dark:text-secondary-300 transition-opacity duration-[1.5s] delay-500 opacity-25">
                Location
              </dt>
              <dd className="transition-opacity duration-[1.5s] delay-500 opacity-25">
                Kitchener, <abbr title="Ontario">ON</abbr>
              </dd>
            </div>
            <div className="w-full flex-none flex items-center p-4 sm:p-6 lg:p-4 xl:p-6">
              <dt className="w-2/5 sm:w-1/4 flex-none text-secondary-900 font-medium dark:text-secondary-300 transition-opacity duration-[1.5s] delay-500 opacity-25">
                Description
              </dt>
              <dd className="italic transition-opacity duration-[1.5s] delay-500 opacity-25">
                No meeting description
              </dd>
            </div>
            <div className="w-full flex-none flex items-center p-4 sm:py-5 sm:px-6 lg:p-4 xl:py-5 xl:px-6">
              <dt className="w-2/5 sm:w-1/4 flex-none text-secondary-900 font-medium dark:text-secondary-300 transition-opacity duration-[1.5s] delay-500 opacity-25">
                Attendees
              </dt>
              <dd className="text-sm font-medium text-secondary-700 bg-secondary-100 rounded-full py-1 px-3 dark:bg-secondary-700 dark:text-secondary-300 transition-opacity duration-[1.5s] delay-500 opacity-25">
                Andrew McDonald
              </dd>
            </div>
          </dl>
          <div className="grid grid-cols-2 gap-x-4 sm:gap-x-6 lg:gap-x-4 xl:gap-x-6 p-4 sm:px-6 sm:py-5 lg:p-4 xl:px-6 xl:py-5">
            <div className="text-base font-medium rounded-lg bg-secondary-100 text-secondary-900 py-3 text-center cursor-pointer dark:bg-secondary-600 dark:text-secondary-400 dark:highlight-white/10">
              Decline
            </div>
            <div className="text-base font-medium rounded-lg bg-primary-500 py-3 text-center cursor-pointer dark:highlight-white/20">
              Accept
            </div>
          </div>
        </article>
      </div>
      <div>
        <input type="color" value={currentColor} onChange={handleColorChange} />
      </div>
    </>
  );
};

/*
Default
module.exports = {
  theme: {
    fontFamily: {
      display: ['Inter', 'system-ui', 'sans-serif'],
      body: ['Inter', 'system-ui', 'sans-serif'],
    },
    colors: {
      primary: {
        50: '#eff6ff',
        100: '#dbeafe',
        200: '#bfdbfe',
        300: '#93c5fd',
        400: '#60a5fa',
        500: '#3b82f6',
        600: '#2563eb',
        700: '#1d4ed8',
        800: '#1e40af',
        900: '#1e3a8a',
      },
      secondary: {
        50: '#f8fafc',
        100: '#f1f5f9',
        200: '#e2e8f0',
        300: '#cbd5e1',
        400: '#94a3b8',
        500: '#64748b',
        600: '#475569',
        700: '#334155',
        800: '#1e293b',
        900: '#0f172a',
      },
    },
  },
}

Playful
module.exports = {
  theme: {
    fontFamily: {
      display: ['Pally', 'Comic Sans MS', 'sans-serif'],
      body: ['Pally', 'Comic Sans MS', 'sans-serif'],
    },
    colors: {
      primary: {
        50: '#fff1f2',
        100: '#ffe4e6',
        200: '#fecdd3',
        300: '#fda4af',
        400: '#fb7185',
        500: '#f43f5e',
        600: '#e11d48',
        700: '#be123c',
        800: '#9f1239',
        900: '#881337',
      },
      secondary: {
        50: '#f5f3ff',
        100: '#ede9fe',
        200: '#ddd6fe',
        300: '#c4b5fd',
        400: '#a78bfa',
        500: '#8b5cf6',
        600: '#7c3aed',
        700: '#6d28d9',
        800: '#5b21b6',
        900: '#4c1d95',
      },
    },
  },
}

With CSS variables

Config:

  function withOpacity(variableName) {
    return ({ opacityValue }) => {
      if (opacityValue !== undefined) {
        return `rgba(var(${variableName}), ${opacityValue})`;
      }
      return `rgb(var(${variableName}))`;
    };
  }

  theme: {
    colors: {
      primary: {
        500: withOpacity("--color-primary-500"),
      },
      secondary: {
        100: withOpacity("--color-secondary-100"),
      },
    },
  },

  @layer base {
    :root {
        --color-primary-500: 67, 56, 202;
        --color-secondary-100: 185, 28, 28;
    }
  }

Green
--color-secondary-100: 179, 255, 23;
*/
