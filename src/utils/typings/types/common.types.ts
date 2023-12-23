import { AccessLevel, Item } from "../enums/common.enums.ts";

export type TFile = {
    type: Item.FILE,
    extension: string
}

export type TFolder = {
    type: Item.FOLDER,
    nestedItems: TItem[]
}

export type TItem = {
    id: string
    name: string,
    accessLevel: AccessLevel
} & (TFile | TFolder)