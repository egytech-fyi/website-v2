import { parseQuery, stringifyQuery } from 'ufo'
import { defu } from 'defu'
import { hash } from 'ohash'

type DashboardFilters = {
  personal: {
    titles: string[]
    salary: string
    yearsOfExperience: { from: number; to: number }
    level: string
    gender: string
    programmingLanguage: string
    csDegree: string
  }
  company: {
    businessLine: string
    businessFocus: string
    businessSize: string
    businessMarket: string
  }
  participants: {
    relocated: boolean
    remoteAbroad: boolean
  }
}

type DashboardAPIResponse = {
  stats: {
    totalCount: number
    median: number
    p20Compensation: number
    p75Compensation: number
    p90Compensation: number
  }
  buckets: Array<{
    bucket: string
    count: number
  }>
}

type DashboardData = {
  stats: DashboardAPIResponse['stats']
  allGenders: {
    salaryRanges: any
    participantsCount: any
  }
  salaryGenderComparison: {
    males: number[]
    females: number[]
  }
}

export default function () {
  const filters = useState<DashboardFilters>('dashboard-filters', () =>
    getInitialFilters(),
  )

  const filtersParams = computed(() => ({
    title: filters.value.personal.titles,
    yoe_from_included: filters.value.personal.yearsOfExperience.from,
    yoe_to_excluded: filters.value.personal.yearsOfExperience.to,
    level: filters.value.personal.level,
    gender: filters.value.personal.gender,
    programming_language: filters.value.personal.programmingLanguage,
    cs_degree: filters.value.personal.csDegree,
    business_line: filters.value.company.businessLine,
    business_focus: filters.value.company.businessLine,
    business_size: filters.value.company.businessLine,
    business_market: filters.value.company.businessLine,
    include_relocated: filters.value.participants.relocated,
    include_remote_abroad: filters.value.participants.remoteAbroad,
  }))

  function getInitialFilters() {
    return {
      personal: {
        titles: [],
        salary: '',
        yearsOfExperience: { from: 0, to: 30 },
        level: '',
        gender: '',
        programmingLanguage: '',
        csDegree: '',
      },
      company: {
        businessLine: '',
        businessFocus: '',
        businessSize: '',
        businessMarket: '',
      },
      participants: {
        relocated: false,
        remoteAbroad: false,
      },
    }
  }

  function readFiltersFromUrl(url: URL) {
    // Parsing filters params from URL
    const urlFiltersParams = url.searchParams.toString()
    const parsedFiltersParams = parseQuery(urlFiltersParams)

    // Mapping parsed filters to match `DashboardFilters` type
    const parsedFilters = {
      personal: {
        titles: normalizeUrlParam(parsedFiltersParams.title, 'array'),
        salary: '',
        yearsOfExperience: {
          from: +normalizeUrlParam(parsedFiltersParams.yoe_from_included),
          to: +normalizeUrlParam(parsedFiltersParams.yoe_to_excluded),
        },
        level: normalizeUrlParam(parsedFiltersParams.level),
        gender: normalizeUrlParam(parsedFiltersParams.gender),
        programmingLanguage: normalizeUrlParam(
          parsedFiltersParams.programming_language,
        ),
        csDegree: normalizeUrlParam(parsedFiltersParams.cs_degree),
      },
      company: {
        businessLine: normalizeUrlParam(parsedFiltersParams.business_line),
        businessFocus: normalizeUrlParam(parsedFiltersParams.business_focus),
        businessSize: normalizeUrlParam(parsedFiltersParams.business_size),
        businessMarket: normalizeUrlParam(parsedFiltersParams.business_market),
      },
      participants: {
        relocated: parsedFiltersParams.include_relocated === 'true',
        remoteAbroad: parsedFiltersParams.include_remote_abroad === 'true',
      },
    }

    // Updating filters state with parsed filters and defaulting to initial state
    filters.value = defu(parsedFilters, filters.value)
  }

  function storeFiltersToUrlWatcher() {
    return watchEffect(() => {
      const cleanFiltersParams = removeObjectEmptyValues(filtersParams.value)
      const newURLQueries = stringifyQuery(cleanFiltersParams)
      window.history.replaceState(
        window.history.state,
        '',
        newURLQueries ? `?${newURLQueries}` : '',
      )
    })
  }

  const cachedDashboardData = useState<Record<string, DashboardData>>(
    'cached-dashboard-data',
    () => ({}),
  )
  function getDashboardData(baseUrl: string) {
    return useAsyncData(
      'dashboard-data',
      async () => {
        // Early return if no title selected to save API calls
        if (filtersParams.value.title.length === 0) return

        // Hashing the request params & using it as a key to cache & restore responses
        const cleanFiltersParams = removeObjectEmptyValues(filtersParams.value)
        const hashedRequest = hash(stringifyQuery(cleanFiltersParams))

        // Returning cached data if exists
        if (cachedDashboardData.value[hashedRequest])
          return cachedDashboardData.value[hashedRequest]

        // Fetching data from API
        const [all, males, females] = await Promise.all([
          $fetch<DashboardAPIResponse>(baseUrl, {
            params: filtersParams.value,
          }),
          $fetch<DashboardAPIResponse>(baseUrl, {
            params: { ...filtersParams.value, gender: 'male' },
          }),
          $fetch<DashboardAPIResponse>(baseUrl, {
            params: { ...filtersParams.value, gender: 'female' },
          }),
        ])

        const result = {
          stats: all.stats,
          allGenders: {
            salaryRanges: all.buckets.map((bucket) => bucket.bucket),
            participantsCount: all.buckets.map((bucket) => bucket.count),
          },
          salaryGenderComparison: {
            males: getGenderPercentagesArray(males, all),
            females: getGenderPercentagesArray(females, all),
          },
        }

        // Caching the response & returning it
        cachedDashboardData.value[hashedRequest] = result
        return result
      },
      {
        watch: [filtersParams],
      },
    )
  }

  return {
    filters,
    filtersParams,
    getInitialFilters,
    readFiltersFromUrl,
    storeFiltersToUrlWatcher,
    getDashboardData,
  }
}

/**
 * Compares a specific gender (Male/Female) data with combined genders data to get the percentage of each salary range & fills the missing salary ranges with 0
 *
 */
function getGenderPercentagesArray(
  genderData: DashboardAPIResponse,
  allData: DashboardAPIResponse,
) {
  const baseGenderPercentages = allData.buckets.map(({ bucket }) => {
    const genderBucket = genderData.buckets.find(
      (genderBucket) => genderBucket.bucket === bucket,
    )

    return genderBucket
      ? +((genderBucket.count / allData.stats.totalCount) * 100).toPrecision(3)
      : 0
  })

  return baseGenderPercentages
}

type Param = string | string[] | undefined
function normalizeUrlParam(param: Param, target?: 'string'): string
function normalizeUrlParam(param: Param, target?: 'array'): string[]
function normalizeUrlParam(
  param: Param,
  target: 'string' | 'array' = 'string',
) {
  if (!param) return target === 'array' ? [] : ''

  if (target === 'array') return Array.isArray(param) ? param : [param]
  else return Array.isArray(param) ? param[0] : param
}

function removeObjectEmptyValues(source: Record<string, any>) {
  return Object.entries(source).reduce(
    (acc, [key, value]) => {
      if (value) acc[key] = value
      return acc
    },
    {} as Record<string, any>,
  )
}
