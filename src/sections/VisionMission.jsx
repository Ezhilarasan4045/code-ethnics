import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const VisionMission = () => {
  const visionRef = useRef(null);
  const missionRef = useRef(null);

  useEffect(() => {
    gsap.fromTo(
      visionRef.current,
      { opacity: 0, x: -100 },
      {
        opacity: 1,
        x: 0,
        duration: 1.2,
        scrollTrigger: {
          trigger: visionRef.current,
          start: "top 80%",
        },
      }
    );

    gsap.fromTo(
      missionRef.current,
      { opacity: 0, x: 100 },
      {
        opacity: 1,
        x: 0,
        duration: 1.2,
        scrollTrigger: {
          trigger: missionRef.current,
          start: "top 80%",
        },
      }
    );
  }, []);

  return (
    <section className="min-h-screen flex flex-col items-center justify-center px-6 py-20">
      <h2 className="text-white text-5xl md:text-6xl font-mono mb-12 border-b pb-3 border-white">
        Our Vision & Mission
      </h2>

      <div className="w-full max-w-6xl flex flex-col md:flex-row gap-10">
        {/* Vision */}
        <div
          ref={visionRef}
          className="bg-white/10 border border-white/20 backdrop-blur-sm p-8 rounded-xl w-full text-white font-mono"
        >
          <h3 className="text-3xl mb-4 border-b pb-2">🌟 Vision</h3>
          <p className="text-white/80 text-lg leading-relaxed">
            To empower learners and institutions with a transparent, fair, and
            practice-focused coding platform that nurtures genuine skill
            development, ensures academic integrity, and prepares coders for
            real-world challenges.
          </p>
        </div>

        {/* Mission */}
        <div
          ref={missionRef}
          className="bg-white/10 border border-white/20 backdrop-blur-sm p-8 rounded-xl w-full text-white font-mono"
        >
          <h3 className="text-3xl mb-4 border-b pb-2">🚀 Mission</h3>
          <ul className="list-disc list-inside space-y-4 text-white/80 text-lg leading-relaxed">
            <li>
              <strong>Promote Ethical Coding:</strong> Build a culture of
              originality by preventing plagiarism and malpractice.
            </li>
            <li>
              <strong>Support Institutions & Counselors:</strong> Equip faculty,
              HODs, and counselors with dashboards to monitor progress and assign
              tests.
            </li>
            <li>
              <strong>Transparent Communication:</strong> Automatically email
              test results to students and their assigned counselor or HOD.
            </li>
            <li>
              <strong>Multi-Skill Development:</strong> Combine aptitude + coding
              practice in one platform.
            </li>
            <li>
              <strong>Accessible Learning:</strong> Offer coding and aptitude
              training for all skill levels without paywalls blocking essentials.
            </li>
            <li>
              <strong>Real-World Skill Building:</strong> Design problem statements
              that mimic industry, campus placement, and competitive exams.
            </li>
            <li>
              <strong>Customizable for Colleges:</strong> Allow institutions to
              create their own assignments, contests, and grading systems.
            </li>
            <li>
              <strong>Continuous Improvement:</strong> Collect feedback from
              learners and institutions to evolve the platform regularly.
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default VisionMission;
