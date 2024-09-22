---
title: Report
description: ''
icon: 'ph:chart-pie-duotone'
---

This year, we got 1,729 responses, a 33% jump from last time when we got around 1,300. About 1,650 were valid, and roughly 1,200 were verified, where participants shared their company names or personal info! 

::alert{icon="ph:info"}
  Here we're exploring the analysis of these answers. If you prefer to compare your salary with others first then access our [Salary Dashboard](/2024/dashboard).
::

### Gender

Among the participants, 388 were from females, and 1,341 were from males 🎉

<ContentChartPie 
  :labels='["Male", "Female"]'
  :series='[77.6, 22.4]'>
</ContentChartPie>

### Title

The majority of participants had an engineering background, with over 50% specializing in Backend, Frontend, or Fullstack development.

<ContentChartPie 
  :labels='[
    "Ai & Automation",
    "Backend",
    "CRM Developer",
    "Data Analytics",
    "Data Engineer",
    "Data Scientist",
    "DevOps/SRE/Platform",
    "Embedded Systems",
    "Engineering Manager",
    "Executive",
    "Frontend",
    "Fullstack",
    "Hardware",
    "Mobile",
    "Product Manager",
    "Product Owner",
    "QA/SDET",
    "R&D",
    "Scrum Master",
    "Security/Networks",
    "Systems Architect",
    "Technical Support",
    "UI & UX"
  ]'
  :series='[
    0.9,
    24.2,
    0.4,
    4.3,
    2.7,
    2.8,
    4.6,
    2.7,
    1.2,
    0.5,
    11.5,
    18,
    0.3,
    7.3,
    2.9,
    1.8,
    4.6,
    1.8,
    0.3,
    2,
    0.9,
    2.3,
    2.1
  ]'>
</ContentChartPie>

### CS Degree

Of these participants, 1,358 held a Computer Science related degree, while 371 did not.

<ContentChartPie 
  :labels='["Yes", "No"]'
  :series='[8.5, 21.5]'>
</ContentChartPie>

### Level

For the third year, we haven't had many participants in higher level.
Only 10% of the participants were in levels higher than Senior Level.

<ContentChartPie 
  :labels='[
    "CXO",
    "Director",
    "Group Director",
    "Group Product Manager",
    "Head of Products",
    "Intern",
    "Junior",
    "Manager",
    "Mid-Level",
    "Principal",
    "Senior Manager",
    "Senior Principal",
    "Senior Staff",
    "Senior",
    "Staff",
    "Team Lead",
    "VP"
  ]'
  :series='[
    0.3,
    0.2,
    1.8,
    0.2,
    0.1,
    0.2,
    37.8,
    1.6,
    29.3,
    0.5,
    0.2,
    0.1,
    0.5,
    22.3,
    1.1,
    3.8,
    0.1
  ]'>
</ContentChartPie>

### Work Setting

In 2022, 14.4% of participants from Egypt worked remotely for overseas companies. This year, that figure has risen to 18.1%.

<ContentChartPie 
  :labels='[
    "Hybrid",
    "Office",
    "Relocated",
    "Remote/Abroad",
    "Remote/Egypt"
  ]'
  :series='[
    44,
    16.6,
    2.6,
    18.1,
    18.7
  ]'>
</ContentChartPie>

### Company Size

The majority of the participants are working in Small and Medium Enterprises.

<ContentChartPie 
  :labels='[
    "Large Enterprise / Corporation",
    "SME",
    "Start-up"
  ]'
  :series='[
    33.7,
    34.5,
    31.8
  ]'>
</ContentChartPie>

### Company Market

The majority of the participants are working in Small and Medium Enterprises.

<ContentChartPie 
  :labels='[
    "Global",
    "Local",
    "Regional"
  ]'
  :series='[
    44.1,
    16.5,
    39.4
  ]'>
</ContentChartPie>

### Location

As expected, 74% of participants are working in companies located in Cairo!

<ContentChartPie 
  :labels='[
    "Alexandria",
    "Cairo",
    "No Office in Egypt",
    "Others"
  ]'
  :series='[
    4.9,
    74,
    15.2,
    5.9
  ]'>
</ContentChartPie>

## Trends

