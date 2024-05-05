export interface ISitePage {
    site_name: string;
    title: string;
    parent_page_url: string;
    current_page_url: string;
    page_created_by: string;
    page_last_modified_by: string;
    page_last_modification_date: string;
    page_published_by: string;
    is_edit: boolean;
    seo_enable: boolean;
    analytics_enable: boolean;
    robot_txt: string;
    site_map: string;
    others: string;
    analytics: string;
    structure_data: string;
    page_settings: string;
    children: Prelem[];
    content: any;
    stages: any[];
    workflow_id: string;
    workflow_status: string;
    is_workflow_enabled: boolean;
    path: string;
    task_status: string;
    user_name: string;
    user_id: string;
    page_id: string;
    site_id: string;
}

export interface Prelem {
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
    StructuredData: string; // JSON string representation
}

export interface Image {
    Name: string;
    Url: string;
    Title: string;
    Description: string;
    AltText: string;
}

export interface OriginalImage {
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
}

export interface PublishedImage {
    aspect_ratio: string;
    folder_path: string;
}

export interface ImageCompound {
    ImageCompound_1: {
        original_image: OriginalImage;
        published_images: PublishedImage[];
    };
}

export interface SiteComponent {
    Button1_Action: string;
    Button1_Content: string;
    Button1_Name: string;
    Button1_RedirectURL: string;
    Button1_RestEndPoint: string;
    Button1_Type: string;
    Button1_Value: string;
    Description: string;
    Images: { Image_1: Image };
    TagName: string;
    Title1: string;
    Title2: string;
    PrelemContentType: string[];
    ImageCompound: ImageCompound;
}

export type DocumentPath = string;

