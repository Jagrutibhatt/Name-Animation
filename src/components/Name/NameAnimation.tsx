// NameAnimation.tsx
import { motion } from "framer-motion";

const NameAnimation = () => {
  return (
    <>
      <div
        className="flex items-center justify-center bg-no-repeat bg-cover h-screen"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1531685250784-7569952593d2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80')",
        }}
      >
        <motion.div
          className="relative"
          initial={{ y: -50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.8, ease: "easeOut" }}
        >
          <div className="text-2xl  text-gray-800  ">Hello 🙋‍♀️ I'm</div>
          <div className="text-6xl text-gray-800 font-extrabold relative  z-20 ">
            Jagruti Bhatt
          </div>

          <motion.div
            className="absolute bottom-0 w-full h-5 bg-yellow-400 "
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 1.2, ease: "easeOut" }}
          />
        </motion.div>
      </div>
    </>
  );
};

export default NameAnimation;