This year we collected insights about popular programming languages, frameworks, infrastructure and tools

### **Popular Technology**

### Programming Languages

JavaScript, TypeScript and Python were mentioned by the majority in most used programming languages </>

<ContentChartPie
  :labels='[
    "JavaScript",
    "TypeScript",
    "PHP",
    "Ruby",
    "Python",
    "Java",
    "C#",
    "C/C++",
    "Go",
    "Kotlin",
    "Swift",
    "Dart",
    "Scala",
    "R",
    "Rust"
  ]'
  :series='[
    43.2, 
    31.4,
    8.6,
    3.1,
    30.2,
    18.2,
    16.9,
    6.6,
    4.9,
    4.2,
    3.5,
    2.3,
    0.4,
    0.6,
    0.4
  ]'>
</ContentChartPie>

### Cloud Providers

AWS is still by far the winner between cloud providers ☁️

<ContentChartPie
  :labels='[
    "AWS",
    "Azure",
    "Cloudflare",
    "Firebase",
    "GCP",
    "Self-hosted"
  ]'
  :series='[
    50.7, 
    28.1,
    4.4,
    12.4,
    11.2,
    23
  ]'>
</ContentChartPie>

### Databases

SQL Databases are still the go-to database solutions 🛢.

<ContentChartPie
  :labels='["Postgres", "SQL Server", "Redis", "MongoDB", "SQLite", "MySQL", "Elastic Search", "Oracle", "Firebase"]'
  :series='[36.5, 26.4, 14.7, 25.1, 8.3, 36.4, 10.3, 10.7, 7.6]'>
</ContentChartPie>

### Backend

Express has ascended in rankings since 2022, now claiming the second position, following ASP.Net, in comparison to Spring ⚙️.

<ContentChartPie
  :labels='["Laravel", "ASP.Net", "Spring", "Express", "Flask", "FastAPI", "Django", "Nest.js", "RoR"]'
  :series='[7.9, 17.9, 11.6, 12.1, 5.6, 6, 6.4, 7.5, 3.7]'>
</ContentChartPie>

### Frontend

React is the most used Frontend framework 🖥️

<ContentChartPie
  :labels='["React", "Vue", "Angular", "jQuery", "Next.js"]'
  :series='[26.9, 7.6, 16.4, 5.5, 7.8]'>
</ContentChartPie>

### Product Tools

Let's dive deeper and find out which tools are most popular between Product pros.

Jira, Figma and Miro were mentioned most by Product Managers, Designers and Owners 💡

<ContentChartBar
  horizontal
  x-axis-percentage
  data-label-prefix="%"
  :labels='[
    "Notion",
    "Jira",
    "Figma",
    "Trello",
    "Mero",
    "Hotjar",
    "Confluence",
    "Looker",
    "Power BI",
    "Amplitude",
    "Product Board",
    "Aha",
    "Tableau",
    "Survey Monkey",
    "Typeform",
    "ClickUp",
    "AdobeXD"
  ]'
  :series='[{
    "name": "Percentage",
    "data": [
      24.1,
      75.9,
      63,
      24.1,
      48.1,
      13,
      29.6,
      7,
      4,
      16.7,
      11.1,
      5.6,
      5.6,
      11.1,
      5.6,
      5.6,
      7.4
    ]
  }]'>
</ContentChartBar>

### Products Pricing

I've long been intrigued by the decision-making process behind pricing and packaging, so I asked product folks.

<ContentChartPie 
  :labels='[
    "Product Managers",
    "Executives",
    "Sales & Marketing",
    "RevOps"
  ]'
  :series='[
    15.6,
    43.6,
    35.9,
    5.2
  ]'>
</ContentChartPie>

### Products Analysis Tools

Product pros. typically dedicate a substantial amount of time to analyzing metrics and data, We were keen to discover the tools they rely on for this task. 🔍

<ContentChartPie 
  :labels='[
    "Sheets/Excel",
    "SQL",
    "Programming",
    "Others"
  ]'
  :series='[
    57.1,
    20.6,
    9.1,
    13.2
  ]'>
</ContentChartPie>

## Satisfaction

We specifically inquired about the participants' most recent salary increments, particularly in light of currency devaluation. 💷

### Salary Increase

