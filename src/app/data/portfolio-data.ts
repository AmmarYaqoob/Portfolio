import { Portfolio } from "../interfaces/portfolio";

export const PORTFOLIO_DATA: any =
  [
    {
      slug: 'automate-job-finding',
      data: {
        title: 'Automate Job Finding',
        description: 'Job search automation system that scrapes job postings, analyzes them against your CV using ATS.',
        image: '../../../assets/images/job-automation-.png',
        links: {
          live: '',
          github: ''
        },
        hero: {
          title: 'Automate Job Finding Platform',
          country: 'United States',
          countryClass: 'usa',
          techStack: [
            'Angular',
            '.NET',
            'SQL Server',
            'AWS'
          ],
          description: [
            'An intelligent job search automation system that scrapes job postings, analyzes them against your CV using ATS (Applicant Tracking System) scoring, and generates organized Excel reports. The system includes a web-based configuration interface for easy management of search keywords and locations.'
          ]
        },
        client_and_challenge: {
          title: 'Client & Challenge',
          image: '../../../assets/images/job-automation-1.png',
          description: [
            'Manual job searching is repetitive and time-consuming. Candidates spend hours browsing boards, tailoring applications, and tracking responses across spreadsheets. The challenge was to automate discovery, scoring, and reporting so users could focus on high-fit opportunities instead of admin work.'
          ]
        },
        solution: {
          title: 'Solution',
          image: '../../../assets/images/job-automation-2.png',
          description: [
            'I built an automation pipeline that scrapes listings, compares each role against a CV using ATS-style scoring, and exports ranked results to Excel. A web configuration panel lets users manage keywords, locations, and filters without touching code.'
          ]
        },
        feature: {
          title: 'Features',
          points: [
            {
              title: 'Job Scraping',
              description: 'Automated collection of postings from configured sources and search criteria.'
            },
            {
              title: 'ATS Scoring',
              description: 'CV-to-job matching with scoring to prioritize the most relevant openings.'
            },
            {
              title: 'Excel Reporting',
              description: 'Organized export of ranked listings for review and follow-up.'
            },
            {
              title: 'Web Configuration',
              description: 'UI for managing keywords, locations, and automation settings.'
            },
            {
              title: 'Scheduled Runs',
              description: 'Repeatable searches so new listings are captured on a schedule.'
            }
          ]
        },
        services: {
          title: 'Services provided',
          description: [
            {
              icon: 'fa-diagram-project',
              text: 'System Design'
            },
            {
              icon: 'fa-server',
              text: 'Front-End Development'
            },
            {
              icon: 'fa-gears',
              text: 'Back-End Development'
            },
            {
              icon: 'fa-magnifying-glass',
              text: 'Automation & Integration'
            }
          ]
        }
      }
    },
    {
      slug: 'propertease',
      data: {
        title: 'Propertease',
        description: 'Designed to simplify the rental process for landlords, tenants, and service providers.',
        image: '../../../assets/images/property-2.jpg',
        links: {
          live: '',
          github: ''
        },
        hero: {
          title: 'Propertease',
          country: 'United States',
          countryClass: 'usa',
          techStack: [
            'Angular',
            '.Net',
            'SQL Server',
            'AWS'
          ],
          description: [
            'The Property Management Platform is a full stack web application designed to simplify the rental process for landlords, tenants, and service providers. Instead of relying on multiple platforms for property listings, agreements, rent reminders, and maintenance requests, the application brings everything together in one place.',
            'The platform focuses on making communication easier, reducing paperwork, and helping all parties manage their responsibilities from a single dashboard.'
          ]
        },
        client_and_challenge: {
          title: 'Client & Challenge',
          image: '../../../assets/images/property-2.jpg',
          description: [
            'Managing rental properties often involves several disconnected processes. Landlords advertise properties on one platform, communicate through another, prepare agreements manually, and keep track of rent payments separately. Tenants face similar challenges when searching for properties, contacting landlords, and managing rental documents. Finding reliable professionals for maintenance work is another common issue. This project addresses these problems by providing a single application that supports the complete rental lifecycle.'
          ]
        },
        solution: {
          title: 'Solution',
          image: '../../../assets/images/property-1.PNG',
          description: [
            'After gathering requirements and defining the expected platform behavior, I designed and implemented modules for listings, agreements, payments, and maintenance workflows. The solution replaced disconnected manual processes with a unified rental lifecycle platform.'
          ]
        },
        feature: {
          title: 'Feature',
          points: [
            {
              title: 'Landlord Portal',
              description: 'Landlords can create and manage property listings, rental agreements, tenant communication, and rent tracking.'
            },
            {
              title: 'Tenant Portal',
              description: 'Tenants can search properties, communicate with landlords, manage agreements, and receive payment reminders.'
            },
            {
              title: 'Admin Portal',
              description: 'Provides complete management of users, properties, reports, and platform operations.'
            },
            {
              title: 'Service Provider Portal',
              description: 'Allows maintenance providers to register, manage profiles, and respond to service requests.'
            },
            {
              title: 'Notification System',
              description: 'Automated notifications for rent due dates, agreements, maintenance requests, and platform activities.'
            },
            {
              title: 'Payment Integration',
              description: 'Stripe integration with automated charging, invoicing, tax support, and multiple payment methods.'
            },
            {
              title: 'Property Management Workflow',
              description: 'Complete rental lifecycle management from property listing to maintenance services.'
            }
          ]
        },
        services: {
          title: 'Services provided',
          description: [
            {
              icon: 'fa-diagram-project',
              text: 'Creating UI/UX'
            },
            {
              icon: 'fa-server',
              text: 'Front-End Development'
            },
            {
              icon: 'fa-gears',
              text: 'Back-End Development'
            },
            {
              icon: 'fa-triangle-exclamation',
              text: 'QA Services'
            },
            {
              icon: 'fa-magnifying-glass',
              text: 'Infrastructure Setup'
            }
          ]
        }
      }
    },
    {
      slug: 'document-rag-assistant',
      data: {
        title: 'Document RAG Assistant',
        description: 'Python RAG system that ingests large TXT, PDF, and DOCX files, builds a vector index, and answers chat questions strictly from uploaded documents.',
        image: '../../../assets/images/job-automation-3.png',
        links: {
          live: '',
          github: ''
        },
        hero: {
          title: 'Document RAG Assistant',
          country: 'Personal Project',
          countryClass: 'usa',
          techStack: [
            'Python',
            'FastAPI',
            'MongoDB',
            'LangChain',
            'OpenAI',
            'FAISS'
          ],
          description: [
            'A retrieval-augmented generation (RAG) application built in Python for working with very large document collections. Users upload TXT, PDF, and DOCX files, the system extracts and chunks the content, stores embeddings in a vector database, and tracks file metadata in MongoDB so multiple documents can be managed in one workspace.',
            'The chat interface answers questions using only retrieved context from the selected files, reducing hallucinations and keeping responses grounded in source material.'
          ]
        },
        client_and_challenge: {
          title: 'Problem & Challenge',
          image: '../../../assets/images/job-automation-1.png',
          description: [
            'Teams often need to query long manuals, policies, and reports without reading hundreds of pages manually. Generic chatbots pull answers from general model knowledge, which is risky when accuracy must come from internal documents only.',
            'The challenge was to support large files, multiple uploads per user, reliable parsing across formats, and a chat experience that refuses to answer when the requested information is not present in the indexed documents.'
          ]
        },
        solution: {
          title: 'Solution',
          image: '../../../assets/images/job-automation-2.png',
          description: [
            'I built a Python backend with document loaders for TXT, PDF, and DOCX, text splitting for large files, and embedding generation stored in a vector database. MongoDB stores document metadata, processing status, chunk counts, and ownership so users can upload, re-index, and delete files independently.',
            'At question time, the system retrieves the most relevant chunks, injects them into the prompt, and returns an answer constrained to that context. If retrieval confidence is low, the assistant responds that the answer is not available in the uploaded files.'
          ]
        },
        feature: {
          title: 'Features',
          points: [
            {
              title: 'Multi-Format Ingestion',
              description: 'Upload and parse large TXT, PDF, and DOCX files with automatic text extraction.'
            },
            {
              title: 'Vector Indexing',
              description: 'Chunk documents, generate embeddings, and store them for semantic search.'
            },
            {
              title: 'MongoDB File Management',
              description: 'Track multiple files per user with metadata, status, and version history.'
            },
            {
              title: 'Grounded Chat',
              description: 'Responses are generated only from retrieved document context, not open-ended model guesses.'
            },
            {
              title: 'Source Citations',
              description: 'Return the document name and snippet used to support each answer.'
            },
            {
              title: 'Re-Indexing & Cleanup',
              description: 'Replace, remove, or rebuild indexes when documents are updated.'
            }
          ]
        },
        services: {
          title: 'Technologies Used',
          description: [
            {
              icon: 'fa-brands fa-python',
              text: 'Python Backend'
            },
            {
              icon: 'fa-database',
              text: 'MongoDB Metadata Store'
            },
            {
              icon: 'fa-brain',
              text: 'Vector Search & Embeddings'
            },
            {
              icon: 'fa-comments',
              text: 'RAG Chat Interface'
            }
          ]
        }
      }
    },
    {
      slug: 'python-etl-analytics-pipeline',
      data: {
        title: 'Python ETL & Analytics Pipeline',
        description: 'Automated Python data pipeline that ingests CSV, JSON, and API feeds, validates and transforms records, and loads curated datasets into MongoDB for reporting.',
        image: '../../../assets/images/tcp-ip.png',
        links: {
          live: '',
          github: ''
        },
        hero: {
          title: 'Python ETL & Analytics Pipeline',
          country: 'Personal Project',
          countryClass: 'usa',
          techStack: [
            'Python',
            'Pandas',
            'FastAPI',
            'MongoDB',
            'APScheduler',
            'Docker'
          ],
          description: [
            'A Python ETL and analytics pipeline designed to collect data from CSV exports, JSON files, and REST APIs, clean and validate it with Pandas, and persist structured results in MongoDB for dashboards and downstream services.',
            'The project includes scheduled jobs, retry handling, data quality checks, and export endpoints so processed datasets can be reused by other applications.'
          ]
        },
        client_and_challenge: {
          title: 'Problem & Challenge',
          image: '../../../assets/images/crs.png',
          description: [
            'Many small teams receive data from multiple sources in inconsistent formats. Manual spreadsheet cleanup is slow, error-prone, and difficult to repeat daily.',
            'The challenge was to build a reliable Python pipeline that normalizes incoming records, catches bad data early, stores history in MongoDB, and produces analytics-ready collections without manual intervention.'
          ]
        },
        solution: {
          title: 'Solution',
          image: '../../../assets/images/shipping-1.jpg',
          description: [
            'I implemented modular extract, transform, and load stages in Python. Extractors pull from files and APIs, transformers apply schema validation, deduplication, and business rules with Pandas, and loaders upsert records into MongoDB collections designed for reporting.',
            'APScheduler runs recurring imports, while FastAPI exposes health checks, manual run triggers, and summary endpoints for the latest processed batches.'
          ]
        },
        feature: {
          title: 'Features',
          points: [
            {
              title: 'Multi-Source Ingestion',
              description: 'Import data from CSV, JSON, and REST APIs through reusable connectors.'
            },
            {
              title: 'Validation Rules',
              description: 'Schema checks, null detection, type coercion, and duplicate handling before load.'
            },
            {
              title: 'MongoDB Storage',
              description: 'Persist raw, cleaned, and aggregated collections for flexible querying.'
            },
            {
              title: 'Scheduled Jobs',
              description: 'Automated recurring pipeline runs with retry and failure logging.'
            },
            {
              title: 'Analytics Exports',
              description: 'Generate summary metrics and export curated datasets for dashboards.'
            },
            {
              title: 'API Control Layer',
              description: 'FastAPI endpoints to trigger runs, inspect job status, and fetch processed results.'
            }
          ]
        },
        services: {
          title: 'Technologies Used',
          description: [
            {
              icon: 'fa-brands fa-python',
              text: 'Python ETL Pipeline'
            },
            {
              icon: 'fa-table',
              text: 'Pandas Transformations'
            },
            {
              icon: 'fa-database',
              text: 'MongoDB Data Store'
            },
            {
              icon: 'fa-clock',
              text: 'Scheduled Processing'
            }
          ]
        }
      }
    },
    {
      slug: 'crs',
      data: {
        title: 'CRS',
        description: 'A regulatory reporting platform to support OECD (CRS) obligations for financial institutions',
        image: '../../../assets/images/crs.png',
        links:
        {
          live: 'https://solutions-alpha-01.regtify.net/',
          github: ''
        },
        hero: {
          title: 'CRS Reporting Platform',
          country: 'European Union',
          countryClass: 'eu',
          techStack: [
            'Angular',
            'Node.js',
            'SQL Server',
            'AWS',
            'Lambda'
          ],
          description: [
            'A regulatory reporting platform built to support OECD Common Reporting Standard (CRS) obligations for financial institutions. The platform automates the collection, validation, transformation, and submission of reportable account information across multiple jurisdictions.',
            'The solution reduces manual compliance effort by providing data validation, XML generation, schema verification, audit trails, and jurisdiction-specific reporting workflows.'
          ]
        },
        client_and_challenge: {
          title: 'Client & Challenge',
          image: '../../../assets/images/crs-2.jpg',
          description: [
            'Financial institutions were managing CRS submissions using spreadsheets and disconnected systems, creating risks around data quality, missed deadlines, and reporting inconsistencies. The challenge was to create a centralized solution capable of handling large volumes of reportable accounts while maintaining compliance with evolving OECD reporting requirements.'
          ]
        },
        solution: {
          title: 'Solution',
          image: '../../../assets/images/crs-1.jpg',
          description: [
            'A complete CRS reporting lifecycle platform was implemented. The solution supports data onboarding, account classification, TIN validation, XML generation, jurisdiction-specific formatting, schema validation, and secure file distribution. Compliance teams can review, approve, and track reporting activities from a single dashboard.'
          ]
        },
        feature: {
          title: 'Features',
          points: [
            {
              title: 'Account Classification',
              description: 'Automated CRS account classification and reportability determination.'
            },
            {
              title: 'Bulk Data Import',
              description: 'Import and process large volumes of account data efficiently.'
            },
            {
              title: 'TIN Validation',
              description: 'Validation of tax identification numbers and jurisdiction-specific rules.'
            },
            {
              title: 'XML Generation',
              description: 'Generate OECD-compliant CRS XML reporting files.'
            },
            {
              title: 'Schema Validation',
              description: 'Validate generated files against XSD schemas before submission.'
            },
            {
              title: 'Correction Reporting',
              description: 'Support for amendments, corrections, and nil reports.'
            },
            {
              title: 'Multi-Jurisdiction Support',
              description: 'Manage reporting requirements across multiple tax jurisdictions.'
            },
            {
              title: 'Audit Trail',
              description: 'Track all user actions and reporting activities.'
            },
            {
              title: 'Approval Workflow',
              description: 'Role-based review and approval processes.'
            },
            {
              title: 'Report Distribution',
              description: 'Automated generation and distribution of reporting packages.'
            }
          ]
        },
        services: {
          title: 'Services provided',
          description: [
            {
              icon: 'fa-diagram-project',
              text: 'Creating UI/UX'
            },
            {
              icon: 'fa-server',
              text: 'Front-End Development'
            },
            {
              icon: 'fa-gears',
              text: 'Back-End Development'
            },
            {
              icon: 'fa-triangle-exclamation',
              text: 'QA Services'
            },
            {
              icon: 'fa-magnifying-glass',
              text: 'Infrastructure Setup'
            }
          ]
        },

      }
    },
    {
      slug: 'multi-carrier-shipping',
      data: {
        title: 'Shipment processing',
        description: 'To eliminate the need for users to visit multiple courier websites to compare shipping options.',
        image: '../../../assets/images/shipping-1.jpg',
        links:
        {
          live: 'https://app.smoothparcel.com/',
          github: ''
        },
        hero: {
          title: 'Multi-Carrier Shipping Platform',
          country: 'United Kingdom',
          countryClass: 'uk',
          techStack: [
            'Angular',
            'Node.js',
            'SQL Server',
            'REST APIs',
            'AWS'
          ],
          description: [
            'A courier management platform that integrates multiple shipping providers into a single application. The solution enables businesses and customers to compare shipping options, delivery times, and prices before selecting a courier service.',
            'By integrating several carriers into one platform, the system simplifies logistics management and improves shipping cost visibility.'
          ]
        },
        client_and_challenge: {
          title: 'Client & Challenge',
          image: '../../../assets/images/shipping-2.jpg',
          description: [
            'The client wanted to eliminate the need for users to visit multiple courier websites to compare shipping options. Each courier provider offered different pricing structures, delivery estimates, and service levels. The challenge was to aggregate shipping information from multiple providers and present it in a unified interface.'
          ]
        },
        solution: {
          title: 'Solution',
          image: '../../../assets/images/shipping-1.jpg',
          description: [
            'The platform integrates multiple courier APIs and automatically retrieves shipping rates, delivery estimates, and service availability. Users can compare providers side-by-side and select the most suitable shipping option based on cost and delivery speed.'
          ]
        },
        feature: {
          title: 'Features',
          points: [
            {
              title: 'Multi-Carrier Integration',
              description: 'Connect multiple shipping providers through a single platform.'
            },
            {
              title: 'Royal Mail Integration',
              description: 'Access Royal Mail shipping services and rates.'
            },
            {
              title: 'DHL Integration',
              description: 'Access DHL shipping options and delivery services.'
            },
            {
              title: 'Shipping Rate Comparison',
              description: 'Compare shipping costs across multiple providers.'
            },
            {
              title: 'Delivery Time Comparison',
              description: 'Compare estimated delivery dates before shipment.'
            },
            {
              title: 'Shipping Label Generation',
              description: 'Generate carrier-specific shipping labels automatically.'
            },
            {
              title: 'Shipment Tracking',
              description: 'Track shipment status from dispatch to delivery.'
            },
            {
              title: 'Courier Selection Dashboard',
              description: 'Choose the most suitable courier based on price and delivery speed.'
            }
          ]
        },
        services: {
          title: 'Services provided',
          description: [
            {
              icon: 'fa-diagram-project',
              text: 'Creating UI/UX'
            },
            {
              icon: 'fa-server',
              text: 'Front-End Development'
            },
            {
              icon: 'fa-gears',
              text: 'Back-End Development'
            },
            {
              icon: 'fa-triangle-exclamation',
              text: 'QA Services'
            },
            {
              icon: 'fa-magnifying-glass',
              text: 'Infrastructure Setup'
            }
          ]
        }
      }
    },
    {
      slug: 'bird-search',
      data: {
        title: 'Bird Search Platform',
        description: 'Designed for bird enthusiasts, and researchers to find bird species using advanced filtering options.',
        image: '../../../assets/images/whatbird.jpg',
        links:
        {
          live: 'https://whatbird.com/',
          github: ''
        },
        hero: {
          title: 'Bird Search Platform',
          country: 'United Kingdom',
          countryClass: 'uk',
          techStack: [
            'Angular',
            'Node.js',
            'SQL Server',
            'AWS'
          ],
          description: [
            'Bird Search Platform is a web application designed for bird enthusiasts, researchers, and wildlife organizations. The platform provides access to a large database of bird species and allows users to quickly find specific birds using advanced filtering options.',
            'Instead of manually browsing thousands of records, users can narrow their search using physical characteristics, behavior, habitat, and other bird attributes.'
          ]
        },
        client_and_challenge: {
          title: 'Client & Challenge',
          image: '../../../assets/images/bird-search-2.jpg',
          description: [
            'The client maintained a large collection of bird data containing thousands of species and detailed attributes. Users struggled to locate specific birds because traditional search methods were not sufficient for complex requirements. The challenge was to create a fast and user-friendly filtering system capable of searching through large datasets using multiple criteria simultaneously.'
          ]
        },
        solution: {
          title: 'Solution',
          image: '../../../assets/images/bird-search-1.jpg',
          description: [
            'A powerful search and filtering platform was developed that enables users to find birds based on dozens of characteristics. The system was optimized for fast query execution and provides real-time filtering results while maintaining a responsive user experience.'
          ]
        },
        feature: {
          title: 'Features',
          points: [
            {
              title: 'Advanced Bird Search',
              description: 'Search birds from a large species database.'
            },
            {
              title: 'Physical Attribute Filters',
              description: 'Filter birds by size, color, wingspan, eye color, and neck length.'
            },
            {
              title: 'Behavior-Based Search',
              description: 'Search using sound patterns, habitats, and behavior characteristics.'
            },
            {
              title: 'Multi-Filter Engine',
              description: 'Combine multiple filters to narrow search results.'
            },
            {
              title: 'Species Profiles',
              description: 'Detailed information pages for each bird species.'
            },
            {
              title: 'Image Gallery',
              description: 'Visual reference images for identified bird species.'
            },
            {
              title: 'Responsive Interface',
              description: 'Optimized experience across desktop and mobile devices.'
            },
            {
              title: 'Fast Search Performance',
              description: 'Efficient querying across large datasets.'
            }
          ]
        },
        services: {
          title: 'Services provided',
          description: [
            {
              icon: 'fa-diagram-project',
              text: 'Creating UI/UX'
            },
            {
              icon: 'fa-server',
              text: 'Front-End Development'
            },
            {
              icon: 'fa-gears',
              text: 'Back-End Development'
            },
            {
              icon: 'fa-triangle-exclamation',
              text: 'QA Services'
            },
            {
              icon: 'fa-magnifying-glass',
              text: 'Infrastructure Setup'
            }
          ]
        }
      }
    },
    // {
    //   slug: 'cloud-instance-manager',
    //   data: {
    //     title: 'Cloud Instance Management Platform',
    //     description: 'United States',
    //     image: '../../../assets/images/instancegeneration.jpg',
    //     hero: {
    //       title: 'Cloud Instance Management Platform',
    //       country: 'United States',
    //       countryClass: 'usa',
    //       techStack: [
    //         'Angular',
    //         'Node.js',
    //         'AWS EC2',
    //         'Google Cloud',
    //         'Electron'
    //       ],
    //       description: [
    //         'A desktop application developed to automate cloud infrastructure management across Amazon Web Services and Google Cloud Platform. The system allows users to provision, manage, and terminate cloud instances from a centralized interface.',
    //         'The platform significantly reduces manual infrastructure tasks and supports bulk operations for large-scale deployments.'
    //       ]
    //     },
    //     client_and_challenge: {
    //       title: 'Client & Challenge',
    //       image: '../../../assets/images/cloud-manager-2.jpg',
    //       description: [
    //         'The client required a solution to manage cloud resources across multiple providers without relying on separate management consoles. Creating and configuring hundreds of instances manually was time-consuming and error-prone. The challenge was to automate instance lifecycle management while supporting bulk provisioning and file deployment.'
    //       ]
    //     },
    //     solution: {
    //       title: 'Solution',
    //       image: '../../../assets/images/cloud-manager-1.jpg',
    //       description: [
    //         'A desktop-based cloud orchestration platform was implemented. Users can create, start, stop, reboot, and terminate cloud instances in bulk. The system also supports automated file distribution to newly provisioned servers, reducing deployment time and manual effort.'
    //       ]
    //     },
    //     feature: {
    //       title: 'Features',
    //       points: [
    //         {
    //           title: 'AWS EC2 Management',
    //           description: 'Create, start, stop, reboot, and terminate AWS instances.'
    //         },
    //         {
    //           title: 'Google Cloud Management',
    //           description: 'Manage Google Cloud virtual machines from the same interface.'
    //         },
    //         {
    //           title: 'Bulk Instance Creation',
    //           description: 'Provision multiple cloud instances simultaneously.'
    //         },
    //         {
    //           title: 'Bulk Operations',
    //           description: 'Perform lifecycle operations on multiple servers at once.'
    //         },
    //         {
    //           title: 'Automated File Deployment',
    //           description: 'Upload files automatically to newly created servers.'
    //         },
    //         {
    //           title: 'Cloud Credential Management',
    //           description: 'Securely manage cloud provider credentials.'
    //         },
    //         {
    //           title: 'Provisioning Monitoring',
    //           description: 'Track instance creation and deployment status in real time.'
    //         },
    //         {
    //           title: 'Cross-Cloud Support',
    //           description: 'Single interface for managing AWS and Google Cloud resources.'
    //         }
    //       ]
    //     },
    //     services: {
    //       title: 'Services provided',
    //       description: [
    //         {
    //           icon: 'fa-diagram-project',
    //           text: 'Creating UI/UX'
    //         },
    //         {
    //           icon: 'fa-server',
    //           text: 'Front-End Development'
    //         },
    //         {
    //           icon: 'fa-gears',
    //           text: 'Back-End Development'
    //         },
    //         {
    //           icon: 'fa-triangle-exclamation',
    //           text: 'QA Services'
    //         },
    //         {
    //           icon: 'fa-magnifying-glass',
    //           text: 'Infrastructure Setup'
    //         }
    //       ]
    //     }
    //   }
    // },
    // {
    //   slug: 'pillar1',
    //   data: {
    //     title: 'Pillar One',
    //     description: 'United States',
    //     image: '../../../assets/images/property-2.jpg',
    //     links: {
    //       live: '',
    //       github: ''
    //     },
    //     hero: {
    //       title: 'OECD Pillar One Reporting Solution',
    //       country: 'Global',
    //       countryClass: 'global',
    //       techStack: [
    //         'Angular',
    //         '.NET',
    //         'SQL Server',
    //         'AWS'
    //       ],
    //       description: [
    //         'A tax reporting platform developed to support OECD Pillar One requirements for multinational enterprise groups. The platform centralizes financial, operational, and jurisdictional data required for Amount A calculations and reporting obligations.',
    //         'The solution provides transparency into allocation calculations while maintaining traceability and auditability for tax and finance teams.'
    //       ]
    //     },
    //     client_and_challenge: {
    //       title: 'Client & Challenge',
    //       image: '../../../assets/images/pillar1-2.jpg',
    //       description: [
    //         'The client required a scalable platform capable of consolidating financial information from multiple business units and jurisdictions while supporting evolving OECD Pillar One guidance. Existing processes relied heavily on spreadsheets and manual reconciliations.'
    //       ]
    //     },
    //     solution: {
    //       title: 'Solution',
    //       image: '../../../assets/images/pillar1-1.jpg',
    //       description: [
    //         'A centralized reporting platform was built to collect, validate, calculate, and distribute Pillar One reporting data. The platform provides a structured workflow for data submission, review, calculation management, and reporting preparation.'
    //       ]
    //     },
    //     feature: {
    //       title: 'Features',
    //       points: [
    //         {
    //           title: 'Revenue Data Collection',
    //           description: 'Collect and consolidate revenue information from multiple business units and jurisdictions.'
    //         },
    //         {
    //           title: 'Scope Assessment',
    //           description: 'Determine whether multinational groups meet Pillar One eligibility requirements.'
    //         },
    //         {
    //           title: 'Amount A Calculations',
    //           description: 'Calculate reallocable profits based on OECD Pillar One rules.'
    //         },
    //         {
    //           title: 'Jurisdiction Allocation',
    //           description: 'Allocate taxable profits across participating market jurisdictions.'
    //         },
    //         {
    //           title: 'Data Validation',
    //           description: 'Validate financial and operational data used for reporting calculations.'
    //         },
    //         {
    //           title: 'Scenario Analysis',
    //           description: 'Evaluate the impact of different allocation and taxation scenarios.'
    //         },
    //         {
    //           title: 'Reporting Dashboard',
    //           description: 'Provide visibility into calculations, allocations, and reporting activities.'
    //         },
    //         {
    //           title: 'Audit & Compliance Tracking',
    //           description: 'Maintain a complete record of calculation inputs and reporting decisions.'
    //         }
    //       ]
    //     },
    //     services: {
    //       title: 'Services provided',
    //       description: [
    //         {
    //           icon: 'fa-diagram-project',
    //           text: 'Creating UI/UX'
    //         },
    //         {
    //           icon: 'fa-server',
    //           text: 'Front-End Development'
    //         },
    //         {
    //           icon: 'fa-gears',
    //           text: 'Back-End Development'
    //         },
    //         {
    //           icon: 'fa-triangle-exclamation',
    //           text: 'QA Services'
    //         },
    //         {
    //           icon: 'fa-magnifying-glass',
    //           text: 'Infrastructure Setup'
    //         }
    //       ]
    //     }
    //   }
    // },
    {
      slug: 'pillar2',
      data: {
        title: 'Pillar Two',
        description: 'Designed to support OECD Pillar Two reporting and calculation requirements.',
        image: '../../../assets/images/property-2.jpg',
        links: {
          live: '',
          github: ''
        },
        hero: {
          title: 'OECD Pillar Two Compliance Platform',
          country: 'Global',
          countryClass: 'global',
          techStack: [
            'Angular',
            'Node.js',
            'PostgreSQL',
            'AWS',
            'Lambda'
          ],
          description: [
            'A global minimum tax compliance platform designed to support OECD Pillar Two reporting and calculation requirements. The system enables multinational groups to calculate effective tax rates, identify top-up tax obligations, and prepare reporting packages.',
            'The platform consolidates tax and financial information from multiple jurisdictions while providing transparency into complex compliance calculations.'
          ]
        },
        client_and_challenge: {
          title: 'Client & Challenge',
          image: '../../../assets/images/pillar2-2.jpg',
          description: [
            'The client needed a scalable solution capable of processing large volumes of tax data from multiple jurisdictions while supporting evolving Pillar Two legislation and reporting requirements.'
          ]
        },
        solution: {
          title: 'Solution',
          image: '../../../assets/images/pillar2-1.jpg',
          description: [
            'A centralized compliance platform was implemented to manage jurisdiction-level tax data, calculate effective tax rates, generate compliance reports, and support internal review processes.'
          ]
        },
        feature: {
          title: 'Features',
          points: [
            {
              title: 'Global Minimum Tax Assessment',
              description: 'Evaluate compliance with OECD Pillar Two global minimum tax requirements.'
            },
            {
              title: 'Jurisdictional ETR Calculation',
              description: 'Calculate Effective Tax Rates for each reporting jurisdiction.'
            },
            {
              title: 'GloBE Data Management',
              description: 'Collect and manage financial data required for GloBE calculations.'
            },
            {
              title: 'Top-Up Tax Calculation',
              description: 'Automatically calculate top-up tax liabilities where applicable.'
            },
            {
              title: 'Safe Harbour Analysis',
              description: 'Assess eligibility for transitional and permanent safe harbour provisions.'
            },
            {
              title: 'Data Validation Engine',
              description: 'Validate financial information and tax data before reporting.'
            },
            {
              title: 'Jurisdiction Reporting',
              description: 'Generate country-level Pillar Two reporting outputs.'
            },
            {
              title: 'Audit Trail',
              description: 'Track calculation changes, approvals, and reporting activities.'
            },
            {
              title: 'Compliance Dashboard',
              description: 'Monitor reporting readiness, tax exposure, and compliance status.'
            }
          ]
        },
        services: {
          title: 'Services provided',
          description: [
            {
              icon: 'fa-diagram-project',
              text: 'Creating UI/UX'
            },
            {
              icon: 'fa-server',
              text: 'Front-End Development'
            },
            {
              icon: 'fa-gears',
              text: 'Back-End Development'
            },
            {
              icon: 'fa-triangle-exclamation',
              text: 'QA Services'
            },
            {
              icon: 'fa-magnifying-glass',
              text: 'Infrastructure Setup'
            }
          ]
        }
      }
    },
    // {
    //   slug: 'cmrs',
    //   data: {
    //     title: 'CMRS',
    //     description: 'Cyprus',
    //     image: '../../../assets/images/crs.png',
    //     links:
    //     {
    //       live: '',
    //       github: ''
    //     },
    //     hero: {
    //       title: 'Crypto Asset Regulatory Reporting Platform',
    //       country: 'Global',
    //       countryClass: 'global',
    //       techStack: [
    //         'Angular',
    //         'Node.js',
    //         'SQL Server',
    //         'AWS',
    //         'Lambda'
    //       ],
    //       description: [
    //         'A regulatory reporting solution developed to support crypto asset reporting obligations and cross-border information exchange requirements. The platform enables reporting entities to collect, validate, and submit crypto transaction information in accordance with evolving regulatory frameworks.',
    //         'The solution provides robust data validation, transaction aggregation, XML generation, and reporting controls for compliance teams.'
    //       ]
    //     },
    //     client_and_challenge: {
    //       title: 'Client & Challenge',
    //       image: '../../../assets/images/cmrs-2.jpg',
    //       description: [
    //         'Crypto reporting obligations introduced significant operational complexity due to high transaction volumes, fragmented data sources, and rapidly evolving regulatory expectations. The client required a platform capable of managing reporting requirements across multiple jurisdictions.'
    //       ]
    //     },
    //     solution: {
    //       title: 'Solution',
    //       image: '../../../assets/images/cmrs-1.jpg',
    //       description: [
    //         'The platform automates crypto transaction collection, validation, classification, aggregation, and report generation. Compliance teams can monitor reporting status, resolve validation issues, and generate regulator-ready submissions through a unified workflow.'
    //       ]
    //     },
    //     feature: {
    //       title: 'Features',
    //       points: [
    //         {
    //           title: 'Multi-Regulation Support',
    //           description: 'Manage CRS, FATCA, DAC6, and other regulatory reporting obligations from a centralized platform.'
    //         },
    //         {
    //           title: 'Data Collection Engine',
    //           description: 'Collect customer, account, entity, and controlling person information through configurable workflows.'
    //         },
    //         {
    //           title: 'Data Validation',
    //           description: 'Validate reporting data against business rules and regulatory requirements before submission.'
    //         },
    //         {
    //           title: 'Document Management',
    //           description: 'Store and manage self-certifications, tax forms, and supporting compliance documents.'
    //         },
    //         {
    //           title: 'XML Generation',
    //           description: 'Generate jurisdiction-compliant reporting files automatically.'
    //         },
    //         {
    //           title: 'Workflow Management',
    //           description: 'Support review, approval, and reporting processes across compliance teams.'
    //         },
    //         {
    //           title: 'Audit Trail',
    //           description: 'Track all changes and reporting activities for compliance purposes.'
    //         },
    //         {
    //           title: 'Role-Based Security',
    //           description: 'Control user permissions and access to sensitive reporting data.'
    //         },
    //         {
    //           title: 'Dashboard & Analytics',
    //           description: 'Monitor reporting progress, validation issues, and submission status through interactive dashboards.'
    //         }
    //       ]
    //     },
    //     services: {
    //       title: 'Services provided',
    //       description: [
    //         {
    //           icon: 'fa-diagram-project',
    //           text: 'Creating UI/UX'
    //         },
    //         {
    //           icon: 'fa-server',
    //           text: 'Front-End Development'
    //         },
    //         {
    //           icon: 'fa-gears',
    //           text: 'Back-End Development'
    //         },
    //         {
    //           icon: 'fa-triangle-exclamation',
    //           text: 'QA Services'
    //         },
    //         {
    //           icon: 'fa-magnifying-glass',
    //           text: 'Infrastructure Setup'
    //         }
    //       ]
    //     }
    //   }
    // },
    {
      slug: 'tcp-ip-fingerprinting',
      data: {
        title: 'TCP/IP Fingerprinting for VPN & Proxy Detection',
        description: 'Final Year Project',
        image: '../../../assets/images/tcp-ip.png',
        links: {
          live: '',
          github: ''
        },
        hero: {
          title: 'TCP/IP Fingerprinting for VPN & Proxy Detection',
          country: 'Academic Project',
          countryClass: 'university',
          techStack: [
            'Node.js',
            'Express',
            'TCP/IP',
            'Wireshark',
            'Networking',
            'JavaScript'
          ],
          description: [
            'This Final Year Project focuses on passive TCP/IP fingerprinting to identify the operating system of clients connecting to a web server. Instead of relying solely on the HTTP User-Agent header, the application analyzes TCP/IP packet characteristics to determine the actual operating system used by the client.',
            'By comparing the operating system inferred from TCP/IP headers with the operating system claimed in the User-Agent, the system can detect suspicious connections that may originate from VPNs, proxy servers, or anonymizing services attempting to disguise their identity.'
          ]
        },
        client_and_challenge: {
          title: 'Research Objective',
          image: '../../../assets/images/tcp-2.jpg',
          description: [
            'The project was developed as a university Final Year Project to investigate passive operating system fingerprinting techniques. The primary challenge was to accurately identify client operating systems without modifying network traffic or interrupting normal communication. Since VPNs, proxy servers, and malicious actors often manipulate HTTP headers to hide their identity, the objective was to determine if TCP/IP packet characteristics could reveal inconsistencies between the reported and actual operating systems.'
          ]
        },
        solution: {
          title: 'Solution',
          image: '../../../assets/images/tcp-1.jpg',
          description: [
            'A passive TCP/IP fingerprinting system was developed to inspect the initial TCP SYN packet during the TCP three-way handshake. The application captures TCP/IP header information such as Time To Live (TTL), IP Flags, TCP Window Size, Maximum Segment Size (MSS), and TCP Options. These values are compared against known operating system signatures to determine the most likely operating system. The detected operating system is then compared with the HTTP User-Agent, allowing the system to identify potential mismatches that may indicate VPN, proxy, or spoofed traffic.'
          ]
        },
        feature: {
          title: 'Features',
          points: [
            {
              title: 'Passive Packet Analysis',
              description: 'Captures and analyzes TCP/IP packets without modifying network traffic or affecting client communication.'
            },
            {
              title: 'Operating System Fingerprinting',
              description: 'Identifies client operating systems using TCP/IP header characteristics and known fingerprint signatures.'
            },
            {
              title: 'User-Agent Verification',
              description: 'Compares the detected operating system with the operating system claimed in the HTTP User-Agent header.'
            },
            {
              title: 'VPN & Proxy Detection',
              description: 'Detects suspicious mismatches that may indicate VPN usage, proxy servers, or traffic anonymization.'
            },
            {
              title: 'TCP SYN Inspection',
              description: 'Analyzes the initial SYN packet of the TCP three-way handshake to perform passive fingerprinting.'
            },
            {
              title: 'Header Field Analysis',
              description: 'Evaluates fields including TTL, IP Flags, TCP Window Size, MSS, and TCP Options to improve fingerprint accuracy.'
            },
            {
              title: 'Statistical Detection',
              description: 'Generates confidence-based results instead of binary decisions, reducing false positives.'
            },
            {
              title: 'Logging & Reporting',
              description: 'Stores fingerprinting results and detected mismatches for later analysis and research.'
            }
          ]
        },
        services: {
          title: 'Technologies & Research',
          description: [
            {
              icon: 'fa-network-wired',
              text: 'Network Programming'
            },
            {
              icon: 'fa-code',
              text: 'Backend Development'
            },
            {
              icon: 'fa-shield-halved',
              text: 'Cybersecurity Research'
            },
            {
              icon: 'fa-magnifying-glass',
              text: 'Packet Analysis'
            },
            {
              icon: 'fa-graduation-cap',
              text: 'Academic Research'
            }
          ]
        }
      }
    },
    {
      slug: 'rockway',
      data: {
        title: 'Rockway',
        description: 'Australia',
        image: '../../../assets/images/rockway.png',
        links: {
          live: '',
          github: ''
        },
        hero: {
          title: 'Rockway',
          country: 'Australia',
          countryClass: 'australia',
          techStack: [
            'Ionic',
            'Angular',
            'Node.js',
            'SQL Server',
            'REST API'
          ],
          description: [
            'Rockway is a hybrid mobile application developed for geotechnical field investigations. The application enables engineers and field technicians to record borehole observations, soil classifications, and drilling information directly from construction sites using mobile devices.',
            'Instead of relying on paper-based reports, the application digitizes field data collection, allowing teams to capture observations, generate standardized reports, and synchronize information with a centralized system for further analysis.'
          ]
        },
        client_and_challenge: {
          title: 'Client & Challenge',
          image: '../../../assets/images/rockway-2.jpg',
          description: [
            'Field engineers were manually documenting borehole findings during site investigations, making it difficult to maintain consistent records and share information between teams. Preparing reports required significant manual effort and increased the possibility of missing or inconsistent data. The challenge was to create a mobile solution capable of collecting geological observations directly in the field, even in environments with limited connectivity.'
          ]
        },
        solution: {
          title: 'Solution',
          image: '../../../assets/images/rockway-1.jpg',
          description: [
            'A hybrid mobile application was developed using Ionic and Angular, allowing engineers to capture drilling activities, soil layers, sampling information, and site observations directly from mobile devices. The application supports offline data collection with synchronization to the central server once an internet connection becomes available. Standardized reports can then be generated using the collected field data.'
          ]
        },
        feature: {
          title: 'Features',
          points: [
            {
              title: 'Borehole Logging',
              description: 'Record drilling progress and geological observations for each borehole.'
            },
            {
              title: 'Soil Classification',
              description: 'Capture soil and rock layer information at different drilling depths.'
            },
            {
              title: 'Depth-Based Recording',
              description: 'Store observations, samples, and measurements at specific excavation depths.'
            },
            {
              title: 'Field Report Generation',
              description: 'Generate standardized investigation reports directly from captured site data.'
            },
            {
              title: 'Photo Documentation',
              description: 'Attach site photographs and supporting images to investigation records.'
            },
            {
              title: 'Offline Data Collection',
              description: 'Allow engineers to continue working without an internet connection and synchronize data later.'
            },
            {
              title: 'Project Management',
              description: 'Organize multiple projects, drilling locations, and investigation records from a single application.'
            },
            {
              title: 'Cloud Synchronization',
              description: 'Synchronize completed reports and field observations with the central database.'
            }
          ]
        },
        services: {
          title: 'Services Provided',
          description: [
            {
              icon: 'fa-mobile-screen',
              text: 'Hybrid Mobile Development'
            },
            {
              icon: 'fa-server',
              text: 'REST API Integration'
            },
            {
              icon: 'fa-database',
              text: 'Database Design'
            },
            {
              icon: 'fa-cloud',
              text: 'Offline Data Synchronization'
            },
            {
              icon: 'fa-file-lines',
              text: 'Report Generation'
            }
          ]
        }
      }
    },
    {
      slug: 'serverless-event-pipeline',
      data: {
        title: 'Serverless Event Processing Pipeline',
        description: '',
        image: '../../../assets/images/white.png',
        links:
        {
          live: '',
          github: 'https://github.com/AmmarYaqoob/serverless-event-pipeline'
        },
        hero: {
          title: 'Serverless Event Processing Pipeline',
          country: '',
          countryClass: '',
          techStack: [
            'Ionic',
            'Angular',
            'Node.js',
            'SQL Server',
            'REST API'
          ],
          description: [
            'A serverless event-driven system built with AWS services. It accepts events via API, queues them, processes asynchronously, and stores results.'
          ]
        },
        client_and_challenge: {
          title: 'Client & Challenge',
          image: '../../../assets/images/rockway-2.jpg',
          description: [
            'Field engineers were manually documenting borehole findings during site investigations, making it difficult to maintain consistent records and share information between teams. Preparing reports required significant manual effort and increased the possibility of missing or inconsistent data. The challenge was to create a mobile solution capable of collecting geological observations directly in the field, even in environments with limited connectivity.'
          ]
        },
        solution: {
          title: 'Solution',
          image: '../../../assets/images/rockway-1.jpg',
          description: [
            'A hybrid mobile application was developed using Ionic and Angular, allowing engineers to capture drilling activities, soil layers, sampling information, and site observations directly from mobile devices. The application supports offline data collection with synchronization to the central server once an internet connection becomes available. Standardized reports can then be generated using the collected field data.'
          ]
        },
        feature: {
          title: 'Features',
          points: [
            {
              title: 'Borehole Logging',
              description: 'Record drilling progress and geological observations for each borehole.'
            },
            {
              title: 'Soil Classification',
              description: 'Capture soil and rock layer information at different drilling depths.'
            },
            {
              title: 'Depth-Based Recording',
              description: 'Store observations, samples, and measurements at specific excavation depths.'
            },
            {
              title: 'Field Report Generation',
              description: 'Generate standardized investigation reports directly from captured site data.'
            },
            {
              title: 'Photo Documentation',
              description: 'Attach site photographs and supporting images to investigation records.'
            },
            {
              title: 'Offline Data Collection',
              description: 'Allow engineers to continue working without an internet connection and synchronize data later.'
            },
            {
              title: 'Project Management',
              description: 'Organize multiple projects, drilling locations, and investigation records from a single application.'
            },
            {
              title: 'Cloud Synchronization',
              description: 'Synchronize completed reports and field observations with the central database.'
            }
          ]
        },
        services: {
          title: 'Services Provided',
          description: [
            {
              icon: 'fa-mobile-screen',
              text: 'Hybrid Mobile Development'
            },
            {
              icon: 'fa-server',
              text: 'REST API Integration'
            },
            {
              icon: 'fa-database',
              text: 'Database Design'
            },
            {
              icon: 'fa-cloud',
              text: 'Offline Data Synchronization'
            },
            {
              icon: 'fa-file-lines',
              text: 'Report Generation'
            }
          ]
        }
      }
    },
    {
      slug: 'rate-limiter',
      data: {
        title: 'Rate Limiter API Gateway',
        description: 'Serverless API gateway with token-bucket rate limiting, DynamoDB tracking, and AWS Lambda handlers.',
        image: '../../../assets/images/tcp-ip.png',
        links:
        {
          live: '',
          github: 'https://github.com/AmmarYaqoob/rate-limiter-api-gateway'
        },
        hero: {
          title: 'Rate Limiter API Gateway',
          country: 'Personal Project',
          countryClass: 'usa',
          techStack: [
            'AWS Lambda',
            'API Gateway',
            'DynamoDB',
            'Node.js'
          ],
          description: [
            'A serverless API gateway that applies token-bucket rate limiting per client, tracks usage in DynamoDB, and protects downstream services from traffic spikes.'
          ]
        },
        client_and_challenge: {
          title: 'Client & Challenge',
          image: '../../../assets/images/tcp-ip.png',
          description: [
            'Public APIs need protection against abuse and accidental overload. Hard limits must be enforced consistently at the edge without adding latency or maintaining dedicated server infrastructure.'
          ]
        },
        solution: {
          title: 'Solution',
          image: '../../../assets/images/white.png',
          description: [
            'I implemented a serverless rate limiter using API Gateway and Lambda with a token-bucket algorithm. Request counts and refill windows are stored in DynamoDB, returning standard 429 responses when limits are exceeded.'
          ]
        },
        feature: {
          title: 'Features',
          points: [
            {
              title: 'Token-Bucket Limiting',
              description: 'Configurable burst and sustained request rates per client or API key.'
            },
            {
              title: 'DynamoDB Tracking',
              description: 'Persistent counters for limit state across concurrent requests.'
            },
            {
              title: 'Lambda Handlers',
              description: 'Lightweight edge logic with minimal cold-start impact.'
            },
            {
              title: '429 Responses',
              description: 'Clear feedback when clients exceed allowed throughput.'
            },
            {
              title: 'Infrastructure as Code',
              description: 'Repeatable AWS deployment for the gateway and backing resources.'
            }
          ]
        },
        services: {
          title: 'Services Provided',
          description: [
            {
              icon: 'fa-server',
              text: 'Back-End Development'
            },
            {
              icon: 'fa-cloud',
              text: 'AWS Serverless Architecture'
            },
            {
              icon: 'fa-database',
              text: 'DynamoDB Design'
            },
            {
              icon: 'fa-gears',
              text: 'API Gateway Integration'
            }
          ]
        }
      }
    }
  ]



