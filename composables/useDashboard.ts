import { stringifyQuery } from 'ufo'

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

type DashboardData = {
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

export default function () {
  const filters = useState<DashboardFilters>('dashboard-filters', () => ({
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
  }))

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

  function storeFiltersToUrlWatcher() {
    return watchEffect(() => {
      const newURLQueries = stringifyQuery(filtersParams.value)
      window.history.replaceState(window.history.state, '', `?${newURLQueries}`)
    })
  }

  function getDashboardData(baseUrl: string) {
    return useAsyncData(
      'dashboard-data',
      async () => {
        const [all, males, females] = await Promise.all([
          $fetch<DashboardData>(baseUrl, { params: filtersParams.value }),
          $fetch<DashboardData>(baseUrl, {
            params: { ...filtersParams.value, gender: 'male' },
          }),
          $fetch<DashboardData>(baseUrl, {
            params: { ...filtersParams.value, gender: 'female' },
          }),
        ])

        const allGenders = {
          salaryRanges: all.buckets.map((bucket) => bucket.bucket),
          participantsCount: all.buckets.map((bucket) => bucket.count),
        }

        return {
          stats: all.stats,
          allGenders,
          salaryGenderComparison: {
            males: getGenderPercentagesArray(males, all),
            females: getGenderPercentagesArray(females, all),
          },
        }
      },
      {
        watch: [filtersParams],
      },
    )
  }

  return {
    filters,
    filtersParams,
    getDashboardData,
    storeFiltersToUrlWatcher,
  }
}

/**
 * Compares a specific gender (Male/Female) data with combined genders data to get the percentage of each salary range & fills the missing salary ranges with 0
 *
 */
function getGenderPercentagesArray(
  genderData: DashboardData,
  allData: DashboardData,
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
