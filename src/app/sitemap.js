export default function sitemap() {
  const baseUrl = "https://ener-immo92.fr";

  // Routes statiques
  const routes = [
    "",
    "/a-propos",
    "/nos-services",
    "/biens-a-vendre",
    "/biens-vendus",
    "/contact",
    "/calculateur",
    "/carte-biens",
  ].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency:
      route === "" || route === "/biens-a-vendre" ? "daily" : "weekly",
    priority: route === "" ? 1 : route === "/biens-a-vendre" ? 0.9 : 0.8,
  }));

  // Pages d'estimation par ville (SEO)
  const estimationPages = [
    "/nos-services/estimation-nanterre",
    "/nos-services/estimation-rueil-malmaison",
    "/nos-services/estimation-suresnes",
    "/nos-services/estimation-puteaux",
  ].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: "weekly",
    priority: 0.85,
  }));

  // Biens à vendre
  const properties = [
    "/biens-a-vendre/maison-nanterre-musiciens",
    "/biens-a-vendre/appartement-nanterre-centre",
    "/biens-a-vendre/appartement-atypique-nanterre",
    "/biens-a-vendre/loft-industriel-suresnes",
    "/biens-a-vendre/maison-rueil-mont-valerien",
    "/biens-a-vendre/maison-suresnes-mont-valerien",
    "/biens-a-vendre/appartement-rueil-mazurieres",
    "/biens-a-vendre/appartement-boulogne-centre",
    "/biens-a-vendre/studio-carrieres-sur-seine",
    "/biens-a-vendre/appartement-chatou-3-pieces",
    "/biens-a-vendre/maison-nanterre-mont-valerien-jardin",
    "/biens-a-vendre/appartement-garches-centre",
    "/biens-a-vendre/appartement-suresnes-plateau-terrasses",
    "/biens-a-vendre/maison-suresnes-familiale-exclusivite",
    "/biens-a-vendre/maison-suresnes-contemporaine-jardin",
    "/biens-a-vendre/maison-suresnes-mont-valerien-potentiel",
  ].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: "daily",
    priority: 0.8,
  }));

  // Biens vendus
  const soldProperties = [
    "/biens-vendus/maison-bezons-proche-t2",
    "/biens-vendus/appartement-nanterre-centre-exclusivite",
    "/biens-vendus/appartement-colombes-centre",
    "/biens-vendus/maison-nanterre-renovation-energetique",
  ].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: "monthly",
    priority:
      route === "/biens-vendus/maison-nanterre-renovation-energetique"
        ? 0.8
        : 0.6,
  }));

  return [...routes, ...estimationPages, ...properties, ...soldProperties];
}
