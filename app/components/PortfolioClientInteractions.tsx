"use client";

import { useEffect } from "react";

export default function PortfolioClientInteractions() {
  useEffect(() => {
    const controller = new AbortController();
    const { signal } = controller;

    const menuBtn = document.getElementById("menuBtn");
    const navLinks = document.getElementById("navLinks");

    menuBtn?.addEventListener(
      "click",
      () => {
        navLinks?.classList.toggle("show");
      },
      { signal }
    );

    navLinks?.querySelectorAll("a").forEach((link) => {
      link.addEventListener(
        "click",
        () => {
          navLinks.classList.remove("show");
        },
        { signal }
      );
    });

    document.querySelectorAll(".job-head").forEach((head) => {
      head.addEventListener(
        "click",
        () => {
          const job = head.parentElement;
          const body = job?.querySelector<HTMLElement>(".job-body");
          if (!job || !body) {
            return;
          }

          const isOpen = job.classList.contains("open");
          if (isOpen) {
            job.classList.remove("open");
            body.style.maxHeight = "";
          } else {
            job.classList.add("open");
            body.style.maxHeight = `${body.scrollHeight}px`;
          }
        },
        { signal }
      );
    });

    window.addEventListener(
      "load",
      () => {
        const firstOpenBody = document.querySelector<HTMLElement>(".job.open .job-body");
        if (firstOpenBody) {
          firstOpenBody.style.maxHeight = `${firstOpenBody.scrollHeight}px`;
        }
      },
      { signal }
    );

    const carTrack = document.getElementById("carTrack");
    const carDots = document.getElementById("carDots");
    const carPrev = document.getElementById("carPrev");
    const carNext = document.getElementById("carNext");
    const carousel = document.querySelector(".carousel");
    const slides = carTrack ? Array.from(carTrack.children) : [];

    if (carTrack && carDots && slides.length > 0) {
      let index = 0;
      let timer: ReturnType<typeof setInterval> | null = null;

      slides.forEach((_, i) => {
        const dot = document.createElement("button");
        dot.setAttribute("aria-label", `Go to slide ${i + 1}`);
        if (i === 0) {
          dot.classList.add("on");
        }
        dot.addEventListener("click", () => go(i), { signal });
        carDots.appendChild(dot);
      });

      const dots = Array.from(carDots.querySelectorAll("button"));

      const restart = () => {
        if (timer) {
          clearInterval(timer);
        }
        timer = setInterval(() => go(index + 1), 6500);
      };

      const go = (next: number) => {
        index = (next + slides.length) % slides.length;
        carTrack.style.transform = `translateX(-${index * 100}%)`;
        dots.forEach((dot, dotIndex) => dot.classList.toggle("on", dotIndex === index));
      };

      carPrev?.addEventListener(
        "click",
        () => {
          go(index - 1);
          restart();
        },
        { signal }
      );

      carNext?.addEventListener(
        "click",
        () => {
          go(index + 1);
          restart();
        },
        { signal }
      );

      carousel?.addEventListener(
        "mouseenter",
        () => {
          if (timer) {
            clearInterval(timer);
          }
        },
        { signal }
      );

      carousel?.addEventListener(
        "mouseleave",
        () => {
          if (slides.length > 1) {
            restart();
          }
        },
        { signal }
      );

      if (slides.length > 1) {
        restart();
      }
    }

    document.addEventListener(
      "click",
      (event) => {
        const target = event.target as HTMLElement | null;
        const button = target?.closest(".load-li") as HTMLElement | null;
        if (!button) {
          return;
        }

        const src = button.dataset.embed;
        const height = button.dataset.h ?? "760";
        if (!src) {
          return;
        }

        const iframeHtml = `<iframe loading="lazy" src="${src}" style="height:${height}px" title="LinkedIn post"></iframe>`;
        const slide = button.closest(".slide");
        const post = button.closest(".post");

        if (slide) {
          slide.classList.add("embed-slide");
          slide.innerHTML = `${iframeHtml}<div class="embed-scrollnote">scroll inside the post - if blank, open on LinkedIn</div>`;
          return;
        }

        if (post) {
          post.classList.add("has-embed");
          post.innerHTML = `<div class="embed-wrap">${iframeHtml}</div>`;
        }
      },
      { signal }
    );

    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("in");
            io.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12 }
    );

    document.querySelectorAll(".reveal").forEach((el) => io.observe(el));

    return () => {
      io.disconnect();
      controller.abort();
    };
  }, []);

  return null;
}
