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
          Java Web Developer
        </h1>
        <p className="text-2xl font-bold text-white mb-2 drop-shadow font-pretendard">
          자바 웹 개발자   <b className="text-gray-200">전면수</b> 입니다.
        </p>
        <p className="text-gray-200 text-base sm:text-lg max-w-md mx-auto mb-4 drop-shadow font-pretendard">
          여러 SI, SM 프로젝트를 수행하면서 자바 웹 개발 경험을 쌓았습니다.
          Servlet/JSP에서 현재의 스프링 프레임워크 활용까지
          경험하면서 자바 웹 기술의 발전을 함께 성장하게 되었습니다.
        </p>
      </div>
    </section>
  );
};

export default Hero; 