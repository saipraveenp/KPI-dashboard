import "bootstrap/dist/css/bootstrap.min.css";
import "../dashboard/dashboard.css";
import "react-circular-progressbar/dist/styles.css";

import {
  Assignment,
  AttachMoney,
  Cancel,
  Done,
  PriceChangeIcon,
} from "@mui/icons-material";
import {
  Avatar,
  Box,
  CircularProgress,
  Divider,
  IconButton,
  InputBase,
  List,
  ListItem,
  ListItemAvatar,
  ListItemIcon,
  ListItemSecondaryAction,
  ListItemText,
  Paper,
  Rating,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  Typography,
} from "@mui/material";
import {
  Bar,
  BarChart,
  CartesianGrid,
  Legend,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";
import { FormControl, InputLabel, MenuItem, Select } from "@mui/material";

import AccountBalanceWalletOutlinedIcon from "@mui/icons-material/AccountBalanceWalletOutlined";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import AssignmentTurnedInSharpIcon from "@mui/icons-material/AssignmentTurnedInSharp";
import BarChartSharpIcon from "@mui/icons-material/BarChartSharp";
import { CircularProgressbar } from "react-circular-progressbar";
import HomeIcon from "@mui/icons-material/Home";
import LocalMallIcon from "@mui/icons-material/LocalMall";
import MailIcon from "@mui/icons-material/Mail";
import MenuBookIcon from "@mui/icons-material/MenuBook";
import MenuIcon from "@mui/icons-material/Menu";
import { TableContainer as MuiTableContainer } from "@mui/material";
import NavigateNextSharpIcon from "@mui/icons-material/NavigateNextSharp";
import NotificationsIcon from "@mui/icons-material/Notifications";
import React from "react";
import RestaurantMenuIcon from "@mui/icons-material/RestaurantMenu";
import SearchIcon from "@mui/icons-material/Search";
import SettingsIcon from "@mui/icons-material/Settings";
import ShoppingBagOutlinedIcon from "@mui/icons-material/ShoppingBagOutlined";
import StarIcon from "@mui/icons-material/Star";
import { styled } from "@mui/system";
import { useState } from "react";

// import RemoveShoppingCartIcon from '@mui/icons-material/RemoveShoppingCart';

// import PriceChangeIcon from '@mui/icons-material/PriceChange';

// Styled components
const DashboardContainer = styled(Box)(({ theme }) => ({
  backgroundColor: "#1c1e29",
  color: "#fff",
  minHeight: "100vh",
  display: "flex",
}));

const ColoredIcon = styled("div")(({ color }) => ({
  background: `linear-gradient(45deg, ${color} 30%, #fff 90%)`, // Gradient effect
  borderRadius: "50%",
  padding: "10px",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  width: 60,
  height: 60,
  boxShadow: "0 3px 5px 2px rgba(0, 0, 0, 0.3)",
  "& svg": {
    fontSize: 30,
    color: "#fff", // Icon color
  },
}));

const SquareIcon = styled("div")(({ color }) => ({
  background: `linear-gradient(45deg, ${color} 30%, #fff 90%)`, // Gradient effect
  borderRadius: 8, // Rounded corners for square shape
  padding: "10px",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  width: 60,
  height: 60,
  boxShadow: "0 3px 5px 2px rgba(0, 0, 0, 0.3)",
  "& svg": {
    fontSize: 30,
    color: "#fff", // Icon color
  },
}));
const Sidebar = styled(Box)(({ theme }) => ({
  width: 80,
  backgroundColor: "#2c2f38",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  padding: theme.spacing(2),
  height: "100vh",
}));

const ContentWrapper = styled(Box)(({ theme }) => ({
  flexGrow: 1,
  display: "flex",
  flexDirection: "column",
}));

const Header = styled(Box)(({ theme }) => ({
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  padding: theme.spacing(2),
  backgroundColor: "#2c2f38",
}));

const Content = styled(Box)(({ theme }) => ({
  flexGrow: 1,
  padding: theme.spacing(2),
}));

const ActiveIconButton = styled(IconButton)(({ theme }) => ({
  backgroundColor: "#3c404b",
  marginTop: theme.spacing(2),
}));

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: "#2c2f38",
  padding: theme.spacing(2),
  color: "#fff",
  marginBottom: theme.spacing(2),
}));

