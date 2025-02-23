"use client";

import { Cursor, useTypewriter } from "react-simple-typewriter";

const DesignationText = () => {
    const [text] = useTypewriter({
        words: ["React.js Developer", "Front End Developer", "MERN Stack Developer", "Full Stack Developer"],
        loop: true, // This enables infinite looping
    });

    return (
        <div>
            <p className="text-xl uppercase font-semibold">{text}<span className="text-primaryColor text-3xl"><Cursor /></span> </p>
        </div>
    );
};

export default DesignationText;
