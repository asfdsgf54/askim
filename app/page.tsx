"use client";

import { useState, useEffect, useRef } from "react";

export default function Home() {
  const [hearts, setHearts] = useState<Array<{ id: number; left: number; delay: number }>>([]);
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef<HTMLAudioElement>(null);

  useEffect(() => {
    const interval = setInterval(() => {
      setHearts((prev) => [
        ...prev,
        {
          id: Date.now(),
          left: Math.random() * 100,
          delay: Math.random() * 2,
        },
      ]);
    }, 300);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    if (hearts.length > 50) {
      setHearts((prev) => prev.slice(-50));
    }
  }, [hearts]);

  const toggleMusic = () => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.pause();
      } else {
        audioRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  return (
    <main className="min-h-screen bg-gradient-to-br from-pink-100 via-purple-100 to-blue-100 flex items-center justify-center p-4 overflow-hidden relative">
      {/* Audio Player */}
      <audio ref={audioRef} loop>
        <source src="/Yalın - Sonsuz Ol (Official Video) - mp3cevir.com.mp3" type="audio/mpeg" />
      </audio>

      {/* Music Control Button */}
      <button
        onClick={toggleMusic}
        className="fixed top-6 right-6 z-50 bg-white/90 backdrop-blur-sm p-4 rounded-full shadow-lg hover:scale-110 transition-transform duration-300"
        aria-label={isPlaying ? "Müziği Durdur" : "Müziği Çal"}
      >
        {isPlaying ? (
          <span className="text-3xl">🔊</span>
        ) : (
          <span className="text-3xl">🔇</span>
        )}
      </button>

      {/* Falling hearts animation */}
      {hearts.map((heart) => (
        <div
          key={heart.id}
          className="absolute text-4xl animate-fall pointer-events-none"
          style={{
            left: `${heart.left}%`,
            top: "-50px",
            animationDelay: `${heart.delay}s`,
          }}
        >
          ❤️
        </div>
      ))}

      <div className="max-w-4xl w-full bg-white/80 backdrop-blur-sm rounded-3xl shadow-2xl p-8 md:p-12 text-center relative z-10">
        <div className="mb-8 animate-bounce">
          <span className="text-8xl">💕</span>
        </div>

        <h1 className="text-4xl md:text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-purple-600 mb-6">
          Aşkım, Özür Dilerim
        </h1>

        <div className="space-y-6 text-gray-700 text-lg md:text-xl leading-relaxed">
          <p className="animate-fade-in">
            Yaptığım şaka yanlış anlaşıldı ve seni üzdüm. 
            Bunun için gerçekten çok üzgünüm. 💔
          </p>

          <p className="animate-fade-in-delay-1">
            Belçika ile Mersin arasında <strong>2,800 km</strong> mesafe var,
            ama kalbim her zaman seninle. 🌍
          </p>

          <p className="animate-fade-in-delay-2">
            Sen benim için çok özelsin ve seni üzmek istemezdim.
            Lütfen beni affet. 🙏
          </p>

          <div className="mt-8 p-6 bg-gradient-to-r from-pink-50 to-purple-50 rounded-2xl animate-fade-in-delay-3">
            <p className="text-2xl font-semibold text-purple-600 mb-2">
              Seni Seviyorum ❤️
            </p>
            <p className="text-sm text-gray-600">
              Belçika'dan Mersin'e, dünyayı aşan sevgimle...
            </p>
          </div>
        </div>

        <div className="mt-8 flex justify-center gap-4">
          <span className="text-6xl animate-pulse">🇹🇷</span>
          <span className="text-6xl">💝</span>
          <span className="text-6xl animate-pulse">🇧🇪</span>
        </div>
      </div>

      <style jsx>{`
        @keyframes fall {
          to {
            transform: translateY(100vh) rotate(360deg);
            opacity: 0;
          }
        }
        @keyframes fade-in {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-fall {
          animation: fall 4s linear forwards;
        }
        .animate-fade-in {
          animation: fade-in 1s ease-out forwards;
        }
        .animate-fade-in-delay-1 {
          animation: fade-in 1s ease-out 0.3s forwards;
          opacity: 0;
        }
        .animate-fade-in-delay-2 {
          animation: fade-in 1s ease-out 0.6s forwards;
          opacity: 0;
        }
        .animate-fade-in-delay-3 {
          animation: fade-in 1s ease-out 0.9s forwards;
          opacity: 0;
        }
      `}</style>
    </main>
  );
}
