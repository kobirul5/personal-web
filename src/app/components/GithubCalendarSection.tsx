"use client";

import React, { useEffect, useState } from 'react';
import { GitHubCalendar } from 'react-github-calendar';
import Heading from "@/components/Heading";

const GithubCalendarSection = () => {
  const [theme, setTheme] = useState<"light" | "dark">("dark");

  useEffect(() => {
    // Initial check
    if (typeof document !== 'undefined') {
      setTheme(document.documentElement.classList.contains("dark") ? "dark" : "light");
      
      // Observer for class changes on HTML element
      const observer = new MutationObserver((mutations) => {
        mutations.forEach((mutation) => {
          if (mutation.attributeName === "class") {
            const isDark = document.documentElement.classList.contains("dark");
            setTheme(isDark ? "dark" : "light");
          }
        });
      });

      observer.observe(document.documentElement, {
        attributes: true,
        attributeFilter: ["class"]
      });

      return () => observer.disconnect();
    }
  }, []);

  return (
    <div className="flex flex-col items-center justify-center w-full my-10 overflow-hidden">
      <Heading 
        subTitle="Contributions"
        title1="My Github"
        title2="Calendar"
      />
      <div className="w-full overflow-x-auto pb-4 flex justify-center">
        <div className="min-w-max p-4 md:p-8 bg-card rounded-2xl border border-border shadow-sm">
          <GitHubCalendar 
            username="kobirul5" 
            colorScheme={theme}
            blockSize={14}
            blockMargin={4}
            fontSize={14}
          />
        </div>
      </div>
    </div>
  );
};

export default GithubCalendarSection;
