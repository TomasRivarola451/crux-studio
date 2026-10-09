import { useEffect } from "react";
export function useScrollReveal() {
 useEffect(() => {
  const media = window.matchMedia("(prefers-reduced-motion: reduce)");
  if(media.matches || !("IntersectionObserver" in window)) return;
  const elements = document.querySelectorAll<HTMLElement>("[data-reveal]");
  const observer = new IntersectionObserver(entries => entries.forEach(entry => {
   if(entry.isIntersecting) { entry.target.classList.remove("reveal-pending"); observer.unobserve(entry.target); }
  }),{threshold:0.12});
  elements.forEach(el => { el.classList.add("reveal-pending"); observer.observe(el); });
  const show = () => { if(media.matches) { observer.disconnect(); elements.forEach(el=>el.classList.remove("reveal-pending")); } };
  media.addEventListener("change",show);
  return () => { observer.disconnect(); elements.forEach(el=>el.classList.remove("reveal-pending")); media.removeEventListener("change",show); };
 },[]);
}
