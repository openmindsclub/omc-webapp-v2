<script setup>
import { ref, onMounted, onUnmounted } from "vue";
import omclogo from "../assets/svg/omc-logo.svg";
import Hand from "../Images/Hand.svg";
import Events from "../Images/Event.svg";
import Pazel from "../Images/Pazel.svg";

const isOpen = ref(false);
const isScrolled = ref(false);

function toggleMenu() {
  isOpen.value = !isOpen.value;
  document.body.style.overflow = isOpen.value ? "hidden" : "";
}

function closeMenu() {
  isOpen.value = false;
  document.body.style.overflow = "";
}

function handleScroll() {
  isScrolled.value = window.scrollY > 40;
}

onMounted(() => {
  window.addEventListener("scroll", handleScroll, { passive: true });
  handleScroll();
});

onUnmounted(() => {
  window.removeEventListener("scroll", handleScroll);
  document.body.style.overflow = "";
});

const navLinks = [
  { key: "button-about", href: "#about", icon: Hand },
  { key: "button-events", href: "#events", icon: Events },
  { key: "button-projects", href: "#activities", icon: Pazel },
];
</script>

<template>
  <nav class="navbar" :class="{ scrolled: isScrolled }">
    <div class="nav-inner">
      <a href="#" class="logo-link">
        <img class="logo" :src="omclogo" alt="Open Minds Club" />
      </a>

      <!-- Desktop nav links -->
      <ul class="nav-links">
        <li v-for="link in navLinks" :key="link.key">
          <a :href="link.href" class="nav-link">
            <span>{{ $t(link.key) }}</span>
            <img :src="link.icon" alt="" class="nav-icon" />
          </a>
        </li>
        <li class="lang-item">
          <select v-model="$i18n.locale" class="lang-select" aria-label="Language">
            <option
              v-for="loc in $i18n.availableLocales"
              :key="loc"
              :value="loc"
            >
              {{ loc.toUpperCase() }}
            </option>
          </select>
        </li>
      </ul>

      <!-- Mobile hamburger button -->
      <button
        class="hamburger"
        :class="{ 'is-open': isOpen }"
        @click="toggleMenu"
        :aria-expanded="isOpen"
        aria-label="Toggle navigation menu"
      >
        <span class="hamburger-line line-1"></span>
        <span class="hamburger-line line-2"></span>
        <span class="hamburger-line line-3"></span>
      </button>
    </div>
  </nav>

  <!-- Mobile fullscreen overlay — outside nav to avoid backdrop-filter containing block -->
  <Teleport to="body">
    <Transition name="overlay">
      <div v-if="isOpen" class="mobile-overlay" @click.self="closeMenu">
        <div class="mobile-menu">
          <ul class="mobile-links">
            <li
              v-for="(link, index) in navLinks"
              :key="link.key"
              class="mobile-link-item"
              :style="{ '--delay': index * 0.08 + 's' }"
            >
              <a :href="link.href" class="mobile-link" @click="closeMenu">
                <img :src="link.icon" alt="" class="mobile-icon" />
                <span>{{ $t(link.key) }}</span>
              </a>
            </li>
            <li
              class="mobile-link-item mobile-lang"
              :style="{ '--delay': navLinks.length * 0.08 + 's' }"
            >
              <select v-model="$i18n.locale" class="lang-select mobile-lang-select" aria-label="Language">
                <option
                  v-for="loc in $i18n.availableLocales"
                  :key="loc"
                  :value="loc"
                >
                  {{ loc.toUpperCase() }}
                </option>
              </select>
            </li>
          </ul>
        </div>
      </div>
    </Transition>
  </Teleport>
</template>

<style scoped>
/* ======== GLASSMORPHISM NAVBAR ======== */

.navbar {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 100;
  background: rgba(4, 9, 15, 0.7);
  backdrop-filter: blur(14px);
  -webkit-backdrop-filter: blur(14px);
  border-bottom: 1px solid rgba(127, 173, 244, 0.1);
  /* Only transition visual properties — never layout/position */
  transition:
    background 0.4s ease,
    border-color 0.35s ease,
    box-shadow 0.4s ease;
}

.navbar.scrolled {
  background: rgba(4, 9, 15, 0.88);
  border-bottom-color: rgba(127, 173, 244, 0.15);
  box-shadow:
    0 2px 20px rgba(0, 0, 0, 0.3),
    0 0 10px rgba(49, 115, 187, 0.08);
}