// export const PORTFOLIO_DATA: Portfolio[] = [
//   {
//     slug: 'propertease',
//     title: 'Propertease',
//     country: 'United States',

//     techStack: [
//       'Angular',
//       '.NET',
//       'SQL Server',
//       'AWS'
//     ],

//     description:
//       'The Property Management Platform is a full stack web application designed to simplify the rental process for landlords, tenants, and service providers. Instead of relying on multiple platforms for property listings, agreements, rent reminders, and maintenance requests, the application brings everything together in one place.',

//     challenge: {
//       title: 'Client & Challenge',
//       content:
//         'Managing rental properties often involves several disconnected processes. Landlords advertise properties on one platform, communicate through another, prepare agreements manually, and keep track of rent payments separately. Tenants face similar challenges when searching for properties, contacting landlords, and managing rental documents.',
//       image: 'assets/images/property-2.jpg'
//     },

//     solution: {
//       title: 'Solution',
//       content:
//         'After gathering the requirements and understanding the expected platform features and behavior, the team provided the client with recommended changes. Following workshops, the platform was modernized and new modules were built while ensuring a smooth migration process.',
//       image: 'assets/images/property-1.PNG'
//     },

//     features: [
//       'Landlord Portal with property listing management, tenant communication, agreements, rent tracking, and notifications.',
//       'Tenant Portal with property search, landlord communication, rental agreements, and payment reminders.',
//       'Admin panel with full management cycle.',
//       'Platform deployment and infrastructure setup.',
//       'Service Provider Portal for plumbers, electricians, painters, cleaners, and other maintenance professionals.',
//       'Built-in notification system for rent due dates, agreements, maintenance requests, and messages.',
//       'Stripe payment integration with automated charging, invoicing, tax support, and multiple payment methods.',
//       'Complete property rental ecosystem connecting landlords, tenants, and service providers.'
//     ],

