export default function () {
  const route = useRoute()

  function parseContentPathYear(path: string) {
    // The route will be in the form of `/<year>/<rest_of_the_path>`.
    // Removing the first slash then splitting by slash gives us an array of <year> <rest_of_the_path>
    const [pathYear, pathWithoutYear] = path.substring(1).split('/')
    return { pathYear, pathWithoutYear }
  }

  // Finding available years by querying the `/content` folder
  async function getAvailableContentYears() {
    const contentYears = new Set<string>([])
    const contentPaths = await queryContent().only(['_dir', '_path']).find()
    for (const contentPath of contentPaths) {
      if (!contentPath._path || !isPathContainsYear(contentPath._dir)) continue
      const { pathYear } = parseContentPathYear(contentPath._path)
      contentYears.add(pathYear)
    }

    return Array.from(contentYears).reverse()
  }

  function isPathContainsYear(path: string) {
    return /^\/?\d{4}$/.test(path)
  }

  const currentYear = new Date().getFullYear().toString()

  const currentPathYear = computed(() => {
    return parseContentPathYear(route.path).pathYear
  })

  const currentPathWithoutYear = computed(() => {
    return parseContentPathYear(route.path).pathWithoutYear
  })

  return {
    currentYear,
    currentPathYear,
    currentPathWithoutYear,
    parseContentPathYear,
    getAvailableContentYears,
    isPathContainsYear,
  }
}
