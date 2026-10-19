import { useEffect, useRef, useState } from "react";
import type { ReactNode } from "react";
import styles from "./ImageLightbox.module.css";

type Props = { src: string; alt: string; children: ReactNode; className?: string };

export default function ImageLightbox({ src, alt, children, className }: Props) {
  const [open, setOpen] = useState(false);
  const dialogRef = useRef<HTMLDialogElement>(null);
  const triggerRef = useRef<HTMLButtonElement>(null);
  const gesture = useRef({ x: 0, y: 0, moved: false, scroll: 0 });

  useEffect(() => {
    if (!open) return;
    const dialog = dialogRef.current!;
    const trigger = triggerRef.current;
    const y = window.scrollY;
    const bodyStyle = document.body.getAttribute("style");
    dialog.showModal();
    Object.assign(document.body.style, { position: "fixed", top: "-" + y + "px", width: "100%", overflow: "hidden" });
    dialog.querySelector<HTMLButtonElement>("button")?.focus();
    return () => {
      dialog.close();
      if (bodyStyle === null) document.body.removeAttribute("style");
      else document.body.setAttribute("style", bodyStyle);
      const html = document.documentElement;
      const behavior = html.style.scrollBehavior;
      html.style.scrollBehavior = "auto";
      window.scrollTo(0, y);
      html.style.scrollBehavior = behavior;
      trigger?.focus({ preventScroll: true });
    };
  }, [open]);

  return <>
    <button type="button" ref={triggerRef} className={styles.trigger + " " + (className ?? "")}
      aria-label={"Ampliar fotografía: " + alt} aria-haspopup="dialog"
      onDragStart={event => event.preventDefault()}
      onPointerEnter={event => {
        if (event.pointerType === "mouse") {
          const button = event.currentTarget;
          const rect = button.getBoundingClientRect();
          button.style.setProperty("--cursor-x", (event.clientX - rect.left) + "px");
          button.style.setProperty("--cursor-y", (event.clientY - rect.top) + "px");
          button.dataset.mouse = "true";
        }
      }}
      onPointerLeave={event => { delete event.currentTarget.dataset.mouse; }}
      onPointerDown={event => {
        gesture.current = { x: event.clientX, y: event.clientY, moved: false, scroll: event.currentTarget.closest('[role="region"]')?.scrollLeft ?? 0 };
      }}
      onPointerMove={event => {
        if (Math.hypot(event.clientX - gesture.current.x, event.clientY - gesture.current.y) > 8) gesture.current.moved = true;
        if (event.pointerType === "mouse") {
          const button = event.currentTarget;
          const rect = button.getBoundingClientRect();
          button.style.setProperty("--cursor-x", (event.clientX - rect.left) + "px");
          button.style.setProperty("--cursor-y", (event.clientY - rect.top) + "px");
        }
      }}
      onPointerCancel={() => { gesture.current.moved = true; }}
      onClick={event => {
        const scroll = event.currentTarget.closest('[role="region"]')?.scrollLeft ?? 0;
        if (event.detail === 0 || (!gesture.current.moved && Math.abs(scroll - gesture.current.scroll) < 8)) setOpen(true);
      }}>
      {children}
      <span data-photo-cursor className={styles.photoCursor} aria-hidden="true" />
    </button>
    <dialog ref={dialogRef} className={styles.dialog} aria-label={alt} aria-modal="true"
      onCancel={() => setOpen(false)}
      onClick={event => { if (event.target === event.currentTarget) setOpen(false); }}>
      <button type="button" className={styles.close} aria-label="Cerrar fotografía" onClick={() => setOpen(false)}>×</button>
      {open && <img className={styles.fullImage} src={src} alt={alt} />}
    </dialog>
  </>;
}