.nav-inner {
  display: flex;
  align-items: center;
  justify-content: space-between;
  max-width: 1400px;
  margin: 0 auto;
  padding: 14px 5%;
}

/* ---- Logo ---- */
.logo-link {
  display: flex;
  align-items: center;
  flex-shrink: 0;
  transition: opacity 0.3s ease;
}
.logo-link:hover {
  opacity: 0.85;
}
.logo {
  width: 48px;
  height: auto;
}

/* ---- Desktop Nav Links ---- */
.nav-links {
  display: flex;
  align-items: center;
  gap: 8px;
  list-style: none;
  margin: 0;
  padding: 0;
}

.nav-link {
  display: flex;
  align-items: center;
  gap: 6px;
  padding: 8px 14px;
  border-radius: 10px;
  font-size: 15px;
  font-weight: 500;
  color: #c0c8d8;
  text-decoration: none;
  position: relative;
  transition:
    color 0.3s ease,
    background 0.3s ease;
}
.nav-link:hover {
  color: #fff;
  background: rgba(49, 115, 187, 0.1);
}

/* Blue underline glow on hover */
.nav-link::after {
  content: '';
  position: absolute;
  bottom: 2px;
  left: 20%;
  right: 20%;
  height: 2px;
  border-radius: 1px;
  background: #3173BB;
  opacity: 0;
  transform: scaleX(0);
  transition: transform 0.3s ease, opacity 0.3s ease;
}
.nav-link:hover::after {
  opacity: 1;
  transform: scaleX(1);
}

.nav-icon {
  width: 18px;
  height: 18px;
  flex-shrink: 0;
}

/* ---- Language Selector ---- */
.lang-item {
  margin-left: 8px;
}
.lang-select {
  appearance: none;
  -webkit-appearance: none;
  background: rgba(49, 115, 187, 0.1);
  border: 1px solid rgba(127, 173, 244, 0.2);
  border-radius: 8px;
  padding: 6px 12px;
  font-size: 13px;
  font-weight: 600;
  font-family: 'Ubuntu Mono', monospace;
  letter-spacing: 1px;
  color: #7fadf4;
  cursor: pointer;
  transition: background 0.3s ease, border-color 0.3s ease;
  /* Custom dropdown arrow */
  background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='10' height='6' fill='none'%3E%3Cpath d='M1 1l4 4 4-4' stroke='%237fadf4' stroke-width='1.5' stroke-linecap='round' stroke-linejoin='round'/%3E%3C/svg%3E");
  background-repeat: no-repeat;
  background-position: right 8px center;
  padding-right: 26px;
}
.lang-select:hover {
  background: rgba(49, 115, 187, 0.2);
  border-color: rgba(127, 173, 244, 0.35);
}
.lang-select:focus-visible {
  outline: 2px solid rgba(127, 173, 244, 0.5);
  outline-offset: 1px;
}
.lang-select option {
  background: #1e1f21;
  color: #c0c8d8;
}

/* ---- Hamburger Button (mobile only, hidden on desktop) ---- */
.hamburger {
  display: none;
  position: relative;
  width: 40px;
  height: 40px;
  background: none;
  border: none;
  cursor: pointer;
  padding: 8px;
  z-index: 110;
  border-radius: 8px;
  transition: background 0.3s ease;
}
.hamburger:hover {
  background: rgba(127, 173, 244, 0.08);
}
.hamburger:focus-visible {
  outline: 2px solid rgba(127, 173, 244, 0.5);
  outline-offset: 2px;
}

.hamburger-line {
  display: block;
  position: absolute;
  left: 8px;
  width: 24px;
  height: 2px;
  background: #c0c8d8;
  border-radius: 2px;
  transition:
    transform 0.35s cubic-bezier(0.25, 0.46, 0.45, 0.94),
    opacity 0.25s ease,
    background 0.3s ease;
}
.line-1 { top: 12px; }
.line-2 { top: 19px; }
.line-3 { top: 26px; }

/* Morph to X */
.hamburger.is-open .line-1 {
  top: 19px;
  transform: rotate(45deg);
  background: #7fadf4;
}
.hamburger.is-open .line-2 {
  opacity: 0;
  transform: scaleX(0);
}
.hamburger.is-open .line-3 {
  top: 19px;
  transform: rotate(-45deg);
  background: #7fadf4;
}

