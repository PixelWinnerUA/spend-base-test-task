import { FC, PropsWithChildren, createContext, useContext, useMemo, useState, Dispatch, SetStateAction } from "react";
import { AccessLevel } from "../typings/enums/common.enums.ts";


type AppContextType = {
    accessLevel: AccessLevel,
    setAccessLevel: Dispatch<SetStateAction<AccessLevel>>
    expandedItems: string[]
    setExpandedItems: Dispatch<SetStateAction<string[]>>
    selectedItem: string | null
    setSelectedItem: Dispatch<SetStateAction<string | null>>
};

const AppContext = createContext<AppContextType>({
    accessLevel: AccessLevel.ADMIN,
    setAccessLevel: () => {
    },
    expandedItems: [],
    setExpandedItems: () => {
    },
    selectedItem: null,
    setSelectedItem: () => {
    }
});

export const AppProvider: FC<PropsWithChildren> = ({ children }) => {
    const [accessLevel, setAccessLevel] = useState<AccessLevel>(AccessLevel.ADMIN);
    const [expandedItems, setExpandedItems] = useState<string[]>([]);
    const [selectedItem, setSelectedItem] = useState<string | null>(null);


    const contextValue: AppContextType = useMemo(() => ({
        accessLevel,
        setAccessLevel,
        expandedItems,
        setExpandedItems,
        selectedItem,
        setSelectedItem
    }), [accessLevel, expandedItems, selectedItem]);

    return <AppContext.Provider value={contextValue}>{children}</AppContext.Provider>;
};

export const useAppContext = () => {
    return useContext(AppContext);
};
