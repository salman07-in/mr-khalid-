import React from 'react';

interface LogoProps {
  className?: string;
  variant?: 'light' | 'dark' | 'color';
}

// ----------------------------------------------------------------------
// OFFICIAL COMPANY LOGOS
// ----------------------------------------------------------------------

/** GE Vernova Official Logo */
export const GEVernovaLogo: React.FC<LogoProps> = ({ className = 'h-10 w-auto' }) => (
  <svg
    viewBox="0 0 260 60"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
    aria-label="GE Vernova official logo"
  >
    {/* GE Monogram Emblem */}
    <g transform="translate(4, 2)">
      <circle cx="28" cy="28" r="26" fill="#0B2342" />
      <circle cx="28" cy="28" r="23" stroke="#00C49F" strokeWidth="1.5" />
      {/* Script GE Monogram representation */}
      <path
        d="M27.5 15c-7.2 0-13 5.4-13 12.5 0 7.8 6.5 13.5 14.5 13.5 6 0 10.5-3.2 12-7.5h-8.2c-.8 1.8-2.5 2.8-4.8 2.8-4.2 0-7.2-3.2-7.2-7.8 0-4.8 3.5-8.5 8.2-8.5 2.8 0 4.8 1.4 5.6 3.5h5.8c-1.2-5-6-8.5-12.9-8.5z"
        fill="#FFFFFF"
      />
      <path
        d="M34 24.5v12.5h5.5v-7.2h6.5v-5.3H34z"
        fill="#FFFFFF"
      />
    </g>
    {/* GE VERNOVA Wordmark */}
    <text
      x="72"
      y="28"
      fill="#0B2342"
      fontFamily="'Manrope', 'Inter', sans-serif"
      fontWeight="800"
      fontSize="20"
      letterSpacing="0.05em"
    >
      GE
    </text>
    <text
      x="110"
      y="28"
      fill="#009A7A"
      fontFamily="'Manrope', 'Inter', sans-serif"
      fontWeight="800"
      fontSize="20"
      letterSpacing="0.08em"
    >
      VERNOVA
    </text>
    <text
      x="73"
      y="44"
      fill="#607086"
      fontFamily="'Inter', sans-serif"
      fontWeight="600"
      fontSize="8.5"
      letterSpacing="0.18em"
    >
      ENERGY TRANSITION
    </text>
  </svg>
);

/** Alstom Official Logo */
export const AlstomLogo: React.FC<LogoProps> = ({ className = 'h-8 w-auto' }) => (
  <svg
    viewBox="0 0 200 48"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
    aria-label="Alstom official logo"
  >
    <g fill="#002D72">
      {/* Distinctive ALSTOM letterforms with the stylized forward slash A */}
      <path d="M12 40L28 8h10l16 32h-9l-3.2-6.8h-17.6L21 40H12zm17-13.8h12.4l-6.2-13.2-6.2 13.2z" fill="#002D72" />
      <path d="M26 8L10 40h7l13-26.5L26 8z" fill="#0072CE" />
      {/* L */}
      <path d="M60 8v32h20v-7H68.5V8H60z" />
      {/* S */}
      <path d="M96 26.5c-4.2-1.2-6.5-2.2-6.5-4.5 0-2.4 2.2-4 5.5-4 3.2 0 6 1.4 7.2 3.8l6.8-4c-2.8-4.5-7.8-6.8-14-6.8-9 0-14.5 5.5-14.5 12.2 0 7 5.2 9.5 12.5 11.5 5.2 1.4 7 2.8 7 5.2 0 2.8-2.6 4.5-6.5 4.5-4.2 0-7.5-2-9-5.2l-7 4c2.8 5.5 8.5 8.2 16 8.2 9.8 0 15.5-5.5 15.5-12.8 0-7.2-5-9.8-13-12.1z" />
      {/* T */}
      <path d="M124 15.2V8h-26v7.2h9.2V40h8.5V15.2h8.3z" />
      {/* O */}
      <path d="M145 7.5c-10 0-17.5 7.5-17.5 16.8 0 9.2 7.5 16.8 17.5 16.8s17.5-7.5 17.5-16.8c0-9.2-7.5-16.8-17.5-16.8zm0 26.2c-5.2 0-9-4.2-9-9.5s3.8-9.5 9-9.5 9 4.2 9 9.5-3.8 9.5-9 9.5z" />
      {/* M */}
      <path d="M170 8v32h8.2V21.5l7.5 12.5h4.2l7.5-12.5V40h8.2V8h-9.5l-8.2 14-8.2-14H170z" />
    </g>
  </svg>
);

