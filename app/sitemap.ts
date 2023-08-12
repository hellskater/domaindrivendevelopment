export default async function sitemap() {
  const routes = [""].map((route) => ({
    url: `https://domaindrivendevelopment.xyz${route}`,
    lastModified: new Date().toISOString().split("T")[0],
  }));

  return [...routes];
}
