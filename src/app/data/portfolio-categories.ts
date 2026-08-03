export type PortfolioCategory =
  | 'mobile-app'
  | 'management-tools'
  | 'ui'
  | 'server-handling'
  | 'python';

export interface PortfolioFilter {
  id: 'all' | PortfolioCategory;
  label: string;
}

export const PORTFOLIO_FILTERS: PortfolioFilter[] = [
  { id: 'all', label: 'All' },
  { id: 'python', label: 'Python' },
  { id: 'mobile-app', label: 'Mobile App' },
  { id: 'management-tools', label: 'Management Tools' },
  { id: 'ui', label: 'UI' },
  { id: 'server-handling', label: 'Server Handling' },
];

export const PORTFOLIO_CATEGORY_LABELS: Record<PortfolioCategory, string> = {
  'mobile-app': 'Mobile App',
  'management-tools': 'Management Tools',
  'ui': 'UI',
  'server-handling': 'Server Handling',
  'python': 'Python',
};

/** Category tags per project slug */
export const PORTFOLIO_CATEGORIES: Record<string, PortfolioCategory[]> = {
  'automate-job-finding': ['management-tools', 'ui', 'server-handling'],
  'propertease': ['management-tools', 'ui'],
  'crs': ['management-tools', 'server-handling'],
  'multi-carrier-shipping': ['management-tools', 'server-handling'],
  'bird-search': ['ui', 'management-tools'],
  'pillar2': ['management-tools', 'server-handling'],
  'tcp-ip-fingerprinting': ['server-handling'],
  'rockway': ['mobile-app', 'ui'],
  'serverless-event-pipeline': ['server-handling'],
  'rate-limiter': ['server-handling'],
  'document-rag-assistant': ['python', 'management-tools', 'server-handling'],
  'python-etl-analytics-pipeline': ['python', 'server-handling', 'management-tools'],
};
