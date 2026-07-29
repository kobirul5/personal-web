"use client";

import React from 'react';
import { GitHubCalendar } from 'react-github-calendar';
import Heading from "@/components/Heading";

const GithubCalendarSection = () => {
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
            colorScheme="dark"
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
