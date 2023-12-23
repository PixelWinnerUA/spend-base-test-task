import { TItem } from "../utils/typings/types/common.types.ts";
import { FC } from "react";
import { Item } from "../utils/typings/enums/common.enums.ts";
import { TreeItem as MuiTreeItem } from "@mui/x-tree-view";
import { getFileLabel } from "../utils/helpers/getFileLabel.helper.ts";
import styled from "styled-components";
import { useAppContext } from "../utils/providers/AppProvider.tsx";

const StyledTreeItem = styled(MuiTreeItem)`
    & .Mui-selected {
        backdrop-filter: brightness(0.9);
        background-color: transparent !important;
        border-bottom: ${({ theme }) => `1px solid ${theme.palette.primary.main}`};
    }`;


type TreeItemProps = {
    item: TItem
}
const TreeItem: FC<TreeItemProps> = ({ item }) => {
    const { accessLevel } = useAppContext();

    const isDisabled = item.accessLevel > accessLevel;

    if (item.type === Item.FILE) {
        return <StyledTreeItem disabled={isDisabled} nodeId={item.id} label={getFileLabel(item.name, item.extension)} />;
    }

    const nestedItems = item.nestedItems.map((nestedItem) => <TreeItem key={nestedItem.id} item={nestedItem} />);

    return <StyledTreeItem disabled={isDisabled} nodeId={item.id} label={item.name}>
        {nestedItems}
    </StyledTreeItem>;
};

export default TreeItem;