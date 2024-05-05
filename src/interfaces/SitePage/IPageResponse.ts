import { IPage } from "./IPage";

export interface IPageResponseModel extends IPage {
    WorkflowId: string;
    WorkflowStatus: string;
    IsWorkflowEnabled: boolean;
    TaskStatus: string;
    UserName: string;
    UserId: string;
    __typename: string;
}
