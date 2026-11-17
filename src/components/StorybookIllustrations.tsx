import React from 'react';
import { GalleryItem } from '../data/centreData';

export const HeroSceneIllustration: React.FC<{ activeSlide: number }> = ({ activeSlide }) => {
  const slidePalettes = [
    { skyAccent: '#FFE27A', shirtA: '#2BB673', shirtB: '#FF7096', shirtC: '#F6C23E' },
    { skyAccent: '#FFD166', shirtA: '#3B9AE8', shirtB: '#F4A623', shirtC: '#EE5A7B' },
    { skyAccent: '#A5E887', shirtA: '#EE5A7B', shirtB: '#3B9AE8', shirtC: '#F59E0B' },
  ];
  const palette = slidePalettes[activeSlide % slidePalettes.length];

  return (
    <svg
      viewBox="0 0 640 440"
      className="w-full h-auto max-w-[620px] mx-auto drop-shadow-sm select-none"
      role="img"
      aria-label="Illustration of a caring teacher guiding cheerful children playing with colourful blocks under a rainbow"
    >
      {/* Rainbow Arc */}
      <g opacity="0.95">
        <path d="M250 290 A200 200 0 0 1 635 180" fill="none" stroke="#FF6B8B" strokeWidth="18" strokeLinecap="round" />
        <path d="M268 295 A182 182 0 0 1 630 196" fill="none" stroke="#FFA94D" strokeWidth="18" strokeLinecap="round" />
        <path d="M286 300 A164 164 0 0 1 625 212" fill="none" stroke="#FFD93D" strokeWidth="18" strokeLinecap="round" />
        <path d="M304 305 A146 146 0 0 1 620 228" fill="none" stroke="#7AD151" strokeWidth="18" strokeLinecap="round" />
        <path d="M322 310 A128 128 0 0 1 615 244" fill="none" stroke="#4D9DE0" strokeWidth="18" strokeLinecap="round" />
      </g>

      {/* Soft floating clouds & stars */}
      <g fill="#FFFFFF" opacity="0.95">
        <ellipse cx="100" cy="86" rx="44" ry="20" />
        <circle cx="88" cy="74" r="18" />
        <circle cx="114" cy="76" r="15" />
        <ellipse cx="485" cy="70" rx="40" ry="18" />
        <circle cx="476" cy="59" r="16" />
        <circle cx="500" cy="61" r="14" />
      </g>

      {/* Little Heart & Star doodles matching reference 2 */}
      <path
        d="M175 88 C175 80 186 78 189 85 C192 78 203 80 203 88 C203 97 189 105 189 105 C189 105 175 97 175 88 Z"
        fill="none"
        stroke="#EE5A7B"
        strokeWidth="3"
      />
      <polygon
        points="515,245 520,255 531,256 523,264 525,275 515,270 505,275 507,264 499,256 510,255"
        fill="#FFD43B"
      />
      <circle cx="80" cy="210" r="10" fill={palette.skyAccent} opacity="0.7" />
      <circle cx="535" cy="140" r="8" fill="#EE5A7B" opacity="0.35" />

      {/* Warm Wooden Classroom Chairs */}
      <rect x="78" y="275" width="76" height="80" rx="18" fill="#E39D43" />
      <rect x="446" y="275" width="76" height="80" rx="18" fill="#E39D43" />

      {/* Teacher (Center) */}
      <g>
        {/* Hair Back */}
        <path d="M236 105 C236 62 346 62 346 105 L354 205 C354 218 228 218 228 205 Z" fill="#4A2E20" />
        {/* Shoulders / Dress */}
        <path d="M210 340 C215 245 248 218 291 218 C334 218 367 245 372 340 Z" fill={palette.shirtC} />
        <path d="M266 218 Q291 245 316 218" fill="#FFE0C8" />
        {/* Neck & Head */}
        <rect x="277" y="192" width="28" height="30" rx="10" fill="#FFD6B8" />
        <circle cx="291" cy="142" r="46" fill="#FFD6B8" />
        {/* Hair Front */}
        <path d="M244 134 C248 92 334 88 338 134 C320 112 275 110 244 134 Z" fill="#4A2E20" />
        {/* Rosy cheeks & gentle eyes */}
        <circle cx="272" cy="142" r="4.5" fill="#2A2438" />
        <circle cx="310" cy="142" r="4.5" fill="#2A2438" />
        <circle cx="262" cy="153" r="6" fill="#FF9EB0" opacity="0.6" />
        <circle cx="320" cy="153" r="6" fill="#FF9EB0" opacity="0.6" />
        <path d="M278 158 Q291 170 304 158" fill="none" stroke="#8C4A3E" strokeWidth="3.5" strokeLinecap="round" />
      </g>

      {/* Left Child (Boy) */}
      <g>
        <path d="M104 342 C108 278 135 260 168 260 C200 260 225 280 228 342 Z" fill={palette.shirtA} />
        {/* Striped details */}
        <path d="M114 295 H218" stroke="#FFFFFF" strokeWidth="6" strokeLinecap="round" opacity="0.9" />
        <path d="M110 318 H222" stroke="#FFFFFF" strokeWidth="6" strokeLinecap="round" opacity="0.9" />
        {/* Head */}
        <circle cx="166" cy="212" r="39" fill="#FFE0C4" />
        {/* Hair */}
        <path d="M126 205 C128 166 204 166 206 205 C194 188 148 188 126 205 Z" fill="#5D3A28" />
        <circle cx="151" cy="213" r="4" fill="#2A2438" />
        <circle cx="181" cy="213" r="4" fill="#2A2438" />
        <circle cx="143" cy="222" r="5" fill="#FF9EB0" opacity="0.65" />
        <circle cx="189" cy="222" r="5" fill="#FF9EB0" opacity="0.65" />
        <path d="M156 227 Q166 236 176 227" fill="none" stroke="#8C4A3E" strokeWidth="3" strokeLinecap="round" />
        {/* Reaching hand */}
        <circle cx="222" cy="336" r="13" fill="#FFE0C4" />
      </g>

      {/* Right Child (Girl with pigtails) */}
      <g>
        {/* Pigtails */}
        <circle cx="384" cy="186" r="17" fill="#5B3A29" />
        <circle cx="468" cy="186" r="17" fill="#5B3A29" />
        <circle cx="395" cy="191" r="5" fill="#EE5A7B" />
        <circle cx="457" cy="191" r="5" fill="#EE5A7B" />
        {/* Shirt */}
        <path d="M366 342 C370 280 396 260 426 260 C456 260 484 280 488 342 Z" fill={palette.shirtB} />
        {/* Head */}
        <circle cx="426" cy="212" r="38" fill="#FFE0C4" />
        <path d="M388 205 C390 166 462 166 464 205 C446 186 406 186 388 205 Z" fill="#5B3A29" />
        <circle cx="412" cy="213" r="4" fill="#2A2438" />
        <circle cx="440" cy="213" r="4" fill="#2A2438" />
        <circle cx="403" cy="222" r="5" fill="#FF9EB0" opacity="0.65" />
        <circle cx="449" cy="222" r="5" fill="#FF9EB0" opacity="0.65" />
        <path d="M416 227 Q426 236 436 227" fill="none" stroke="#8C4A3E" strokeWidth="3" strokeLinecap="round" />
        {/* Reaching hand */}
        <circle cx="368" cy="336" r="13" fill="#FFE0C4" />
      </g>

      {/* Wooden Table */}
      <rect x="65" y="346" width="470" height="44" rx="14" fill="#E8BA7D" />
      <rect x="65" y="346" width="470" height="12" rx="6" fill="#F4CC93" />

      {/* Colorful Stacking Blocks Tower */}
      <g>
        <rect x="272" y="318" width="44" height="28" rx="4" fill="#3B9AE8" />
        <rect x="274" y="290" width="40" height="28" rx="4" fill="#82C332" />
        <rect x="276" y="262" width="36" height="28" rx="4" fill="#F4A623" />
        <rect x="278" y="236" width="32" height="26" rx="4" fill="#FFD43B" />
        <polygon points="294,205 276,236 312,236" fill="#EE5A7B" />
        {/* Scattered Blocks */}
        <rect x="210" y="324" width="32" height="22" rx="4" fill="#EE5A7B" />
        <rect x="244" y="322" width="26" height="24" rx="4" fill="#FFD43B" />
        <rect x="322" y="324" width="34" height="22" rx="4" fill="#82C332" />
        <rect x="360" y="320" width="28" height="26" rx="4" fill="#3B9AE8" />
      </g>
    </svg>
  );
};

