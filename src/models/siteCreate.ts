import { ISitePage, Prelem } from "../interfaces/ISitePage";



export interface ICreateSitePage extends ISitePage {
    created_at: string;
    created_by: string;
}


export default class SitePageModel {
    private _site_name: string;
    private _page_id: string;
    private _site_id: string;
    private _title: string;
    private _parent_page_url: string;
    private _current_page_url: string;
    private _page_created_by: string;
    private _page_last_modified_by: string;
    private _page_last_modification_date: string;
    private _page_published_by: string;
    private _is_edit: boolean;
    private _seo_enable: boolean;
    private _analytics_enable: boolean;
    private _robot_txt: string;
    private _site_map: string;
    private _others: string;
    private _analytics: string;
    private _structure_data: string;
    private _page_settings: string;
    private _children?: Prelem[];
    private _content: any;
    private _stages: any[];
    private _workflow_id: string;
    private _workflow_status: string;
    private _is_workflow_enabled: boolean;
    private _path: string;
    private _task_status: string;
    private _user_name: string;
    private _user_id: string;

    constructor(data: ICreateSitePage) {
        this._page_id = data.page_id,
            this._site_id = data.site_id,
            this._site_name = data.site_name;
        this._title = data.title;
        this._parent_page_url = data.parent_page_url;
        this._current_page_url = data.current_page_url;
        this._page_created_by = data.page_created_by;
        this._page_last_modified_by = data.page_last_modified_by;
        this._page_last_modification_date = data.page_last_modification_date;
        this._page_published_by = data.page_published_by;
        this._is_edit = data.is_edit;
        this._seo_enable = data.seo_enable;
        this._analytics_enable = data.analytics_enable;
        this._robot_txt = data.robot_txt;
        this._site_map = data.site_map;
        this._others = data.others;
        this._analytics = data.analytics;
        this._structure_data = data.structure_data;
        this._page_settings = data.page_settings;
        this._children = data.children;
        this._content = data.content;
        this._stages = data.stages;
        this._workflow_id = data.workflow_id;
        this._workflow_status = data.workflow_status;
        this._is_workflow_enabled = data.is_workflow_enabled;
        this._path = data.path;
        this._task_status = data.task_status;
        this._user_name = data.user_name;
        this._user_id = data.user_id;
        this._page_id = data.page_id;
        this._site_id = data.site_id;
    }

    toEntityMapping(): ICreateSitePage {
        return {
            page_id: this._page_id,
            site_id: this._site_id,
            site_name: this._site_name,
            title: this._title,
            parent_page_url: this._parent_page_url,
            current_page_url: this._current_page_url,
            page_created_by: this._page_created_by,
            page_last_modified_by: this._page_last_modified_by,
            page_last_modification_date: this._page_last_modification_date,
            page_published_by: this._page_published_by,
            is_edit: this._is_edit,
            seo_enable: this._seo_enable,
            analytics_enable: this._analytics_enable,
            robot_txt: this._robot_txt,
            site_map: this._site_map,
            others: this._others,
            analytics: this._analytics,
            structure_data: this._structure_data,
            page_settings: this._page_settings,
            children: this._children,
            content: this._content,
            stages: this._stages,
            workflow_id: this._workflow_id,
            workflow_status: this._workflow_status,
            is_workflow_enabled: this._is_workflow_enabled,
            path: this._path,
            task_status: this._task_status,
            user_name: this._user_name,
            user_id: this._user_id,
            created_at: new Date().toLocaleString(),
            created_by: this._user_name
        };
    }
}
