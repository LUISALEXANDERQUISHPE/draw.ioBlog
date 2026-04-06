'use client';

import { Navbar } from '@/components/navbar';
import { Hero } from '@/components/hero';
import { Section } from '@/components/section';
import { FeatureCard } from '@/components/feature-card';
import { PricingCard } from '@/components/pricing-card';
import { VideoSection } from '@/components/video-section';
import { Footer } from '@/components/footer';

const navigationLinks = [
  { label: 'Introducción', href: '#introduction' },
  { label: 'Dominio', href: '#learning' },
  { label: 'Funcionalidades', href: '#features' },
  { label: 'Colaboración', href: '#collaboration' },
  { label: 'Integración', href: '#integration' },
  { label: 'Aplicaciones', href: '#applications' },
  { label: 'Costo', href: '#pricing' },
  { label: 'Videos', href: '#videos' },
];

const features = [
  {
    icon: '',
    title: 'Edición Avanzada',
    description: 'Drag & drop de miles de formas (bibliotecas UML, AWS, Azure, BPMN, redes, ingeniería, bioicons, etc.), conectores inteligentes con waypoints y auto-reencaminamiento, tablas, swimlanes, texto HTML y matemáticas, dibujo a mano alzada, auto-layouts, lienzo infinito, reglas y guías, capas, metadatos, propiedades personalizadas y formas propias.',
  },
  {
    icon: '',
    title: 'Generación Inteligente',
    description: 'Diagramas desde texto (Mermaid, CSV, SQL), plantillas inteligentes e integración con IA (OpenAI) para crear diagramas complejos automáticamente desde descripciones textuales.',
  },
  {
    icon: '',
    title: 'Personalización',
    description: 'Temas adaptables incluyendo modo oscuro, paletas de colores personalizadas, múltiples fuentes, estilos de boceto y búsqueda inteligente de formas para crear diagramas únicos.',
  },
  {
    icon: '',
    title: 'Importación/Exportación',
    description: 'Soporte amplio de formatos incluyendo XML draw.io, Visio, Lucidchart, Gliffy, PNG, SVG, PDF, JPEG y más. Comparte tus diagramas en cualquier formato que necesites.',
  },
  {
    icon: '',
    title: 'Colaboración en Tiempo Real',
    description: 'Edición colaborativa sin límite de usuarios, guardado automático en Google Drive, OneDrive, Dropbox, GitHub o almacenamiento local. Privacidad garantizada sin servidores centralizados.',
  },
  {
    icon: '',
    title: 'Integración y Extensibilidad',
    description: 'Integración nativa con Confluence, Jira, Notion, VS Code, Google Workspace y más. Enlaces interactivos, tooltips, acciones personalizadas y editor completamente personalizable.',
  },
];

const useCases = [
  { icon: '💻', title: 'Desarrollo de Software', description: 'UML, ERD, diagramas de flujo, gitflow, diagramas de componentes. Visualiza arquitecturas, flujos de trabajo y dependencias de tu código.' },
  { icon: '🏗️', title: 'Infraestructura IT', description: 'Redes, cloud architecture (AWS/Azure/GCP), racks, diagramas de amenazas. Diseña infraestructuras complejas de forma clara.' },
  { icon: '📊', title: 'Procesos de Negocio', description: 'Flowcharts, BPMN, Kanban, SWOT, PESTLE, planogramas. Documenta y optimiza procesos empresariales completos.' },
  { icon: '🗄️', title: 'Bases de Datos', description: 'ERD (Entidad-Relación) desde SQL, modelos de datos, esquemas. Genera y visualiza diagramas complejos de bases de datos.' },
  { icon: '📚', title: 'Educación y Análisis', description: 'Mapas mentales, líneas de tiempo, organizadores gráficos, diagramas médicos. Perfecto para estudiantes y profesionales.' },
  { icon: '⚙️', title: 'Manufactura y Análisis', description: 'Procesos ISO, líneas de producción, infografías, Sankey, Ishikawa, customer journey, DevOps y documentación técnica.' },
];

