import { IBlock } from "MKL/interfaces";

export default interface ISplit {
    blocks: IBlock[];
    type: string;
    alias: string;
}