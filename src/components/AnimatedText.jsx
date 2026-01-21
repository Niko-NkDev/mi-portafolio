import { motion } from "framer-motion";

export default function AnimatedText({ text, delay = 0, coloredParts = [] }) {
  const letters = text.split("");

  const getColorForIndex = (charIndex) => {
    for (let part of coloredParts) {
      if (charIndex >= part.start && charIndex < part.end) {
        return part.color;
      }
    }
    return "inherit";
  };

  return (
    <motion.span
      initial="hidden"
      animate="visible"
      variants={{
        visible: {
          transition: {
            staggerChildren: 0.04,
            delayChildren: delay,
          },
        },
      }}
    >
      {letters.map((char, index) => (
        <motion.span
          key={index}
          variants={{
            hidden: { opacity: 0, y: 10 },
            visible: { opacity: 1, y: 0 },
          }}
          transition={{ ease: "easeOut", duration: 0.4 }}
          style={{ display: "inline-block", color: getColorForIndex(index) }}
        >
          {char === " " ? "\u00A0" : char}
        </motion.span>
      ))}
    </motion.span>
  );
}
