// import React, { useState,useEffect} from 'react'


// const Navbar = (props) => {
//   const [isMobile, setIsMobile] =useState(false);

//   const [clientWindowHeight,setClientWindowHeight] = useState("");
//   const [backgroundTransparency, setBackgroundTransparency] = useState(0);
//   const [padding, setPadding] = useState(30);
//   const [boxShadow,setBoxShadow] = useState(0);

//   const handleScroll = () => {
//     setClientWindowHeight(window.scrollY);
//     console.log(clientWindowHeight);
//   };

//   //Handle scrolling
//   useEffect(() => {
//     window.addEventListener('scroll',handleScroll);
//     return ()=>{
//       window.removeEventListener('scroll', handleScroll);
//     }
//   })
//   //Handle screen resize
//   useEffect(() =>{
//     const handleResize = ()=>{
//       if(window.innerWidth <= 768){
//         setIsMobile(true);
//       }else{
//         setIsMobile(false);
//       }
//     };
//     window.addEventListener('resize', handleResize);
//     handleResize();

//     return ()=>{
//       window.removeEventListener('resize', handleResize);
//     }
//   },[]);

//   //Calculate bg transparency, padding and boxShadow
//   useEffect(()=>{
//     let backgroundTransparencyVar = clientWindowHeight / 600;
//     if(backgroundTransparencyVar < 1){
//       let paddingVar = 30 - backgroundTransparencyVar *20;
//       let boxShadowVar = backgroundTransparencyVar *0.1;

//       setBackgroundTransparency(backgroundTransparencyVar);
//       setPadding(paddingVar);
//       setBoxShadow(boxShadowVar);
//     }
//   },[clientWindowHeight]);
  
//   const[isOpen,setIsOpen] =useState(false);
//   const toggle = ()=> setIsOpen(!isOpen);


//   return (

    
//     <nav className={`fixed px-[3em] py-[30px] top-0 text-right flex-col align-middle w-full overflow-y-auto z-10`} 
//       style={{
//         background:`rgba(255,255,255,${backgroundTransparency}`,
//         padding: `${padding}px 3em`,
//         boxShadow: `rgb(0 0 0 / ${boxShadow}) 0px 0px 20px 6px`
//       }}>  
//           <div className='inline font-serif'>
            
//             <div className='flex-shrink-0 inline-flex '>
//               <a href="/" className='text-black font-medium text-xl hover:bg-gray-100 transition-all p-3 rounded-lg'> Inicio </a>
//             </div>
//             <div className='flex-shrink-0 inline-flex'>
//               <a href="/about" className='text-black font-medium text-xl hover:bg-gray-100 transition-all ease-in-out p-3 rounded-lg'> ¿Quíenes somos? </a>
//             </div>
//             <div className='flex-shrink-0 inline-flex'>
//               <a href="/" className='text-black font-medium text-xl hover:bg-gray-100 transition-all ease-in-out p-3 rounded-lg'> Catálogo </a>
//             </div>
//           </div>
//           <div className='inline '>
//             <button className="mx-2 middle none center rounded-lg bg-lightGreen px-4 py-2 font-sans text-lg font-bold uppercase text-white shadow-md shadow-green-500/20 transition-all hover:shadow-lg hover:shadow-green-500/40 hover:bg-white hover:text-black focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none" data-ripple-light="true">
//               <i className='mdi mdi-cart'></i>
//             </button>

//           </div>
        
//     </nav>
//   )
// }

// export default Navbar

import React, { useEffect, useState } from 'react'
import
{
  Box,
  Flex,
  Avatar,
  HStack,
  IconButton,
  Button,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  MenuDivider,
  useDisclosure,
  useColorModeValue,
  Stack,
} from '@chakra-ui/react'
import {HamburgerIcon,CloseIcon,AddIcon} from '@chakra-ui/icons'
import Link from 'next/link'
import {ColorModeSwitcher} from './ColorModeSwitcher'
import navStyles from './navbar.module.css'

