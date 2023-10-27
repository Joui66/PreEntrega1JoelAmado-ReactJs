import React from 'react'
import CardWidget from './CardWidget'
import { Menu, MenuButton, MenuList, MenuItem , Flex , Spacer , Box } from "@chakra-ui/react";

const Navbar = () => {
  return (
    <div>
<Flex>
  <Box p='4' bg='red.400'>
    <h2>El Bazar Friki</h2>
  </Box>
  <Spacer/>
  <Menu>
  <MenuButton>
    Menu
  </MenuButton>
  <MenuList>
    <MenuItem>Comics</MenuItem>
    <MenuItem>Mangas</MenuItem>
    <MenuItem>VideosJuegos</MenuItem>
  </MenuList>
</Menu>
  <Spacer/>
  <Box p='4'>
    <CardWidget/>
  </Box>
</Flex>


    </div>
  )
}

export default Navbar