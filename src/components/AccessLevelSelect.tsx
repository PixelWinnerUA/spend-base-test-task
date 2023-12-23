import { FormControl, Select, InputLabel, MenuItem, SelectChangeEvent } from "@mui/material";
import { useAppContext } from "../utils/providers/AppProvider.tsx";
import { AccessLevel } from "../utils/typings/enums/common.enums.ts";
import styled from "styled-components";

const StyledFormControl = styled(FormControl)`
    width: 200px;`;

const AccessLevelSelect = () => {
    const { accessLevel, setAccessLevel } = useAppContext();

    const handleChange = (e: SelectChangeEvent<AccessLevel>) => {
        setAccessLevel(e.target.value as AccessLevel);
    };

    return (
        <StyledFormControl>
            <InputLabel>Access Level</InputLabel>
            <Select
                label="Access Level"
                value={accessLevel}
                onChange={handleChange}
            >
                <MenuItem value={AccessLevel.USER}>User</MenuItem>
                <MenuItem value={AccessLevel.ADMIN}>Admin</MenuItem>
            </Select>
        </StyledFormControl>
    );
};

export default AccessLevelSelect;