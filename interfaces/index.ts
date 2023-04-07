export type IWebsite = {
    id: number;
    name: string;
    slug: string;
    url: IUrl;
    level: string;
    type: string;
    keywords: string;
    description: string;
    parent: string;
    sitename: string;
    children: IChild[];
    blocks: IBlock[];
    updateDate: string;
}

export interface IMain {
    blocks: IBlock[];
    children: IChild[];
}

export interface INavigation {
    children: IChild[];
}

export interface IUrl {
    local: string;
    full: string;
}

export interface IChild {
    id: number;
    name: string;
    slug: string;
    url: IUrl;
    level: string;
    type: string;
    parent: string;
    updateDate: string;
}

export interface IBlock {
    type: string;
}