//     services: [
//       'Creating UI/UX',
//       'Front-End Development',
//       'Back-End Development',
//       'Quality Assurance',
//       'DevOps',
//       'Cloud Infrastructure'
//     ]
//   },

//   {
//     slug: 'ecommerce-platform',
//     title: 'E-Commerce Platform',
//     country: 'Germany',

//     techStack: [
//       'Angular',
//       'Node.js',
//       'PostgreSQL',
//       'AWS'
//     ],

//     description:
//       'A scalable e-commerce platform supporting product management, payments, inventory, and order processing.',

//     challenge: {
//       title: 'Client & Challenge',
//       content:
//         'The client needed a modern platform capable of handling large product catalogs and high transaction volumes.',
//       image: 'assets/images/ecommerce-challenge.jpg'
//     },

//     solution: {
//       title: 'Solution',
//       content:
//         'Built a cloud-native architecture with scalable APIs, payment integration, and inventory management.',
//       image: 'assets/images/ecommerce-solution.jpg'
//     },

//     features: [
//       'Product catalog management',
//       'Shopping cart and checkout',
//       'Stripe payment integration',
//       'Inventory management',
//       'Order tracking',
//       'Admin dashboard'
//     ],

//     services: [
//       'UI/UX Design',
//       'Front-End Development',
//       'Back-End Development',
//       'AWS Deployment'
//     ]
//   }
// ];