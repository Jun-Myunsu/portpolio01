import ProjectDetail from '../../components/ProjectDetail';

export default function ProjectPage({ params }: { params: { slug: string } }) {
  const { slug } = params;
  return <ProjectDetail slug={slug} />;
} 