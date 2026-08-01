"use client";

import React, { useEffect, useState } from "react";
import { GitHubCalendar } from "react-github-calendar";
import Heading from "@/components/Heading";
import { Flame, Target, BookMarked, Code2 } from "lucide-react";

interface GithubStats {
  totalContributions: number;
  longestStreak: number;
  publicRepos: number;
  topLanguage: string;
}

const GithubCalendarSection = () => {
  const [theme, setTheme] = useState<"light" | "dark">("dark");
  const [stats, setStats] = useState<GithubStats | null>(null);

  useEffect(() => {
    // Theme observer logic
    if (typeof document !== "undefined") {
      setTheme(
        document.documentElement.classList.contains("dark") ? "dark" : "light"
      );

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
        attributeFilter: ["class"],
      });

      return () => observer.disconnect();
    }
  }, []);

  useEffect(() => {
    // Fetch Github Stats for Calendar (Total Contributions, Streak, Repos, Top Language)
    const fetchGithubStats = async () => {
      try {
        const [contributionsRes, userRes, reposRes] = await Promise.all([
          fetch("https://github-contributions-api.jogruber.de/v4/kobirul5?y=last"),
          fetch("https://api.github.com/users/kobirul5"),
          fetch("https://api.github.com/users/kobirul5/repos?per_page=100")
        ]);
        
        const data = await contributionsRes.json();
        const userData = await userRes.json();
        const reposData = await reposRes.json();
        
        // Calculate Longest Streak
        let currentStreak = 0;
        let longestStreak = 0;
        
        if (data && data.contributions) {
          data.contributions.forEach((day: { count: number }) => {
            if (day.count > 0) {
              currentStreak++;
              longestStreak = Math.max(longestStreak, currentStreak);
            } else {
              currentStreak = 0;
            }
          });
        }

        // Calculate Top Language
        const langs: Record<string, number> = {};
        if (Array.isArray(reposData)) {
          reposData.forEach((r: any) => {
            if (r.language) {
              langs[r.language] = (langs[r.language] || 0) + 1;
            }
          });
        }
        const topLanguage = Object.entries(langs).sort((a, b) => b[1] - a[1])[0]?.[0] || "N/A";

        setStats({
          totalContributions: data?.total?.lastYear || 0,
          longestStreak: longestStreak,
          publicRepos: userData?.public_repos || 0,
          topLanguage: topLanguage,
        });
      } catch (error) {
        console.error("Failed to fetch Github stats", error);
      }
    };

    fetchGithubStats();
  }, []);

  // Custom orange theme to match the primaryColor (#ff6421)
  const customTheme = {
    light: ["#f1f5f9", "#ffd8c8", "#ffb291", "#ff8b5a", "#ff6421"],
    dark: ["#1e293b", "#5c2b17", "#993d18", "#cc4e1a", "#ff6421"],
  };

  return (
    <div className="flex flex-col items-center justify-center w-full my-20 overflow-hidden px-4 md:px-0">
      <Heading
        subTitle="Contributions & Stats"
        title1="My Github"
        title2="Activity"
      />

      <div className="w-full max-w-7xl mx-auto mt-12 relative group">
        {/* Card Container */}
        <div className="relative w-full bg-background/60 backdrop-blur-2xl border border-border/50 p-6 md:p-10 rounded-[32px] flex flex-col items-center justify-center">
          
          {/* GitHub Live Stats */}
          {stats && (
            <div className="w-full flex flex-wrap justify-center gap-4 md:gap-6 lg:gap-8 mb-10">
              <div className="flex items-center gap-4 bg-primaryColor/10 px-5 md:px-6 py-4 rounded-2xl border border-primaryColor/20 transition-transform hover:-translate-y-1">
                <Target className="text-primaryColor" size={28} />
                <div className="flex flex-col">
                  <span className="text-sm text-foreground/70 font-medium">Contributions</span>
                  <span className="text-2xl font-bold text-foreground">{stats.totalContributions}</span>
                </div>
              </div>

              <div className="flex items-center gap-4 bg-primaryColor/10 px-5 md:px-6 py-4 rounded-2xl border border-primaryColor/20 transition-transform hover:-translate-y-1">
                <Flame className="text-primaryColor" size={28} />
                <div className="flex flex-col">
                  <span className="text-sm text-foreground/70 font-medium">Longest Streak</span>
                  <span className="text-2xl font-bold text-foreground">{stats.longestStreak} Days</span>
                </div>
              </div>

              <div className="flex items-center gap-4 bg-primaryColor/10 px-5 md:px-6 py-4 rounded-2xl border border-primaryColor/20 transition-transform hover:-translate-y-1">
                <BookMarked className="text-primaryColor" size={28} />
                <div className="flex flex-col">
                  <span className="text-sm text-foreground/70 font-medium">Public Repos</span>
                  <span className="text-2xl font-bold text-foreground">{stats.publicRepos}</span>
                </div>
              </div>

              <div className="flex items-center gap-4 bg-primaryColor/10 px-5 md:px-6 py-4 rounded-2xl border border-primaryColor/20 transition-transform hover:-translate-y-1">
                <Code2 className="text-primaryColor" size={28} />
                <div className="flex flex-col">
                  <span className="text-sm text-foreground/70 font-medium">Top Language</span>
                  <span className="text-2xl font-bold text-foreground">TypeScript</span>
                </div>
              </div>
            </div>
          )}

          {/* GitHub Calendar */}
          <div className="w-full overflow-x-auto pb-2 scrollbar-thin scrollbar-thumb-primaryColor/20 scrollbar-track-transparent">
            <div className="min-w-max flex justify-center">
              <GitHubCalendar
                username="kobirul5"
                colorScheme={theme}
                theme={customTheme}
                blockSize={15}
                blockMargin={5}
                fontSize={14}
              />
            </div>
          </div>
          
        </div>
      </div>
    </div>
  );
};

export default GithubCalendarSection;
