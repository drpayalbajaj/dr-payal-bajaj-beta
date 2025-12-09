"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useState, useEffect, useMemo } from "react";
import { motion,Variants } from "framer-motion";

interface Blogs {
  title: string;
  image: string;
  content: string;
  uri: string;
}
const blogData: Blogs[] = [
  {
    title: "How Age Affects Fertility: What Every Woman Should Know",
    image: "/image/blogs/1.png",
    content:
      "Fertility is a topic many women think about only when they begin planning for a family...",
    uri: "blogs/how-age-affects-fertility",
  },
  {
    title: "Top 5 Reasons IVF Fails - And How to Avoid Them",
    image: "/image/blogs/2.png",
    content: "In-vitro fertilization (IVF) has given hope to millions...",
    uri: "blogs/ivf-failure-reasons",
  },
  {
    title: "PCOS and Infertility: Causes, Treatment, and Hope",
    image: "/image/blogs/3.png",
    content: "Polycystic Ovary Syndrome (PCOS) is one of the most common...",
    uri: "blogs/pcos-and-infertility",
  },
  {
    title:
      "When to See a Fertility Specialist: Don't Delay Your Parenthood Journey",
    image: "/image/blogs/4.png",
    content:
      "For many couples, starting a family is one of life's most cherished dreams...",
    uri: "blogs/when-to-see-fertility-specialist",
  },
  {
    title: "It’s Not Just Women – Why Men’s Health Matters in Pregnancy",
    image: "/image/blogs/5.png",
    content:
      "When we talk about pregnancy and miscarriage, most people think of women’s health...",
    uri: "blogs/why-mens-health-matters-in-pregnancy",
  },
];

export default function Blog() {
  const [searchTerm, setSearchTerm] = useState("");
  const [debouncedSearch, setDebouncedSearch] = useState("");

  // Debounce effect
  useEffect(() => {
    const handler = setTimeout(() => {
      setDebouncedSearch(searchTerm);
    }, 300); // 300ms debounce delay

    return () => {
      clearTimeout(handler);
    };
  }, [searchTerm]);

  const filteredBlogs = useMemo(() => {
    if (!debouncedSearch.trim()) return blogData;
    return blogData.filter((blog) =>
      blog.title.toLowerCase().includes(debouncedSearch.toLowerCase())
    );
  }, [debouncedSearch]);

  const containerVariants :Variants ={
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.3,
      },
    },
  };

  const itemVariants:Variants = {
    hidden: { opacity: 0, y: 100 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  return (
    <section className="w-full relative">
      <h2 className="mt-5 text-center relative text-4xl font-bold text-primary">
        Blogs
      </h2>

      {/* Search Bar */}
      <div className="mt-6 flex justify-center">
        <input
          type="text"
          placeholder="Search blogs..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="border border-gray-300 rounded-lg px-4 py-2 w-full max-w-md focus:outline-none focus:ring-2 focus:ring-primary"
        />
      </div>

      <motion.div
        key={debouncedSearch} // <- force remount on search change
        className="mt-10 w-full grid lg:grid-cols-3 max-[1024px]:grid-cols-2 max-[692px]:grid-cols-1 gap-5"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {filteredBlogs.map((data, idx) => (
          <motion.div
            key={idx}
            className="w-full h-full"
            variants={itemVariants}
          >
            <div className="w-full flex items-center flex-col h-full p-4 bg-new-white rounded-lg">
              <Image
                src={data.image}
                width={500}
                height={400}
                alt={data.title}
                className="w-full rounded-md h-[220px] object-cover object-center"
              />
              <div className="w-full mt-8">
                <Link
                  href={data.uri}
                  className="block font-medium text-primary text-lg"
                  style={{ lineHeight: "1.1" }}
                >
                  {data.title}
                </Link>
              </div>
              <div className="w-full max-h-[160px] overflow-clip mt-3">
                <p className="font-normal text-steel-gray text-md leading-[1.2] line-clamp-4">
                  {data.content}
                </p>
              </div>
              <div className="w-full py-5 flex justify-end px-5">
                <Link href={data.uri} className="text-new-blue-300 underline">
                  Read More
                </Link>
              </div>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}