const Links = [
  {
    name:'Home',
    path:'/',
  }
]
const NavLink= ({children,path})=>{
  <Box
    px={2}
    py={1}
    rounded={"md"}
    _hover={{
      textDecoration: "none",
      bg:useColorModeValue("gray.200","gray.700"),
    }}
  >
    <Link href={path}>{children}</Link>
  </Box>
};


export default function Navbar (){
  const {isOpen,onOpen,onClose} = useDisclosure();
  const [clientWindowHeight,setClientWindowHeight] = useState("");
  const [backgroundTransparency, setBackgroundTransparency] = useState(0);
  const [padding, setPadding] = useState(30);
  const [boxShadow,setBoxShadow] = useState(0);

  const handleScroll = () => {
    setClientWindowHeight(window.scrollY);
    console.log(clientWindowHeight);
  };

    //Handle scrolling
  useEffect(() => {
    window.addEventListener('scroll',handleScroll);
    return ()=>{
      window.removeEventListener('scroll', handleScroll);
    }
  })
  

  //Calculate bg transparency, padding and boxShadow
  useEffect(()=>{
    let backgroundTransparencyVar = clientWindowHeight / 600;
    if(backgroundTransparencyVar < 1){
      let paddingVar = 30 - backgroundTransparencyVar *20;
      let boxShadowVar = backgroundTransparencyVar *0.1;

      setBackgroundTransparency(backgroundTransparencyVar);
      setPadding(paddingVar);
      setBoxShadow(boxShadowVar);
    }
  },[clientWindowHeight]);
 

  return (
    <div 
      className={`overflow-hidden fixed px-[3em] py-[30px] top-0 text-right flex-col align-middle w-full overflow-y-auto z-10`} 
      style={{
              background:`rgba(255,255,255,${backgroundTransparency}`,
              padding: `${padding}px 3em`,
              boxShadow: `rgb(0 0 0 / ${boxShadow}) 0px 0px 20px 6px`,
              overflow:'hidden'
            }}
    > 
      <Box>
        <Flex h={16} alignItems={"center"} justifyContent={"space-between"}>
          <IconButton
            size={"md"}
            icon={isOpen?<CloseIcon/>:<HamburgerIcon/>}
            aria-label={"Open Menu"}
            display={{md:"none"}}
            onClick={isOpen? onClose:onOpen}
          />
          <HStack spacing={8} alignItems={"center"}>
            <Box>Logo</Box>
            <HStack
              as={"nav"}
              spacing={4}
              display={{base:"none",md:"flex"}}
            >
              {Links.map(({name,path})=>(
                <NavLink key={path} path={path}>
                  {name}
                </NavLink>
              ))}
            </HStack>
            <ColorModeSwitcher/>
          </HStack>
          <Flex alignItems={"center"}>
            <Button
              variant={"solid"}
              colorScheme={"teal"}
              size={"sm"}
              mr={4}
              leftIcon={<AddIcon/>}
            >
              Action
            </Button>
            <Menu>
              <MenuButton
                as={Button}
                rounded={"full"}
                variant={"link"}
                cursor={"pointer"}
              >
                <Avatar
                  size={"sm"}
                  src={
                    "https://images.unsplash.com/photo-1493666438817-866a91353ca9?ixlib=rb-0.3.5&q=80&fm=jpg&crop=faces&fit=crop&h=200&w=200&s=b616b2c5b373a80ffc9636ba24f7a4a9"
                  }
                />
              </MenuButton>
              <MenuList>
                <MenuItem>Link 1</MenuItem>
                <MenuItem>Link 2</MenuItem>
                <MenuDivider/>
                <MenuItem>Link 3</MenuItem>
              </MenuList>
            </Menu>
          </Flex>
        </Flex>
        {isOpen? (
          <Box pb={4} display={{md:"none"}}>
            <Stack as={"nav"} spacing={4}>
              {Links.map(({name,path})=>(
                <NavLink key={path} path={path}>
                  {name}
                </NavLink>
              ))}
            </Stack>
          </Box>
        ): null
      }
      </Box>
    </div>
  )
}

