"use client";

import { useEffect, useState } from "react";

export default function Preloader() {
  const [show, setShow] = useState(false);
  const [isFadingOut, setIsFadingOut] = useState(false);
  const [isMounted, setIsMounted] = useState(false);

  const [text1, setText1] = useState("");
  const [status1, setStatus1] = useState(false);

  const [text2, setText2] = useState("");
  const [status2, setStatus2] = useState(false);

  const [text3, setText3] = useState("");
  const [status3, setStatus3] = useState(false);

  const [activeLine, setActiveLine] = useState(0);

  useEffect(() => {
    setIsMounted(true);
    const hasShown = sessionStorage.getItem("preloader_shown");
    if (hasShown) {
      setShow(false);
      return;
    }

    setShow(true);
    sessionStorage.setItem("preloader_shown", "true");

    const line1Str = "SYSTEM BOOTING... ";
    const line2Str = "MODULE_LOAD: STACK... ";
    const line3Str = "CACHING_PORTFOLIO... ";

    const timeouts: NodeJS.Timeout[] = [];
    const intervals: NodeJS.Timeout[] = [];

    const safeTimeout = (fn: () => void, delay: number) => {
      const t = setTimeout(fn, delay);
      timeouts.push(t);
      return t;
    };

    const typeLine = (text: string, setText: (s: string) => void, onComplete: () => void) => {
      let index = 0;
      const interval = setInterval(() => {
        setText(text.substring(0, index + 1));
        index++;
        if (index === text.length) {
          clearInterval(interval);
          onComplete();
        }
      }, 25); // 25ms per character for a fast but clear typing effect
      intervals.push(interval);
    };

    const startSequence = () => {
      // Start typing line 1 after 400ms
      safeTimeout(() => {
        setActiveLine(1);
        typeLine(line1Str, setText1, () => {
          setStatus1(true);
          // Start typing line 2 after 200ms delay
          safeTimeout(() => {
            setActiveLine(2);
            typeLine(line2Str, setText2, () => {
              setStatus2(true);
              // Start typing line 3 after 200ms delay
              safeTimeout(() => {
                setActiveLine(3);
                typeLine(line3Str, setText3, () => {
                  setStatus3(true);
                });
              }, 200);
            });
          }, 200);
        });
      }, 400);
    };

    startSequence();

    // Start fade out at 3.0s (leaving ~0.6s to admire the final line)
    safeTimeout(() => setIsFadingOut(true), 3000);
    
    // Remove from DOM at 3.5s (0.5s fade out duration)
    safeTimeout(() => setShow(false), 3500);

    return () => {
      timeouts.forEach(clearTimeout);
      intervals.forEach(clearInterval);
    };
  }, []);

  // Prevent hydration mismatch
  if (!isMounted) return null;
  if (!show) return null;

  return (
    <div
      className={`fixed inset-0 z-[99999] flex items-center justify-center bg-background transition-all duration-500 ease-in-out ${
        isFadingOut ? "opacity-0 scale-110 pointer-events-none" : "opacity-100 scale-100"
      }`}
    >
      <div
        className="w-[90%] max-w-2xl bg-[#0a0a0a] rounded-xl overflow-hidden shadow-2xl border border-gray-800"
        style={{
          boxShadow: "0 0 40px color-mix(in srgb, var(--primary) 30%, transparent)",
        }}
      >
        {/* Terminal Header */}
        <div className="flex items-center px-4 py-3 border-b border-gray-800 bg-[#111111]">
          <div className="flex gap-2">
            <div className="w-3 h-3 rounded-full bg-[#ff5f56]"></div>
            <div className="w-3 h-3 rounded-full bg-[#ffbd2e]"></div>
            <div className="w-3 h-3 rounded-full bg-[#27c93f]"></div>
          </div>
          <div className="mx-auto text-xs text-gray-500 font-mono">terminal ~ bash</div>
        </div>

        {/* Terminal Body */}
        <div className="p-6 font-mono text-sm md:text-base min-h-[200px] flex flex-col gap-3 text-gray-300">
          {activeLine >= 1 && (
            <div>
              <span className="text-gray-500">{">"}</span> {text1}
              {status1 && <span className="text-[#27c93f]">[Success]</span>}
              {activeLine === 1 && <span className="w-2 h-4 bg-gray-400 inline-block align-middle animate-pulse ml-1"></span>}
            </div>
          )}
          {activeLine >= 2 && (
            <div>
              <span className="text-gray-500">{">"}</span> {text2}
              {status2 && <span className="text-[#27c93f]">[OK]</span>}
              {activeLine === 2 && <span className="w-2 h-4 bg-gray-400 inline-block align-middle animate-pulse ml-1"></span>}
            </div>
          )}
          {activeLine >= 3 && (
            <div>
              <span className="text-gray-500">{">"}</span> {text3}
              {status3 && <span className="text-primary font-bold">[Done]</span>}
              {activeLine === 3 && <span className="w-2 h-4 bg-gray-400 inline-block align-middle animate-pulse ml-1"></span>}
            </div>
          )}
          {activeLine === 0 && (
            <div>
              <span className="text-gray-500">{">"}</span> <span className="w-2 h-4 bg-gray-400 inline-block align-middle animate-pulse ml-1"></span>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}