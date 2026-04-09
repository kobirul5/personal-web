"use client";

import { Cursor, useTypewriter } from "react-simple-typewriter";

const DesignationText = () => {
  const [text] = useTypewriter({
    words: [
      "Backend Developer",
      "Full Stack Developer",
      "React.js Developer",
      "Next.js Developer",
    ],
    loop: true,
  });

  return (
    <div>
      <p className="text-xl uppercase font-semibold">
        {text}
        <span className="text-primaryColor text-3xl">
          <Cursor />
        </span>{" "}
      </p>
    </div>
  );
};

export default DesignationText;
