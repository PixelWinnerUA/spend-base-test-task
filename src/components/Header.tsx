import styled from "styled-components";
import { Box } from "@mui/material";
import AccessLevelSelect from "./AccessLevelSelect.tsx";
import SearchField from "./SearchField.tsx";

const Container = styled(Box)`
    display: flex;
    flex-direction: row;
    gap: 16px;
    padding: 16px;
    align-items: center;
`;

const Header = () => {
    return (
        <Container>
            <SearchField/>
            <AccessLevelSelect />
        </Container>
    );
};

export default Header;