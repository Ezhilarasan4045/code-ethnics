import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const futureUpdates = [
  // 🔒 Security & Proctoring
  { icon: '📷', title: 'Webcam Monitoring', desc: 'Capture still images or video clips at intervals to monitor student during exams.' },
  { icon: '🎙️', title: 'Microphone Access', desc: 'Record ambient audio during high-stakes tests to detect collaboration.' },
  { icon: '🧑‍💻', title: 'Face Detection', desc: 'Alert if no face, multiple faces, or blurred face is detected.' },
  { icon: '⌨️', title: 'Keyboard & Mouse Tracking', desc: 'Detect suspicious activity patterns like copy-paste or typing anomalies.' },
  { icon: '🚫', title: 'Ctrl + Shift + V Restriction', desc: 'Block pasting from clipboard (prevents copying code).' },
  { icon: '❌', title: 'Print Screen Key Block', desc: 'Disable screenshot functionality during the test session.' },
  { icon: '🧩', title: 'Extension Blocker', desc: 'Disable browser extensions that could be used for cheating.' },
  { icon: '🌍', title: 'IP & Geolocation Detection', desc: 'Log IP addresses and detect mismatched or multiple location logins.' },
  { icon: '🧬', title: 'Code Fingerprinting & Similarity Graphs', desc: 'Detect similar submissions using AST parsing and diffing logic.' },
  { icon: '⌚', title: 'Typing Pattern Analysis', desc: 'Detect if the code was typed or pasted to infer originality.' },

  // 💬 Student Feedback & Ethics
  { icon: '💬', title: 'Student Feedback Mechanism', desc: 'Allow students to report malpractice or issues anonymously.' },
  { icon: '🚨', title: 'Malpractice Alerts from Students', desc: 'Logged and flagged for moderator review.' },
  { icon: '🧠', title: 'Secret/Behavioral Questions', desc: 'Ask hidden questions to analyze response time and behavioral patterns.' },

  // 🧠 Evaluation & Testing System
  { icon: '⚙️', title: 'Code-Tattle Style Auto Evaluation', desc: 'Auto-evaluate typing behavior, time spent, and window switching.' },
  { icon: '🔗', title: 'Parent–Child Code Linkage', desc: 'Track question versions and link plagiarized or reused solutions.' },
  { icon: '🔀', title: 'Shuffled Questions', desc: 'Randomize question orders to prevent sharing.' },
  { icon: '⏱️', title: 'Time Tracking Per Question', desc: 'Track exact time taken to answer each question.' },
  { icon: '📶', title: 'Network Stability Logs', desc: 'Include connectivity interruptions in reports to avoid unfair penalties.' },
  { icon: '🔥', title: 'Daily Challenge / Streak System', desc: 'Encourage consistent practice with streak badges and XP.' }
];

const FutureUpdates = () => {
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
          delay: index * 0.15,
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
    <section className="py-16 text-white font-mono">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-4xl font-bold mb-12 text-center">🔮 Future Updates</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {futureUpdates.map((feature, index) => (
            <div
              key={index}
              ref={el => cardsRef.current[index] = el}
              className="bg-white/10 border border-white/20 rounded-2xl p-6 shadow-lg hover:scale-105 transition-transform"
            >
              <div className="text-4xl mb-4">{feature.icon}</div>
              <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
              <p className="text-base text-gray-300">{feature.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FutureUpdates;
