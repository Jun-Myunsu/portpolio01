import React from 'react';

const Footer = () => {
  return (
    <footer className="w-full bg-yellow-50 py-20 text-center text-gray-800 font-pretendard">
      <h2 className="text-4xl font-extrabold text-yellow-500 drop-shadow mb-4">Thank You</h2>
      <div className="text-xl font-bold mb-4">봐주셔서 감사합니다 :)</div>
      <div className="text-gray-500 text-base mb-8">
        프론트엔드 개발자 최지운의 포트폴리오.<br />
        언제든 연락 주시면 성실히 답변드리겠습니다.
      </div>
      <div className="text-gray-400 text-xs">
        © 2024 Choi Jiwoon. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer; 