import React, { useState, useEffect } from "react";
import * as Lucide from "lucide-react";

// --- DATA: COLOMBO SCHOOL BRANCHES ---
const ALL_SCHOOLS = [
  "Royal College - Colombo 07",
  "Royal College - Horana",
  "Royal College - Panadura",
  "S. Thomas' College - Mt. Lavinia",
  "S. Thomas' College - Gurutalawa",
  "S. Thomas' College - Bandarawela",
  "Ananda College - Colombo 10",
  "Nalanda College - Colombo 10",
  "Visakha Vidyalaya - Colombo 04",
  "Ladies' College - Colombo 07",
  "Museus College - Colombo 07",
  "DS Senanayake College",
  "Isipathana College",
  "St. Peter's College - Colombo 04",
  "St. Peter's College - Gampaha",
  "St. Joseph's College - Colombo 10",
  "St. Joseph's College - Wattala",
  "Gateway College - Colombo",
  "Gateway College - Kandy",
  "Lyceum International - Nugegoda",
  "Lyceum International - Wattala",
  "Bishop's College - Colombo 03",
  "St. Bridget's Convent",
  "Wesley College",
  "Thurstan College",
];

// --- EXTENDED TEACHER DATABASE ---
const MOCK_TEACHERS = [
  {
    id: 1,
    name: "Mr. Gamini Perera",
    subjects: ["Combined Maths"],
    rating: 4.5,
    school: "Royal College - Colombo 07",
    reviews: [
      {
        id: 101,
        text: "Mechanics is crystal clear.",
        subject: "Combined Maths",
        grade: "13",
        rating: 4.5,
        date: "1h ago",
      },
    ],
  },
  {
    id: 2,
    name: "Mrs. Sandali Jayasuriya",
    subjects: ["Chemistry"],
    rating: 2.5,
    school: "Visakha Vidyalaya - Colombo 04",
    reviews: [
      {
        id: 102,
        text: "A bit too fast during lessons.",
        subject: "Chemistry",
        grade: "12",
        rating: 2.5,
        date: "2d ago",
      },
    ],
  },
  {
    id: 3,
    name: "Mr. Rohan De Silva",
    subjects: ["Biology"],
    rating: 1.0,
    school: "Ananda College - Colombo 10",
    reviews: [
      {
        id: 103,
        text: "Hard to follow concepts.",
        subject: "Biology",
        grade: "13",
        rating: 1,
        date: "1w ago",
      },
    ],
  },
  {
    id: 4,
    name: "Ms. Dilani Fernando",
    subjects: ["English"],
    rating: 4.8,
    school: "Ladies' College - Colombo 07",
    reviews: [
      {
        id: 104,
        text: "Incredible literature analysis.",
        subject: "English",
        grade: "11",
        rating: 5,
        date: "5h ago",
      },
    ],
  },
  {
    id: 5,
    name: "Mr. Kanishka Alwis",
    subjects: ["ICT"],
    rating: 5.0,
    school: "St. Peter's College - Colombo 04",
    reviews: [
      {
        id: 105,
        text: "Best ICT teacher in Colombo.",
        subject: "ICT",
        grade: "13",
        rating: 5,
        date: "3h ago",
      },
    ],
  },
  {
    id: 6,
    name: "Mr. Wimal Siriwardena",
    subjects: ["Physics"],
    rating: 3.2,
    school: "Isipathana College",
    reviews: [
      {
        id: 106,
        text: "Explains theories well.",
        subject: "Physics",
        grade: "12",
        rating: 3,
        date: "1d ago",
      },
    ],
  },
  {
    id: 7,
    name: "Mrs. Lakshmi Ratnayake",
    subjects: ["History"],
    rating: 4.2,
    school: "Museus College - Colombo 07",
    reviews: [
      {
        id: 107,
        text: "Makes history feel like a story.",
        subject: "History",
        grade: "10",
        rating: 4,
        date: "2w ago",
      },
    ],
  },
  {
    id: 8,
    name: "Mr. Ajith Kumara",
    subjects: ["Economics"],
    rating: 1.5,
    school: "DS Senanayake College",
    reviews: [
      {
        id: 108,
        text: "Hard to understand the graphs.",
        subject: "Economics",
        grade: "13",
        rating: 1.5,
        date: "3d ago",
      },
    ],
  },
];

// --- HELPER COMPONENTS ---

