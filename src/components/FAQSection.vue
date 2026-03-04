<script setup>
import { ref } from "vue";
import Title from "./Title.vue";

const list = ref([
  {
    question: "Open source kezako?",
    answer:
      "This word is so important to our club that it constitutes the very essence of its philosophy, but remains misinterpreted by the majority. The term was originally coined to designate computer software whose source code is open to all and to which anyone can contribute. Today, the concept has become widespread, and refers to the fact of having access to the source of a product's realization: the chemical composition of a drug, the plans for a piece of furniture or a house, the ingredients of a recipe... the source code of a software product...",
    isOpen: true,
  },
  {
    question: "How can I join the club?",
    answer:
      "You just need to follow us on social media and subscribe to be informed of our latest news and events.",
    isOpen: false,
  },
  {
    question: "How can I contribute to Open Minds Club projects?",
    answer:
      "You can contribute to our projects by participating in our events and sharing your knowledge and skills with the community, by proposing new projects or contributing to existing ones from our GitHub repository.",
    isOpen: false,
  },
  {
    question: "Where is the club located?",
    answer:
      "The Open Minds Club is located in the CRI at the University of Houari Boumediene, Bab Ezzouar, Algiers, Algeria.",
    isOpen: false,
  },
  {
    question: "What is the meaning of Open Minds Club slogan?",
    answer:
      'The slogan of OMC "Ce qui ne se partage pas se perd" means that knowledge is a treasure that grows when shared. It is a call to share knowledge and skills with the community.',
    isOpen: false,
  },
]);

function toggleAnswer(item) {
  item.isOpen = !item.isOpen;
}
</script>

<template>
  <section class="section faq">
    <Title class="title" text=">FAQ_⁉️" number="8" color="#fff"></Title>

    <div class="faq-list">
      <div
        class="faq-card"
        :class="{ 'is-open': item.isOpen }"
        v-for="(item, index) in list"
        :key="index"
      >
        <button
          class="faq-header"
          @click="toggleAnswer(item)"
          :aria-expanded="item.isOpen"
          :aria-controls="'faq-answer-' + index"
        >
          <span class="faq-number">{{ String(index + 1).padStart(2, '0') }}</span>
          <h3 class="faq-question">{{ item.question }}</h3>
          <span class="faq-toggle" :class="{ 'is-open': item.isOpen }">
            <span class="toggle-line toggle-horizontal"></span>
            <span class="toggle-line toggle-vertical"></span>
          </span>
        </button>
        <div
          class="faq-answer-wrapper"
          :class="{ 'is-open': item.isOpen }"
          :id="'faq-answer-' + index"
          role="region"
        >
          <div class="faq-answer">
            <p>{{ item.answer }}</p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
/* ======== FAQ SECTION ======== */
.faq {
  padding-bottom: 80px;
}

.faq-list {
  width: 100%;
  max-width: 800px;
  margin-top: 50px;
  display: flex;
  flex-direction: column;
  gap: 16px;
}

/* ---- Glassmorphism FAQ Card ---- */
.faq-card {
  position: relative;
  background: rgba(29, 28, 41, 0.55);
  backdrop-filter: blur(14px);
  -webkit-backdrop-filter: blur(14px);
  border: 1px solid rgba(127, 173, 244, 0.08);
  border-radius: 16px;
  overflow: hidden;
  transition:
    border-color 0.35s ease,
    box-shadow 0.35s ease,
    background 0.35s ease,
    transform 0.3s ease;
  box-shadow:
    0 2px 16px rgba(0, 0, 0, 0.2),
    0 0 8px rgba(49, 115, 187, 0.04);
}

/* Top edge glass highlight */
.faq-card::before {
  content: '';
  position: absolute;
  top: 0;
  left: 15%;
  right: 15%;
  height: 1px;
  background: linear-gradient(
    90deg,
    transparent,
    rgba(127, 173, 244, 0.2),
    rgba(255, 255, 255, 0.1),
    rgba(127, 173, 244, 0.2),
    transparent
  );
  z-index: 1;
  transition: opacity 0.35s ease;
  opacity: 0.6;
}

/* Hover state */
.faq-card:hover {
  border-color: rgba(127, 173, 244, 0.18);
  box-shadow:
    0 4px 24px rgba(0, 0, 0, 0.25),
    0 0 16px rgba(49, 115, 187, 0.1);
  background: rgba(29, 28, 41, 0.65);
  transform: translateY(-1px);
}
.faq-card:hover::before {
  opacity: 1;
}

/* Open state */
.faq-card.is-open {
  border-color: rgba(127, 173, 244, 0.2);
  box-shadow:
    0 4px 28px rgba(0, 0, 0, 0.3),
    0 0 20px rgba(49, 115, 187, 0.12);
  background: rgba(29, 28, 41, 0.7);
}

/* ---- FAQ Header (the clickable button) ---- */
.faq-header {
  display: flex;
  align-items: center;
  gap: 16px;
  width: 100%;
  padding: 22px 24px;
  background: none;
  border: none;
  cursor: pointer;
  text-align: left;
  color: inherit;
  font-family: inherit;
  position: relative;
  z-index: 2;
  transition: padding 0.3s ease;
}