export const PillarCircleIllustration: React.FC<{ variant: 'play' | 'grow' | 'smart' | 'safe' }> = ({
  variant,
}) => {
  if (variant === 'play') {
    return (
      <svg viewBox="0 0 140 140" className="w-full h-full" aria-hidden="true">
        <rect width="140" height="140" fill="#E6F4FF" />
        <rect x="0" y="106" width="140" height="34" fill="#F4CC93" />
        {/* Two toddlers with blocks */}
        <circle cx="44" cy="64" r="16" fill="#FFD6B8" />
        <path d="M28 60 C30 42 58 42 60 60 Z" fill="#5A3928" />
        <path d="M24 106 C26 84 62 84 64 106 Z" fill="#3B9AE8" />
        <circle cx="96" cy="64" r="16" fill="#FFD6B8" />
        <path d="M80 60 C82 42 110 42 112 60 Z" fill="#4A2E20" />
        <path d="M76 106 C78 84 114 84 116 106 Z" fill="#EE5A7B" />
        <rect x="56" y="88" width="14" height="18" rx="2" fill="#FFD43B" />
        <rect x="70" y="92" width="14" height="14" rx="2" fill="#82C332" />
        <polygon points="70,74 61,88 79,88" fill="#EE5A7B" />
      </svg>
    );
  }
  if (variant === 'grow') {
    return (
      <svg viewBox="0 0 140 140" className="w-full h-full" aria-hidden="true">
        <rect width="140" height="140" fill="#FFF0F3" />
        <circle cx="70" cy="70" r="46" fill="#9EDB63" opacity="0.35" />
        {/* Circle of happy friends holding hands */}
        <circle cx="70" cy="40" r="11" fill="#FFD6B8" />
        <path d="M56 54 H84 L79 75 H61 Z" fill="#EE5A7B" />
        <circle cx="42" cy="76" r="11" fill="#FFE0C4" />
        <path d="M28 90 H56 L51 111 H33 Z" fill="#3B9AE8" />
        <circle cx="98" cy="76" r="11" fill="#FFD6B8" />
        <path d="M84 90 H112 L107 111 H89 Z" fill="#F4A623" />
        <path d="M50 64 Q70 76 90 64" fill="none" stroke="#FFD6B8" strokeWidth="5" strokeLinecap="round" />
        <path
          d="M65 92 C65 87 72 86 74 90 C76 86 83 87 83 92 C83 98 74 103 74 103 C74 103 65 98 65 92 Z"
          fill="#EE5A7B"
        />
      </svg>
    );
  }
  if (variant === 'smart') {
    return (
      <svg viewBox="0 0 140 140" className="w-full h-full" aria-hidden="true">
        <rect width="140" height="140" fill="#F2FAE6" />
        <rect x="0" y="104" width="140" height="36" fill="#E8BA7D" />
        {/* Child reading book */}
        <circle cx="70" cy="54" r="18" fill="#FFD6B8" />
        <path d="M52 50 C54 30 86 30 88 50 Z" fill="#4A2E20" />
        <path d="M46 104 C48 76 92 76 94 104 Z" fill="#82C332" />
        {/* Open Picture Book */}
        <path d="M36 90 L70 96 L104 90 L100 112 L70 118 L40 112 Z" fill="#FFFFFF" stroke="#2563EB" strokeWidth="2.5" />
        <line x1="70" y1="96" x2="70" y2="118" stroke="#CBD5E1" strokeWidth="2" />
        <text x="26" y="34" fontSize="14" fontWeight="700" fill="#EE5A7B">A</text>
        <text x="104" y="36" fontSize="14" fontWeight="700" fill="#3B9AE8">乐</text>
      </svg>
    );
  }
  return (
    <svg viewBox="0 0 140 140" className="w-full h-full" aria-hidden="true">
      <rect width="140" height="140" fill="#FFF7E6" />
      {/* Happy child with painted colourful hands */}
      <circle cx="70" cy="60" r="19" fill="#FFE0C4" />
      <path d="M51 54 C53 34 87 34 89 54 Z" fill="#5A3928" />
      <path d="M45 120 C48 84 92 84 95 120 Z" fill="#FFD43B" />
      <circle cx="34" cy="86" r="11" fill="#3B9AE8" opacity="0.85" />
      <circle cx="106" cy="86" r="11" fill="#EE5A7B" opacity="0.85" />
      <path d="M62 64 Q70 72 78 64" fill="none" stroke="#8C4A3E" strokeWidth="3" strokeLinecap="round" />
      <circle cx="62" cy="57" r="2.5" fill="#2A2438" />
      <circle cx="78" cy="57" r="2.5" fill="#2A2438" />
    </svg>
  );
};

