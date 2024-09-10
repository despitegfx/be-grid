export default interface DefColumns {
    name: string;
    label?: string;
    columnSortable?: boolean;
    actionButtons?: ActionButtons[];
    cellStyle?: any;
    cellFlag?: any;
    rowSelection?: boolean;
}

export interface ActionButtons {
    label?: string;
    type?: string;
    color?: string;
    disabledButton?: any;
    hideButton?: any;
}