Almost 40% had a salary increase in the last 3 months

<ContentChartPie 
  :labels='[
    "A new hire",
    "Less than 3 months",
    "Less than 6 months",
    "Less than a year",
    "More than a year"
  ]'
  :series='[
    29.5,
    37.9,
    15.1,
    9.6,
    7.9
  ]'>
</ContentChartPie>

### Same Company

We asked the participants if they have been working in the same company for the past year.
Around 37% of the participants with more than one year of experience, changed companies this past year! 🤝🏼

<ContentChartBarLine
  title='Average Engineering Salaries with 3-5 Years of Experience'
  :labels='["2017", "2021", "2022", "2024"]'
  bar-title='Salary in Thousand (EGP)'
  bar-axis-label-prefix='K'
  :bar-series='[
    {
      "name": "Backend Engineer",
      "data": [14, 18, 20, 57.3]
    },
    {
      "name": "Frontend Engineer",
      "data": [14, 17.3, 18.3, 49.3]
    },
    {
      "name": "Fullstack Engineer",
      "data": [13.3, 16.7, 17.7, 52.8]
    }
  ]'
  line-axis-label-prefix=' EGP'
  :line-series='{
    "name": "USD/EGP Exchange Rate",
    "data": [18, 15, 20, 48]
  }'>
</ContentChartBarLine>

### Salaries Across The Years

We wanted to know how tech salaries are moving with currency devaluation, using Egyptian Geeks 2017 report and our reports from previous years.
Although tech salaries have risen, they are barely keeping pace with the devaluation of the Egyptian pound. 💵

<ContentChartPie 
  :labels='["Yes", "No"]'
  :series='[62.1, 37.9]'>
</ContentChartPie>

### Salaries Currency

We wanted to know the percentage of the participants who receive their salaries in another currency.
The number of participants receiving their salaries in currencies other than EGP is growing. 💵

<ContentChartPie 
  :labels='["EGP", "Other (e.g. $)", "Hybrid"]'
  :series='[67.7, 28.9, 3.4]'>
</ContentChartPie>

### Salary Satisfaction

We asked the participants about their salary satisfaction 😊. More than 50% thought they should earn more!

<ContentChartPie 
  :labels='["Yes", "I should earn more", "I should earn less", "Not Sure"]'
  :series='[30.3, 54.2, 1.6, 13.9]'>
</ContentChartPie>

#### Salary Salary Satisfaction by Gender

We wanted to see the gender distribution between these answers 👩🏽 👨🏼

<ContentChartBar
  :y-axis-percentage='true'
  :labels='["Yes", "No, I should earn more", "No, I should earn less", "Not sure"]'
  :series='[
    {
      "name": "Male",
      "data": [30.7, 55.3, 1.8, 12.2]
    },
    {
      "name": "Female",
      "data": [27.4, 52.2, 1.4, 18.7]
    }
  ]'>
</ContentChartBar>

#### Level Satisfaction by Gender

More 61% of the participants think they are placed in the level they deserve 🎉

<ContentChartBar
  :y-axis-percentage='true'
  :labels='["Yes", "No, I should be in a higher level more", "No, I should be in a lesser level", "Not sure"]'
  :series='[
    {
      "name": "Male",
      "data": [62.1, 25.6, 3, 9.4]
    },
    {
      "name": "Female",
      "data": [60.7, 22.2, 2, 15.2]
    }
  ]'>
</ContentChartBar>

### Value

The majority of participants find value in their work ❤️

<ContentChartPie 
  :labels='["Yes", "No", "Do not Care. Here for the $"]'
  :series='[69.2, 19.4, 11.4]'>
</ContentChartPie>

### Learning

The majority also think they have the opportunity to learn new stuff! 📚

<ContentChartPie 
  :labels='["Yes", "Sometimes", "No"]'
  :series='[60.4, 29.9, 9.7]'>
</ContentChartPie>

### Preferred Work Settings

This year, 71% of the participants expressed a preference for a hybrid work setting. That's a significant surge from 63% back in 2022! 🏢 🏠

<ContentChartPie 
  :labels='["Office", "Remote", "Hybrid"]'
  :series='[4.1, 24.4, 71.5]'>
</ContentChartPie>
