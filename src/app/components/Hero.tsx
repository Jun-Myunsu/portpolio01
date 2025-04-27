import React from 'react';

const Hero = () => {
  return (
    <section
      className="relative w-full min-h-[60vh] flex flex-col items-center justify-center text-center pt-28 pb-16 bg-cover bg-center"
      style={{ backgroundImage: "url('/images/main/coding-background.png')" }}
    >
      {/* 오버레이 */}
      <div className="absolute inset-0 bg-black/50 z-0" />
      <div className="relative z-10 flex flex-col items-center">
        <h1 className="text-5xl sm:text-6xl font-extrabold text-white drop-shadow-lg mb-4 font-pretendard">
          Front-End
        </h1>
        <p className="text-2xl font-bold text-white mb-2 drop-shadow font-pretendard">
          프론트엔드 개발자 <b className="text-white">최지운</b>입니다.
        </p>
        <p className="text-gray-200 text-base sm:text-lg max-w-md mx-auto mb-4 drop-shadow font-pretendard">
          사용자에게 손쉽고 명확하게 전달되는<br />
          느낌과 UI를 설계/개발하는 것을 지향합니다.
        </p>
        <img
          src="/profile_main.jpg"
          alt="profile"
          className="w-44 h-44 rounded-full object-cover mt-8 shadow-lg border-4 border-white"
        />
      </div>
    </section>
  );
};

export default Hero; 