import { TItem } from "../typings/types/common.types.ts";
import { AccessLevel, Item } from "../typings/enums/common.enums.ts";

export const findItemByName = (items: TItem[], name: string, accessLevel: AccessLevel) => {
    if(!name){
        return []
    }

    const results: TItem[] = [];

    const recursiveSearch = (newItems: TItem[]) => {
        newItems.forEach((item) => {
            const hasAccess = item.accessLevel <= accessLevel;

            if (item.name.toLowerCase().includes(name.toLowerCase()) && hasAccess) {
                results.push(item);
            }

            if (item.type === Item.FOLDER && hasAccess) {
                recursiveSearch(item.nestedItems);
            }
        });
    };

    recursiveSearch(items);

    return results;
};