const pricingPlans = [
  {
    name: 'Gratuito para Siempre',
    price: '$0',
    description: 'La versión standalone (web y desktop) es completamente gratuita sin restricciones',
    features: [
      'Diagramas ilimitados',
      'Almacenamiento ilimitado (en tu dispositivo o cloud)',
      'Todas las formas y bibliotecas (UML, AWS, Azure, BPMN, etc.)',
      'Exportación a múltiples formatos (PNG, SVG, PDF, XML, etc.)',
      'Colaboración en tiempo real (Google Drive, OneDrive, Dropbox)',
      'Aplicación web (app.diagrams.net) y desktop (Windows, macOS, Linux)',
      'Uso offline sin conexión',
      'Cero publicidad, cero tracking, cero registro obligatorio',
      'Sin límites de usuarios'
    ],
    cta: 'Comenzar Ahora',
    highlighted: true,
  },
  {
    name: 'Integración Enterprise',
    price: 'Personalizado',
    description: 'Para empresas que necesitan soluciones a medida',
    features: [
      'Self-hosted en tus servidores (Docker)',
      'Integración personalizada en aplicaciones propias',
      'Soporte premium y SLA dedicado',
      'Soluciones de gobernanza y seguridad avanzada',
      'Tokens de autenticación personalizados',
      'Migración de datos asistida',
      'Capacitación y onboarding del equipo',
      'Consultoría técnica'
    ],
    cta: 'Contactar Ventas',
  },
];

const videos = [
  {
    id: '1',
    title: 'Draw.io Tutorial Completo - Comenzar desde Cero',
    youtubeId: 'z-o1aEBmyTg',
  },
  {
    id: '2',
    title: 'Diagramas UML y ERD con Draw.io',
    youtubeId: '6vzVXajCl9k',
  },
  {
    id: '3',
    title: 'Colaboración en Tiempo Real y Exportación',
    youtubeId: 'ip4-ldbJr3o',
  },
  {
    id: '4',
    title: 'Integraciones y Casos de Uso Avanzados',
    youtubeId: 'wB4t7P7r1i8',
  },
];

