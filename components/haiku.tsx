import { useEffect, useRef, useState } from "react";

export const HaikuDisplay = () => {
  const [visibleLines, setVisibleLines] = useState(0);
  const haikuRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    const timeouts = [
      setTimeout(() => {
        setVisibleLines(1);
        scrollToBottom();
      }, 500),
      setTimeout(() => {
        setVisibleLines(2);
        scrollToBottom();
      }, 2000),
      setTimeout(() => {
        setVisibleLines(3);
        scrollToBottom();
      }, 3500),
      setTimeout(() => {
        setVisibleLines(4);
        scrollToBottom();
      }, 5000),
    ];
    
    return () => timeouts.forEach(timeout => clearTimeout(timeout));
  }, []);

  const scrollToBottom = () => {
    // Allow the render to complete before scrolling
    setTimeout(() => {
      if (haikuRef.current) {
        let parentElement = haikuRef.current.parentElement;
        while (parentElement) {
          if (parentElement.scrollHeight > parentElement.clientHeight) {
            parentElement.scrollTop = parentElement.scrollHeight;
            break;
          }
          if (parentElement === document.body) break;
          parentElement = parentElement.parentElement;
        }
      }
    }, 100);
  };
  
  return (
    <div ref={haikuRef}>
      {visibleLines >= 1 && <p className="text-cyan-400 font-bold animate-fadeIn">Code flows like rivers</p>}
      {visibleLines >= 2 && <p className="text-cyan-400 font-bold animate-fadeIn">Systems breathe, grow, and evolve</p>}
      {visibleLines >= 3 && <p className="text-cyan-400 font-bold animate-fadeIn">Nature in pixels</p>}
      {visibleLines >= 4 && (
        <p className="mt-3">
          Use the <span className="text-yellow-400">contact</span> command to reach out!
        </p>
      )}
    </div>
  );
};