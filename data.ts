
import { Experience, Accomplishment, Education, ExpertiseCategory } from './types';

export const PERSONAL_INFO = {
  name: "Sathish Vemana",
  title: "Senior Software Developer",
  email: "2314weew@abc.com",
  phone: "123.123.1234",
  summary: "A hands-on software developer with 19+ years of development expertise in application programming, web development, and databases using C#, .NET Framework, SQL Server, and more. Highly dedicated, solution-driven pattern programmer with strong skills in OOD/OOA and solving complex problems under tight deadlines."
};

export const EXPERTISE: ExpertiseCategory[] = [
  {
    category: "Programming Languages",
    skills: ["C#", "VB.NET", "VB6", "VBA", "C++", "C"]
  },
  {
    category: "Design Patterns & Models",
    skills: ["CQRS", "Repository", "Strategy", "MVC", "MVVM", "SOLID Principles", "HATEOAS"]
  },
  {
    category: ".NET Technologies",
    skills: [".NET Framework", "Web Services", "WCF", "Entity Data Model", "LINQ"]
  },
  {
    category: "Web Technologies",
    skills: ["ASP.NET", "HTML", "JavaScript", "CSS", "jQuery", "KnockoutJS", "Web API", "IIS"]
  },
  {
    category: "Database",
    skills: ["SQL Server", "MS Access", "Oracle", "Stored Procedures", "Triggers", "Views"]
  },
  {
    category: "Enterprise Tools",
    skills: ["K2 (Blackpearl, Smart Objects)", "Nintex", "SharePoint Designer", "InfoPath"]
  }
];

export const ACCOMPLISHMENTS: Accomplishment[] = [
  { description: "Developed a PIV Card Management system that saved the organization $30,000/year." },
  { description: "Minimized development lifecycle of a recent project by 4 months through identifying, reusing and customizing already existing code repository." },
  { description: "Proposed, designed and implemented 25+ Workflows to automate legacy systems and provided dashboards to analyze bottlenecks and thereby improve efficiency." },
  { description: "Worked as a IT Liaison for 2 recent projects which helped deliver the project on time with Rapid Development using Agile Technologies." }
];

export const EXPERIENCE_HISTORY: Experience[] = [
  {
    company: "DMInc.",
    role: "Senior Software Developer",
    period: "Mar 2010 – Present",
    projects: [
      {
        name: "Administrative Tracking Application (ATA)",
        client: "U.S. Dept. of Health and Human Services",
        tools: ["C#", "ASP.NET", "JavaScript", "jQuery", "WCF", "LINQ", "Entity Data model", "SQL Server", "K2"],
        description: [
          "n-tier web application designed based on CQRS design pattern for optimized data retrieval.",
          "Designed and developed complex workflows including Onboarding, Departure, Transfer, and Name Change.",
          "Developed business and data access layers using SOLID principles.",
          "Designed Database Schema and wrote numerous Stored Procedures and Triggers."
        ]
      },
      {
        name: "OEI Report Tracker Application (ORT)",
        client: "U.S. Dept. of Health and Human Services",
        tools: ["C#", "ASP.NET", "Knockout", "Web API", "SQL Server", "K2"],
        description: [
          "Created with REST web API using ASP.NET MVVM architecture.",
          "Extensive use of Asynchronous task-based programming to enhance responsiveness.",
          "Designed and developed database schemas and stored procedures extensively."
        ]
      },
      {
        name: "EPACS and HSPD12 Integration with ATA",
        client: "U.S. Dept. of Health and Human Services",
        tools: ["C#", "ASP.NET", "WCF", "JavaScript", "SQL Server", "K2", "HATEOAS architecture"],
        description: [
          "Developed using REST API and HATEOAS architecture.",
          "Seamless integration with external agencies (USAccess/SCMS) for PIV card requests.",
          "Designed and developed 15+ workflows for syncing user/card data between systems."
        ]
      }
    ]
  },
  {
    company: "U.S. Census Bureau",
    role: "Contract Developer",
    period: "2013-2014", // Approximate based on position in resume
    projects: [
      {
        name: "Workflow Design",
        tools: ["C#", "ASP.NET", "AJAX", "Nintex", "SharePoint"],
        description: [
          "Developed various workflows in Nintex for employee requests.",
          "Responsible for LOE estimation, solution design, deployment, and testing."
        ]
      }
    ]
  },
  {
    company: "U.S. Dept. of Education",
    role: "Senior Developer",
    period: "Jan 2012 – Dec 2012",
    projects: [
      {
        name: "Integrated Partner Management System (IPM)",
        tools: ["K2 Case Management System", "K2 Blackpearl", "K2 Smart Objects", "K2 Dynamic Service Broker"],
        description: [
          "Developed IPM for Federal Student Aid.",
          "Authored Detailed Design Documents (DDD) for various modules.",
          "Developed web parts using K2 Case Management System."
        ]
      }
    ]
  },
  {
    company: "NIH OAR",
    role: "Senior Developer",
    period: "Mar 2010 – Dec 2011",
    projects: [
      {
        name: "Approval Management System",
        tools: ["K2", "InfoPath"],
        description: ["Delivered Approval Management System for task management."]
      }
    ]
  },
  {
    company: "Captaré",
    role: ".NET Programmer / SharePoint Architect",
    period: "Feb 2008 – Mar 2010",
    generalDescription: [
      "Delivered various projects with tight deadlines for clients including North Star Educational Tools, Chicago Public Schools, Illinois Tool Works, Graycor Constructions, University of Chicago, and more."
    ],
    tools: [".NET Technologies", "C#", "ASP.NET", "AJAX", "SQL Server 2005", "SSRS", "Dundas controls", "InfoPath", "SharePoint Designer", "XSLT", "CAML", "SSIS"]
  },
  {
    company: "Takata Holdings",
    role: "Systems Developer",
    period: "Oct 2003 – Feb 2008",
    location: "Pontiac, MI",
    generalDescription: [
      "Globally responsible for architecting, designing, and developing several Engineering modules used by Japan, Europe, and US.",
      "Developed COM+ components for database interaction with XML transformation.",
      "Performed lead roles in various projects, directing and assisting team members."
    ],
    tools: ["VB.NET", "VB6", "C#", "ASP.NET", "ASP", "XML", "SQL Server 2000/2005", "COM+", "MTS"]
  }
];

export const EDUCATION_HISTORY: Education[] = [
  {
    degree: "Masters in Computer Science",
    institution: "Wayne State University",
    location: "Detroit, MI"
  },
  {
    degree: "Bachelors in Computer Science",
    institution: "India"
  }
];
