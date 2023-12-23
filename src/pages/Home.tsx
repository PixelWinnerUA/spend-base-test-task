import styled from "styled-components";
import { Box } from "@mui/material";
import TreeView from "../components/TreeView.tsx";
import ItemsList from "../assets/itemsList.json"
import { TItem } from "../utils/typings/types/common.types.ts";
import Header from "../components/Header.tsx";

const Container = styled(Box)`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: start;
    height: 100%;
    width: 100%;`;


const Home = () => {
    return (
        <Container>
            <Header/>
            <TreeView items={ItemsList as TItem[]} />
        </Container>
    );
};

export default Home;