/** Bombardier Official Logo */
export const BombardierLogo: React.FC<LogoProps> = ({ className = 'h-8 w-auto' }) => (
  <svg
    viewBox="0 0 240 50"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
    aria-label="Bombardier official logo"
  >
    {/* Bombardier Iconic Triple-Swoosh Emblem */}
    <g transform="translate(4, 5)">
      <path
        d="M20 5C11.5 5 4.5 12 4.5 20.5S11.5 36 20 36c4.2 0 8-1.7 10.8-4.5l-4.2-4.2c-1.8 1.8-4.2 2.8-6.6 2.8-5.5 0-10-4.5-10-10s4.5-10 10-10c2.4 0 4.8 1 6.6 2.8l4.2-4.2C28 6.7 24.2 5 20 5z"
        fill="#0B2342"
      />
      <path
        d="M20 11c-5.2 0-9.5 4.2-9.5 9.5s4.2 9.5 9.5 9.5c2.6 0 5-1.1 6.7-2.8l-3.2-3.2c-1 1-2.2 1.5-3.5 1.5-2.8 0-5-2.2-5-5s2.2-5 5-5c1.3 0 2.5.6 3.5 1.5l3.2-3.2C25 12.1 22.6 11 20 11z"
        fill="#2468C4"
      />
      <circle cx="20" cy="20.5" r="3.2" fill="#0B2342" />
    </g>
    {/* BOMBARDIER Wordmark */}
    <text
      x="50"
      y="32"
      fill="#0B2342"
      fontFamily="'Manrope', 'Inter', sans-serif"
      fontWeight="800"
      fontSize="17"
      letterSpacing="0.14em"
    >
      BOMBARDIER
    </text>
  </svg>
);

/** Rolls-Royce Official Logo */
export const RollsRoyceLogo: React.FC<LogoProps> = ({ className = 'h-10 w-auto' }) => (
  <svg
    viewBox="0 0 60 70"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
    aria-label="Rolls-Royce official logo"
  >
    {/* Rolls-Royce Shield Frame */}
    <rect x="2" y="2" width="56" height="66" rx="2" fill="#0B2342" stroke="#2468C4" strokeWidth="1.2" />
    <rect x="5" y="5" width="50" height="60" fill="none" stroke="#FFFFFF" strokeWidth="0.8" />
    {/* ROLLS Top Text */}
    <text
      x="30"
      y="15"
      fill="#FFFFFF"
      fontFamily="'Inter', sans-serif"
      fontWeight="700"
      fontSize="6.5"
      textAnchor="middle"
      letterSpacing="0.12em"
    >
      ROLLS
    </text>
    {/* Interlocking RR Monogram */}
    <g transform="translate(14, 18)" fill="#FFFFFF">
      {/* Front R */}
      <path d="M8 6h7.5c3.2 0 5.5 1.8 5.5 4.5 0 2.2-1.4 3.8-3.5 4.3L22 25h-4.2l-4.2-9.5H12V25H8V6zm4 6.5h3.2c1.2 0 2-.8 2-1.8 0-1-.8-1.8-2-1.8H12v3.6z" />
      {/* Back R Interlocked */}
      <path
        d="M17 11h7.5c3.2 0 5.5 1.8 5.5 4.5 0 2.2-1.4 3.8-3.5 4.3L31 30h-4.2l-4.2-9.5H21V30h-4V11zm4 6.5h3.2c1.2 0 2-.8 2-1.8 0-1-.8-1.8-2-1.8H21v3.6z"
        opacity="0.85"
      />
    </g>
    {/* ROYCE Bottom Text */}
    <text
      x="30"
      y="58"
      fill="#FFFFFF"
      fontFamily="'Inter', sans-serif"
      fontWeight="700"
      fontSize="6.5"
      textAnchor="middle"
      letterSpacing="0.12em"
    >
      ROYCE
    </text>
  </svg>
);

