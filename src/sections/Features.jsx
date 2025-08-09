import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const features = [
  {
    icon: '🛡️',
    title: 'No Malpractice',
    desc: 'No tab switch, Esc, or copy-paste not allowed.'
  },
  {
    icon: '🎯',
    title: 'Counselor Dashboard',
    desc: 'Assign coding and aptitude tests to Counselling students.'
  },
  {
    icon: '🎯',
    title: 'HOD Dashboard',
    desc: 'Assign coding and aptitude tests to Department Students.'
  },
  {
    icon: '🧑‍🏫',
    title: 'Student-wise Test Assignment',
    desc: 'Assign specific tests to individual students from the counselor panel.'
  },
  {
    icon: '🏛️',
    title: 'University Dashboard',
    desc: 'View performance analytics of students department-wise and university-wise.'
  },
  {
    icon: '📩',
    title: 'Email Notifications',
    desc: 'Auto mail sent to students, counselors, departments, and university after test completion.'
  },
  {
    icon: '🤖',
    title: 'Code Mate AI',
    desc: 'AI assistant helps during coding tests.'
  },
  {
    icon: '📊',
    title: 'Crystal Clear Reports',
    desc: 'Performance analytics with detailed insights.'
  },
  {
    icon: '🏆',
    title: 'Hackathons & Rewards',
    desc: 'Participate and earn MCA rewards.'
  },
  {
    icon: '📘',
    title: 'Aptitude Assignment',
    desc: 'Counselors assign aptitude and logical tests.'
  },
  {
    icon: '👥',
    title: 'Student Interactions',
    desc: 'Hackathon winners featured on the website.'
  },
  {
    icon: '🔥',
    title: 'Daily Coding Challenges',
    desc: 'New problems every day to sharpen your coding skills.'
  }
];


const Features = () => {
  const cardsRef = useRef([]);

  useEffect(() => {
    cardsRef.current.forEach((card, index) => {
      gsap.fromTo(
        card,
        { opacity: 0, y: 50 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          delay: index * 0.2,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: card,
            start: 'top 85%',
            toggleActions: 'play none none reverse'
          }
        }
      );
    });
  }, []);

  return (
  <section className="py-16  text-white font-mono">
  <div className="max-w-7xl mx-auto px-6">
    <h2 className="text-4xl font-bold mb-12 text-center">Features</h2>
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {features.map((feature, index) => (
        <div
          key={index}
          className="bg-white/10 border border-white/20 rounded-2xl p-8 shadow-lg hover:scale-105 transition-transform"
        >
          <div className="text-5xl mb-4">{feature.icon}</div>
          <h3 className="text-2xl font-semibold mb-2">{feature.title}</h3>
          <p className="text-lg text-gray-300">{feature.desc}</p>
        </div>
      ))}
    </div>
  </div>
</section>

  );
};

export default Features;
