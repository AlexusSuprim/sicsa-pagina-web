/**
 * Imágenes sección Nosotros en /public/images/about/ (Pexels — licencia libre uso comercial):
 * - quienes-team.jpg — Pexels #8293770
 * - dna-shipping.jpg — Pexels #906494
 * - dna-supervision.jpg — Pexels #4484072
 */
export interface QuienesSomosContent {
  title: string;
  paragraphs: string[];
  imageAlt: string;
}

export interface LogisticDnaContent {
  title: string;
  paragraphs: string[];
  primaryImageAlt: string;
  secondaryImageAlt: string;
}

export const quienesSomos: QuienesSomosContent = {
  title: 'Quiénes Somos',
  paragraphs: [
    'Servicios Integrados de Carga y Logística, S.A. es un operador logístico y agencia aduanal fundado por expertos guatemaltecos en logística aduanera y comercio exterior. Con una trayectoria iniciada en abril de 1999.',
    'Nos hemos consolidado como líderes en el mercado, adaptándonos a los cambios en procedimientos aduaneros y marcos legales para ofrecer seguridad jurídica y operativa a nuestros clientes.',
  ],
  imageAlt: 'Equipo de profesionales de logística coordinando operaciones en almacén',
};

export const logisticDna: LogisticDnaContent = {
  title: 'Nuestro ADN Logístico',
  paragraphs: [
    'Nuestra historia en el comercio exterior no comenzó en una oficina, sino con una herencia de servicio. La pasión por la logística nació con el ejemplo de nuestro abuelo, un Agente Aduanal pionero cuya visión y ética de trabajo sentaron las bases de lo que somos hoy. De él aprendimos que la logística no es solo mover mercancías, sino cumplir promesas.',
    'Somos, con orgullo, una empresa familiar. Esta naturaleza nos permite una cohesión única: cada miembro de la familia aporta su experiencia técnica y profesional en áreas clave del negocio. Esta convergencia de talentos garantiza una supervisión directa y un compromiso personal que las grandes corporaciones no pueden replicar, haciendo de Sicsa Group una estructura sólida y confiable.',
    'Nacimos con el servicio de aduanas como nuestra piedra angular. Sin embargo, para responder a un mundo globalizado, evolucionamos. Fuimos sumando capacidades de operador logístico integral, sumando servicios aéreos, marítimos y terrestres para ofrecer una solución completa que simplifica la operación de nuestros aliados.',
  ],
  primaryImageAlt: 'Buque de carga navegando en ruta comercial internacional',
  secondaryImageAlt: 'Operador de bodega supervisando mercancía almacenada en racks industriales',
};
