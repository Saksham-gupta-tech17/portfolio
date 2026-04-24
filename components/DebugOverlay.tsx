'use client';

import React from 'react';

/**
 * A simple debug overlay component to verify text rendering and CSS stacking context.
 * Displays "TEXT IS WORKING" in red, centered on the screen.
 */
export default function DebugOverlay() {
  return (
    <div style={{ position: 'fixed', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', zIndex: 9999, color: 'red', fontSize: '50px', background: 'white', pointerEvents: 'none' }}>
      TEXT IS WORKING
    </div>
  );
}