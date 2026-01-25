import React from 'react';
import { TileDefinition } from '../types';

interface TileIconProps {
  tile: TileDefinition;
  className?: string;
}

export const TileIcon: React.FC<TileIconProps> = ({ tile, className }) => {
  const { bgColor, fgColor, iconType } = tile;

  const renderContent = () => {
    switch (iconType) {
      case 'solid':
        return null;
      case 'waves':
        return (
          <svg viewBox="0 0 100 100" fill="none" stroke={fgColor} strokeWidth="8">
             <path d="M0 30 Q 25 10 50 30 T 100 30" />
             <path d="M0 50 Q 25 30 50 50 T 100 50" />
             <path d="M0 70 Q 25 50 50 70 T 100 70" />
          </svg>
        );
      case 'greenery':
        return (
          <svg viewBox="0 0 100 100">
            {/* Tree 1 */}
            <path d="M30 15 L50 50 H10 Z" fill={fgColor} />
            <rect x="25" y="50" width="10" height="10" fill={fgColor} />
            
            {/* Tree 2 */}
            <path d="M75 35 L90 65 H60 Z" fill={fgColor} />
            <rect x="72" y="65" width="6" height="10" fill={fgColor} />

            {/* Tree 3 */}
            <path d="M40 55 L55 85 H25 Z" fill={fgColor} />
            <rect x="37" y="85" width="6" height="10" fill={fgColor} />
          </svg>
        );
      case 'dirt':
        return (
          <svg viewBox="0 0 100 100">
             {/* Random stones */}
            <ellipse cx="30" cy="35" rx="12" ry="10" fill={fgColor} />
            <ellipse cx="75" cy="65" rx="15" ry="12" fill={fgColor} />
            <circle cx="55" cy="25" r="5" fill={fgColor} />
            <circle cx="20" cy="80" r="8" fill={fgColor} />
             <ellipse cx="85" cy="30" rx="6" ry="4" fill={fgColor} />
          </svg>
        );
      case 'grid':
        return (
          <svg viewBox="0 0 100 100" fill="none" stroke={fgColor} strokeWidth="4">
            <path d="M25 0 V100 M50 0 V100 M75 0 V100" />
            <path d="M0 25 H100 M0 50 H100 M0 75 H100" />
          </svg>
        );
      case 'road_i':
      case 'channel_i':
      case 'ind_road_i':
        return (
          <svg viewBox="0 0 100 100">
             <rect x="35" y="0" width="30" height="100" fill={fgColor} />
             {iconType === 'road_i' && <path d="M50 0 V100" stroke={bgColor} strokeWidth="2" strokeDasharray="10 5" />}
          </svg>
        );
      case 'dock_i':
        return (
          <svg viewBox="0 0 100 100">
             {/* 1/3 Brown (bgColor is background), 2/3 Blue (fgColor) */}
             <rect x="33" y="0" width="67" height="100" fill={fgColor} />
          </svg>
        );
      case 'road_l':
      case 'channel_l':
      case 'channel_long_l': // Simplified as L for now
        return (
          <svg viewBox="0 0 100 100">
             <path d="M35 0 V50 A15 15 0 0 0 50 65 H100 V35 H50 A15 15 0 0 1 65 20 V0 Z" fill={fgColor} stroke="none" />
             {iconType === 'road_l' && <path d="M50 0 V50 H100" fill="none" stroke={bgColor} strokeWidth="2" strokeDasharray="10 5" />}
          </svg>
        );
      case 'channel_long_l_aux_2':
         return (
           <svg viewBox="0 0 100 100">
             {/* Top line (Blue matching channel) */}
             <rect x="0" y="0" width="100" height="20" fill="#0ea5e9" />
             {/* Left line (Blue matching channel) */}
             <rect x="0" y="0" width="20" height="100" fill="#0ea5e9" />
           </svg>
         );
      case 'road_t':
      case 'channel_t':
      case 'ind_road_t':
        return (
           <svg viewBox="0 0 100 100">
             <rect x="35" y="0" width="30" height="100" fill={fgColor} />
             <rect x="35" y="35" width="65" height="30" fill={fgColor} />
           </svg>
        );
      case 'road_x':
      case 'channel_x':
      case 'ind_road_x':
        return (
          <svg viewBox="0 0 100 100">
            <rect x="35" y="0" width="30" height="100" fill={fgColor} />
            <rect x="0" y="35" width="100" height="30" fill={fgColor} />
          </svg>
        );
       case 'road_end':
       case 'channel_end':
       case 'ind_road_end':
        return (
           <svg viewBox="0 0 100 100">
             <rect x="35" y="50" width="30" height="50" fill={fgColor} />
             <circle cx="50" cy="50" r="15" fill={fgColor} />
           </svg>
        );
      case 'ind_road_c':
         return (
          <svg viewBox="0 0 100 100">
             <path d="M35 0 V50 A15 15 0 0 0 50 65 H100 V35 H50 A15 15 0 0 1 65 20 V0 Z" fill={fgColor} stroke="none" />
          </svg>
         );
      case 'bridge':
        return (
          <svg viewBox="0 0 100 100">
             <rect x="25" y="0" width="50" height="100" fill={fgColor} />
             <line x1="25" y1="20" x2="75" y2="20" stroke="black" strokeWidth="2" />
             <line x1="25" y1="50" x2="75" y2="50" stroke="black" strokeWidth="2" />
             <line x1="25" y1="80" x2="75" y2="80" stroke="black" strokeWidth="2" />
          </svg>
        );
      case 'uphill':
        return (
           <svg viewBox="0 0 100 100">
             {/* Uses bridge style but will be red via fgColor */}
             <rect x="25" y="0" width="50" height="100" fill={fgColor} />
             <line x1="25" y1="20" x2="75" y2="20" stroke="black" strokeWidth="2" />
             <line x1="25" y1="50" x2="75" y2="50" stroke="black" strokeWidth="2" />
             <line x1="25" y1="80" x2="75" y2="80" stroke="black" strokeWidth="2" />
           </svg>
        );
      case 'dock_l_ext':
        return (
          <svg viewBox="0 0 100 100" fill={bgColor}>
            <rect width="100" height="100" />
            <path d="M0 0 H70 V70 H0 Z" fill={fgColor} />
          </svg>
        );
      case 'dock_l_int':
         return (
          <svg viewBox="0 0 100 100" fill={bgColor}>
            <rect width="100" height="100" />
            <path d="M30 30 H100 V100 H30 Z" fill={fgColor} />
          </svg>
        );
      case 'dock_u':
         return (
          <svg viewBox="0 0 100 100" fill={bgColor}>
            <rect width="100" height="100" />
            {/* Filled U shape: Water inlet */}
            <path d="M20 0 V80 H80 V0" fill={fgColor} stroke={fgColor} strokeWidth="20" />
          </svg>
         );
       case 'dock_2_channel':
         return (
           <svg viewBox="0 0 100 100" fill={bgColor}>
             <rect width="100" height="100" />
             <rect x="30" y="0" width="40" height="100" fill={fgColor} />
             <rect x="0" y="30" width="100" height="40" fill={fgColor} />
           </svg>
         );
      case 'factory':
        return (
          <svg viewBox="0 0 100 100" fill={fgColor}>
            <path d="M10 90 V50 L30 70 L30 30 L50 50 L50 10 L90 90 Z" />
            <rect x="20" y="70" width="10" height="20" fill={bgColor} />
            <rect x="60" y="70" width="20" height="20" fill={bgColor} />
          </svg>
        );
       case 'channel_foot':
         return (
           <svg viewBox="0 0 100 100">
             <rect x="35" y="0" width="30" height="100" fill={fgColor} />
              <rect x="0" y="35" width="100" height="30" fill="#ffffff" />
           </svg>
         );
      default:
        return null;
    }
  };

  return (
    <div 
      className={`relative w-full h-full overflow-hidden ${className}`} 
      style={{ backgroundColor: bgColor }}
    >
      {renderContent()}
    </div>
  );
};