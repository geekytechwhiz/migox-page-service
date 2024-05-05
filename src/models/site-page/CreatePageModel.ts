import { IPage, IPageSettings } from "../../interfaces/SitePage/IPage";

export class CreatePageModel {
    page_id: string;
    site_id: string;
    Page: string;
    SiteName: string;
    Title: string;
    ParentPageURL: string;
    CurrentPageURL: string;
    Page_LastModifiedBy: string;
    Page_LastModificationDate: string;
    IsEdit: boolean;
    SeoEnable: boolean;
    AnalyticsEnable: boolean;
    RobotTxt: boolean;
    SiteMap: boolean;
    Others: string;
    Analytics: string;
    StructureData: string[];
    PageSettings: IPageSettings;
    Children: any[];
    workflow_id: string;
    workflow_status: string;
    is_workflow_enabled: boolean;
    Path: string;
    task_status: string;
    user_name: string;
    _id: string;
    me: string;

    constructor(data: IPage) {
        this.Page = data.Page;
        this.SiteName = data.SiteName;
        this.Title = data.Title;
        this.ParentPageURL = data.ParentPageURL;
        this.CurrentPageURL = data.CurrentPageURL;
        this.Page_LastModifiedBy = data.Page_LastModifiedBy;
        this.Page_LastModificationDate = data.Page_LastModificationDate;
        this.IsEdit = data.IsEdit;
        this.SeoEnable = data.SeoEnable;
        this.AnalyticsEnable = data.AnalyticsEnable;
        this.RobotTxt = data.RobotTxt;
        this.SiteMap = data.SiteMap;
        this.Others = data.Others;
        this.Analytics = data.Analytics;
        this.StructureData = data.StructureData;
        this.PageSettings = data.PageSettings;
        this.Children = null;
    }
}