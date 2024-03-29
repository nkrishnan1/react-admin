import React from 'react'
import { useState } from 'react'
import FullCalendar from '@fullcalendar/react'
import { formatDate } from '@fullcalendar/core';
import dayGridPlugin from '@fullcalendar/daygrid'
import timeGridPlugin from '@fullcalendar/timegrid'
import listPlugin from '@fullcalendar/list'
import interactionPlugin from '@fullcalendar/interaction'
import { Box, Typography, useTheme, List, ListItem, ListItemText } from '@mui/material'
import { tokens } from '../../theme'
import Header from '../../components/Header'

const Calendar = () => {
    const theme = useTheme();
    const colors = tokens(theme.palette.mode);

    const [currentEvents, setCurrentEvents] = useState([]); // state
    const handleDateClick = (selected) => { 
        const title = prompt('Please enter a new title for your event');
        const calendarApi = selected.view.calendar;
        calendarApi.unselect(); // clear date selection
        if (title) {
            calendarApi.addEvent({
                id: `${selected.dateStr}-${title}`,
                title,
                start: selected.startStr,
                end: selected.endStr,
                allDay: selected.allDay
            })
        }
    };

    const handleEventClick = (selected) => {
        if (window.confirm(`Are you sure you want to delete the event '${selected.event.title}'`)) {
            selected.event.remove();
        }
    }

    return (
        <Box m="20px">
            <Header title="CALENDAR" subtitle="Manage your events"></Header>
            <Box
                display="flex"
                justifyContent={"space-between"}
            >
                <Box 
                    flex={"1 1 20%"} 
                    backgroundColor={colors.primary[400]} 
                    p={"15px"}
                    borderRadius="4px"
                >
                        <Typography variant="h5" color={colors.grey[100]}>
                            EVENTS
                        </Typography>
                        <List>
                            {currentEvents.map((event) => (
                                <ListItem 
                                    key={event.id}
                                    sx={{backgroundColor: colors.greenAccent[500], 
                                        borderRadius: "2px",
                                        margin:"10px 0"
                                    }}
                                >
                                    <ListItemText 
                                        primary={event.title}
                                        secondary={
                                            <Typography variant="caption" color={colors.grey[100]}>
                                                {formatDate(event.start, {year: 'numeric', month: 'short', day: 'numeric'})}
                                            </Typography>
                                        }
                                    />
                                </ListItem>
                            ))}
                        </List>
                </Box>
                <Box 
                    flex={"1 1 100%"}  
                    ml={"15px"}
                >
                    <FullCalendar
                        height={"75vh"}
                        plugins={[dayGridPlugin, timeGridPlugin, listPlugin, interactionPlugin]}
                        headerToolbar={{
                            left: 'prev,next today',
                            center: 'title',
                            right: 'dayGridMonth,timeGridWeek,timeGridDay,lisMonth'
                        }}
                        initialView='dayGridMonth'
                        editable={true}
                        selectable={true}
                        selectMirror={true}
                        dayMaxEvents={true}
                        select={handleDateClick}
                        eventClick={handleEventClick}
                        eventsSet={(events)=> setCurrentEvents(events)}
                        initialEvents={[
                            {
                                id: '1234',
                                title: 'All Day Event',
                                date: '2022-10-01'  
                            },
                            {
                                id: '1235',
                                title: 'Timed Event',
                                date: '2022-10-03'  
                            },
                        ]}
                    >

                    </FullCalendar>
                </Box>
            </Box>
        </Box>
    )
}

export default Calendar