/** Controls and Data Services Logo */
export const ControlsDataServicesLogo: React.FC<LogoProps> = ({ className = 'h-9 w-auto' }) => (
  <svg
    viewBox="0 0 240 50"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
    aria-label="Controls and Data Services logo"
  >
    {/* Technical telemetry node */}
    <g transform="translate(6, 6)">
      <rect x="0" y="0" width="36" height="36" rx="6" fill="#0B2342" />
      <circle cx="18" cy="18" r="10" stroke="#2F73D9" strokeWidth="1.5" strokeDasharray="3 2" />
      <path d="M12 18h12M18 12v12" stroke="#FFFFFF" strokeWidth="1.5" />
      <circle cx="18" cy="18" r="3" fill="#2468C4" />
    </g>
    <text
      x="52"
      y="22"
      fill="#0B2342"
      fontFamily="'Manrope', sans-serif"
      fontWeight="800"
      fontSize="13"
      letterSpacing="0.04em"
    >
      CONTROLS &amp; DATA
    </text>
    <text
      x="52"
      y="36"
      fill="#2468C4"
      fontFamily="'Inter', sans-serif"
      fontWeight="700"
      fontSize="11"
      letterSpacing="0.16em"
    >
      SERVICES
    </text>
  </svg>
);

/** Goodrich Engine Control Systems Logo */
export const GoodrichLogo: React.FC<LogoProps> = ({ className = 'h-8 w-auto' }) => (
  <svg
    viewBox="0 0 200 48"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
    aria-label="Goodrich Engine Control Systems logo"
  >
    {/* Goodrich Aerospace Chevron Graphic */}
    <g transform="translate(4, 8)">
      <path d="M0 24L16 6h12L12 24H0z" fill="#C8102E" />
      <path d="M14 24L30 6h12L26 24H14z" fill="#0B2342" />
    </g>
    <text
      x="54"
      y="26"
      fill="#0B2342"
      fontFamily="'Manrope', sans-serif"
      fontWeight="800"
      fontSize="16"
      letterSpacing="0.08em"
    >
      GOODRICH
    </text>
    <text
      x="55"
      y="38"
      fill="#607086"
      fontFamily="'Inter', sans-serif"
      fontWeight="600"
      fontSize="7.5"
      letterSpacing="0.12em"
    >
      ENGINE CONTROL SYSTEMS
    </text>
  </svg>
);

/** Converteam Logo */
export const ConverteamLogo: React.FC<LogoProps> = ({ className = 'h-8 w-auto' }) => (
  <svg
    viewBox="0 0 200 48"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
    aria-label="Converteam power conversion logo"
  >
    {/* Converteam Waveform Emblem */}
    <g transform="translate(6, 8)">
      <circle cx="16" cy="16" r="15" fill="#0B2342" />
      <path
        d="M6 16c3-6 7-6 10 0s7 6 10 0"
        stroke="#2F73D9"
        strokeWidth="2.2"
        strokeLinecap="round"
        fill="none"
      />
    </g>
    <text
      x="46"
      y="28"
      fill="#0B2342"
      fontFamily="'Manrope', sans-serif"
      fontWeight="800"
      fontSize="15"
      letterSpacing="0.1em"
    >
      CONVERTEAM
    </text>
    <text
      x="47"
      y="39"
      fill="#607086"
      fontFamily="'Inter', sans-serif"
      fontWeight="600"
      fontSize="7.5"
      letterSpacing="0.14em"
    >
      POWER CONVERSION
    </text>
  </svg>
);