const RoundIconButton = styled(IconButton)(({ theme }) => ({
  marginRight: "25px",
  borderRadius: "50%",
  backgroundColor: "#FFB200", // Light color background
  color: "#00796b", // Icon color
  padding: theme.spacing(1), // Adjust padding to control the size
  "&:hover": {
    backgroundColor: "#00796b", // Slightly darker background on hover
    color: "#FFB200", // Change icon color on hover
  },
  "& svg": {
    fontSize: 40, // Adjust size of the icon
  },
}));
const icons = {
  totalOrders: (
    <SquareIcon color="#ff5722">
      <LocalMallIcon />
    </SquareIcon>
  ),
  totalDelivered: (
    <SquareIcon color="#4caf50">
      <AddShoppingCartIcon />
    </SquareIcon>
  ),
  totalCancelled: (
    <SquareIcon color="#f44336">
      <AttachMoney />
    </SquareIcon>
  ),
  totalRevenue: (
    <SquareIcon color="#3f51b5">
      <Done />
    </SquareIcon>
  ),
};

const IconTypography = ({ icon: Icon, text }) => (
  <div style={{ display: "flex", alignItems: "center" }}>
    <ListItemIcon>
      <RoundIconButton>
        <Icon />
      </RoundIconButton>
    </ListItemIcon>
    <ListItemText primary={<Typography variant="h6">{text}</Typography>} />
    <ListItemSecondaryAction></ListItemSecondaryAction>
  </div>
);
const TableContainer = styled(MuiTableContainer)(({ theme }) => ({
  backgroundColor: "#2c2f38", // Match sidebar and item background
  color: "#fff", // Text color to contrast with the background
  borderRadius: 8, // Optional: rounded corners
  boxShadow: "0px 2px 4px rgba(0, 0, 0, 0.1)", // Fallback shadow
  overflowX: "auto", // Handle overflow for better responsiveness
  "& .MuiTableHead-root": {
    backgroundColor: "#3c404b", // Header background color
  },
  "& .MuiTableCell-head": {
    color: "#fff", // Header text color
  },
  "& .MuiTableCell-body": {
    color: "#fff", // Body text color
  },
}));

const data = [
  { name: "1", uv: 4000, pv: 2400, amt: 2400 },
  { name: "2", uv: 3000, pv: 1398, amt: 2210 },
  { name: "3", uv: 2000, pv: 9800, amt: 2290 },
  { name: "4", uv: 2780, pv: 3908, amt: 2000 },
  { name: "5", uv: 1890, pv: 4800, amt: 2181 },
  { name: "6", uv: 2390, pv: 3800, amt: 2500 },
  { name: "7", uv: 3490, pv: 4300, amt: 2100 },
  { name: "8", uv: 4000, pv: 2400, amt: 2400 },
  { name: "9", uv: 3000, pv: 1398, amt: 2210 },
  { name: "10", uv: 2000, pv: 9800, amt: 2290 },
  { name: "11", uv: 2780, pv: 1908, amt: 2000 },
  { name: "12", uv: 2780, pv: 2584, amt: 2000 },
  { name: "13", uv: 2780, pv: 3908, amt: 2000 },
  { name: "14", uv: 2780, pv: 3587, amt: 2000 },
  { name: "15", uv: 2780, pv: 1251, amt: 2000 },
  { name: "16", uv: 2780, pv: 2408, amt: 2000 },
  { name: "17", uv: 2780, pv: 5012, amt: 2000 },
  { name: "18", uv: 2780, pv: 2008, amt: 2000 },
];

