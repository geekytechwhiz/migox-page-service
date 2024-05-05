class PrelemPageModel {
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

    constructor(data:  IPrelemPage) {
        this.page_id=data.page_id;
        this.site_id=data.site_id;
        this.Page = data.Page;
        this.SiteName = data.SiteName;
        this.Title = data.Title;
        this.ParentPageURL = data.ParentPageURL;
        this.CurrentPageURL = data.CurrentPageURL;
        this.Page_CreatedBy = data.Page_CreatedBy;
        this.Page_LastModifiedBy = data.Page_LastModifiedBy;
        this.Page_LastModificationDate = data.Page_LastModificationDate;
        this.Page_PublishedBy = data.Page_PublishedBy;
        this.IsEdit = data.IsEdit;
        this.SeoEnable = data.SeoEnable;
        this.AnalyticsEnable = data.AnalyticsEnable;
        this.RobotTxt = data.RobotTxt;
        this.SiteMap = data.SiteMap;
        this.Others = data.Others;
        this.Analytics = data.Analytics;
        this.StructureData = data.StructureData;
        this.PageSettings = data.PageSettings;
        this.children = data.children;
        this.content = data.content;
        this.workflow_id = data.workflow_id;
        this.workflow_status = data.workflow_status;
        this.is_workflow_enabled = data.is_workflow_enabled;
        this.Path = data.Path;
        this.task_status = data.task_status;
        this.user_name = data.user_name;
        this.user_id = data.user_id;
        this.__typename = data.__typename;
    }
    
    
}
