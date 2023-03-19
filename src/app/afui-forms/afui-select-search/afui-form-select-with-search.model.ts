export interface SearchSelectOptionInput {
    parent: SearchSelectData;
    children: SearchSelectData[];
} 

export interface SearchSelectOption extends SearchSelectOptionInput {
    isOpen: boolean;
}

export interface SearchSelectData {
    id: string;
    value: string;
}