export interface IPage {
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
  Children: any; // Consider using appropriate type if not always null
  Analytics: string;
  Others: string;
  StructureData: string[];
  PageSettings: IPageSettings;
  Page_LastModificationDate: string; // Consider using Date type if you're parsing dates
  Page_LastModifiedBy: string;
}


export interface IPageSettings {
  PageCaching: boolean;
  PageName: string;
  IsScheduleUnpublish: boolean;
  SeoKeywords: string[];
  Page_State: string;
  IsSchedulePublish: boolean;
  SeoBlockIndexing: boolean;
  PageTags: string[];
}