import { useState } from "react";
import { Card, Typography, List, ListItem, ListItemPrefix, Accordion, AccordionHeader, AccordionBody, Drawer, } from "@material-tailwind/react";
import { PresentationChartBarIcon, ShoppingBagIcon, PowerIcon, StopCircleIcon, } from "@heroicons/react/24/solid";
import { ChevronRightIcon, ChevronDownIcon, BuildingOffice2Icon, IdentificationIcon, EnvelopeIcon, DocumentIcon, BriefcaseIcon, PhoneIcon, MegaphoneIcon, UserGroupIcon, ListBulletIcon, ChartBarSquareIcon, MagnifyingGlassIcon } from "@heroicons/react/24/outline";
import { faAngleLeft } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useNavigate } from "react-router-dom";
function UserSidebar() {
  const navigate = useNavigate()
  const [open, setOpen] = useState(0);

  return (
    <div >

      <Card className="h-[calc(100vh-5.2rem)] md:min-h-[calc(100vh-5.2rem)]  overflow-y-auto  hidescroll w-full  border-r-[1px] border-t-[1px] rounded-none   shadow-xl shadow-blue-gray-900/5 hidden md:block">
        <List className="">
          <ListItem onClick={() => navigate('/')} className="rounded-none hover:bg-[#6560F0]  text-[#373737] hover:text-white">
            <ListItemPrefix>
              <BuildingOffice2Icon className="h-6 w-6" />
            </ListItemPrefix>
            <h1>Company Profile</h1>
          </ListItem>
          <ListItem className="rounded-none hover:bg-[#6560F0] text-[#373737] hover:text-white">
            <ListItemPrefix>
              <ListBulletIcon className="h-6 w-6" />
            </ListItemPrefix>
            <h1>
              Task Management
            </h1>
          </ListItem>
          <ListItem className="rounded-none hover:bg-[#6560F0] text-[#373737] hover:text-white">
            <ListItemPrefix>
              <MagnifyingGlassIcon className="h-6 w-6" />
            </ListItemPrefix>
            <h1>
              Leads Tracking
            </h1>
          </ListItem>

          <ListItem className="rounded-none hover:bg-[#6560F0] text-[#373737] hover:text-white">
            <ListItemPrefix>
              < PhoneIcon className="h-6 w-6" />
            </ListItemPrefix>
            <h1>
              Other Required Services
            </h1>
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
  )
};

export default UserSidebar


