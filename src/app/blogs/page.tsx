// 'use client'
// import { usePathname } from 'next/navigation'
// import Link from 'next/link'
// import React from 'react'
// import { motion } from "motion/react"
// import Image from 'next/image'
// import Header from '@/components/Header'
// import Footer from '@/components/Footer'


// export default function Page() {
//   const path = usePathname();
//   const segments = path.split('/').filter(seg => seg);
//   const getLink = (index: number) => {
//     return '/' + segments.slice(0, index + 1).join('/');
//   };

//   return (
//     <>
//       <Header />
//       <section className='w-full relative bg-new-white py-10 px-4'>
//         <div className='w-full flex flex-col items-center justify-center'>
//           <span className='text-5xl font-bold text-dark mb-3'>Blogs</span>

//           <div className="text-gray-600 text-lg flex flex-wrap items-center gap-1">
//             <Link href="/" className="hover:underline text-blue-600">Home</Link>
//             {segments.map((seg, index) => (
//               <React.Fragment key={index}>
//                 <span>/</span>
//                 <Link
//                   href={getLink(index)}
//                   className="hover:underline text-blue-600 capitalize"
//                 >
//                   {decodeURIComponent(seg.replace(/-/g, ' '))}
//                 </Link>
//               </React.Fragment>
//             ))}
//           </div>
//         </div>
//       </section>
//       <AllBlogs />
//       <Footer />
//     </>

//   );
// }


// function AllBlogs() {

//   interface Blogs {
//     title: string
//     image: string
//     content: string
//     uri: string
//   }

//   const blogData: Blogs[] = [
//     {
//       title: "How Age Affects Fertility: What Every Woman Should Know",
//       image: "/image/blogs/1.png",
//       content: "Fertility is a topic many women think about only when they begin planning for a family. But what many don't realize is that age plays a major role in a woman's ability to conceive naturally. Whether you are in your late 20s or early 40s, understanding the impact of age on fertility is key to making informed choices.",
//       uri: "blogs/how-age-affects-fertility",
//     },
//     {
//       title: "Top 5 Reasons IVF Fails - And How to Avoid Them",
//       image: "/image/blogs/2.png",
//       content: "In-vitro fertilization (IVF) has given hope to millions of couples struggling with infertility. However, it can be deeply disappointing when an IVF cycle doesn't lead to pregnancy. IVF failure doesn't mean the end of your journey—it's often the beginning of a deeper understanding of your fertility.",
//       uri: "blogs/ivf-failure-reasons",
//     },
//     {
//       title: "PCOS and Infertility: Causes, Treatment, and Hope",
//       image: "/image/blogs/3.png",
//       content: "Polycystic Ovary Syndrome (PCOS) is one of the most common hormonal disorders in women of reproductive age. It affects nearly 1 in 10 women and is a leading cause of infertility. For many women diagnosed with PCOS, the journey to motherhood can feel confusing and frustrating. However, the good news is that PCOS-related infertility is highly treatable with the right guidance and care.",
//       uri: "blogs/pcos-and-infertility",
//     },
//     {
//       title: "When to See a Fertility Specialist: Don't Delay Your Parenthood Journey",
//       image: "/image/blogs/4.png",
//       content: "For many couples, starting a family is one of life's most cherished dreams. But when pregnancy doesn't happen naturally, it can lead to emotional stress and uncertainty. It's important to know that infertility is a medical condition—not a failure or weakness. Today, with modern science and expert care, most causes of infertility can be identified and treated. The key is to recognize the right time to seek help",
//       uri: "blogs/when-to-see-fertility-specialist",
//     },
//     {
//       title: "It’s Not Just Women – Why Men’s Health Matters in Pregnancy",
//       image: "/image/blogs/5.png",
//       content: "When we talk about pregnancy and miscarriage, most people think of women’s health. We often forget that men’s health, especially the health of their sperm, is just as important. Recent studies show that problems with sperm health can affect pregnancy outcomes, including miscarriage. A healthy pregnancy is not just the responsibility of the woman – it takes both partners working together.",
//       uri: "blogs/why-mens-health-matters-in-pregnancy",
//     },
//   ]

//   const containerVariants = {
//     hidden: {},
//     visible: {
//       transition: {
//         staggerChildren: 0.3,
//       },
//     },
//   }

//   const itemVariants = {
//     hidden: { opacity: 0, y: 100 },
//     visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
//   }

//   return (
//     <section>
//       <motion.div
//         className='w-full grid lg:grid-cols-3 max-[1024px]:grid-cols-2 max-[692px]:grid-cols-1 gap-5'
//         variants={containerVariants}
//         initial="hidden"
//         whileInView="visible"
//         viewport={{ once: true, amount: 0.2 }}
//       >
//         {blogData.map((data, idx) => (
//           <motion.div
//             key={idx}
//             className='w-full h-full'
//             variants={itemVariants}
//           >
//             <div className="w-full flex items-center flex-col h-full p-4 bg-new-white rounded-lg">
//               <Image
//                 src={data.image}
//                 width={500}
//                 height={400}
//                 alt={data.title}
//                 className='w-full rounded-md h-[220px] object-cover object-center'
//               />
//               <div className='w-full mt-8'>
//                 <Link
//                   href={data.uri}
//                   className='block font-medium text-primary text-lg'
//                   style={{ lineHeight: "1.1" }}
//                 >
//                   {data.title}
//                 </Link>
//               </div>
//               <div className='w-full max-h-[160px] overflow-clip mt-3'>
//                 <p className='font-normal text-steel-gray text-md leading-[1.2] line-clamp-4'>
//                   {data.content}
//                 </p>
//               </div>
//               <div className='w-full py-5 flex justify-end px-5'>
//                 <Link
//                   href={data.uri}
//                   className='text-new-blue-300 underline'
//                 >
//                   Read More
//                 </Link>
//               </div>
//             </div>
//           </motion.div>
//         ))}
//       </motion.div>
//     </section>
//   )
'use client'
import { usePathname } from 'next/navigation'
import Link from 'next/link'
import React from 'react'
import { motion, easeOut } from "motion/react"
import Image from 'next/image'
import Header from '@/components/Header'
import Footer from '@/components/Footer'