const DynamicStars = ({ rating }) => {
  const stars = [];
  for (let i = 1; i <= 5; i++) {
    if (i <= Math.floor(rating)) {
      stars.push(
        <Lucide.Star
          key={i}
          size={16}
          className="fill-current text-amber-500"
        />
      );
    } else if (i === Math.ceil(rating) && rating % 1 !== 0) {
      stars.push(
        <Lucide.StarHalf
          key={i}
          size={16}
          className="fill-current text-amber-500"
        />
      );
    } else {
      stars.push(<Lucide.Star key={i} size={16} className="text-slate-200" />);
    }
  }
  return <div className="flex gap-0.5">{stars}</div>;
};

// --- SUB-PAGES ---

const AdvertisePage = ({ onBack }) => (
  <div className="min-h-screen bg-slate-50 p-4 md:p-10 animate-in fade-in duration-300">
    <div className="max-w-4xl mx-auto bg-white p-8 md:p-16 rounded-[2.5rem] md:rounded-[4rem] border shadow-2xl">
      <button
        onClick={onBack}
        className="text-slate-400 hover:text-blue-600 font-bold uppercase text-[10px] tracking-widest flex items-center gap-2 mb-8"
      >
        <Lucide.X size={14} /> Back Home
      </button>
      <h1 className="text-4xl md:text-6xl font-black text-slate-900 tracking-tighter mb-6 leading-tight">
        Advertise with <br />
        <span className="text-blue-600">GradeMyGuide</span>
      </h1>
      <p className="text-slate-500 text-base md:text-lg mb-12">
        Reach over 10,000 students and parents across Colombo's top schools.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
        <div className="bg-slate-50 p-8 rounded-[2rem] border">
          <h3 className="text-xl font-bold mb-3 flex items-center gap-2">
            <Lucide.MapPin className="text-blue-600" size={20} /> Sidebar
            Banners
          </h3>
          <p className="text-slate-400 text-sm">
            Visible on every teacher profile page.
          </p>
        </div>
        <div className="bg-slate-50 p-8 rounded-[2rem] border">
          <h3 className="text-xl font-bold mb-3 flex items-center gap-2">
            <Lucide.Star className="text-blue-600" size={20} /> Featured
            Teachers
          </h3>
          <p className="text-slate-400 text-sm">
            Boost visibility in search results.
          </p>
        </div>
      </div>

      <div className="border-t pt-10 text-center">
        <h2 className="text-2xl font-bold mb-8">Contact for Advertising</h2>
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <a
            href="mailto:support@grademyguide.lk"
            className="flex items-center justify-center gap-3 bg-slate-900 text-white px-8 py-4 rounded-2xl font-bold text-sm"
          >
            <Lucide.Mail size={18} /> Email
          </a>
          <a
            href="tel:+94771234567"
            className="flex items-center justify-center gap-3 bg-blue-600 text-white px-8 py-4 rounded-2xl font-bold text-sm"
          >
            <Lucide.Phone size={18} /> Call
          </a>
          <a
            href="https://wa.me/94771234567"
            className="flex items-center justify-center gap-3 bg-green-500 text-white px-8 py-4 rounded-2xl font-bold text-sm"
          >
            <Lucide.MessageCircle size={18} /> WhatsApp
          </a>
        </div>
      </div>
    </div>
  </div>
);

