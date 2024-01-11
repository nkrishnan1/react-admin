import React from 'react'
import { Accordion } from '@mui/material'
import { AccordionSummary } from '@mui/material'
import { AccordionDetails } from '@mui/material'
import { Box, Typography, useTheme } from '@mui/material'
import { tokens } from '../../theme'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Header from '../../components/Header'

const FAQ = () => {
    const theme = useTheme()
    const colors = tokens(theme.palette.mode);

    return (
    <Box m={"20px"}>
        <Header title={"FAQ"} subtitle={"Frequently Asked Questions Page"}/>

        <Accordion defaultExpanded>
            <AccordionSummary expandIcon={<ExpandMoreIcon/>}>
                <Typography variant="h5" color={colors.greenAccent[500]}>
                    Important Question
                </Typography>
            </AccordionSummary>
            <AccordionDetails>
                <Typography variant="h6" color={colors.grey[100]}>
                    lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
                </Typography>
            </AccordionDetails>
        </Accordion>
        
        <Accordion defaultExpanded>
            <AccordionSummary expandIcon={<ExpandMoreIcon/>}>
                <Typography variant="h5" color={colors.greenAccent[500]}>
                    What is the purpose of this page?
                </Typography>
            </AccordionSummary>
            <AccordionDetails>
                <Typography variant="h6" color={colors.grey[100]}>
                    lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
                </Typography>
            </AccordionDetails>
        </Accordion>

        <Accordion defaultExpanded>
            <AccordionSummary expandIcon={<ExpandMoreIcon/>}>
                <Typography variant="h5" color={colors.greenAccent[500]}>
                    Another Important Question
                </Typography>
            </AccordionSummary>
            <AccordionDetails>
                <Typography variant="h6" color={colors.grey[100]}>
                    lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
                </Typography>
            </AccordionDetails>
        </Accordion>

        <Accordion defaultExpanded>
            <AccordionSummary expandIcon={<ExpandMoreIcon/>}>
                <Typography variant="h5" color={colors.greenAccent[500]}>
                    Really Important Question
                </Typography>
            </AccordionSummary>
            <AccordionDetails>
                <Typography variant="h6" color={colors.grey[100]}>
                    lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
                </Typography>
            </AccordionDetails>
        </Accordion>
    </Box>
    )
}

export default FAQ