.faq-header:focus-visible {
  outline: 2px solid rgba(127, 173, 244, 0.6);
  outline-offset: -2px;
  border-radius: 16px;
}

/* Numbering accent */
.faq-number {
  font-family: 'Ubuntu Mono', monospace;
  font-size: 13px;
  font-weight: 700;
  color: #3173BB;
  opacity: 0.6;
  letter-spacing: 1px;
  flex-shrink: 0;
  transition: opacity 0.3s ease, color 0.3s ease;
}
.faq-card:hover .faq-number,
.faq-card.is-open .faq-number {
  opacity: 1;
  color: #7fadf4;
}

/* Question text */
.faq-question {
  flex: 1;
  font-size: 18px;
  font-weight: 600;
  color: #e0e4ec;
  line-height: 1.4;
  letter-spacing: 0.2px;
  transition: color 0.3s ease;
}
.faq-card:hover .faq-question {
  color: #f0f2f8;
}
.faq-card.is-open .faq-question {
  color: #fff;
}

/* ---- CSS-only Toggle Icon (replaces plus/minus SVGs) ---- */
.faq-toggle {
  position: relative;
  width: 36px;
  height: 36px;
  flex-shrink: 0;
  border-radius: 10px;
  background: rgba(49, 115, 187, 0.1);
  border: 1px solid rgba(127, 173, 244, 0.15);
  transition:
    background 0.3s ease,
    border-color 0.3s ease,
    box-shadow 0.3s ease;
}
.faq-card:hover .faq-toggle {
  background: rgba(49, 115, 187, 0.18);
  border-color: rgba(127, 173, 244, 0.3);
  box-shadow: 0 0 12px rgba(49, 115, 187, 0.15);
}

.toggle-line {
  position: absolute;
  background: #7fadf4;
  border-radius: 2px;
  transition: transform 0.35s cubic-bezier(0.25, 0.46, 0.45, 0.94),
              opacity 0.3s ease;
}

/* Horizontal line (always visible — forms the minus) */
.toggle-horizontal {
  width: 14px;
  height: 2px;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}

/* Vertical line (forms the plus — rotates away when open) */
.toggle-vertical {
  width: 2px;
  height: 14px;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}

.faq-toggle.is-open .toggle-vertical {
  transform: translate(-50%, -50%) rotate(90deg);
  opacity: 0;
}

/* ---- Answer expand/collapse ---- */
.faq-answer-wrapper {
  display: grid;
  grid-template-rows: 0fr;
  transition: grid-template-rows 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94);
}

.faq-answer-wrapper.is-open {
  grid-template-rows: 1fr;
}

.faq-answer {
  overflow: hidden;
}

.faq-answer p {
  padding: 0 24px 22px 56px;
  font-family: 'Ubuntu Mono', monospace;
  font-size: 16px;
  line-height: 1.7;
  color: #9ca3b4;
  opacity: 0;
  transform: translateY(-8px);
  transition: opacity 0.35s ease 0.1s, transform 0.35s ease 0.1s;
}
.faq-answer-wrapper.is-open .faq-answer p {
  opacity: 1;
  transform: translateY(0);
}

/* Separator line between header and answer when open */
.faq-card.is-open .faq-header {
  padding-bottom: 16px;
}
.faq-card.is-open .faq-header::after {
  content: '';
  position: absolute;
  bottom: 0;
  left: 56px;
  right: 24px;
  height: 1px;
  background: linear-gradient(
    90deg,
    rgba(127, 173, 244, 0.2),
    rgba(127, 173, 244, 0.08),
    transparent
  );
}

/* ---- Responsive: mobile ---- */
@media (max-width: 700px) {
  .faq-list {
    margin-top: 30px;
    gap: 12px;
  }

  .faq-header {
    padding: 16px 16px;
    gap: 12px;
  }

  .faq-number {
    font-size: 11px;
  }

  .faq-question {
    font-size: 15px;
  }

  .faq-toggle {
    width: 32px;
    height: 32px;
    border-radius: 8px;
  }
  .toggle-horizontal {
    width: 12px;
  }
  .toggle-vertical {
    height: 12px;
  }

  .faq-answer p {
    padding: 0 16px 16px 40px;
    font-size: 14px;
    line-height: 1.6;
  }

  .faq-card.is-open .faq-header::after {
    left: 40px;
    right: 16px;
  }
}

/* ---- Reduced motion ---- */
@media (prefers-reduced-motion: reduce) {
  .faq-card,
  .faq-toggle,
  .toggle-line,
  .faq-answer-wrapper,
  .faq-answer p,
  .faq-number,
  .faq-question {
    transition: none !important;
  }
  .faq-answer-wrapper {
    /* Instant show/hide for reduced motion */
    grid-template-rows: 0fr;
  }
  .faq-answer-wrapper.is-open {
    grid-template-rows: 1fr;
  }
  .faq-answer p {
    opacity: 1;
    transform: none;
  }
}
</style>
