export default function sitemap() {
  const baseUrl = "https://ener-immo92.fr";

  // Dates fixes pour éviter que Google pense que tout change constamment
  const staticDate = new Date('2025-11-01').toISOString();
  const propertiesDate = new Date('2025-12-08').toISOString();

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
    lastModified: staticDate,
    changeFrequency:
      route === "" || route === "/biens-a-vendre" ? "daily" : "weekly",
    priority: route === "" ? 1 : route === "/biens-a-vendre" ? 0.9 : 0.8,
  }));

  // Pages de services (SEO)
  const servicePages = [
    "/nos-services/accompagnement-personnalise",
    "/nos-services/estimation-nanterre",
    "/nos-services/estimation-rueil-malmaison",
    "/nos-services/estimation-suresnes",
    "/nos-services/estimation-puteaux",
  ].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: propertiesDate,
    changeFrequency: "weekly",
    priority: route === "/nos-services/accompagnement-personnalise" ? 0.9 : 0.85,
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
    "/biens-a-vendre/appartement-garches-centre",
    "/biens-a-vendre/appartement-suresnes-plateau-terrasses",
    "/biens-a-vendre/maison-suresnes-familiale-exclusivite",
    "/biens-a-vendre/maison-suresnes-contemporaine-jardin",
    "/biens-a-vendre/maison-suresnes-mont-valerien-potentiel",
    "/biens-a-vendre/maison-nanterre-mont-valerien-a-renover",
    "/biens-a-vendre/maison-rueil-profession-liberale",
    "/biens-a-vendre/maison-nanterre-mont-valerien-jardin",
    "/biens-a-vendre/maison-puteaux-bergere",
  ].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: propertiesDate,
    changeFrequency: "daily",
    priority: 0.8,
  }));

  // Les biens vendus n'ont plus de pages individuelles (carrousel uniquement)
  // Suppression des anciennes URLs pour éviter les erreurs 404

  return [...routes, ...servicePages, ...properties];
}
