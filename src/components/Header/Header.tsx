import { useEffect, useRef, useState } from "react";
import styles from "./Header.module.css";
import { STUDIO_NAME, WHATSAPP_LINK } from "../../constants";
const links = [{label:"Trabajos",href:"#trabajos"},{label:"Sobre mí",href:"#sobre-mi"},{label:"Estilos",href:"#estilos"},{label:"Contacto",href:"#contacto"}];
export default function Header() {
  const [open,setOpen] = useState(false);
  const toggle = useRef<HTMLButtonElement>(null);
  const menu = useRef<HTMLDialogElement>(null);
  const destination = useRef<string | null>(null);
  useEffect(() => {
    if (!open) return;
    const dialog = menu.current!;
    const trigger = toggle.current;
    const y = window.scrollY;
    const previous = document.body.getAttribute("style");
    dialog.showModal();
    Object.assign(document.body.style,{position:"fixed",top:`-${y}px`,width:"100%",overflow:"hidden"});
    dialog.querySelector<HTMLButtonElement>("button")?.focus();
    const media = window.matchMedia("(min-width: 769px)");
    const resize = () => { if(media.matches) setOpen(false); };
    media.addEventListener("change",resize);
    return () => {
      dialog.close();
      if(previous === null) document.body.removeAttribute("style"); else document.body.setAttribute("style",previous);
      const html = document.documentElement;
      const behavior = html.style.scrollBehavior;
      html.style.scrollBehavior = "auto";
      window.scrollTo(0,y);
      html.style.scrollBehavior = behavior;
      trigger?.focus({preventScroll:true});
      const targetId = destination.current;
      destination.current = null;
      if (targetId) {
        requestAnimationFrame(() => {
          const target = document.getElementById(targetId);
          if (target) {
            history.pushState(null, "", `#${targetId}`);
            target.setAttribute("tabindex", "-1");
            target.focus({preventScroll:true});
            target.scrollIntoView({behavior: window.matchMedia("(prefers-reduced-motion: reduce)").matches ? "instant" : "smooth"});
            target.addEventListener("blur", () => target.removeAttribute("tabindex"), {once:true});
          }
        });
      }
      media.removeEventListener("change",resize);
    };
  },[open]);
  const close = () => setOpen(false);
  return <header className={styles.header}>
    <a href="#" className={styles.logo}>{STUDIO_NAME}</a>
    <nav className={styles.nav} aria-label="Navegación principal">{links.map(link => <a key={link.href} href={link.href} className={styles.navLink}>{link.label}</a>)}</nav>
    <button ref={toggle} type="button" className={styles.toggle} aria-label="Abrir menú" aria-expanded={open} aria-controls="mobile-menu" onClick={()=>setOpen(true)}><span/><span/></button>
    <dialog ref={menu} id="mobile-menu" className={styles.menu} aria-label="Menú de navegación" onCancel={close}>
      <div className={styles.menuTop}><a href="#" className={styles.logo} onClick={close}>{STUDIO_NAME}</a><button type="button" className={`${styles.toggle} ${styles.close}`} aria-label="Cerrar menú" onClick={close}><span/><span/></button></div>
      <nav className={styles.mobileNav} aria-label="Navegación mobile">{links.map(link=><a key={link.href} href={link.href} onClick={event => { event.preventDefault(); destination.current = link.href.slice(1); close(); }}>{link.label}</a>)}<a className={styles.menuCta} href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer" onClick={close}>Reservar turno <span aria-hidden="true">→</span></a></nav>
    </dialog>
  </header>;
}
