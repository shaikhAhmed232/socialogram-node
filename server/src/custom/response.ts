export class ApiSuccessResponse<Type> {
    declare status: string;
    declare data: Type;
    constructor(data: Type, status?: string) {
        if (typeof status !== "undefined") {
            this.status = status;
        } else {
            this.status = "success";
        };
        this.data = data;
    }
};

export class ApiErrorResponse<Type> {
    declare status: string;
    declare error: Type;
    constructor(data: Type, status?: string) {
        if (typeof status !== "undefined") {
            this.status = status;
        } else {
            this.status = "error";
        };
        this.error = data;
    }
}