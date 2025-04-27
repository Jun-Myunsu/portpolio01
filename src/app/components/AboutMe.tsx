import React from 'react';

const badgeColors = [
  'bg-gray-200 text-gray-800',
  'bg-gray-300 text-gray-900',
  'bg-gray-100 text-gray-700',
  'bg-gray-200 text-gray-800',
  'bg-gray-300 text-gray-900',
  'bg-gray-100 text-gray-700',
  'bg-gray-200 text-gray-800',
];

const AboutMe = () => {
  return (
    <section id="about" className="bg-gray-50 text-gray-900 py-20 min-h-[80vh] font-pretendard">
      <div className="max-w-3xl mx-auto px-6">
        <h2 className="text-3xl font-extrabold mb-10 text-gray-900">About me</h2>
        <div className="flex flex-col items-center mb-10">
          <img src="/emoji_profile.png" alt="emoji" className="w-28 h-28 rounded-full mb-4 shadow-lg" />
          <div className="text-xl font-bold text-gray-900">최지운</div>
          <div className="text-base text-gray-500 mb-1">프론트엔드 개발자</div>
          <div className="text-sm text-gray-400 mb-3">사용자 경험을 생각하는 개발자</div>
        </div>
        {/* 인터뷰 카드 */}
        <div className="mb-10">
          <h3 className="text-lg font-bold mb-4 text-gray-900">Interview</h3>
          <div className="flex flex-col gap-4">
            <div className="bg-white rounded-xl p-5 shadow-md">
              <b className="text-gray-900">Q. 프론트엔드로 진입한 이유?</b>
              <div className="text-gray-700 mt-2">사용자와 가장 가까운 곳에서, 눈에 보이는 결과물을 만드는 것이 매력적이어서 프론트엔드를 선택했습니다.</div>
            </div>
            <div className="bg-white rounded-xl p-5 shadow-md">
              <b className="text-gray-900">Q. 일할 때 가장 중요하게 생각하는 것이 있다면?</b>
              <div className="text-gray-700 mt-2">협업과 소통, 그리고 사용자 경험을 최우선으로 생각합니다.</div>
            </div>
            <div className="bg-white rounded-xl p-5 shadow-md">
              <b className="text-gray-900">Q. 자기계발을 위해 어떤 것을 해왔는지?</b>
              <div className="text-gray-700 mt-2">꾸준히 새로운 기술을 학습하고, 다양한 사이드 프로젝트를 진행하며 성장하고 있습니다.</div>
            </div>
          </div>
        </div>
        {/* Skill & Tools */}
        <div>
          <h3 className="text-lg font-bold mb-4 text-gray-900">Skill & Tools</h3>
          <div className="flex gap-3 flex-wrap">
            {['React', 'Next.js', 'TypeScript', 'JavaScript', 'Figma', 'Photoshop', 'Illustrator'].map((skill, i) => (
              <span
                key={skill}
                className={`inline-block rounded-full px-4 py-2 text-sm font-semibold shadow-sm border border-white ${badgeColors[i]}`}
              >
                {skill}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutMe; 