/* ---- Focus styles for nav links ---- */
.nav-link:focus-visible {
  outline: 2px solid rgba(127, 173, 244, 0.5);
  outline-offset: 2px;
  border-radius: 10px;
}

/* ---- Responsive: show mobile elements ---- */
@media (max-width: 950px) {
  .nav-links {
    display: none;
  }
  .hamburger {
    display: block;
  }
}

/* ---- Reduced motion ---- */
@media (prefers-reduced-motion: reduce) {
  .navbar,
  .nav-link,
  .nav-link::after,
  .hamburger-line,
  .lang-select {
    transition: none !important;
  }
}
</style>

<!-- Unscoped styles for Teleported overlay (rendered outside component DOM) -->
<style>
/* ---- Mobile Fullscreen Overlay (teleported to body) ---- */
.mobile-overlay {
  position: fixed;
  inset: 0;
  z-index: 105;
  background: rgba(4, 9, 15, 0.92);
  backdrop-filter: blur(20px);
  -webkit-backdrop-filter: blur(20px);
  display: flex;
  align-items: center;
  justify-content: center;
}

/* Overlay enter/leave transitions */
.overlay-enter-active {
  transition: opacity 0.35s ease;
}
.overlay-leave-active {
  transition: opacity 0.25s ease;
}
.overlay-enter-from,
.overlay-leave-to {
  opacity: 0;
}

.mobile-menu {
  width: 100%;
  max-width: 400px;
  padding: 0 24px;
}

.mobile-links {
  list-style: none;
  margin: 0;
  padding: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;
}

.mobile-link-item {
  width: 100%;
  opacity: 0;
  transform: translateY(16px);
  animation: mobile-link-in 0.4s ease forwards;
  animation-delay: var(--delay, 0s);
}

@keyframes mobile-link-in {
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.mobile-link {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 12px;
  width: 100%;
  padding: 18px 24px;
  border-radius: 14px;
  font-size: 20px;
  font-weight: 600;
  color: #e0e4ec;
  text-decoration: none;
  background: rgba(29, 28, 41, 0.5);
  border: 1px solid rgba(127, 173, 244, 0.08);
  transition:
    background 0.3s ease,
    border-color 0.3s ease,
    color 0.3s ease,
    box-shadow 0.3s ease,
    transform 0.2s ease;
}
.mobile-link:hover {
  background: rgba(49, 115, 187, 0.15);
  border-color: rgba(127, 173, 244, 0.2);
  color: #fff;
  box-shadow: 0 0 16px rgba(49, 115, 187, 0.1);
  transform: translateY(-1px);
}
.mobile-link:active {
  transform: scale(0.98);
}

.mobile-icon {
  width: 22px;
  height: 22px;
  flex-shrink: 0;
}

/* Mobile language selector */
.mobile-lang {
  margin-top: 16px;
}
.mobile-lang-select {
  width: 100%;
  text-align: center;
  padding: 14px 24px;
  font-size: 16px;
  border-radius: 14px;
  appearance: none;
  -webkit-appearance: none;
  background-color: rgba(29, 28, 41, 0.5);
  border: 1px solid rgba(127, 173, 244, 0.08);
  font-family: 'Ubuntu Mono', monospace;
  font-weight: 600;
  letter-spacing: 1px;
  color: #7fadf4;
  cursor: pointer;
  background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='10' height='6' fill='none'%3E%3Cpath d='M1 1l4 4 4-4' stroke='%237fadf4' stroke-width='1.5' stroke-linecap='round' stroke-linejoin='round'/%3E%3C/svg%3E");
  background-repeat: no-repeat;
  background-position: right 16px center;
  padding-right: 36px;
}
.mobile-lang-select:hover {
  background-color: rgba(49, 115, 187, 0.15);
  border-color: rgba(127, 173, 244, 0.2);
}
.mobile-lang-select option {
  background: #1e1f21;
  color: #c0c8d8;
}

.mobile-link:focus-visible {
  outline: 2px solid rgba(127, 173, 244, 0.5);
  outline-offset: 2px;
}

@media (prefers-reduced-motion: reduce) {
  .mobile-link,
  .mobile-lang-select {
    transition: none !important;
  }
  .mobile-link-item {
    animation: none !important;
    opacity: 1;
    transform: none;
  }
  .overlay-enter-active,
  .overlay-leave-active {
    transition: none !important;
  }
}
</style>
