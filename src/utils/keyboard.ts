import { useEffect } from 'react';

function isTypingTarget(target: EventTarget | null): boolean {
  if (!(target instanceof HTMLElement)) return false;
  return target.isContentEditable || ['INPUT', 'TEXTAREA', 'SELECT'].includes(target.tagName);
}

export function useArrowKeys(onLeft: (() => void) | undefined, onRight: (() => void) | undefined, enabled = true) {
  useEffect(() => {
    if (!enabled) return;
    function handle(event: KeyboardEvent) {
      if (event.altKey || event.ctrlKey || event.metaKey || event.shiftKey) return;
      if (isTypingTarget(event.target)) return;
      if (event.key === 'ArrowLeft' && onLeft) {
        event.preventDefault();
        onLeft();
      } else if (event.key === 'ArrowRight' && onRight) {
        event.preventDefault();
        onRight();
      }
    }
    window.addEventListener('keydown', handle);
    return () => window.removeEventListener('keydown', handle);
  }, [onLeft, onRight, enabled]);
}
