import { TreeView as MuiTreeView } from "@mui/x-tree-view";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import { FC } from "react";
import { TItem } from "../utils/typings/types/common.types.ts";
import TreeItem from "./TreeItem.tsx";
import { useAppContext } from "../utils/providers/AppProvider.tsx";


type TreeViewProps = {
    items: TItem[]
}

const TreeView: FC<TreeViewProps> = ({ items }) => {
    const { expandedItems, setExpandedItems, selectedItem, setSelectedItem } = useAppContext();
    const treeItems = items.map((item) => <TreeItem key={item.id} item={item} />);

    const handleToggle = (_: unknown, nodeIds: string[]) => {
        setExpandedItems(nodeIds);
    };

    const handleSelect = (_: unknown, nodeId: string) => {
        setSelectedItem(nodeId);
    };

    return (
        <MuiTreeView selected={selectedItem} onNodeSelect={handleSelect} expanded={expandedItems} onNodeToggle={handleToggle} defaultCollapseIcon={<ExpandMoreIcon />}
                     defaultExpandIcon={<ChevronRightIcon />}>
            {treeItems}
        </MuiTreeView>
    );
};

export default TreeView;