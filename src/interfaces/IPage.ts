interface IPage {
    Page: string;
    SiteName: string;
    Title: string;
    ParentPageURL: string;
    CurrentPageURL: string;
    DevelopedBy: string;
    DevelopedDate: string;
    IsEdit: boolean;
    SeoEnable: boolean;
    AnalyticsEnable: boolean;
    RobotTxt: boolean;
    SiteMap: boolean;
    Children: null | any[]; 
    Analytics: string;
    Others: string;
    StructureData: string;
    PageSettings: {
      PageName: string;
    };
    Page_LastModificationDate: string;
    Page_LastModifiedBy: string;
  }
  