const SignupPage = ({ onBack }) => {
  const [regSearch, setRegSearch] = useState("");
  const [picked, setPicked] = useState("");
  const regMatches = ALL_SCHOOLS.filter((s) =>
    s.toLowerCase().includes(regSearch.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-slate-950 flex items-center justify-center p-4 text-white">
      <div className="max-w-lg w-full bg-slate-900 p-8 md:p-12 rounded-[2.5rem] border border-slate-800 relative">
        <button
          onClick={onBack}
          className="absolute top-6 left-6 text-slate-600 hover:text-white"
        >
          <Lucide.X size={20} />
        </button>
        <div className="text-center mb-10">
          <Lucide.ShieldCheck
            className="mx-auto text-blue-600 mb-4"
            size={48}
          />
          <h1 className="text-3xl font-black mb-2">Student Shield</h1>
          <p className="text-slate-500 text-[10px] font-bold uppercase tracking-widest">
            Verified Identity · Anonymous Reviews
          </p>
        </div>
        <div className="space-y-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <input
              type="text"
              placeholder="NIC / Passport"
              className="bg-slate-800 p-4 rounded-xl font-bold text-xs outline-none"
            />
            <input
              type="tel"
              placeholder="Mobile 07..."
              className="bg-slate-800 p-4 rounded-xl font-bold text-xs outline-none"
            />
          </div>
          <input
            type="email"
            placeholder="Email Address"
            className="w-full bg-slate-800 p-4 rounded-xl font-bold text-xs outline-none"
          />
          <div className="relative">
            <input
              type="text"
              placeholder="Search School/Branch..."
              value={picked || regSearch}
              onChange={(e) => {
                setRegSearch(e.target.value);
                setPicked("");
              }}
              className="w-full bg-slate-800 p-4 rounded-xl font-bold text-xs pr-12 outline-none"
            />
            {regSearch.length > 0 && !picked && (
              <div className="absolute top-full left-0 right-0 mt-2 bg-slate-800 border border-slate-700 rounded-xl max-h-48 overflow-y-auto z-50 p-2 shadow-2xl">
                {regMatches.map((s) => (
                  <div
                    key={s}
                    onClick={() => setPicked(s)}
                    className="p-3 hover:bg-slate-700 cursor-pointer text-[10px] font-bold uppercase border-b border-slate-700 last:border-none tracking-tighter"
                  >
                    {s}
                  </div>
                ))}
              </div>
            )}
          </div>
          <button className="w-full py-5 bg-blue-700 rounded-2xl font-black uppercase text-[10px] tracking-widest mt-4">
            Create Account
          </button>
        </div>
      </div>
    </div>
  );
};

// --- MAIN APP COMPONENT ---

export default function GradeMyGuide() {
  const [view, setView] = useState("home");
  const [selectedTeacher, setSelectedTeacher] = useState(null);
  const [searchQuery, setSearchQuery] = useState("");
  const [schoolSearch, setSchoolSearch] = useState("");
  const [showSchoolResults, setShowSchoolResults] = useState(false);
  const [selectedSchool, setSelectedSchool] = useState("All Schools");
  const [userRating, setUserRating] = useState(3.0);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://cdn.tailwindcss.com";
    document.head.appendChild(script);
  }, []);

  const getRatingColor = (r) => {
    if (r >= 4) return "bg-emerald-50 text-emerald-700 border-emerald-200";
    if (r >= 3) return "bg-amber-50 text-amber-700 border-amber-200";
    if (r >= 2) return "bg-red-50 text-red-600 border-red-200";
    return "bg-[#450a0a] text-white border-black";
  };

  const filteredTeachers = MOCK_TEACHERS.filter(
    (t) =>
      (selectedSchool === "All Schools" || t.school === selectedSchool) &&
      t.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const matchedSchools = ALL_SCHOOLS.filter((s) =>
    s.toLowerCase().includes(schoolSearch.toLowerCase())
  );

  // HANDLE VIEWS
  if (view === "signup") return <SignupPage onBack={() => setView("home")} />;
  if (view === "advertise")
    return <AdvertisePage onBack={() => setView("home")} />;

  return (
    <div className="min-h-screen bg-white text-slate-900 font-sans">
      {/* NAVBAR */}
      <nav className="bg-white border-b px-4 md:px-8 py-4 flex justify-between items-center sticky top-0 z-[100] shadow-sm">
        <div
          className="flex items-center gap-2 cursor-pointer z-[110]"
          onClick={() => {
            setView("home");
            setMobileMenuOpen(false);
          }}
        >
          <div className="bg-blue-700 p-2 rounded-xl text-white">
            <Lucide.GraduationCap size={20} />
          </div>
          <span className="text-lg md:text-2xl font-black uppercase tracking-tighter">
            GradeMy<span className="text-blue-600">Guide</span>
          </span>
        </div>

        <div className="hidden md:flex items-center gap-6">
          <button
            onClick={() => setView("advertise")}
            className="text-xs font-bold uppercase tracking-widest text-slate-400 hover:text-blue-600 transition-colors"
          >
            Advertise
          </button>
          <button
            onClick={() => setView("signup")}
            className="bg-slate-900 text-white px-6 py-3 rounded-2xl text-xs font-black uppercase tracking-widest hover:bg-blue-600 transition-all"
          >
            Join Shield
          </button>
        </div>

        <button
          className="md:hidden p-2 text-slate-600 z-[110]"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <Lucide.X size={24} /> : <Lucide.Menu size={24} />}
        </button>

        {mobileMenuOpen && (
          <div className="fixed top-0 left-0 w-full h-screen bg-white flex flex-col items-center justify-center gap-8 z-[105] md:hidden">
            <button
              onClick={() => {
                setView("advertise");
                setMobileMenuOpen(false);
              }}
              className="text-lg font-black uppercase tracking-widest text-slate-800"
            >
              Advertise
            </button>
            <button
              onClick={() => {
                setView("signup");
                setMobileMenuOpen(false);
              }}
              className="bg-slate-900 text-white px-10 py-4 rounded-2xl text-xs font-black uppercase tracking-widest shadow-xl"
            >
              Join Shield
            </button>
          </div>
        )}
      </nav>

      <main className="max-w-6xl mx-auto p-4 md:p-6 mt-6 md:mt-12">
        {/* LANDING DUAL SEARCH */}
        <div className="max-w-5xl mx-auto bg-slate-50 p-3 md:p-4 rounded-[2rem] shadow-inner flex flex-col md:flex-row gap-3 border mb-12 relative">
          <div className="relative flex-1">
            <div className="flex items-center bg-white rounded-2xl px-4 border">
              <Lucide.MapPin className="text-slate-300 w-4 h-4 mr-2" />
              <input
                type="text"
                placeholder="Select School / Branch..."
                className="w-full py-3 md:py-5 outline-none font-bold text-sm text-slate-700 bg-transparent"
                value={
                  selectedSchool !== "All Schools"
                    ? selectedSchool
                    : schoolSearch
                }
                onChange={(e) => {
                  setSchoolSearch(e.target.value);
                  setSelectedSchool("All Schools");
                  setShowSchoolResults(true);
                }}
              />
              {selectedSchool !== "All Schools" && (
                <Lucide.X
                  size={16}
                  className="cursor-pointer text-slate-300"
                  onClick={() => setSelectedSchool("All Schools")}
                />
              )}
            </div>
            {showSchoolResults && schoolSearch.length > 0 && (
              <div className="absolute top-full left-0 right-0 mt-2 bg-white border rounded-2xl max-h-64 overflow-y-auto z-50 shadow-2xl p-2">
                <div
                  onClick={() => {
                    setSelectedSchool("All Schools");
                    setShowSchoolResults(false);
                  }}
                  className="p-3 hover:bg-blue-50 cursor-pointer text-xs font-bold border-b"
                >
                  All Schools
                </div>
                {matchedSchools.map((s) => (
                  <div
                    key={s}
                    onClick={() => {
                      setSelectedSchool(s);
                      setShowSchoolResults(false);
                      setSchoolSearch("");
                    }}
                    className="p-3 hover:bg-blue-50 cursor-pointer text-xs font-bold border-b uppercase tracking-tight"
                  >
                    {s}
                  </div>
                ))}
              </div>
            )}
          </div>

          <div className="relative flex-[1.5]">
            <div className="flex items-center bg-white rounded-2xl px-4 border">
              <Lucide.Search className="text-slate-300 w-4 h-4 mr-2" />
              <input
                type="text"
                placeholder="Teacher name..."
                className="w-full py-3 md:py-5 outline-none font-bold text-sm text-slate-700 bg-transparent"
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>
          </div>
        </div>

        {/* TEACHER LIST */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-20">
          {filteredTeachers.map((t) => (
            <div
              key={t.id}
              onClick={() => setSelectedTeacher(t)}
              className="bg-white p-6 md:p-8 rounded-[2.5rem] border border-slate-100 shadow-sm hover:shadow-2xl cursor-pointer transition-all"
            >
              <div className="flex justify-between items-start mb-4">
                <div className="w-12 h-12 bg-slate-50 rounded-2xl flex items-center justify-center text-slate-300">
                  <Lucide.User size={24} />
                </div>
                <div
                  className={`px-3 py-1.5 rounded-xl border font-black text-sm ${getRatingColor(
                    t.rating
                  )}`}
                >
                  {t.rating}
                </div>
              </div>
              <h3 className="text-xl font-black text-slate-800 leading-tight mb-2">
                {t.name}
              </h3>
              <p className="text-blue-600 text-[10px] font-black uppercase tracking-widest mb-4">
                {t.subjects.join(" & ")}
              </p>
              <div className="pt-4 border-t border-slate-50">
                <DynamicStars rating={t.rating} />
                <p className="text-[9px] text-slate-400 font-bold uppercase mt-2 tracking-widest">
                  {t.school}
                </p>
              </div>
            </div>
          ))}
        </div>
      </main>

      {/* FULL SCREEN MODAL */}
      {selectedTeacher && (
        <div className="fixed inset-0 z-[200] bg-white overflow-y-auto pt-20">
          <div className="max-w-5xl mx-auto p-6 md:p-10 relative pb-40">
            <button
              onClick={() => setSelectedTeacher(null)}
              className="fixed top-4 right-4 md:top-8 md:right-8 p-3 bg-slate-900 text-white rounded-full z-[210] shadow-xl"
            >
              <Lucide.X size={20} />
            </button>
            <div className="flex flex-col md:flex-row items-center gap-8 mb-12 border-b pb-12">
              <div className="w-32 h-32 md:w-48 md:h-48 rounded-[2.5rem] bg-slate-50 flex items-center justify-center text-slate-200 border">
                <Lucide.User size={64} />
              </div>
              <div className="text-center md:text-left">
                <div
                  className={`inline-flex items-center gap-2 px-6 py-2 rounded-2xl border font-black text-2xl mb-4 ${getRatingColor(
                    selectedTeacher.rating
                  )}`}
                >
                  <Lucide.Star size={24} fill="currentColor" />{" "}
                  {selectedTeacher.rating}
                </div>
                <h1 className="text-4xl md:text-6xl font-black text-slate-900 tracking-tighter mb-4">
                  {selectedTeacher.name}
                </h1>
                <p className="text-slate-400 font-black uppercase text-[10px]">
                  <Lucide.MapPin size={14} className="inline mr-1" />{" "}
                  {selectedTeacher.school}
                </p>
              </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
              <div className="lg:col-span-7 space-y-8">
                <h2 className="text-xs font-black uppercase tracking-[0.4em] text-slate-300">
                  Verified Reviews
                </h2>
                {selectedTeacher.reviews.map((rev) => (
                  <div
                    key={rev.id}
                    className="bg-slate-50 p-6 rounded-[2rem] border"
                  >
                    <div className="flex flex-col sm:flex-row justify-between gap-4 mb-4">
                      <div className="flex gap-2">
                        <span className="bg-slate-900 text-white text-[9px] font-black px-2 py-1 rounded uppercase">
                          Sub: {rev.subject}
                        </span>
                        <span className="bg-blue-600 text-white text-[9px] font-black px-2 py-1 rounded uppercase">
                          Grade: {rev.grade}
                        </span>
                      </div>
                      <DynamicStars rating={rev.rating} />
                    </div>
                    <p className="text-lg text-slate-700 italic">
                      "{rev.text}"
                    </p>
                  </div>
                ))}
              </div>

              <div className="lg:col-span-5">
                <div className="bg-slate-900 text-white p-8 rounded-[2.5rem] sticky top-32 shadow-2xl">
                  <h3 className="text-xl font-black mb-8">Add Feedback</h3>
                  <div className="space-y-4">
                    <div className="grid grid-cols-2 gap-3">
                      <select className="bg-slate-800 p-4 rounded-xl border-none font-bold text-blue-400 text-[10px] outline-none">
                        {selectedTeacher.subjects.map((s) => (
                          <option key={s}>{s}</option>
                        ))}
                      </select>
                      <select className="bg-slate-800 p-4 rounded-xl border-none font-bold text-blue-400 text-[10px] outline-none">
                        <option>Grade 10</option>
                        <option>Grade 11</option>
                        <option>Grade 12</option>
                        <option>Grade 13</option>
                      </select>
                    </div>
                    <textarea
                      placeholder="Your review..."
                      className="w-full p-4 bg-slate-800 rounded-2xl min-h-[140px] outline-none text-sm"
                    />
                    <div className="bg-slate-800 p-5 rounded-2xl">
                      <div className="flex justify-between mb-4">
                        <span className="text-[10px] font-black text-slate-500 uppercase">
                          Rating
                        </span>
                        <span className="text-3xl font-black text-blue-500">
                          {userRating}
                        </span>
                      </div>
                      <input
                        type="range"
                        min="1.0"
                        max="5.0"
                        step="0.5"
                        value={userRating}
                        onChange={(e) =>
                          setUserRating(parseFloat(e.target.value))
                        }
                        className="w-full accent-blue-500 cursor-pointer"
                      />
                    </div>
                    <button className="w-full py-5 bg-blue-600 rounded-2xl font-black text-xs uppercase tracking-widest">
                      Publish Feedback
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
