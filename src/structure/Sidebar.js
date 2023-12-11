
import React from 'react';
import { List, ListItem, ListItemText } from '@mui/material';
import { NavLink } from 'react-router-dom';


const Sidebar = () => {
    return (
        <div className='sidebar'>
            <List component="nav">
                <NavLink to="/" end>
                    <ListItem button>
                        <ListItemText primary="Dashboard" />
                    </ListItem>
                </NavLink>
                <NavLink to="/professionals" end>
                    <ListItem button>
                        <ListItemText primary="Professionals" />
                    </ListItem>
                </NavLink>
                <NavLink to="/appointments" end>
                    <ListItem button>
                        <ListItemText primary="Appointments" />
                    </ListItem>
                </NavLink>
                <NavLink to="/documents" end>
                    <ListItem button>
                        <ListItemText primary="Documents" />
                    </ListItem>
                </NavLink>
            </List>
        </div>
    );
}

export default Sidebar;
