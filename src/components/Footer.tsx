"use client";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { useAdminMode } from "@/hooks/useAdminMode";
import Social from "./Social";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  const isAdminMode = useAdminMode();
  const [isOpen, setIsOpen] = useState(false);
  const [status, setStatus] = useState("Recent visits will appear here.");
  const [recentEvents, setRecentEvents] = useState<Array<{ label: string; page: string; createdAt: string }>>([]);
  const [isLoading, setIsLoading] = useState(false);

  const trackEvent = async (label: string) => {
    try {
      const deviceKey = [
        navigator.userAgent,
        navigator.language,
        `${screen.width}x${screen.height}`,
        Intl.DateTimeFormat().resolvedOptions().timeZone,
      ].join("|");

      await fetch("/api/track-click", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          label,
          page: window.location.pathname,
          userAgent: navigator.userAgent,
          referrer: document.referrer || "",
          deviceKey,
        }),
      });
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    void trackEvent("page-visit");
  }, []);

  const handleTrackClick = async () => {
    setIsOpen(true);
    setIsLoading(true);
    setStatus("Loading recent visits...");

    try {
      await trackEvent("footer-button-click");
      const response = await fetch("/api/track-click?limit=5");
      const data = await response.json();
      setRecentEvents(data.events || []);
      setStatus("Latest visits from your tracking database.");
    } catch (error) {
      console.error(error);
      setStatus("Could not load recent visits right now.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <footer className="bg-background/80 border-t border-border py-12 mt-20">
      <div className="container mx-auto px-4">
        <motion.div
           initial={{ opacity: 0, y: 20 }}
           whileInView={{ opacity: 1, y: 0 }}
           transition={{ duration: 0.5 }}
           viewport={{ once: true }}
           className="flex flex-col items-center text-center"
        >
          {/* Logo/Name */}
          <h3 className="text-3xl font-bold mb-4 tracking-tight text-textColor">
            Kobirul <span className="text-primaryColor">Islam</span>
          </h3>

          {/* Tagline */}
          <p className="text-textColor/70 max-w-md mb-8 text-sm sm:text-base leading-relaxed">
            Full Stack Developer specializing in high-performance web applications and seamless user experiences.
          </p>

          {/* Social Links */}
          <div className="mb-10">
            <Social />
          </div>

          {isAdminMode && (
            <button
              onClick={handleTrackClick}
              className="mb-8 rounded-full border border-primaryColor/30 bg-primaryColor/10 px-4 py-2 text-sm font-medium text-primaryColor transition hover:bg-primaryColor/20"
            >
              Track footer click
            </button>
          )}

          {isOpen && (
            <div className="mb-8 w-full max-w-md rounded-2xl border border-border bg-background/90 p-4 text-left shadow-lg">
              <p className="text-sm font-semibold text-textColor">Recent visitor activity</p>
              <p className="mt-2 text-sm text-textColor/70">{status}</p>

              {isLoading ? (
                <p className="mt-3 text-sm text-textColor/60">Loading...</p>
              ) : recentEvents.length > 0 ? (
                <ul className="mt-3 space-y-2 text-sm text-textColor/70">
                  {recentEvents.map((event, index) => (
                    <li key={`${event.label}-${index}`} className="rounded-lg border border-border/60 bg-background/70 p-2">
                      <span className="font-medium text-textColor">{event.label}</span>
                      <span className="mx-2 text-primaryColor">•</span>
                      <span>{event.page}</span>
                      <div className="mt-1 text-xs text-textColor/50">
                        {new Date(event.createdAt).toLocaleString()}
                      </div>
                    </li>
                  ))}
                </ul>
              ) : (
                <p className="mt-3 text-sm text-textColor/60">No events recorded yet.</p>
              )}
            </div>
          )}

          {/* Divider & Copyright */}
          <div className="w-full max-w-xs h-[1px] bg-gradient-to-r from-transparent via-border to-transparent mb-8"></div>

          <p className="text-textColor/40 text-xs sm:text-sm">
            &copy; {currentYear} <span className="text-textColor/60">Kobirul Islam</span>. Built with passion.
          </p>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