const recentOrders = [
  {
    name: "Wade Warren",
    orderNo: "15478256",
    amount: "$124.00",
    status: "Delivered",
    color: "green",
  },
  {
    name: "Jane Cooper",
    orderNo: "48857672",
    amount: "$385.02",
    status: "Delivered",
    color: "green",
  },
  {
    name: "Guy Hawkins",
    orderNo: "78965812",
    amount: "$45.68",
    status: "Cancelled",
    color: "red",
  },
  {
    name: "Kristin Watson",
    orderNo: "20095372",
    amount: "$95.00",
    status: "Pending",
    color: "red",
  },
  {
    name: "Cody Fisher",
    orderNo: "95716520",
    amount: "$345.00",
    status: "Delivered",
    color: "green",
  },
  {
    name: "Savannah Nguyen",
    orderNo: "78516548",
    amount: "$126.20",
    status: "Delivered",
    color: "green",
  },
];
const feedbacks = [
  {
    name: "Jenny Wilson",
    comment:
      "The food was excellent and so was the service. Highly recommended!",
    rating: 3,
  },
  {
    name: "John Doe",
    comment: "Great atmosphere and friendly staff. Highly recommend!",
    rating: 4,
  },
  {
    name: "Jane Smith",
    comment: "Food was good, but service could be improved.",
    rating: 5,
  },
  {
    name: "Alice Johnson",
    comment: "A delightful dining experience with attentive service.",
    rating: 4,
  },
  {
    name: "Bob Brown",
    comment:
      "The food was average and the wait was long. Could use some improvements.",
    rating: 2,
  },
  {
    name: "Emily Davis",
    comment: "Loved the ambiance and the food was tasty. Will visit again!",
    rating: 4,
  },
  {
    name: "David Martin",
    comment: "The restaurant was clean, but the food lacked flavor.",
    rating: 3,
  },
  {
    name: "Sophia Brown",
    comment:
      "Loved the atmosphere and the unique dishes. Will definitely return.",
    rating: 4,
  },
];
const percentage = 66;

