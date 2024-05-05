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

interface PageSettings {
    PageCaching: boolean;
    PageName: string;
    IsScheduleUnpublish: boolean;
    SeoKeywords: string[];
    Page_State: string;
    IsSchedulePublish: boolean;
    SeoBlockIndexing: boolean;
    PageTags: string[];
}

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

interface IPrelemPage {
    page_id:string;
    site_id:string;
    Page: string;
    SiteName: string;
    Title: string;
    ParentPageURL: string;
    CurrentPageURL: string;
    Page_CreatedBy: string;
    Page_LastModifiedBy: string;
    Page_LastModificationDate: string;
    Page_PublishedBy: string;
    IsEdit: boolean;
    SeoEnable: boolean;
    AnalyticsEnable: boolean;
    RobotTxt: boolean;
    SiteMap: boolean;
    Others: string;
    Analytics: string;
    StructureData: string[];
    PageSettings: PageSettings;
    children: Child[];
    content: Content;
    workflow_id: string;
    workflow_status: string;
    is_workflow_enabled: boolean;
    Path: string;
    task_status: string;
    user_name: string;
    user_id: string;
    __typename: string;
}
