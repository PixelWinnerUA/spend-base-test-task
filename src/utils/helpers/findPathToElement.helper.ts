import { TItem } from "../typings/types/common.types.ts";
import { Item } from "../typings/enums/common.enums.ts";

export const findPathToElement = (items: TItem[], targetId: string, path: string[] = []): string[] | null => {
    for (const item of items) {
        if (item.id === targetId) {
            return [...path, item.id];
        }

        if (item.type === Item.FOLDER && item.nestedItems.length > 0) {
            const resultPath: string[] | null = findPathToElement(item.nestedItems, targetId, [...path, item.id]);
            if (resultPath) {
                return resultPath;
            }
        }
    }
    return null;
};