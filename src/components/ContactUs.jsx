import * as React from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import List from '@mui/material/List';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import MenuItem from '@mui/material/MenuItem';
import Menu from '@mui/material/Menu'
import img from "../assets/contact.png";
const ContactUs = () => {
  const options = [
    'Souhaitez vous d etre permis nos formateur ? ',
    'Souhaitez vous d etre permis nos partenaires ?',
    'Probleme de connexion ?',
    'Autre?',
  ];



  const [anchorEl, setAnchorEl] = React.useState(null);
  const [selectedIndex, setSelectedIndex] = React.useState(1);
  const open = Boolean(anchorEl);
  const handleClickListItem = (event) => {
    setAnchorEl(event.currentTarget);
  };



  const handleMenuItemClick = (event, index) => {
    setSelectedIndex(index);
    setAnchorEl(null);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };
  return (
    <div className="flex flex-col  w-full h-full  ">
      <Navbar />
      <div className="my-16 w-full px-8 ">
        <div className="flex flex-col self-center mt-12">
          <h1 className="text-3xl font-bold self-center">CONTACT US </h1>
          <p className="w-3/5 self-center my-10">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Excepturi
            modi doloremque recusandae earum ipsa adipisci eius quasi minima
            tempore, qui architecto obcaecati distinctio vero velit sit iusto,
            eaque incidunt quam.
          </p>
        </div>
        <div className="mx-16 w-11/12">
          {/* <img src={img}/> */}
        <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d39655.81274004702!2d3.1504569086956864!3d36.71110867196053!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x128e522f3f317461%3A0x215c157a5406653c!2sHigher%20National%20School%20of%20Computer%20Science!5e0!3m2!1sen!2sdz!4v1707669951744!5m2!1sen!2sdz"
        width="100%"
        height="450"
        loading="lazy"
      ></iframe>
        </div>
      </div>
      <div className="px-8">
        <h2 className="text-2xl font-bold mb-5">Leave a message </h2>
        <hr />
        <div className="flex flex-row w-full">
          <div className="flex flex-col w-3/4 ">
            <div className="flex flex-row w-3/4  my-20">
              {" "}
              <div className="flex flex-col w-full">
                {" "}
                <label className="text-lg font-bold mb-4">Enter Email</label>
                <input
                  id="email-address"
                  name="email"
                  type="email"
                  autocomplete="email"
                  required
                  class=" text-xl  w mr-20   flex-auto rounded-md border-1 bg-white px-3.5 py-2 text-black shadow-sm ring-1 ring-inset ring-white/10 focus:ring-2 focus:ring-inset focus:ring-indigo-500"
                  placeholder="Enter your email"
                />
              </div>
              <div className="flex flex-col w-full">
                {" "}
                <label className="text-lg font-bold mb-4">Enter Name</label>
                <input
                  id="Name"
                  name="Name"
                  type="text"
                  autocomplete="Name"
                  required
                  class=" text-xl     flex-auto rounded-md border-1 bg-white px-3.5 py-2 text-black shadow-sm ring-1 ring-inset ring-white/10 focus:ring-2 focus:ring-inset focus:ring-indigo-500 "
                  placeholder="Enter your Name"
                />
              </div>
            </div>

            <div className="w-5/12">
      <List
        component="nav"
        aria-label="Device settings"
        sx={{ bgcolor: 'background.paper' }}
      >
        <ListItemButton
          id="lock-button"
          aria-haspopup="listbox"
          aria-controls="lock-menu"
          aria-label="La Reason ??"
          aria-expanded={open ? 'true' : undefined}
          onClick={handleClickListItem}
        >
          <ListItemText
            primary="La Reason "
            secondary={options[selectedIndex]}
          />
        </ListItemButton>
      </List>
      <Menu
        id="lock-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          'aria-labelledby': 'lock-button',
          role: 'listbox',
        }}
      >
        {options.map((option, index) => (
          <MenuItem
            key={option}
            disabled={index === 0}
            selected={index === selectedIndex}
            onClick={(event) => handleMenuItemClick(event, index)}
          >
            {option}
          </MenuItem>
        ))}
      </Menu>
    </div>



            <label className="text-lg font-bold mb-4">Enter Your Message</label>
            <textarea
              rows="5"
              cols="33"
              className="resize-none rounded-md mb-10 p-8 w-11/12"
              resize:none
            />
            <button
              type="submit"
              class="flex-none w-11/12 rounded-md bg-indigo-500 px-3.5 py-2.5 text-lg my-10 font-bold; text-white shadow-sm hover:bg-indigo-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500">
              Send Message
            </button>
          </div>
          <div className="my-20 flex flex-col">
            <h1 className="text-2xl font-bold mb-4">Our Adress</h1>
            <hr/>
            <p className="mb-10">Ecole national superieur d'informatique </p>
            <h1 className="text-2xl font-bold mb-10">Get in Touch</h1>
            <p className="text-lg mb-4  text-slate-400">FOR SUPPORT : </p>
            <p className="mb-10">0797663757 </p>
            <p className="text-lg mb-4 text-slate-400">EMAIL ADRESSE : </p>
            <p className="mb-10">jw_boudissa, jh_loukkaf </p>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default ContactUs;
