import React, { useState } from 'react'
import logo from "../../../assets/logo.svg";
import menuLogo from "../../../assets/outline_menu.svg";
import UKflag from "../../../assets/UK.png";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBell, faSearch, faSun, faUser, } from '@fortawesome/free-solid-svg-icons'
import menubaricon from '../../../assets/barIcon.svg'
import { Outlet, useNavigate } from 'react-router-dom'
import { Card, List, ListItem, ListItemPrefix, Accordion, AccordionHeader, AccordionBody, Drawer, } from "@material-tailwind/react";
import { PowerIcon, StopCircleIcon, } from "@heroicons/react/24/solid";
import { ChevronRightIcon, ChevronDownIcon, BuildingOffice2Icon, IdentificationIcon, EnvelopeIcon, DocumentIcon, BriefcaseIcon, PhoneIcon, MegaphoneIcon, UserGroupIcon, ListBulletIcon, ChartBarSquareIcon, MagnifyingGlassIcon } from "@heroicons/react/24/outline";
import UserSidebar from '../UserSidebar/UserSidebar';


function UserNavbar() {
  const navigate = useNavigate()

  const [isOpen, setOpens] = useState(false)
  const [isModal, setIsModal] = useState(true)
  const [modal, setModal] = useState(false)


  const HandleSidebar = () => {
    setIsModal(!isModal)
  }

  return (
    <div>

      <div className='bg-white w-svw shadow-md pb-4'>
        <div className='flex justify-between gap-2'>
          <div className='flex flex-col pl-1 pt-[1.2%] 2xl:gap-[10%] xl:gap-[8%] lg:gap-[6%] md:gap-[5%] 2xl:flex-row xl:flex-row lg:flex-row md:flex-row'>
            <div className='flex gap-2 justify-between md:justify-normal md:pl-0 pl-1'>
              <img onClick={() => setModal(!modal)} src={menubaricon} alt="menubar" className='w-9 h-9 mt-3 block md:hidden  hover:cursor-pointer hover:bg-black hover:bg-opacity-10 p-2 rounded-lg' />
              <img src={logo} alt="Logo" className='w-[16rem]' />
              <img onClick={HandleSidebar} src={menubaricon} alt="menubar" className='w-9 h-9 mt-3 hidden md:block  hover:cursor-pointer hover:bg-black hover:bg-opacity-10 p-2 rounded-lg' />
              <img onClick={() => setOpens(!isOpen)} src={menubaricon} alt="menubar" className='w-9 h-9 mt-3 block md:hidden  hover:cursor-pointer hover:bg-black hover:bg-opacity-10 p-2 rounded-lg' />
            </div>
            {isOpen ?
              <div className='md:hidden block pl-5'>
                <div className='flex h-11 pt-1 w-auto'>
                  <div>
                    <input type="search" placeholder='Search ...' className='pl-3 h-10 bg-[#6560F0] bg-opacity-15 rounded-l-full focus:outline-none rounded-r-none p-1 2xl:w-80 xl:w-64 lg:w-56 md:w-44' />
                  </div>
                  <div className=' flex justify-center items-center bg-[#6560F0] rounded-r-full rounded-l-none w-16 hover:cursor-pointer hover:bg-[#7194ff] '>
                    <FontAwesomeIcon icon={faSearch} className='w-5 h-4 text-white' />
                  </div>
                </div>
                <br />
                <div className='flex gap-5 '>
                  <div className='w-11 h-11 border-[1px] border-[#c1c1c1] rounded-full'>
                    <img src={UKflag} alt="logo" className='rounded-full opacity-90 hover:opacity-100 hover:cursor-pointer' />
                  </div>
                  <div className=' flex justify-center items-center w-11 h-11  bg-[#f1f1f1] text-[#9f9e9e] hover:bg-[#e8e8e8] hover:text-[#2f2f2f] hover:border-none rounded-full hover:cursor-pointer'>
                    <FontAwesomeIcon icon={faSun} className='w-6 h-6 ' />
                  </div>
                  <div className='flex justify-center items-center w-11 h-11  bg-[#f1f1f1] text-[#9f9e9e] hover:bg-[#e8e8e8] hover:text-[#2f2f2f] hover:border-none rounded-full hover:cursor-pointer'>
                    <FontAwesomeIcon icon={faBell} className='w-6 h-6' />
                  </div>
                  <div className='flex justify-center items-center w-11 h-11  bg-[#f1f1f1] text-[#9f9e9e] hover:bg-[#e8e8e8] hover:text-[#2f2f2f] hover:border-none rounded-full hover:cursor-pointer'>
                    <FontAwesomeIcon icon={faUser} className='w-6 h-6' />
                  </div>
                </div>
              </div> : ''}

            <div className='hidden md:block'>
              <div className='flex h-11 pt-1 w-auto'>
                <div>
                  <input type="search" placeholder='Search ...' className='pl-3 h-10 bg-[#6560F0] bg-opacity-15 rounded-l-full focus:outline-none rounded-r-none p-1 2xl:w-80 xl:w-64 lg:w-56 md:w-36 ' />
                </div>
                <div className=' flex justify-center items-center bg-[#6560F0] rounded-r-full rounded-l-none w-16 hover:cursor-pointer hover:bg-[#7194ff] '>
                  <FontAwesomeIcon icon={faSearch} className='w-5 h-4 text-white' />
                </div>
              </div>
            </div>
          </div>
          <div className='hidden md:block pr-[1.5%] pt-[1.2%]'>
            <div className='flex gap-5  '>
              <div className='w-11 h-11 border-[1px] border-[#c1c1c1] rounded-full'>
                <img src={UKflag} alt="logo" className='rounded-full opacity-90 hover:opacity-100 hover:cursor-pointer' />
              </div>
              <div className=' flex justify-center items-center w-11 h-11  bg-[#f1f1f1] text-[#9f9e9e] hover:bg-[#e8e8e8] hover:text-[#2f2f2f] hover:border-none rounded-full hover:cursor-pointer'>
                <FontAwesomeIcon icon={faSun} className='w-6 h-6 ' />
              </div>
              <div className='flex justify-center items-center w-11 h-11  bg-[#f1f1f1] text-[#9f9e9e] hover:bg-[#e8e8e8] hover:text-[#2f2f2f] hover:border-none rounded-full hover:cursor-pointer'>
                <FontAwesomeIcon icon={faBell} className='w-6 h-6' />
              </div>
              <div className='flex justify-center items-center w-11 h-11  bg-[#f1f1f1] text-[#9f9e9e] hover:bg-[#e8e8e8] hover:text-[#2f2f2f] hover:border-none rounded-full hover:cursor-pointer'>
                <FontAwesomeIcon icon={faUser} className='w-6 h-6' />
              </div>
            </div>
          </div>
          <div className='md:hidden block pr-[1.5%] pt-[1.5%] '>
            {/* <Hamburger color='#9f9e9e' toggled={isOpen} toggle={setOpen} /> */}
          </div>
        </div>
      </div>
      
      <div className='flex flex-col 2xl:flex-row xl:flex-row lg:flex-row md:flex-row bg-[#6560F0] bg-opacity-10 w-full h-full'>
        <div className={ isModal ? 'sidebar-container show' : 'sidebar-container'}>
          {isModal ? <><UserSidebar /></> : ''}
        </div>
        <div className='w-full'>
          <Outlet />
        </div>
      </div>

    </div>
  )
}

