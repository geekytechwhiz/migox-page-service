interface IPrelemSearchRequest {
    obj: {
        // Define the structure of the obj parameter
    };
    sort: {
        // Define the structure of the sort parameter
    };
    searchText: string;
    tag: string[];
    layout: string[];
}

interface Prelem {
    PrelemId: string;
    PrelemName: string;
    Tags: string[];
    PreviewThumbnail: string;
    Description: string;
    DocumentType: string;
    DocumentPath: string;
    DevelopedBy: string;
    DevelopedDate: string; // Consider using Date type if you're parsing dates
    DocumentCreationPath: string;
    SeoEnabled: boolean;
    AnalyticsEnabled: boolean;
}

interface Layout {
    title: string;
    mapping: string;
    thumbnail: string;
    id: string;
}

interface PrelemSearchResponse {
    prelems: Prelem[];
    layout: Layout[];
}
