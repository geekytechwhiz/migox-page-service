interface ImageObject {
    "@context": string;
    "@type": string;
    contentUrl: string;
    name: string;
}

interface ListItem {
    "@type": string;
    position: number;
    url: string;
    name: string;
    description: string;
}

interface WebPage {
    "@context": string;
    "@type": string;
    name: string;
    description: string;
    image?: string;
    url?: string;
}

interface InteractionCounter {
    "@type": string;
    interactionType: string;
    name: string;
    description: string;
}

interface Organization {
    "@context": string;
    "@type": string;
    name: string;
    description: string;
    url: string;
    interactionStatistic: InteractionCounter[];
}

// type StructureDataItem = ImageObject | ListItem | WebPage | Organization | null;


interface Child {
    PrelemId: string;
    PrelemName: string;
    SeoEnabled: boolean;
    AnalyticsEnabled: boolean;
    DocumentType: string;
    DocumentPath: string;
    DocumentCreationPath: string;
    IsHidden: boolean;
    InstanceId: string;
    IsModified: boolean;
    StructuredData: string;
}

interface Content {
    [key: string]: {
        Description: string;
        TagName: string;
        Title: string;
        PrelemContentType: string[];
        ImageCompound: {
            ImageCompound_1: {
                original_image: {
                    original_image_relative_path: string;
                    visibility: string;
                    ext: string;
                    bitStreamId: string;
                    auto: boolean;
                    MetaFields: {
                        AltText: string;
                        Name: string;
                        Title: string;
                        Description: string;
                        Attribution: boolean;
                    };
                    Url: string;
                };
                published_images: {
                    aspect_ratio: string;
                    folder_path: string;
                }[];
            };
        };
    };
}

interface Stage {
    state: string;
    role: string;
    label: string;
}

interface WorkflowStatus {
    workflow_id: string;
    workflow_status: string;
    is_workflow_enabled: boolean;
    stages: Stage[];
}


interface Page {
    Page: string;
    SiteName: string;
    Title: string;
    ParentPageURL: string;
    CurrentPageURL: string;
    DevelopedBy: string;
    DevelopedDate: string; // Consider using Date type if you're parsing dates
    IsEdit: boolean;
    SeoEnable: boolean;
    AnalyticsEnable: boolean;
    RobotTxt: boolean;
    SiteMap: boolean;
    Children: null; // Consider using appropriate type if not always null
    Analytics: string;
    Others: string;
    StructureData: string;
    PageSettings: {
        PageName: string;
    };
    Page_LastModificationDate: string; // Consider using Date type if you're parsing dates
    Page_LastModifiedBy: string;
}