const Dashboard = () => {
  const [filter, setFilter] = useState("uv");
  const filterOptions = [
    { value: "uv", label: "UV" },
    { value: "pv", label: "PV" },
    { value: "amt", label: "AMT" },
  ];

  const handleFilterChange = (event) => {
    setFilter(event.target.value);
  };

  return (
    <DashboardContainer>
      <Sidebar>
        <Box>
          <IconButton>
            <MenuIcon style={{ color: "#fff" }} />
          </IconButton>
        </Box>
        <Box
          display="flex"
          flexDirection="column"
          justifyContent={"space-between"}
          marginTop="60px"
        >
          <ActiveIconButton>
            <HomeIcon style={{ color: "#fff" }} />
          </ActiveIconButton>
          <IconButton>
            <BarChartSharpIcon style={{ color: "#fff" }} />
          </IconButton>
          <IconButton>
            <AssignmentTurnedInSharpIcon style={{ color: "#fff" }} />
          </IconButton>
          <IconButton>
            <AccountBalanceWalletOutlinedIcon style={{ color: "#fff" }} />
          </IconButton>
          <IconButton>
            <ShoppingBagOutlinedIcon style={{ color: "#fff" }} />
          </IconButton>
        </Box>
      </Sidebar>
      <ContentWrapper>
        <Header>
          <InputBase
            placeholder="Search..."
            startAdornment={
              <SearchIcon style={{ color: "#fff", marginRight: 8 }} />
            }
            style={{
              color: "#fff",
              backgroundColor: "#3c404b",
              padding: "5px 8px",
              borderRadius: 4,
              width: "300px",
            }}
          />
          <Box className="navbar">
            <IconButton>
              <NotificationsIcon style={{ color: "#fff" }} />
            </IconButton>
            <IconButton>
              <MailIcon style={{ color: "#fff" }} />
            </IconButton>
            <IconButton>
              <SettingsIcon style={{ color: "#fff" }} />
            </IconButton>
            <Avatar style={{ marginLeft: 16 }} />
          </Box>
        </Header>
        <Content>
          <Typography variant="h4" gutterBottom>
            Dashboard
          </Typography>

          <div className="row align-items-center">
            <div className="col-12 col-lg-8">
              <Content>
                <div className="row">
                  <div className="col-12 col-md-3">
                    <Item>
                      <Box>
                        {icons.totalOrders}
                        <Box ml={2}>
                          <Typography variant="h7">Total Orders</Typography>
                          <Typography variant="h5">75</Typography>
                        </Box>
                      </Box>
                    </Item>
                  </div>
                  <div className="col-12 col-md-3">
                    <Item>
                      <Box display="flex" alignItems="center">
                        {icons.totalDelivered}
                        <Box ml={2}>
                          <Typography variant="h7">Total Delivered</Typography>
                          <Typography variant="h5">70</Typography>
                        </Box>
                      </Box>
                    </Item>
                  </div>
                  <div className="col-12 col-md-3">
                    <Item>
                      <Box display="flex" alignItems="center">
                        {icons.totalCancelled}
                        <Box ml={2}>
                          <Typography variant="h7">Total Cancelled</Typography>
                          <Typography variant="h5">5</Typography>
                        </Box>
                      </Box>
                    </Item>
                  </div>
                  <div className="col-12 col-md-3">
                    <Item>
                      <Box display="flex" alignItems="center">
                        {icons.totalRevenue}
                        <Box ml={2}>
                          <Typography variant="h7">Total Revenue</Typography>
                          <Typography variant="h5">$12k</Typography>
                        </Box>
                      </Box>
                    </Item>
                  </div>
                </div>
              </Content>
            </div>
            <div className="col-12 col-lg-4">
              <Item className="d-flex justify-content-between">
                <div>
                  <Typography
                    variant="h6"
                    style={{
                      marginBottom: "20px",
                      fontWeight: "600",
                      fontSize: "15px",
                    }}
                  >
                    Net Profit
                  </Typography>
                  <Typography
                    variant="h3"
                    style={{
                      fontWeight: "700",
                      fontStyle: "normal",
                      fontSize: "32px",
                    }}
                  >
                    $6759.25
                  </Typography>
                </div>
                <div style={{ margin: "10px" }}>
                  <CircularProgressbar
                    value={percentage}
                    text={`${percentage}% Goal Achieved`}
                    styles={{
                      text: {
                        // Text color
                        fill: "white",
                        // Text size
                        fontSize: "10px",
                        whiteSpace: "none !important",
                      },
                      root: { width: 120, height: "100px" },
                    }}
                  />
                </div>
              </Item>
            </div>
          </div>
          <div className="row">
            <div className="col-12 col-lg-8">
              <Item>
                <Box>
                  <div className="bar-graph-header">
                    <Typography variant="h6">Activity</Typography>
                    <FormControl
                      variant="outlined"
                      style={{ marginBottom: "20px", minWidth: 120 }}
                    >
                      <InputLabel>Filter</InputLabel>
                      <Select
                        value={filter}
                        onChange={handleFilterChange}
                        label="Filter"
                      >
                        {filterOptions.map((option) => (
                          <MenuItem key={option.value} value={option.value}>
                            {option.label}
                          </MenuItem>
                        ))}
                      </Select>
                    </FormControl>
                  </div>

                  <ResponsiveContainer width="100%" height={400}>
                    <BarChart
                      data={data}
                      margin={{ top: 20, right: 30, left: 20, bottom: 5 }}
                    >
                      <CartesianGrid strokeDasharray="3 3" />
                      <XAxis dataKey="name" />
                      <YAxis />
                      <Tooltip />
                      {/* <Legend /> */}
                      <Bar dataKey="pv" stackId="a" fill="#8884d8" />
                      {/* <Bar dataKey="uv" stackId="a" fill="#82ca9d" /> */}
                    </BarChart>

                    <div>
                      {/*                   
                      <BarChart
        width={600}
        height={300}
        data={data}
        margin={{ top: 20, right: 30, left: 20, bottom: 5 }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
        {/* <Legend /> 
                      <Bar dataKey={filter} fill="#8884d8" />
                      {/* <Bar dataKey="uv" stackId="a" fill="#82ca9d" /> *
      </BarChart> */}
                    </div>
                  </ResponsiveContainer>
                </Box>
              </Item>
            </div>

            <div className="col-12 col-lg-4">
              <Item className="feature-card">
                <IconTypography icon={StarIcon} text="Goals" />
                {/* {NavigateNextSharpIcon} */}
                {
                  <RoundIconButton
                    edge="middle"
                    className="left-arrow-icon"
                    style={{ backgroundColor: "transparent" }}
                  >
                    <NavigateNextSharpIcon style={{ color: "#fff" }} />
                  </RoundIconButton>
                }
              </Item>
              <Item className="feature-card">
                <IconTypography
                  icon={RestaurantMenuIcon}
                  text="Popular Dishes"
                />
                {
                  <RoundIconButton
                    edge="middle"
                    className="left-arrow-icon"
                    style={{ backgroundColor: "transparent" }}
                  >
                    <NavigateNextSharpIcon style={{ color: "#fff" }} />
                  </RoundIconButton>
                }
                {/* {NavigateNextSharpIcon} */}
                {/* Add your popular dishes component here */}
              </Item>
              <Item className="feature-card">
                <IconTypography icon={MenuBookIcon} text="Menus" />
                {
                  <RoundIconButton
                    edge="middle"
                    className="left-arrow-icon"
                    style={{ backgroundColor: "transparent" }}
                  >
                    <NavigateNextSharpIcon style={{ color: "#fff" }} />
                  </RoundIconButton>
                }
                {/* Add your menus component here */}
                {/* {NavigateNextSharpIcon} */}
              </Item>
            </div>
          </div>

          <div className="row">
            <div className="col-12 col-lg-8">
              <Item>
                <Typography variant="h5">Recent Orders</Typography>
                <TableContainer component={Paper}>
                  <Table>
                    <TableHead>
                      <TableRow>
                        <TableCell style={{ color: "#fff" }}>
                          Customer Name
                        </TableCell>
                        <TableCell style={{ color: "#fff" }}>
                          Order No.
                        </TableCell>
                        <TableCell style={{ color: "#fff" }}>Amount</TableCell>
                        <TableCell style={{ color: "#fff" }}>Status</TableCell>
                      </TableRow>
                    </TableHead>
                    <TableBody>
                      {recentOrders.map((order, index) => (
                        <TableRow key={index}>
                          <TableCell style={{ color: "#fff" }}>
                            {order.name}
                          </TableCell>
                          <TableCell style={{ color: "#fff" }}>
                            {order.orderNo}
                          </TableCell>
                          <TableCell style={{ color: "#fff" }}>
                            {order.amount}
                          </TableCell>
                          <TableCell style={{ color: order.color }}>
                            <div
                              style={{
                                color:
                                  order.color === "red" ? "rgb(255 224 224)" : "#8ae99b",
                                backgroundColor:
                                  order.color === "red" ? "#cb2722" : "#126009",
                                padding: "4px 8px",
                                borderRadius: "18px",
                                width: "fit-content",
                                fontSize: "12px",
                                fontWeight: "600",
                              }}
                            >
                              {order.status}
                            </div>
                          </TableCell>
                        </TableRow>
                      ))}
                    </TableBody>
                  </Table>
                </TableContainer>
              </Item>
            </div>

            <div className="col-12 col-lg-4">
              <Item>
                <Box
                  sx={{
                    maxHeight: "400px", // Set a smaller height for the container
                    overflowY: "auto", // Enable vertical scrolling
                    paddingRight: 8, // Add some padding to avoid scrollbar overlap
                    "&::-webkit-scrollbar": {
                      width: "6px", // Make scrollbar narrower
                      height: "6px", // Make horizontal scrollbar narrower
                    },
                    "&::-webkit-scrollbar-thumb": {
                      backgroundColor: "#888", // Grey color for the scrollbar thumb
                      borderRadius: "3px", // Rounded corners for the scrollbar thumb
                    },
                    "&::-webkit-scrollbar-track": {
                      backgroundColor: "transparent", // Remove background color from the track
                    },
                  }}
                >
                  <Typography
                    variant="h6"
                    style={{
                      marginBottom: "16px",
                      width: " 100%",
                      position: "sticky",
                      top: 0,
                      zIndex: 999,
                      backgroundColor: "#2c2f38",
                    }}
                  >
                    Customer's Feedback
                  </Typography>

                  {feedbacks.map((feedback, index) => (
                    <React.Fragment key={index}>
                      <List>
                        <ListItem>
                          <ListItemAvatar>
                            <Avatar />{" "}
                            {/* Add or replace with a customer avatar */}
                          </ListItemAvatar>
                          <ListItemText
                            primary={
                              <Typography
                                variant="body1"
                                style={{
                                  color: "#fff",
                                  fontWeight: "bold",
                                  fontSize: "1.2rem",
                                }}
                              >
                                {feedback.name}
                              </Typography>
                            }
                            secondary={
                              <Box>
                                <Rating
                                  name={`feedback-rating-${index}`}
                                  value={feedback.rating}
                                  readOnly
                                  precision={0.5}
                                  style={{ marginTop: 8 }}
                                />
                                <Typography
                                  variant="body1"
                                  style={{ color: "#fff" }}
                                >
                                  {feedback.comment}
                                </Typography>
                              </Box>
                            }
                          />
                        </ListItem>
                      </List>
                      {index < feedbacks.length - 1 && <Divider />}
                    </React.Fragment>
                  ))}
                </Box>
              </Item>
            </div>
          </div>
        </Content>
      </ContentWrapper>
    </DashboardContainer>
  );
};

export default Dashboard;
