import React from 'react';

export interface SunHouseLogoProps {
  variant?: 'light' | 'dark';
  className?: string;
}

export const SunHouseLogo: React.FC<SunHouseLogoProps> = ({
  variant = 'light',
  className = 'h-9 sm:h-11 w-auto',
}) => {
  const isDark = variant === 'dark';
  const textColor = isDark ? '#FFFFFF' : '#071C45';
  const subtitleColor = isDark ? '#CBD5E1' : '#46556B';
  const panelStroke = isDark ? 'rgba(255, 255, 255, 0.4)' : 'rgba(7, 28, 69, 0.35)';

  // Unique IDs for gradients based on variant to avoid SVG collisions
  const sunGradId = `sunhouse-sun-grad-${variant}`;
  const beamGradId = `sunhouse-beam-grad-${variant}`;

  return (
    <svg
      viewBox="0 0 280 60"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-label="SunHouse Energia Solar"
    >
      <defs>
        {/* Vibrant solar gradient */}
        <linearGradient id={sunGradId} x1="14" y1="8" x2="48" y2="44" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor="#FBBF24" />
          <stop offset="50%" stopColor="#F59E0B" />
          <stop offset="100%" stopColor="#EA580C" />
        </linearGradient>

        {/* Soft ray glow gradient */}
        <linearGradient id={beamGradId} x1="31" y1="4" x2="31" y2="38" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor="#FBBF24" stopOpacity="0.9" />
          <stop offset="100%" stopColor="#F59E0B" stopOpacity="0.2" />
        </linearGradient>
      </defs>

      {/* SÍMBOLO: SOL NASCENTE + TELHADO FOTOVOLTAICO */}
      <g transform="translate(4, 5)">
        {/* Raios Solares Geométricos */}
        {/* Re-render stroke using specific gradient */}
        <path
          d="M 28 3 L 28 0"
          stroke={`url(#${sunGradId})`}
          strokeWidth="2.5"
          strokeLinecap="round"
        />
        <path
          d="M 16 8 L 13 5"
          stroke={`url(#${sunGradId})`}
          strokeWidth="2.5"
          strokeLinecap="round"
        />
        <path
          d="M 40 8 L 43 5"
          stroke={`url(#${sunGradId})`}
          strokeWidth="2.5"
          strokeLinecap="round"
        />
        <path
          d="M 8 19 L 4 19"
          stroke={`url(#${sunGradId})`}
          strokeWidth="2.5"
          strokeLinecap="round"
        />
        <path
          d="M 48 19 L 52 19"
          stroke={`url(#${sunGradId})`}
          strokeWidth="2.5"
          strokeLinecap="round"
        />

        {/* Disco do Sol Nascente */}
        <circle cx="28" cy="22" r="12" fill={`url(#${sunGradId})`} />

        {/* Casa / Telhado Fotovoltaico Técnico com Inclinação Real */}
        {/* Base da casa e telhado */}
        <path
          d="M 8 36 L 28 17 L 48 36 L 43 40 L 28 26 L 13 40 Z"
          fill={isDark ? '#023399' : '#071C45'}
        />

        {/* Corpo estrutural do telhado fotovoltaico */}
        <path
          d="M 13 40 L 28 26 L 43 40 L 40 45 L 28 34 L 16 45 Z"
          fill={`url(#${sunGradId})`}
        />

        {/* Módulos Solares (Linhas de Células Fotovoltaicas) */}
        <line x1="28" y1="18" x2="28" y2="46" stroke={textColor} strokeWidth="1.5" strokeOpacity="0.8" />
        <line x1="20" y1="27" x2="20" y2="42" stroke={panelStroke} strokeWidth="1.2" />
        <line x1="36" y1="27" x2="36" y2="42" stroke={panelStroke} strokeWidth="1.2" />
        <line x1="14" y1="36" x2="42" y2="36" stroke={panelStroke} strokeWidth="1.2" />

        {/* Brilho Solar no vértice do telhado */}
        <circle cx="28" cy="17" r="2.5" fill="#FBBF24" />
      </g>

      {/* TIPOGRAFIA VETORIAL */}
      {/* "SUN" em amarelo solar */}
      <text
        x="68"
        y="33"
        fill="#F59E0B"
        fontFamily="Manrope, system-ui, -apple-system, sans-serif"
        fontWeight="900"
        fontSize="27"
        letterSpacing="0.02em"
      >
        SUN
      </text>

      {/* "HOUSE" em branco (dark) ou azul marinho profundo (light) */}
      <text
        x="132"
        y="33"
        fill={textColor}
        fontFamily="Manrope, system-ui, -apple-system, sans-serif"
        fontWeight="900"
        fontSize="27"
        letterSpacing="0.02em"
      >
        HOUSE
      </text>

      {/* SUBTÍTULO: "ENERGIA SOLAR" */}
      <text
        x="69"
        y="48"
        fill={subtitleColor}
        fontFamily="Manrope, system-ui, -apple-system, sans-serif"
        fontWeight="800"
        fontSize="8.5"
        letterSpacing="0.28em"
      >
        ENERGIA SOLAR
      </text>
    </svg>
  );
};