export default function Page() {
  const path = usePathname();
  const segments = path.split('/').filter(seg => seg);
  const getLink = (index: number) => {
    return '/' + segments.slice(0, index + 1).join('/');
  };

  return (
    <>
      <Header />
      <section className='w-full relative bg-new-white py-10 px-4'>
        <div className='w-full flex flex-col items-center justify-center'>
          <span className='text-5xl font-bold text-dark mb-3'>Blogs</span>

          <div className="text-gray-600 text-lg flex flex-wrap items-center gap-1">
            <Link href="/" className="hover:underline text-blue-600">Home</Link>
            {segments.map((seg, index) => (
              <React.Fragment key={index}>
                <span>/</span>
                <Link
                  href={getLink(index)}
                  className="hover:underline text-blue-600 capitalize"
                >
                  {decodeURIComponent(seg.replace(/-/g, ' '))}
                </Link>
              </React.Fragment>
            ))}
          </div>
        </div>
      </section>
      <AllBlogs />
      <Footer />
    </>
  );
}

function AllBlogs() {
  interface Blogs {
    title: string
    image: string
    content: string
    uri: string
  }

  const blogData: Blogs[] = [
    {
      title: "How Age Affects Fertility: What Every Woman Should Know",
      image: "/image/blogs/1.png",
      content: "Fertility is a topic many women think about only when they begin planning for a family. But what many don't realize is that age plays a major role in a woman's ability to conceive naturally. Whether you are in your late 20s or early 40s, understanding the impact of age on fertility is key to making informed choices.",
      uri: "blogs/how-age-affects-fertility",
    },
    {
      title: "Top 5 Reasons IVF Fails - And How to Avoid Them",
      image: "/image/blogs/2.png",
      content: "In-vitro fertilization (IVF) has given hope to millions of couples struggling with infertility. However, it can be deeply disappointing when an IVF cycle doesn't lead to pregnancy. IVF failure doesn't mean the end of your journey—it's often the beginning of a deeper understanding of your fertility.",
      uri: "blogs/ivf-failure-reasons",
    },
    {
      title: "PCOS and Infertility: Causes, Treatment, and Hope",
      image: "/image/blogs/3.png",
      content: "Polycystic Ovary Syndrome (PCOS) is one of the most common hormonal disorders in women of reproductive age. It affects nearly 1 in 10 women and is a leading cause of infertility. For many women diagnosed with PCOS, the journey to motherhood can feel confusing and frustrating. However, the good news is that PCOS-related infertility is highly treatable with the right guidance and care.",
      uri: "blogs/pcos-and-infertility",
    },
    {
      title: "When to See a Fertility Specialist: Don't Delay Your Parenthood Journey",
      image: "/image/blogs/4.png",
      content: "For many couples, starting a family is one of life's most cherished dreams. But when pregnancy doesn't happen naturally, it can lead to emotional stress and uncertainty. It's important to know that infertility is a medical condition—not a failure or weakness. Today, with modern science and expert care, most causes of infertility can be identified and treated. The key is to recognize the right time to seek help",
      uri: "blogs/when-to-see-fertility-specialist",
    },
    {
      title: "It’s Not Just Women – Why Men’s Health Matters in Pregnancy",
      image: "/image/blogs/5.png",
      content: "When we talk about pregnancy and miscarriage, most people think of women’s health. We often forget that men’s health, especially the health of their sperm, is just as important. Recent studies show that problems with sperm health can affect pregnancy outcomes, including miscarriage. A healthy pregnancy is not just the responsibility of the woman – it takes both partners working together.",
      uri: "blogs/why-mens-health-matters-in-pregnancy",
    },
  ]

  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.3,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 100 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: easeOut },
    },
  }

  return (
    <section>
      <motion.div
        className='w-full grid lg:grid-cols-3 max-[1024px]:grid-cols-2 max-[692px]:grid-cols-1 gap-5'
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
      >
        {blogData.map((data, idx) => (
          <motion.div
            key={idx}
            className='w-full h-full'
            variants={itemVariants}
          >
            <div className="w-full flex items-center flex-col h-full p-4 bg-new-white rounded-lg">
              <Image
                src={data.image}
                width={500}
                height={400}
                alt={data.title}
                className='w-full rounded-md h-[220px] object-cover object-center'
              />
              <div className='w-full mt-8'>
                <Link
                  href={data.uri}
                  className='block font-medium text-primary text-lg'
                  style={{ lineHeight: "1.1" }}
                >
                  {data.title}
                </Link>
              </div>
              <div className='w-full max-h-[160px] overflow-clip mt-3'>
                <p className='font-normal text-steel-gray text-md leading-[1.2] line-clamp-4'>
                  {data.content}
                </p>
              </div>
              <div className='w-full py-5 flex justify-end px-5'>
                <Link
                  href={data.uri}
                  className='text-new-blue-300 underline'
                >
                  Read More
                </Link>
              </div>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </section>
  )
}

// }
