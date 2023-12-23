import { Autocomplete, TextField } from "@mui/material";
import { useCallback, useState } from "react";
import { findItemByName } from "../utils/helpers/findItemByName.helper.ts";
import ItemsList from "../assets/itemsList.json";
import { TItem } from "../utils/typings/types/common.types.ts";
import { AutocompleteProps, AutocompleteRenderInputParams } from "@mui/material/Autocomplete/Autocomplete";
import styled from "styled-components";
import { debounce } from "lodash";
import { useAppContext } from "../utils/providers/AppProvider.tsx";
import { findPathToElement } from "../utils/helpers/findPathToElement.helper.ts";


const DEBOUNCE_TIME = 500;

const StyledAutocomplete = styled((props: AutocompleteProps<TItem, false, false, false, "div">) => <Autocomplete {...props} />)`
    width: 200px;`;

const SearchField = () => {
    const { setExpandedItems, setSelectedItem, accessLevel } = useAppContext();
    const [inputValue, setInputValue] = useState<string>("");
    const [options, setOptions] = useState<TItem[]>([]);


    const handleSearch = (newValue: string) => {
        const newOptions = findItemByName(ItemsList as TItem[], newValue, accessLevel);

        setOptions(newOptions);
    };

    const debouncedSearch = useCallback(debounce(handleSearch, DEBOUNCE_TIME), [accessLevel]);

    const handelChange = (_: unknown, value: TItem | null) => {
        if (!value) {
            return;
        }

        const path = findPathToElement(ItemsList as TItem[], value.id);

        if (!path) {
            return;
        }

        setExpandedItems(path);
        setSelectedItem(value.id);
    };

    const handleInputChange = (_: unknown, newValue: string) => {
        setInputValue(newValue);
        debouncedSearch(newValue);
    };

    const renderInput = (params: AutocompleteRenderInputParams) => {
        return <TextField label="Search" {...params} fullWidth variant="outlined" type="text" />;
    };

    return (
        <StyledAutocomplete
            inputValue={inputValue}
            onChange={handelChange}
            onInputChange={handleInputChange}
            renderInput={renderInput}
            options={options}
            getOptionLabel={(option) => option.name} />
    );
};

export default SearchField;
