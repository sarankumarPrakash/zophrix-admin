import React from "react";
import Homebanner from "../assets/images/hoem_banner.png";
import ImageLeft from "../assets/images/LeftHome.png";
import ImageRight from "../assets/images/RightHome.png";
import Footer from "./Footer";
import {
  ChevronRight,
  Code,
  Clock,
  Users,
  Briefcase,
} from "lucide-react";

const Home = () => {
  return (
    <div className="w-full bg-[#F5F7FA] text-gray-900 overflow-hidden">

      {/* ================= HERO ================= */}
      <section className="px-6 md:px-20 py-28">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-20 items-center">

          <div>
            <h1 className="text-5xl md:text-6xl font-bold leading-tight">
              <span className="block">Where Coding Skill</span>
              <span className="block">
                Meets Real{" "}
                <span className="text-[#605BFF]">Execution</span>
              </span>
            </h1>

            <p className="mt-6 text-xl font-semibold text-gray-600 max-w-xl leading-relaxed">
              Move beyond repetitive practice problems and step into real,
              structured engineering challenges. Work on carefully designed
              coding tasks that mirror production-level thinking, not textbook
              tricks. Build and test your solutions locally in a realistic
              development environment.
            </p>
          </div>

          <div className="flex justify-center">
            <img
              src={Homebanner}
              alt="Dashboard Preview"
              className="rounded-[32px] shadow-lg w-full max-w-lg"
            />
          </div>

        </div>
      </section>

      {/* ================= CORE CARDS ================= */}
      <section className="px-6 md:px-20 pb-24">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-10">

          <div className="bg-white rounded-3xl p-10 shadow-sm border border-gray-200 hover:shadow-md transition">
            <h3 className="text-2xl font-semibold mb-4">
              Execution Engine
            </h3>

            <p className="text-gray-600 font-semibold leading-relaxed mb-6">
              AI-powered structured coding workflows
            </p>

            <button className="px-6 py-2 border border-indigo-500 text-indigo-600 rounded-lg hover:bg-indigo-50 transition">
              Explore Engine
            </button>
          </div>

          <div className="bg-white rounded-3xl p-10 shadow-sm border border-gray-200 hover:shadow-md transition">
            <h3 className="text-2xl font-semibold mb-4">
              System Validation Layer
            </h3>

            <p className="text-gray-600 font-semibold leading-relaxed mb-6">
              Automated verification infrastructure
            </p>

            <button className="px-6 py-2 border border-indigo-500 text-indigo-600 rounded-lg hover:bg-indigo-50 transition">
              View Framework
            </button>
          </div>

        </div>
      </section>

      {/* ================= FEATURE SPLIT 1 ================= */}
      <section className="px-6 md:px-20 py-2 ">
        <div className="max-w-5xl mx-auto bg-blue-100 rounded-[40px] p-14 grid md:grid-cols-2 gap-16 items-center">

          <div>
            <h2 className="text-4xl font-semibold leading-snug">
              Leverage real technology
              <br />
              to validate real skills
            </h2>

            <p className="mt-6 text-gray-600 font-semibold max-w-lg leading-relaxed">
              Our engine executes submitted code inside a secure environment,
              automatically tests logic correctness, and verifies real capability.
            </p>

            <button className="mt-8 px-6 py-3 bg-[#0E3A53] text-white rounded-xl hover:opacity-90 transition">
              Know More
            </button>
          </div>


          <div className="flex justify-center">
            <img
              src={ImageLeft}
              alt="Dashboard Preview"
              className="rounded-[32px] shadow-lg w-full max-w-lg"
            />
          </div>


        </div>
      </section>

      {/* ================= FEATURE SPLIT 2 ================= */}
      <section className="px-6 md:px-20 py-20">
        <div className="max-w-5xl mx-auto bg-blue-100  rounded-[40px] p-14 grid md:grid-cols-2 gap-16 items-center">


          <div className="flex justify-center">
            <img
              src={ImageRight}
              alt="Dashboard Preview"
              className="rounded-[32px] shadow-lg w-full max-w-lg"
            />
          </div>



          <div className="order-1 md:order-2">
            <h2 className="text-4xl font-semibold leading-snug">
              Structured workflow
              <br />
              from download to verification
            </h2>

            <p className="mt-6 text-gray-600 font-semibold max-w-lg leading-relaxed">
              Candidates download a real starter project, build locally,
              submit securely, and receive objective validation.
            </p>

            <button className="mt-8 px-6 py-3 bg-[#0E3A53] text-white rounded-xl hover:opacity-90 transition">
              Explore Workflow
            </button>
          </div>

        </div>
      </section>

      {/* ================= FINAL CTA ================= */}
      <section className="px-6 md:px-20 py-8">
        <div className="max-w-7xl mx-auto bg-[#0E3A53] 
                rounded-tr-[120px] rounded-bl-[120px] 
                p-20 text-center text-white">

          <h2 className="text-4xl font-semibold">
            Ready to verify real skills?
          </h2>

          <p className="mt-6 text-gray-200">
            Build real projects. Submit working code. Get objective proof.
          </p>

          <button className="mt-10 px-8 py-4 bg-white text-[#0E3A53] rounded-xl font-medium hover:opacity-90 transition">
            Try a Real Coding Task
          </button>

        </div>


      </section>

      <Footer />
    </div>
  );
};

export default Home;
