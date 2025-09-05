import { useEffect, useRef } from "react";

export function useAutoScroll(messages) {
  const containerRef = useRef(null);
  useEffect(() => {
    const containerElem = containerRef.current;
    if (containerElem) {
      containerElem.scrollTop = containerElem.scrollHeight;
    }
  }, [messages]);
  return containerRef;
}
