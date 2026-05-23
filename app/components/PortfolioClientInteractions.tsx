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