/** TRW Automotive Official Logo */
export const TRWLogo: React.FC<LogoProps> = ({ className = 'h-8 w-auto' }) => (
  <svg
    viewBox="0 0 170 48"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
    aria-label="TRW Automotive official logo"
  >
    {/* TRW Red Badge */}
    <rect x="4" y="6" width="62" height="34" rx="4" fill="#D0202E" />
    <text
      x="35"
      y="30"
      fill="#FFFFFF"
      fontFamily="'Manrope', sans-serif"
      fontWeight="900"
      fontSize="20"
      letterSpacing="0.05em"
      textAnchor="middle"
    >
      TRW
    </text>
    {/* Automotive Subtitle */}
    <text
      x="74"
      y="25"
      fill="#0B2342"
      fontFamily="'Manrope', sans-serif"
      fontWeight="800"
      fontSize="12"
      letterSpacing="0.06em"
    >
      AUTOMOTIVE
    </text>
    <text
      x="74"
      y="36"
      fill="#607086"
      fontFamily="'Inter', sans-serif"
      fontWeight="500"
      fontSize="8"
      letterSpacing="0.08em"
    >
      Active &amp; Passive Safety
    </text>
  </svg>
);

// ----------------------------------------------------------------------
// OFFICIAL UNIVERSITY LOGOS
// ----------------------------------------------------------------------

/** University of Leicester Official Logo */
export const UniversityOfLeicesterLogo: React.FC<LogoProps> = ({ className = 'h-12 w-auto' }) => (
  <svg
    viewBox="0 0 220 60"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
    aria-label="University of Leicester official logo"
  >
    {/* Leicester Heraldic Shield / Crest */}
    <g transform="translate(6, 6)">
      <path
        d="M24 0C10.7 0 0 10.7 0 24c0 14 24 24 24 24s24-10 24-24c0-13.3-10.7-24-24-24z"
        fill="#A6192E"
      />
      {/* Cinquefoil emblem */}
      <circle cx="24" cy="22" r="11" fill="#FFFFFF" />
      <circle cx="24" cy="22" r="6" fill="#A6192E" />
      <circle cx="24" cy="13" r="3.2" fill="#A6192E" />
      <circle cx="32.5" cy="19.5" r="3.2" fill="#A6192E" />
      <circle cx="29" cy="30" r="3.2" fill="#A6192E" />
      <circle cx="19" cy="30" r="3.2" fill="#A6192E" />
      <circle cx="15.5" cy="19.5" r="3.2" fill="#A6192E" />
    </g>
    {/* University of Leicester Typography */}
    <text
      x="62"
      y="25"
      fill="#0B2342"
      fontFamily="'Manrope', 'Inter', sans-serif"
      fontWeight="800"
      fontSize="13.5"
      letterSpacing="0.05em"
    >
      UNIVERSITY OF
    </text>
    <text
      x="62"
      y="43"
      fill="#A6192E"
      fontFamily="'Manrope', 'Inter', sans-serif"
      fontWeight="900"
      fontSize="17"
      letterSpacing="0.06em"
    >
      LEICESTER
    </text>
  </svg>
);

