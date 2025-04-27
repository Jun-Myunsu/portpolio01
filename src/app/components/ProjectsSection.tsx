'use client';
import React, { useState } from 'react';
import { useRouter } from 'next/navigation';

const projects = [
  {
    slug: 'react-bulk-form',
    category: 'react-bulk-form',
    categoryColor: 'bg-red-500',
    date: '2025.03',
    title: 'Form 상태의 일괄 관리를 위한 간단한 React 라이브러리',
    desc: [
      'Form 필드 값과 오류(정적 규칙 기반의 검증 결과)의 일괄 관리',
      'Form 또는 필드 단위의 상태 추적',
      'Form 상태에 따른 UX 구현을 배제하여 부가적인 인터페이스 최소화',
    ],
    link: 'https://www.npmjs.com/package/react-bulk-form',
    tech: ['TypeScript', 'React'],
    readme: true,
  },
  {
    slug: 'it-eldorado',
    category: 'IT 엘도라도 (블로그)',
    categoryColor: 'bg-red-500',
    date: '2024.09 (1인 개인 프로젝트)',
    title: 'Notion API/DB와 연동하여 개발한 개인 블로그',
    desc: [
      '티스토리 플랫폼에서의 불편함을 해소하고자 직접 개발',
      '별도의 데이터베이스 서버 없이 Notion API/DB와 연동하여 개발',
      '검색 엔진 최적화(SEO) 고도화 및 검색 엔진 마이그레이션',
      '무한 스크롤, 방문/조회 수 추적, 댓글/좋아요 등의 커뮤니티 기능 개발',
    ],
    link: 'https://it-eldorado.com',
    tech: ['TypeScript', 'Next.js', 'Zustand', 'React-Query', 'Tailwind CSS', 'Notion', 'Vercel'],
    readme: true,
  },
];

const ProjectsSection = () => {
  const router = useRouter();
  const [majorOnly, setMajorOnly] = useState(true);

  return (
    <section id="projects" className="bg-gray-50 text-gray-900 py-20 font-pretendard">
      <div className="max-w-5xl mx-auto px-6">
        <div className="flex flex-col items-center mb-10">
          <div className="flex items-center gap-2 mb-2">
            <span className="text-4xl font-extrabold tracking-tight text-gray-900">
              <span className="inline-block align-middle mr-2">🔗</span>PROJECTS
            </span>
          </div>
          <div className="flex items-center gap-2 text-gray-500 text-base">
            주요 프로젝트만 보기
            <input
              type="checkbox"
              checked={majorOnly}
              onChange={() => setMajorOnly((v) => !v)}
              className="accent-gray-700 w-5 h-5"
              readOnly
            />
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects
            .filter(() => (majorOnly ? true : true))
            .map((p) => (
              <div
                key={p.slug}
                onClick={() => router.push(`/projects/${p.slug}`)}
                className="bg-white rounded-2xl shadow-lg p-7 flex flex-col gap-3 border border-gray-100 cursor-pointer hover:shadow-xl transition group"
              >
                <div className="flex items-center gap-2 mb-1">
                  <span className={`px-3 py-1 rounded-lg text-white text-sm font-bold ${p.categoryColor}`}>
                    {p.category}
                  </span>
                </div>
                <div className="text-gray-400 text-sm mb-1">{p.date}</div>
                <div className="font-extrabold text-lg text-gray-900 mb-1">{p.title}</div>
                <ul className="list-disc list-inside text-gray-700 text-base mb-2">
                  {p.desc.map((d, i) => (
                    <li key={i}>{d}</li>
                  ))}
                </ul>
                <a
                  href={p.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-500 underline text-sm mb-2"
                >
                  {p.link}
                </a>
                <div className="flex flex-wrap gap-2 mb-2">
                  {p.tech.map((t) => (
                    <span
                      key={t}
                      className="bg-yellow-100 text-gray-900 rounded-lg px-3 py-1 text-xs font-semibold"
                    >
                      {t}
                    </span>
                  ))}
                </div>
                {p.readme && (
                  <a
                    href="#"
                    className="inline-flex items-center gap-1 bg-white border border-gray-300 rounded-lg px-3 py-1 text-sm font-bold text-gray-900 shadow hover:bg-gray-50 transition"
                  >
                    <span className="material-icons text-base">menu_book</span>README
                  </a>
                )}
              </div>
            ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection; 