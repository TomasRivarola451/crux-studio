import { useEffect } from "react";
import type { RefObject } from "react";

// Touch scrolling stays native. Mouse movement over 8px becomes a drag.
export function useCarouselDrag(ref: RefObject<HTMLDivElement | null>) {
  useEffect(() => {
    const track = ref.current;
    if (!track) return;
    let start: { x: number; y: number; scroll: number; id: number } | null = null;
    let dragging = false;
    let suppressClick = false;
    const down = (event: PointerEvent) => {
      if (event.pointerType !== "mouse" || event.button !== 0) return;
      suppressClick = false;
      start = { x: event.clientX, y: event.clientY, scroll: track.scrollLeft, id: event.pointerId };
    };
    const move = (event: PointerEvent) => {
      if (!start || event.pointerId !== start.id) return;
      const dx = event.clientX - start.x;
      const dy = event.clientY - start.y;
      if (!dragging) {
        if (Math.abs(dx) < 8 || Math.abs(dx) <= Math.abs(dy)) return;
        dragging = true;
        suppressClick = true;
        track.dataset.dragging = "true";
        track.setPointerCapture(event.pointerId);
      }
      event.preventDefault();
      track.scrollLeft = start.scroll - dx;
    };
    const finish = () => {
      start = null;
      dragging = false;
      delete track.dataset.dragging;
    };
    const click = (event: MouseEvent) => {
      if (suppressClick && event.detail !== 0) {
        event.preventDefault();
        event.stopPropagation();
        suppressClick = false;
      }
    };
    const preventNativeDrag = (event: DragEvent) => event.preventDefault();
    track.addEventListener("pointerdown", down);
    track.addEventListener("pointermove", move, { passive: false });
    track.addEventListener("pointerup", finish);
    track.addEventListener("pointercancel", finish);
    track.addEventListener("lostpointercapture", finish);
    track.addEventListener("click", click, true);
    track.addEventListener("dragstart", preventNativeDrag);
    return () => {
      finish();
      track.removeEventListener("pointerdown", down);
      track.removeEventListener("pointermove", move);
      track.removeEventListener("pointerup", finish);
      track.removeEventListener("pointercancel", finish);
      track.removeEventListener("lostpointercapture", finish);
      track.removeEventListener("click", click, true);
      track.removeEventListener("dragstart", preventNativeDrag);
    };
  }, [ref]);
}
