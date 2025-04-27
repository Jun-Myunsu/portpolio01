import React from 'react';

interface ProjectData {
  title: string;
  img: string;
  intro: string;
  features: string[];
  tech: string[];
  contribution: string;
  troubleshooting: string;
  screenshots: string[];
}

const projectData: Record<string, ProjectData> = {
  knockdog: {
    title: 'knockDog: 독독',
    img: '/project1.png',
    intro: '영어 단어 암기 웹서비스입니다.',
    features: ['단어장 생성', '퀴즈 모드', '통계 제공'],
    tech: ['React', 'Next.js', 'TypeScript'],
    contribution: '기획, 프론트엔드 100%',
    troubleshooting: '퀴즈 랜덤화 로직, 대용량 데이터 처리 등',
    screenshots: ['/project1-1.png', '/project1-2.png'],
  },
  deskmood: {
    title: 'DeskMood - 데스크무드',
    img: '/project2.png',
    intro: '업무 집중을 위한 데스크 환경 서비스.',
    features: ['집중 모드', '환경음 제공', 'UI 커스터마이즈'],
    tech: ['React', 'Styled-components'],
    contribution: '프론트엔드 80%',
    troubleshooting: '환경음 동기화, 반응형 UI 등',
    screenshots: ['/project2-1.png', '/project2-2.png'],
  },
  'portfolio-stamp': {
    title: '포트폴리오 도장',
    img: '/project3.png',
    intro: '나의 포트폴리오를 남기는 서비스',
    features: ['포트폴리오 등록', '도장 찍기', '공유 기능'],
    tech: ['Next.js', 'TypeScript'],
    contribution: '기획, 프론트엔드 100%',
    troubleshooting: '도장 중복 방지, 데이터 최적화',
    screenshots: ['/project3-1.png', '/project3-2.png'],
  },
  'portfolio-site': {
    title: '포트폴리오 사이트',
    img: '/project4.png',
    intro: '최지운의 개인 포트폴리오 사이트',
    features: ['반응형 디자인', '다크/라이트 모드', '프로젝트 소개'],
    tech: ['Next.js', 'React'],
    contribution: '기획, 디자인, 개발 100%',
    troubleshooting: '다크모드 스타일링, 이미지 최적화',
    screenshots: ['/project4-1.png', '/project4-2.png'],
  },
};

export default function ProjectDetail({ slug }: { slug: string }) {
  const p = projectData[slug];
  if (!p) return <div className="p-10 text-center text-gray-400 font-pretendard">존재하지 않는 프로젝트입니다.</div>;
  return (
    <div className="max-w-3xl mx-auto py-16 px-4 font-pretendard">
      {/* 1. 프로젝트 사진과 간단한 소개 */}
      <div className="bg-white rounded-2xl shadow-md p-8 mb-8 flex flex-col items-center">
        <h1 className="text-3xl font-extrabold mb-4 text-gray-900">{p.title}</h1>
        <img src={p.img} alt={p.title} className="w-full max-w-md rounded-xl mb-6 shadow" />
        <p className="text-lg text-gray-700 mb-2">{p.intro}</p>
      </div>
      {/* 2. 주요 기능 및 특징 */}
      <div className="bg-gray-50 rounded-xl p-6 mb-6 shadow-sm">
        <h2 className="text-xl font-bold mb-2 text-gray-900">주요 기능 및 특징</h2>
        <ul className="list-disc list-inside text-gray-700 space-y-1">
          {p.features.map((f) => <li key={f}>{f}</li>)}
        </ul>
      </div>
      {/* 3. 사용 기술 및 언어 */}
      <div className="bg-gray-50 rounded-xl p-6 mb-6 shadow-sm">
        <h2 className="text-xl font-bold mb-2 text-gray-900">사용 기술 및 언어</h2>
        <ul className="flex gap-3 flex-wrap">
          {p.tech.map((t) => <li key={t} className="inline-block rounded-full px-4 py-2 text-sm font-semibold shadow-sm border border-white bg-gray-100 text-gray-700">{t}</li>)}
        </ul>
      </div>
      {/* 4. 작업 기여도 */}
      <div className="bg-gray-50 rounded-xl p-6 mb-6 shadow-sm">
        <h2 className="text-xl font-bold mb-2 text-gray-900">작업 기여도</h2>
        <p className="text-gray-700">{p.contribution}</p>
      </div>
      {/* 5. Trouble Shooting */}
      <div className="bg-gray-50 rounded-xl p-6 mb-6 shadow-sm">
        <h2 className="text-xl font-bold mb-2 text-gray-900">Trouble Shooting</h2>
        <p className="text-gray-700">{p.troubleshooting}</p>
      </div>
      {/* 6. 작업화면 */}
      <div className="bg-white rounded-xl p-6 shadow flex flex-wrap gap-4 justify-center">
        <h2 className="w-full text-xl font-bold mb-2 text-gray-700">작업화면</h2>
        {p.screenshots.map((src, i) => (
          <img key={i} src={src} alt={`screenshot${i}`} className="w-56 rounded-lg shadow" />
        ))}
      </div>
    </div>
  );
} 