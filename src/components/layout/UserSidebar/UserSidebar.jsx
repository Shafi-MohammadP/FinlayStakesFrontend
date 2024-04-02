import { useState } from "react";
import dashboardIcon from "../../../assets/ic_round-dashboard.svg";
import profileIcon from "../../../assets/vector.svg";
import investmentIcon from "../../../assets/investment.svg";
import businessIcon from "../../../assets/categories_logo.svg";
import purposeIcon from "../../../assets/purpose-logo.svg";
import sourceIcon from "../../../assets/source.svg";
import availableIcon from "../../../assets/available_project.svg";
import {
  Card,
  Typography,
  List,
  ListItem,
  ListItemPrefix,
  Accordion,
  AccordionHeader,
  AccordionBody,
  Drawer,
} from "@material-tailwind/react";
import {
  PresentationChartBarIcon,
  ShoppingBagIcon,
  PowerIcon,
  StopCircleIcon,
} from "@heroicons/react/24/solid";
import {
  ChevronRightIcon,
  ChevronDownIcon,
  BuildingOffice2Icon,
  IdentificationIcon,
  EnvelopeIcon,
  DocumentIcon,
  BriefcaseIcon,
  PhoneIcon,
  MegaphoneIcon,
  UserGroupIcon,
  ListBulletIcon,
  ChartBarSquareIcon,
  MagnifyingGlassIcon,
} from "@heroicons/react/24/outline";
import { faAngleLeft } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useNavigate } from "react-router-dom";
function UserSidebar() {
  const navigate = useNavigate();
  const [open, setOpen] = useState(0);

  return (
    <div>
      <Card className="h-[calc(100vh-5.2rem)] md:min-h-[calc(100vh-5.2rem)]  overflow-y-auto  hidescroll w-full  border-r-[1px] border-t-[1px] rounded-none   shadow-xl shadow-blue-gray-900/5 hidden md:block">
        <List className="">
          <ListItem
            onClick={() => navigate("/")}
            className="rounded-none hover:bg-[#6560F0]  text-[#373737] hover:text-white"
          >
            <ListItemPrefix>
              {/* <BuildingOffice2Icon className="h-6 w-6" /> */}
              <img src={dashboardIcon} alt="" className="h-6 w-6" />
            </ListItemPrefix>
            <h1>Dashboard</h1>
          </ListItem>
          <ListItem className="rounded-none hover:bg-[#6560F0] text-[#373737] hover:text-white">
            <ListItemPrefix>
              {/* <ListBulletIcon className="h-6 w-6" /> */}
              <img src={profileIcon} alt="" className="h-6 w-6" />
            </ListItemPrefix>
            <h1>Profile Page</h1>
          </ListItem>
          <ListItem className="rounded-none hover:bg-[#6560F0] text-[#373737] hover:text-white">
            <ListItemPrefix>
              {/* <MagnifyingGlassIcon className="h-6 w-6" /> */}
              <img src={investmentIcon} alt="" className="h-6 w-6" />
            </ListItemPrefix>
            <h1>Investment Amount</h1>
          </ListItem>

          <ListItem className="rounded-none hover:bg-[#6560F0] text-[#373737] hover:text-white">
            <ListItemPrefix>
              <img src={businessIcon} alt="" className="h-6 w-6" />
            </ListItemPrefix>
            <h1>Business Categories</h1>
          </ListItem>
          <ListItem className="rounded-none hover:bg-[#6560F0] text-[#373737] hover:text-white">
            <ListItemPrefix>
              <img src={purposeIcon} alt="" className="h-6 w-6" />
            </ListItemPrefix>
            <h1>Purpose of Investments</h1>
          </ListItem>
          <ListItem className="rounded-none hover:bg-[#6560F0] text-[#373737] hover:text-white">
            <ListItemPrefix>
              <img src={sourceIcon} alt="" className="h-6 w-6" />
            </ListItemPrefix>
            <h1>Sources of Funds</h1>
          </ListItem>
          <ListItem className="rounded-none hover:bg-[#6560F0] text-[#373737] hover:text-white">
            <ListItemPrefix>
              <img src={availableIcon} alt="" className="h-6 w-6" />
            </ListItemPrefix>
            <h1>Available Project</h1>
          </ListItem>

          <ListItem className="rounded-none hover:bg-[#6560F0] text-[#373737] hover:text-white">
            <ListItemPrefix>
              <PowerIcon className="h-6 w-6" />
            </ListItemPrefix>
            Log Out
          </ListItem>
        </List>
      </Card>
    </div>
  );
}

export default UserSidebar;