export default UserNavbar



{/* <Drawer open={modal} onClose={() => setModal(!modal)} className="md:hidden block w-fit" overlay={false}>
<Card className="h-full bor w-full  border-r-[1px] border-t-[1px] rounded-none  shadow-xl shadow-blue-gray-900/5 ">
  <List>
    <ListItem onClick={() => { navigate('/'), setModal(!modal) }} className="rounded-none hover:bg-[#6560F0] text-[#373737] hover:text-white">
      <ListItemPrefix>
        <BuildingOffice2Icon className="h-6 w-6" />
      </ListItemPrefix>
      <h1 className=" ">Company Profile</h1>
    </ListItem>

    <ListItem className="rounded-none hover:bg-[#6560F0] text-[#373737] hover:text-white">
      <ListItemPrefix>
        <IdentificationIcon className="h-6 w-6" />
      </ListItemPrefix>
      <h1 className=" ">
        Business Card
      </h1>
    </ListItem>
    <ListItem className="rounded-none hover:bg-[#6560F0] text-[#373737] hover:text-white">
      <ListItemPrefix>
        <ListBulletIcon className="h-6 w-6" />
      </ListItemPrefix>
      <h1 className=" ">
        Task Management
      </h1>
    </ListItem>


    <ListItem className="rounded-none hover:bg-[#6560F0] text-[#373737] hover:text-white">
      <ListItemPrefix>
        <MagnifyingGlassIcon className="h-6 w-6" />
      </ListItemPrefix>
      <h1 className=" ">
        Leads Tracking
      </h1>
    </ListItem>

    <ListItem className="rounded-none hover:bg-[#6560F0] text-[#373737] hover:text-white">
      <ListItemPrefix>
        < PhoneIcon className="h-6 w-6" />
      </ListItemPrefix>
      <h1 className=" ">
        Other Required Services
      </h1>
    </ListItem>
    <ListItem className="rounded-none hover:bg-[#6560F0] text-[#373737] hover:text-white">
      <ListItemPrefix>
        <PowerIcon className="h-6 w-6" />
      </ListItemPrefix>
      <h1 className=" mr-auto font-normal text-[16px]">
        Log Out
      </h1>
    </ListItem>
  </List>
</Card>
</Drawer> */}