/** Indian Institute of Technology Bombay (IIT Bombay) Logo */
export const IITBombayLogo: React.FC<LogoProps> = ({ className = 'h-12 w-auto' }) => (
  <svg
    viewBox="0 0 230 60"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
    aria-label="IIT Bombay official logo"
  >
    {/* IIT Bombay Cog & Lotus Emblem */}
    <g transform="translate(6, 6)">
      {/* Outer gear / cog */}
      <circle cx="24" cy="24" r="23" fill="#0B2342" />
      <circle cx="24" cy="24" r="19" stroke="#E5A823" strokeWidth="2" fill="#123A67" />
      {/* Cog teeth representation */}
      <path
        d="M24 6v4M24 38v4M6 24h4M38 24h4M11.3 11.3l2.8 2.8M33.9 33.9l2.8 2.8M11.3 36.7l2.8-2.8M33.9 14.1l2.8-2.8"
        stroke="#E5A823"
        strokeWidth="2.5"
        strokeLinecap="round"
      />
      {/* Lotus & Sun in centre */}
      <circle cx="24" cy="20" r="5" fill="#E5A823" />
      <path
        d="M17 28c2.5-4 7-4 7-4s4.5 0 7 4c-3.5 1-7 1-7 1s-3.5 0-7-1z"
        fill="#FFFFFF"
      />
    </g>
    {/* IIT Bombay Text */}
    <text
      x="62"
      y="24"
      fill="#0B2342"
      fontFamily="'Manrope', sans-serif"
      fontWeight="800"
      fontSize="13"
      letterSpacing="0.04em"
    >
      IIT BOMBAY
    </text>
    <text
      x="62"
      y="40"
      fill="#607086"
      fontFamily="'Inter', sans-serif"
      fontWeight="600"
      fontSize="9"
      letterSpacing="0.04em"
    >
      Indian Institute of Technology Bombay
    </text>
  </svg>
);

/** Technische Universität Dresden (TU Dresden) Logo */
export const TUDresdenLogo: React.FC<LogoProps> = ({ className = 'h-12 w-auto' }) => (
  <svg
    viewBox="0 0 230 60"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
    aria-label="TU Dresden official logo"
  >
    {/* TU Dresden Navy Monogram Block */}
    <g transform="translate(6, 6)">
      <rect x="0" y="0" width="48" height="48" rx="4" fill="#002557" />
      {/* Architectural Grid / Monogram */}
      <text
        x="24"
        y="26"
        fill="#FFFFFF"
        fontFamily="'Manrope', sans-serif"
        fontWeight="900"
        fontSize="14"
        textAnchor="middle"
        letterSpacing="0.06em"
      >
        TU
      </text>
      <text
        x="24"
        y="40"
        fill="#3399CC"
        fontFamily="'Inter', sans-serif"
        fontWeight="800"
        fontSize="9"
        textAnchor="middle"
        letterSpacing="0.08em"
      >
        DRESDEN
      </text>
    </g>
    {/* Full University Name */}
    <text
      x="64"
      y="25"
      fill="#002557"
      fontFamily="'Manrope', sans-serif"
      fontWeight="800"
      fontSize="14"
      letterSpacing="0.04em"
    >
      TECHNISCHE
    </text>
    <text
      x="64"
      y="42"
      fill="#0B2342"
      fontFamily="'Manrope', sans-serif"
      fontWeight="800"
      fontSize="14"
      letterSpacing="0.04em"
    >
      UNIVERSITÄT DRESDEN
    </text>
  </svg>
);

/** Aligarh Muslim University (AMU) Logo */
export const AMULogo: React.FC<LogoProps> = ({ className = 'h-12 w-auto' }) => (
  <svg
    viewBox="0 0 230 60"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
    aria-label="Aligarh Muslim University official logo"
  >
    {/* AMU Historic Circular Seal */}
    <g transform="translate(6, 6)">
      <circle cx="24" cy="24" r="23" fill="#005A36" />
      <circle cx="24" cy="24" r="20" stroke="#D4AF37" strokeWidth="1.5" fill="#0B2342" />
      {/* Palm trees & crescent */}
      <path
        d="M24 10a12 12 0 1 0 10 17 9.5 9.5 0 1 1-10-17z"
        fill="#D4AF37"
      />
      <circle cx="24" cy="24" r="2" fill="#FFFFFF" />
    </g>
    {/* University Name */}
    <text
      x="62"
      y="24"
      fill="#005A36"
      fontFamily="'Manrope', sans-serif"
      fontWeight="800"
      fontSize="13"
      letterSpacing="0.04em"
    >
      ALIGARH MUSLIM
    </text>
    <text
      x="62"
      y="42"
      fill="#0B2342"
      fontFamily="'Manrope', sans-serif"
      fontWeight="800"
      fontSize="14"
      letterSpacing="0.05em"
    >
      UNIVERSITY
    </text>
  </svg>
);