export const GallerySceneIllustration: React.FC<{ sceneKey: GalleryItem['sceneKey'] }> = ({
  sceneKey,
}) => {
  switch (sceneKey) {
    case 'blocks':
      return (
        <svg viewBox="0 0 400 260" className="w-full h-full" aria-hidden="true">
          <rect width="400" height="260" fill="#EAF5FF" />
          <circle cx="65" cy="52" r="26" fill="#FFE27A" />
          <rect x="0" y="196" width="400" height="64" fill="#E8BA7D" />
          {/* Two children building rainbow castle */}
          <circle cx="122" cy="112" r="28" fill="#FFD6B8" />
          <path d="M94 106 C96 74 148 74 150 106 Z" fill="#5A3928" />
          <path d="M84 196 C88 148 156 148 160 196 Z" fill="#3B9AE8" />
          <circle cx="282" cy="112" r="28" fill="#FFE0C4" />
          <path d="M254 106 C256 74 308 74 310 106 Z" fill="#4A2E20" />
          <path d="M244 196 C248 148 316 148 320 196 Z" fill="#EE5A7B" />
          {/* Castle blocks */}
          <rect x="174" y="168" width="52" height="28" rx="4" fill="#82C332" />
          <rect x="180" y="140" width="40" height="28" rx="4" fill="#F4A623" />
          <rect x="184" y="116" width="32" height="24" rx="4" fill="#3B9AE8" />
          <polygon points="200,88 182,116 218,116" fill="#EE5A7B" />
        </svg>
      );
    case 'painting':
      return (
        <svg viewBox="0 0 400 260" className="w-full h-full" aria-hidden="true">
          <rect width="400" height="260" fill="#FFF1F4" />
          {/* Art easel & canvas */}
          <line x1="185" y1="220" x2="215" y2="55" stroke="#C98D49" strokeWidth="8" strokeLinecap="round" />
          <line x1="295" y1="220" x2="265" y2="55" stroke="#C98D49" strokeWidth="8" strokeLinecap="round" />
          <rect x="175" y="65" width="130" height="104" rx="8" fill="#FFFFFF" stroke="#E2E8F0" strokeWidth="4" />
          {/* Painted rainbow on easel */}
          <path d="M196 140 A44 44 0 0 1 284 140" fill="none" stroke="#EE5A7B" strokeWidth="9" strokeLinecap="round" />
          <path d="M206 140 A34 34 0 0 1 274 140" fill="none" stroke="#F4A623" strokeWidth="9" strokeLinecap="round" />
          <path d="M216 140 A24 24 0 0 1 264 140" fill="none" stroke="#3B9AE8" strokeWidth="9" strokeLinecap="round" />
          {/* Little artist */}
          <circle cx="115" cy="116" r="28" fill="#FFD6B8" />
          <path d="M88 108 C92 76 138 76 142 108 Z" fill="#4A2E20" />
          <path d="M78 214 C82 152 148 152 152 214 Z" fill="#F4A623" />
          <circle cx="164" cy="156" r="14" fill="#3B9AE8" opacity="0.25" />
          <circle cx="152" cy="144" r="6" fill="#EE5A7B" />
          <circle cx="170" cy="136" r="5" fill="#82C332" />
        </svg>
      );
    case 'storytime':
      return (
        <svg viewBox="0 0 400 260" className="w-full h-full" aria-hidden="true">
          <rect width="400" height="260" fill="#F3FAE8" />
          <ellipse cx="200" cy="212" rx="150" ry="26" fill="#82C332" opacity="0.3" />
          {/* Bookshelf & ABC */}
          <rect x="40" y="42" width="84" height="110" rx="10" fill="#FFFFFF" stroke="#DCE8C8" strokeWidth="3" />
          <rect x="52" y="58" width="16" height="34" rx="3" fill="#3B9AE8" />
          <rect x="72" y="58" width="16" height="34" rx="3" fill="#EE5A7B" />
          <rect x="92" y="58" width="16" height="34" rx="3" fill="#F4A623" />
          {/* Teacher holding big open storybook */}
          <circle cx="215" cy="94" r="28" fill="#FFD6B8" />
          <path d="M187 88 C190 54 240 54 243 88 Z" fill="#4A2E20" />
          <path d="M174 195 C180 132 250 132 256 195 Z" fill="#EE5A7B" />
          <path d="M175 152 L215 162 L255 152 L250 190 L215 198 L180 190 Z" fill="#FFFFFF" stroke="#3B9AE8" strokeWidth="3" />
          {/* Listening child */}
          <circle cx="315" cy="140" r="22" fill="#FFE0C4" />
          <path d="M293 136 C296 112 334 112 337 136 Z" fill="#5A3928" />
          <path d="M286 205 C290 168 340 168 344 205 Z" fill="#3B9AE8" />
        </svg>
      );
    case 'garden':
      return (
        <svg viewBox="0 0 400 260" className="w-full h-full" aria-hidden="true">
          <rect width="400" height="260" fill="#EBF7FF" />
          <circle cx="332" cy="54" r="28" fill="#FFD43B" />
          <path d="M0 190 Q200 165 400 190 L400 260 L0 260 Z" fill="#78C23B" />
          {/* Flowers & watering can */}
          <circle cx="95" cy="166" r="10" fill="#EE5A7B" />
          <circle cx="95" cy="166" r="4" fill="#FFD43B" />
          <line x1="95" y1="176" x2="95" y2="205" stroke="#4D8A1F" strokeWidth="4" />
          <circle cx="130" cy="172" r="10" fill="#F4A623" />
          <circle cx="130" cy="172" r="4" fill="#FFFFFF" />
          <line x1="130" y1="182" x2="130" y2="208" stroke="#4D8A1F" strokeWidth="4" />
          {/* Happy child watering */}
          <circle cx="235" cy="108" r="28" fill="#FFD6B8" />
          <path d="M207 104 C210 72 260 72 263 104 Z" fill="#5A3928" />
          <path d="M202 198 C206 144 264 144 268 198 Z" fill="#3B9AE8" />
          <rect x="150" y="140" width="38" height="28" rx="6" fill="#EE5A7B" />
          <path d="M150 150 L125 136" stroke="#EE5A7B" strokeWidth="7" strokeLinecap="round" />
        </svg>
      );
    case 'music':
      return (
        <svg viewBox="0 0 400 260" className="w-full h-full" aria-hidden="true">
          <rect width="400" height="260" fill="#F4F0FF" />
          {/* Music notes */}
          <text x="68" y="70" fontSize="28" fill="#EE5A7B">♪</text>
          <text x="305" y="68" fontSize="32" fill="#3B9AE8">♫</text>
          <text x="195" y="48" fontSize="24" fill="#F4A623">♪</text>
          {/* Two children playing tambourine & maracas */}
          <circle cx="145" cy="112" r="28" fill="#FFE0C4" />
          <path d="M117 106 C120 74 170 74 173 106 Z" fill="#4A2E20" />
          <path d="M110 212 C114 148 176 148 180 212 Z" fill="#82C332" />
          <circle cx="96" cy="156" r="18" fill="#F4A623" stroke="#FFFFFF" strokeWidth="4" />
          <circle cx="260" cy="112" r="28" fill="#FFD6B8" />
          <path d="M232 106 C235 74 285 74 288 106 Z" fill="#5A3928" />
          <path d="M225 212 C229 148 291 148 295 212 Z" fill="#EE5A7B" />
          <ellipse cx="308" cy="145" rx="11" ry="15" fill="#3B9AE8" />
          <line x1="308" y1="160" x2="308" y2="178" stroke="#C98D49" strokeWidth="5" strokeLinecap="round" />
        </svg>
      );
    case 'festive':
      return (
        <svg viewBox="0 0 400 260" className="w-full h-full" aria-hidden="true">
          <rect width="400" height="260" fill="#FFF3E8" />
          {/* Festive lanterns string */}
          <path d="M30 42 Q200 72 370 42" fill="none" stroke="#C98D49" strokeWidth="3" />
          <ellipse cx="105" cy="68" rx="18" ry="22" fill="#EE5A7B" />
          <ellipse cx="200" cy="76" rx="18" ry="22" fill="#F4A623" />
          <ellipse cx="295" cy="68" rx="18" ry="22" fill="#EE5A7B" />
          {/* Two children in traditional lilac/festive outfits holding hands */}
          <circle cx="152" cy="128" r="26" fill="#FFD6B8" />
          <path d="M126 122 C128 94 176 94 178 122 Z" fill="#5A3928" />
          <path d="M120 220 C124 162 180 162 184 220 Z" fill="#C49BFF" />
          <circle cx="248" cy="128" r="26" fill="#FFE0C4" />
          <circle cx="220" cy="110" r="11" fill="#4A2E20" />
          <circle cx="276" cy="110" r="11" fill="#4A2E20" />
          <path d="M222 122 C224 94 272 94 274 122 Z" fill="#4A2E20" />
          <path d="M216 220 C220 162 276 162 280 220 Z" fill="#C49BFF" />
        </svg>
      );
    case 'sensory':
      return (
        <svg viewBox="0 0 400 260" className="w-full h-full" aria-hidden="true">
          <rect width="400" height="260" fill="#E9FAF4" />
          <rect x="75" y="156" width="250" height="62" rx="16" fill="#E8BA7D" />
          <rect x="92" y="140" width="95" height="24" rx="8" fill="#3B9AE8" />
          <rect x="212" y="140" width="95" height="24" rx="8" fill="#82C332" />
          <circle cx="200" cy="96" r="30" fill="#FFD6B8" />
          <path d="M170 90 C172 56 228 56 230 90 Z" fill="#5A3928" />
          <path d="M160 156 C166 122 234 122 240 156 Z" fill="#F4A623" />
          <circle cx="138" cy="138" r="7" fill="#FFD43B" />
          <circle cx="262" cy="138" r="7" fill="#EE5A7B" />
        </svg>
      );
    case 'graduation':
      return (
        <svg viewBox="0 0 400 260" className="w-full h-full" aria-hidden="true">
          <rect width="400" height="260" fill="#FFF7E2" />
          {/* Confetti */}
          <circle cx="72" cy="64" r="6" fill="#EE5A7B" />
          <circle cx="328" cy="70" r="6" fill="#3B9AE8" />
          <rect x="112" y="45" width="10" height="10" rx="2" fill="#82C332" transform="rotate(20 112 45)" />
          <rect x="285" y="48" width="10" height="10" rx="2" fill="#F4A623" transform="rotate(-15 285 48)" />
          {/* Proud graduate child */}
          <circle cx="200" cy="116" r="30" fill="#FFE0C4" />
          {/* Graduation cap */}
          <polygon points="200,56 154,76 200,94 246,76" fill="#1E325C" />
          <rect x="176" y="84" width="48" height="14" fill="#1E325C" />
          <line x1="240" y1="78" x2="240" y2="108" stroke="#FFD43B" strokeWidth="3" />
          <path d="M156 222 C162 152 238 152 244 222 Z" fill="#3B9AE8" />
          <rect x="175" y="176" width="50" height="14" rx="7" fill="#FFFFFF" />
        </svg>
      );
  }
};