export default function Home() {
  const handleCTA = () => {
    const element = document.querySelector('#pricing');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <main className="w-full">
      <Navbar toolName="DevTools" links={navigationLinks} />

      <Hero
        title="Draw io"
        description=" Diseña, construye y crea cualquier tipo de estructura fácilmente con Draw io la herramienta de diagramación más versátil y colaborativa del mercado. "
      />

      <Section
        id="introduction"
        title="Introducción"
       description1="Draw io, también conocido como diagrams.net, es una herramienta de diagramación gratuita y de código abierto que permite crear diagramas profesionales de forma rápida y segura. Lanzada como alternativa accesible a herramientas pagadas, se enfoca en la privacidad: no almacena tus diagramas en sus servidores (tú eliges dónde guardarlos: local, Google Drive, OneDrive, Dropbox, GitHub, etc.). Es ideal para cualquier usuario que necesite visualizar procesos, arquitecturas, flujos de datos o ideas complejas sin curva de aprendizaje alta."
        description2="Funciona completamente en el navegador (app.diagrams.net), como aplicación de escritorio offline (Windows, macOS, Linux) o integrada en plataformas como Confluence, Jira, Notion, VS Code o Google Workspace. Soporta generación de diagramas con IA (OpenAI) y es compatible con archivos creados desde 2005. Su filosofía “seguridad primero” y ausencia de registro obligatorio la hacen perfecta para equipos que valoran el control total de sus datos."
        description3="Los beneficios incluyen exportación a múltiples formatos (PDF, PNG, SVG, etc.), bibliotecas de formas extensas (UML, AWS, Azure, BPMN, etc.), colaboración en tiempo real y cero costo para el uso standalone. Es la herramienta de diagramación más usada en entornos educativos, desarrollo y empresas que buscan alternativas económicas sin sacrificar profesionalismo."
      />

      <Section
        id="learning"
        title="Curva de aprendizaje"
        description1="Draw io es extremadamente fácil e intuitiva desde el primer minuto: su interfaz se parece a herramientas de oficina (drag & drop de formas, conectores automáticos, doble clic para etiquetas). La mayoría de usuarios la dominan en menos de 30 minutos sin tutoriales, gracias a plantillas, búsqueda de formas y atajos de teclado. Es especialmente accesible para principiantes y no técnicos.
        La curva de aprendizaje es prácticamente plana. Las partes más “difíciles” son solo las opciones avanzadas (capas, metadatos, Mermaid, SQL import, formas personalizadas), pero estas no son necesarias para el 90 % de los diagramas. No hay configuraciones complejas ni cuentas obligatorias; incluso la colaboración en tiempo real es inmediata en Google Drive o OneDrive."
      >

        <p className="text-xs sm:text-base text-muted-foreground max-w-2xl mx-auto leading-relaxed text-pretty font-light text-justify">

        </p>
        <div className="space-y-4">
          <div className="flex items-center gap-4">
            <div className="px-3 py-1 bg-accent bg-linear-to-r from-orange-800 to-white-400 bg-clip-text text-transparent rounded-full text-sm font-medium">
              Básico
            </div>
            <div className="flex-1 h-2 bg-muted rounded-full overflow-hidden">
              <div className="h-full w-1/3 bg-linear-to-r from-orange-800 to-white-400 rounded-full" />
            </div>
          </div>

          <div className="flex items-center gap-4">
            <div className="px-3 py-1 bg-accent bg-linear-to-r from-orange-800 to-white-400 bg-clip-text text-transparent rounded-full text-sm font-medium">
              Intermedio
            </div>
            <div className="flex-1 h-2 bg-muted rounded-full overflow-hidden">
              <div className="h-full w-2/3 bg-linear-to-r from-orange-800 to-white-400 rounded-full" />
            </div>
          </div>

          <div className="flex items-center gap-4">
            <div className="px-3 py-1 bg-accent bg-linear-to-r from-orange-800 to-white-400 bg-clip-text text-transparent rounded-full text-sm font-medium">
              Avanzado
            </div>
            <div className="flex-1 h-2 bg-muted rounded-full overflow-hidden">
              <div className="h-full w-full bg-linear-to-r from-orange-800 to-white-400 rounded-full" />
            </div>
          </div>
        </div>
      </Section>

      <Section id="features" title="Funcionalidades">

        <p className="text-xs sm:text-base text-muted-foreground max-w-2xl leading-relaxed text-pretty font-light text-left mb-8">
          draw.io incluye:
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <FeatureCard key={index} {...feature} />
          ))}
        </div>
      </Section>

      <Section
        id="collaboration"
        title="Entornos colaborativos"
        description1="La colaboración es en tiempo real con cursores compartidos visibles para todos los editores. Funciona perfectamente en Google Drive, OneDrive, Dropbox, Nextcloud y las apps de Confluence/Jira. Puedes invitar a colaboradores externos sin que necesiten cuenta draw.io; solo abren el enlace. Los cambios se sincronizan instantáneamente y hay historial de versiones (dependiendo del almacenamiento). En entornos enterprise (Confluence/Jira) se añaden permisos granulares y gobernanza de datos. Es ideal para equipos distribuidos que editan simultáneamente sin conflictos."
        variant="image-text"
        image="/integrations.png"
        imageClassName="w-full h-auto object-contain rounded-lg shadow-lg"
      />

      <Section
        id="integration"
        title="Integración"
        description1="Draw io se integra nativamente con: Google Drive/Workspace (incl. Classroom), Microsoft OneDrive/SharePoint/Office 365/Teams, Dropbox, GitHub/GitLab, Notion (extensión Chrome), Nextcloud, Atlassian Confluence y Jira (apps del Marketplace), VS Code, MediaWiki, BookStack, Grafana, JupyterLab, ONLYOFFICE, Redmine, Tiki Wiki y muchas más (más de 20 integraciones oficiales). También permite incrustar el editor en tus propias aplicaciones y self-hosted vía Docker. Los diagramas se pueden ver/editar directamente dentro de estas plataformas sin exportar/importar manualmente."
        variant="image-text-reverse"
        image="/page_work.gif"
        imageClassName="w-full h-auto object-contain rounded-lg shadow-lg"
      />

      <Section id="applications" title="Aplicaciones (Casos de Uso)">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {useCases.map((useCase, index) => (
            <FeatureCard key={index} {...useCase} />
          ))}
        </div>
      </Section>

      <Section id="pricing" title="Costo">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {pricingPlans.map((plan, index) => (
            <PricingCard key={index} {...plan} />
          ))}
        </div>
      </Section>

      <VideoSection videos={videos} />

      <Footer toolName="Wallend" year={new Date().getFullYear()} />
    </main>
  );
}
