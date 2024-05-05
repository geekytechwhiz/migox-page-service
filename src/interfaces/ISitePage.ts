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
    children: any[];
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

interface ImageMetaFields {
    AltText: string;
    Name: string;
    Title: string;
    Description: string;
    Attribution: boolean;
}

interface Image {
    original_image: {
        original_image_relative_path: string;
        visibility: string;
        ext: string;
        bitStreamId: string;
        auto: boolean;
        MetaFields: ImageMetaFields;
        Url: string;
    };
    published_images: {
        aspect_ratio: string;
        folder_path: string;
    }[];
}

interface SiteComponent {
    Description: string;
    TagName: string;
    Title: string;
    PrelemContentType: string[];
    ImageCompound: {
        ImageCompound_1: Image;
    };
}