export const GardenWreathIllustration: React.FC = () => (
  <svg
    viewBox="0 0 280 280"
    className="w-56 h-56 sm:w-64 sm:h-64 mx-auto select-none"
    role="img"
    aria-label="Smiling child framed inside a cheerful green floral meadow wreath"
  >
    {/* Lush outer leaf wreath */}
    <circle cx="140" cy="140" r="118" fill="#77B931" />
    <circle cx="140" cy="140" r="98" fill="#DFF3FE" />
    {/* Soft garden hills inside circle */}
    <path d="M44 176 Q140 144 236 176 A98 98 0 0 1 44 176 Z" fill="#8ED048" />
    {/* Smiling child */}
    <path d="M88 228 C94 176 186 176 192 228 Z" fill="#FFD43B" />
    <circle cx="140" cy="136" r="42" fill="#FFE0C4" />
    {/* Sun hat */}
    <ellipse cx="140" cy="100" rx="58" ry="16" fill="#FFFDF5" stroke="#E5DEC9" strokeWidth="3" />
    <path d="M100 100 C104 66 176 66 180 100 Z" fill="#F9F5E7" stroke="#E5DEC9" strokeWidth="3" />
    <path d="M102 96 Q140 104 178 96" fill="none" stroke="#EE5A7B" strokeWidth="5" />
    {/* Eyes & smile */}
    <circle cx="124" cy="136" r="4.5" fill="#2A2438" />
    <circle cx="156" cy="136" r="4.5" fill="#2A2438" />
    <circle cx="114" cy="146" r="5.5" fill="#FF9EB0" opacity="0.65" />
    <circle cx="166" cy="146" r="5.5" fill="#FF9EB0" opacity="0.65" />
    <path d="M128 150 Q140 162 152 150" fill="none" stroke="#8C4A3E" strokeWidth="3.5" strokeLinecap="round" />
    {/* Little hands resting on chin */}
    <circle cx="122" cy="176" r="11" fill="#FFE0C4" />
    <circle cx="158" cy="176" r="11" fill="#FFE0C4" />
    {/* Flowers around wreath */}
    {[
      [42, 108, '#EE5A7B'],
      [238, 108, '#F4A623'],
      [60, 206, '#FFFFFF'],
      [220, 206, '#EE5A7B'],
      [140, 28, '#FFFFFF'],
      [92, 42, '#FFD43B'],
      [188, 42, '#FFD43B'],
    ].map(([cx, cy, color], idx) => (
      <g key={idx}>
        <circle cx={cx as number} cy={cy as number} r="10" fill={color as string} />
        <circle cx={cx as number} cy={cy as number} r="4" fill="#F4A623" />
      </g>
    ))}
  </svg>
);

