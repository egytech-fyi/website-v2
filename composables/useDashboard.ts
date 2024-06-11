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
      yearsOfExperience: { from: 0, to: 0 },
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
    salary: filters.value.personal.salary,
    yoeFrom: filters.value.personal.yearsOfExperience.from,
    yoeTo: filters.value.personal.yearsOfExperience.to,
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

  function getDashboardData() {
    return useFetch<DashboardData>('https://api.egytech.fyi/stats', {
      params: filtersParams,
      transform: (data) => ({
        ...data,
        salaryRangeDistribution: {
          labels: data.buckets.map((bucket) => bucket.bucket),
          count: data.buckets.map((bucket) => bucket.count),
        },
      }),
    })
  }

  return { filters, filtersParams, getDashboardData }
}
