export interface TheGuardianHttpResponse {
  response: TheGuardianResponse;
}

export interface TheGuardianResponse {
  status: string;
  userTier: string;
  total: number;
  startIndex: number;
  pageSize: number;
  currentPage: number;
  pages: number;
  edition: TheGuardianEdition;
  section: TheGuardianSection;
  results: TheGuardianSectionResult[];
}

export interface TheGuardianSection {
  id: string;
  webTitle: string;
  webUrl: string;
  apiUrl: string;
  editions: TheGuardianEdition[];
}

interface TheGuardianEdition {
  id: string;
  webTitle: string;
  webUrl: string;
  apiUrl: string;
  code: string;
}

export interface TheGuardianSectionResult {
  id: string;
  type: string;
  sectionId: string;
  sectionName: string;
  webPublicationDate: string;
  webTitle: string;
  webUrl: string;
  apiUrl: string;
  isHosted: boolean;
  pillarId: string;
  pillarName: string;
}
