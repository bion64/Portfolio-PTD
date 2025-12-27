import { motion } from "framer-motion";
import { useState } from "react";
import { FiExternalLink, FiGithub } from "react-icons/fi";

const ProjectSingle = ({ title, category, image, tags, url, github }) => {
  const [hover, setHover] = useState(false);
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, delay: 1 }}
      transition={{
        ease: "easeInOut",
        duration: 0.7,
        delay: 0.15,
      }}
    >
      <div className="h-full overflow-hidden rounded-xl shadow-lg hover:shadow-xl mb-10 sm:mb-0 bg-secondary-light dark:bg-ternary-dark">
        <a
          className="cursor-pointer"
          href={url}
          target="_blank"
          rel="noopener noreferrer"
          style={{
            display: "block",
            overflow: "hidden",
            borderRadius: "12px",
          }}
          onMouseEnter={() => setHover(true)}
          onMouseLeave={() => setHover(false)}
        >
          <img
            src={image}
            alt="Single Project"
            style={{
              width: "100%",
              transition: "transform 0.5s ease",
              transform: hover ? "scale(1.1)" : "scale(1)",
            }}
          />
        </a>
        <div className="text-center px-4 py-6">
          <p className="font-general-medium text-lg md:text-xl text-ternary-dark dark:text-ternary-light mb-6">
            {title}
          </p>
          {/* <span className="text-lg text-ternary-dark dark:text-ternary-light">
            {category}
          </span> */}
          <div
            style={{
              display: "flex",
              flexWrap: "wrap",
              gap: "8px",
              wordBreak: "break-word",
              whiteSpace: "normal",
            }}
            className="mb-6"
          >
            {tags.map((tag, index) => (
              <span
                key={index}
                style={{
                  maxWidth: "100%",
                  whiteSpace: "normal",
                  wordBreak: "break-word",
                }}
                className="px-3 py-1 p-2 text-sm rounded-full border border-white bg-purple-100 text-ternary-dark dark:text-ternary-light"
              >
                {tag}
              </span>
            ))}
          </div>

          <div className="mt-auto flex items-center justify-between gap-4 cursor-pointer">
            <a
              href={github}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-5 py-2 text-lg text-ternary-dark dark:text-ternary-light border border-purple-600 hover:bg-purple-50 dark:hover:bg-purple-900 transition"
            >
              <FiGithub />
              Code
            </a>

            <a
              href={url}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-5 py-2 text-lg text-ternary-dark dark:text-ternary-light border border-purple-600 hover:bg-purple-50 dark:hover:bg-purple-900 transition"
            >
              View Site
              <FiExternalLink />
            </a>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default ProjectSingle;
