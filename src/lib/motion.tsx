"use client";
import { motion } from "framer-motion";
import React from "react";

const variants = {
  hidden: { opacity: 0 },
  enter: { opacity: 1 },
};

export function Motion({ children }: { children: React.ReactNode }) {
  return (
    <motion.div
      variants={variants}
      initial="hidden"
      animate="enter"
      transition={{ duration: 0.5 }}
    >
      {children}
    </motion.div>
  );
}
export function MotionView({ children }: { children: React.ReactNode }) {
  return (
    <motion.div
      initial={{ y: 100, opacity: 0 }}
      viewport={{ once: true }}
      whileInView={{
        y: 0,
        opacity: 1,

        transition: {
          delay: 0.3,
          duration: 0.5,
        },
      }}
    >
      {children}
    </motion.div>
  );
}

export function MotionShow({
  children,
  once = false,
}: {
  children: React.ReactNode;
  once?: boolean;
}) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      viewport={{ once }}
      whileInView={{
        opacity: 1,
        transition: {
          delay: 0.3,
          duration: 0.5,
        },
      }}
    >
      {children}
    </motion.div>
  );
}

export function MotionItem({
  children,
  i,
  className,
}: {
  children: React.ReactNode;
  i: number;
  className?: string;
}) {
  return (
    <motion.div
      className={className}
      viewport={{ once: false }}
      initial={{ opacity: 0 }}
      whileInView={{
        opacity: 1,
        transition: {
          duration: 0.15,
          delay: i * 0.15,
        },
      }}
    >
      {children}
    </motion.div>
  );
}