export const MeadowLandscapeDecor: React.FC = () => (
  <svg
    viewBox="0 0 1440 120"
    preserveAspectRatio="none"
    className="w-full h-16 sm:h-24 block select-none"
    aria-hidden="true"
  >
    {/* Rolling meadow hill */}
    <path d="M0 64 Q360 18 720 62 T1440 48 L1440 120 L0 120 Z" fill="#77B931" />
    <path d="M0 84 Q420 50 860 82 T1440 72 L1440 120 L0 120 Z" fill="#64A62D" />
    {/* Picket Fence Left */}
    <g fill="#F6DFB0">
      {[80, 108, 136, 164, 192, 220].map((x) => (
        <rect key={x} x={x} y="66" width="14" height="36" rx="4" />
      ))}
      <rect x="74" y="78" width="166" height="7" rx="2" fill="#E8C78B" />
    </g>
    {/* Cute Stacking Rings Toy on grass */}
    <rect x="330" y="92" width="44" height="9" rx="4" fill="#3B9AE8" />
    <rect x="335" y="83" width="34" height="9" rx="4" fill="#82C332" />
    <rect x="340" y="74" width="24" height="9" rx="4" fill="#F4A623" />
    <circle cx="352" cy="68" r="6" fill="#EE5A7B" />
    {/* Little Farmhouse Windmill Right */}
    <g transform="translate(1200, 18)">
      <path d="M18 82 L26 24 L54 24 L62 82 Z" fill="#F6DFB0" />
      <polygon points="22,24 40,4 58,24" fill="#D9534F" />
      <rect x="34" y="56" width="12" height="26" rx="6" fill="#8C5B3E" />
      <line x1="16" y1="0" x2="64" y2="48" stroke="#C94A4A" strokeWidth="5" strokeLinecap="round" />
      <line x1="64" y1="0" x2="16" y2="48" stroke="#C94A4A" strokeWidth="5" strokeLinecap="round" />
      <circle cx="40" cy="24" r="5" fill="#FFE27A" />
    </g>
    {/* Picket Fence Right */}
    <g fill="#F6DFB0">
      {[1060, 1088, 1116, 1144].map((x) => (
        <rect key={x} x={x} y="68" width="14" height="34" rx="4" />
      ))}
      <rect x="1054" y="80" width="110" height="6" rx="2" fill="#E8C78B" />
    </g>
  </svg>
);
