import React from 'react'
import { 
    Box,
    Divider, 
    Drawer,
    IconButton,
    List,
    ListItem,
    ListItemButton,
    ListItemIcon,
    ListItemText,
    Typography,
    useTheme 
} from '@mui/material'

    import {
        SettingsOutlined,
        ChevronLeft,
        ChevronRightOutlined,
        HomeOutlined,
        PeopleAltOutlined,
        HailOutlined,
        Groups2Outlined,
        ReceiptLongOutlined,
        PublicOutlined,
        PointOfSaleOutlined,
        TodayPutlined,
        CalendarMonthOutlined,
        AdminPanelSettingsOutlined,
        PieChartOutlined
    } from '@mui/icons-material'

    import { useEffect,useState } from 'react'
    import { useLocation, useNavigate } from 'react-router-dom'
    import FlexBetween from './FlexBetween'
    import profileImage from "assets/profile-1.jpg"

    const NavItems = [
        {
            text: "Dashboard",
            icon: <HomeOutlined/>
        },
        {
            text: "Client Facing",
            icon: null
        },
        {
            text: "Driver",
            icon: <PeopleAltOutlined/>
        },
        {
            text: "Customers",
            icon: <HailOutlined/>
        },
        {
            text: "Geofencing",
            icon: <HomeOutlined/>
        },
        {
            text: "Dashboard",
            icon: <HomeOutlined/>
        },
        {
            text: "Dashboard",
            icon: <HomeOutlined/>
        },
        {
            text: "Dashboard",
            icon: <HomeOutlined/>
        },
        {
            text: "Dashboard",
            icon: <HomeOutlined/>
        },
        {
            text: "Dashboard",
            icon: <HomeOutlined/>
        },
        {
            text: "Dashboard",
            icon: <HomeOutlined/>
        },
        {
            text: "Dashboard",
            icon: <HomeOutlined/>
        },
        {
            text: "Dashboard",
            icon: <HomeOutlined/>
        },
        {
            text: "Dashboard",
            icon: <HomeOutlined/>
        },
        {
            text: "Dashboard",
            icon: <HomeOutlined/>
        },
    ]

const Sidebar = ({
    drawerWidth,
    isSideBarOpen,
    setIsSideBarOpen,
    isNonMobile,
}) => {
    const {pathname} = useLocation();
    const [active,setActive] = useState("")
    const navigate = useNavigate();
    const theme = useTheme()

    useEffect(()=>{
        setActive(pathname.substring(1));
    }, [pathname])

  return (
    <Box component="nav">
        {isSideBarOpen && (
            <Drawer
            open={isSideBarOpen}
            onClose={()=> setIsSideBarOpen(false)}
            variant='persistent'
            anchor='left'
            sx={{
                width: drawerWidth,
                "& .MuiDrawer-paper": {
                    color: theme.palette.secondary[200],
                    backgroundColor: theme.palette.background.alt,
                    boxSizing: "border-box",
                    borderWidth: isNonMobile ? 0 : '2px',
                    width: drawerWidth
                }
            }}
            >
                <Box width="100%">
                    <Box m="1.5rem 2rem 2rem 3rem">
                        <FlexBetween color={theme.palette.secondary.main}>
                            <Box
                            display=" flex"
                            alignItems="center"
                            gap="0.5rem">
                                 <Typography 
                                 variant='h4'
                                 fontWeight="bold">
                                    ECOMVISION
                                 </Typography>
                            </Box>
                            {!isNonMobile && (
                                <IconButton onClick={()=> setIsSideBarOpen(!isSideBarOpen)}>
                                    <ChevronLeft/>
                                </IconButton>
                            )}
                        </FlexBetween>
                    </Box>
                    <List>
                       {} 
                    </List>
                </Box>
            </Drawer>
        )}
    </Box>
  )
}

export default Sidebar