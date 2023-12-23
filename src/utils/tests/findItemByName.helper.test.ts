import { TItem } from "../typings/types/common.types.ts";
import { AccessLevel, Item } from "../typings/enums/common.enums.ts";
import { findItemByName } from "../helpers/findItemByName.helper.ts";

const MOCKED_ITEMS: TItem[] = [
    {
        id: "1",
        type: Item.FOLDER,
        name: "Root",
        accessLevel: 0,
        nestedItems: [
            {
                id: "2",
                type: Item.FOLDER,
                name: "Empty Folder",
                accessLevel: 0,
                nestedItems: []
            },
            {
                id: "3",
                type: Item.FOLDER,
                name: "Folder with files",
                accessLevel: 1,
                nestedItems: [
                    {
                        id: "5",
                        type: Item.FOLDER,
                        name: "Another Folder",
                        accessLevel: 0,
                        nestedItems: [
                            {
                                id: "6",
                                type: Item.FOLDER,
                                name: "Folder",
                                accessLevel: 1,
                                nestedItems: []
                            }
                        ]
                    },
                    {
                        id: "4",
                        type: Item.FILE,
                        name: "Image",
                        accessLevel: 0,
                        extension: "jpg"
                    },
                    {
                        id: "7",
                        type: Item.FILE,
                        name: "index",
                        accessLevel: 1,
                        extension: "js"
                    }
                ]
            }
        ]
    }
];

const EMPTY_FOLDER_NAME_MOCK: TItem[] = [{
    id: "2",
    type: Item.FOLDER,
    name: "Empty Folder",
    accessLevel: 0,
    nestedItems: []
}];

const FOLDER_NAME_MOCK: TItem[] = [
    {
        id: "2",
        type: Item.FOLDER,
        name: "Empty Folder",
        accessLevel: 0,
        nestedItems: []
    },
    {
        id: "3",
        type: Item.FOLDER,
        name: "Folder with files",
        accessLevel: 1,
        nestedItems: [
            {
                id: "5",
                type: Item.FOLDER,
                name: "Another Folder",
                accessLevel: 0,
                nestedItems: [
                    {
                        id: "6",
                        type: Item.FOLDER,
                        name: "Folder",
                        accessLevel: 1,
                        nestedItems: []
                    }
                ]
            },
            {
                id: "4",
                type: Item.FILE,
                name: "Image",
                accessLevel: 0,
                extension: "jpg"
            },
            {
                id: "7",
                type: Item.FILE,
                name: "index",
                accessLevel: 1,
                extension: "js"
            }
        ]
    },
    {
        id: "5",
        type: Item.FOLDER,
        name: "Another Folder",
        accessLevel: 0,
        nestedItems: [
            {
                id: "6",
                type: Item.FOLDER,
                name: "Folder",
                accessLevel: 1,
                nestedItems: []
            }
        ]
    },
    {
        id: "6",
        type: Item.FOLDER,
        name: "Folder",
        accessLevel: 1,
        nestedItems: []
    }
];


describe("Test findItemByName", () => {
    it("An empty value of the name will return an empty array", () => {
        const name = "";

        const result = findItemByName(MOCKED_ITEMS, name, AccessLevel.ADMIN);

        expect(result).toEqual([]);
    });

    it("A call with a non-existent element name will return an empty array", () => {
        const name = "non-existent element";

        const result = findItemByName(MOCKED_ITEMS, name, AccessLevel.ADMIN);

        expect(result).toEqual([]);
    });

    it("Search for an existing folder", () => {
        const name = "Empty Folder";

        const result = findItemByName(MOCKED_ITEMS, name, AccessLevel.ADMIN);

        expect(result).toEqual(EMPTY_FOLDER_NAME_MOCK);
    });

    it("Search for folders by name `Folder`", () => {
        const name = "Folder";

        const result = findItemByName(MOCKED_ITEMS, name, AccessLevel.ADMIN);

        expect(result).toEqual(FOLDER_NAME_MOCK);
    });

    it("Searching for an element to which there is no access will return an empty array", () => {
        const name = "index";

        const result = findItemByName(MOCKED_ITEMS, name, AccessLevel.USER);

        expect(result).toEqual([]);
    });
});
