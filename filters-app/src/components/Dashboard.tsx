import React, { useState } from "react";
import TuneIcon from '@mui/icons-material/Tune';
import Filters from "./Filters/Filters.tsx";
import { IconButton } from "@mui/material";

interface DashboardProps {

}

const Dashboard = (props: DashboardProps) => {
    const [isFiltersOn, setIsFiltersOn] = useState<boolean>(true)
    const onClickIncon = () => {
        setIsFiltersOn(true)
    }

    const onCloseModal = () => {
        setIsFiltersOn(false)
    }

    return (
        <div>
            <div>
            <IconButton onClick={onClickIncon}>
              <TuneIcon />
            </IconButton>
            </div>
            {isFiltersOn ? <Filters onCloseModal={onCloseModal} /> : <></>}
        </div>
    )
}

export default Dashboard;