import { notFound } from 'next/navigation'
import ProjectDetail from '@/components/ProjectDetail'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import JsonLd from '@/components/JsonLd'
import { getProject, projects } from '@/lib/projectsData'
import { getDictionary } from '@/dictionaries'
import { buildMetadata } from '@/lib/seo'
import { projectGraph, webPageGraph } from '@/lib/schema'
import { SITE_URL } from '@/lib/site'

export async function generateMetadata({ params: { lang, slug } }) {
  const dict = await getDictionary(lang)
  const project = getProject(slug)

  if (!project) return {}

  return buildMetadata({
    lang,
    path: `/project/${slug}`,
    title: project.title,
    description: project.description || dict?.seo?.project?.description,
    image: project.image,
    type: 'article',
  })
}

export default async function ProjectPage({ params: { lang, slug } }) {
  const project = getProject(slug)

  if (!project) {
    notFound()
  }

  const dict = await getDictionary(lang)
  const path = `/project/${slug}`

  // Trois autres réalisations pour garder le maillage interne vivant.
  const related = projects.filter((p) => p.slug !== slug).slice(0, 3)

  return (
    <div className="bg-dark text-white selection:bg-primary selection:text-white font-sans min-h-screen flex flex-col">
      <JsonLd
        data={webPageGraph({
          lang,
          path,
          name: project.title,
          description: project.description,
          breadcrumb: [
            { name: dict?.navbar?.portfolio, path: '/portfolio' },
            { name: project.title, path },
          ],
          extra: [projectGraph({ lang, project, id: `${SITE_URL}/${lang}${path}#project` })],
        })}
      />
      <Navbar dict={dict?.navbar} />

      <main className="flex-grow">
        <ProjectDetail
          project={project}
          related={related}
          dict={dict?.projectDetail}
          lang={lang}
        />
      </main>

      <Footer />
    </div>
  )
}

export async function generateStaticParams() {
  return projects.map((project) => ({
    slug: project.slug,
  }))
}
