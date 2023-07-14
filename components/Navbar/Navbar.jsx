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
import {
  Box,
  Flex,
  Avatar,
  HStack,
  VStack,
  StackDivider,
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
  Divider,
  Spacer,
} from '@chakra-ui/react'
import { HamburgerIcon, CloseIcon, AddIcon, ChevronDownIcon } from '@chakra-ui/icons'
import Link from 'next/link'
import { ColorModeSwitcher } from './ColorModeSwitcher'

import navStyles from './navbar.module.css'
import { FaCartPlus } from 'react-icons/fa'
import { signOut } from 'next-auth/react'
import { useRouter } from 'next/router'
import { black } from 'tailwindcss/colors'

const Catalog = [
  {
    name: 'Piton Bola',
  },
  {
    name: 'Gecko Leopardo',
  },
  {
    name: 'Camaleón'
  },
  {
    name: 'Gecko de día'
  },
  {
    name: 'Dragón Barbado'
  },
  {
    name: 'Tortugas'
  }
]

const Links = [
  {
    name: 'Inicio',
    path: '/',
  },
  {
    name: 'Quienes somos?',
    path: '/about',
  }
]
const NavLink = (children, path) => {
  <Box
    px={2}
    py={1}
    rounded={"md"}
    _hover={{
      textDecoration: "none",
      bg: useColorModeValue("gray.200", "gray.700"),
    }}
  >
    <Link href={path}>{children}</Link>
  </Box>
};


export default function Navbar() {
  //TODO: Refactor
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [isCatalogOpen,setIsCatalogOpen] = useState(false);

  const [clientWindowHeight, setClientWindowHeight] = useState("");
  const [backgroundTransparency, setBackgroundTransparency] = useState(0);
  const [padding, setPadding] = useState(30);
  const [boxShadow, setBoxShadow] = useState(0);
  const router = useRouter()

  const handleScroll = () => {
    setClientWindowHeight(window.scrollY);
  };

  const handleSignOut= async ()=>{
    const res = await signOut()
    return router.push({ pathname: '/login', query: { u: "true" } })

}

  //Handle scrolling
  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    }
  })


  //Calculate bg transparency, padding and boxShadow
  useEffect(() => {
    let backgroundTransparencyVar = clientWindowHeight / 600;
    if (backgroundTransparencyVar < 1) {
      let paddingVar = 30 - backgroundTransparencyVar * 20;
      let boxShadowVar = backgroundTransparencyVar * 0.1;

      setBackgroundTransparency(backgroundTransparencyVar);
      setPadding(paddingVar);
      setBoxShadow(boxShadowVar);
    }
  }, [clientWindowHeight]);

  const handleOnCatalogOpenMobile = (e)=>{
    setIsCatalogOpen(!isCatalogOpen)
  }
  return (
    <div
      className={`overflow-hidden fixed  top-0 text-right flex-col align-middle w-full  z-10`}
      style={{
        boxShadow: `rgb(0 0 0 / ${boxShadow}) 0px 0px 20px 6px`,
        overflow: 'hidden'
      }}
    >
      <div className=' fixed w-full overflow-hidden top-0 z-10' style={{ background: `rgba(255,255,255,${backgroundTransparency * 1.1}`, padding: `${padding}px 3em`, }}>
        {isOpen ? (
          <Box p={'2'} background={'whiteAlpha.900'} display={{ md: "none" }} borderRadius={'2xl'}>
            <VStack
              divider={<StackDivider borderColor='gray.200' />}
              align='center'
            >
              {Links.map(({ name, path }) => (
                <Box p={'3'}>
                  <Link href={path} className='hover:text-lightGreen'>
                    {name}
                  </Link>
                </Box>
              ))}

              <Button background={'transparent'} _hover={{background:'transparent'}} p={2} rightIcon={<ChevronDownIcon />} onClick={handleOnCatalogOpenMobile}>
                Catálogo
              </Button>
              {isCatalogOpen ? (
                Catalog.map(({ name }) => (
                  <Box p={2}>
                    {name}
                  </Box>
                ))
              ) : null

              }

            </VStack>

          </Box>
        ) : null
        }
        <Flex h={16} alignItems={"center"} justifyContent={"space-between"} >
          <IconButton
            size={"md"}
            icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
            aria-label={"Open Menu"}
            display={{ md: "none" }}
            onClick={isOpen ? onClose : onOpen}
          />
          <HStack spacing={8} alignItems={"center"}>
            <HStack
              as={"nav"}
              spacing={4}
              display={{ base: "none", md: "flex" }}
              style={{ color: `rgb(${255 - (backgroundTransparency * 255)},${(255 - (backgroundTransparency * 255))},${(255 - (backgroundTransparency * 255))})` }}
            >
              {Links.map(({ name, path }) => (
                <Link key={name} href={path} className='hover:text-lightGreen transition-all ease-in-out font-semibold'>
                  {name}
                </Link>
              ))}
            </HStack>
          </HStack>

          <HStack spacing={4} alignItems={"center"} className=' fixed overflow-visible right-0 pr-10' display={{ sm: "none", md: "flex" }}>
            <IconButton
              variant={"solid"}
              colorScheme={"green"}
              size={"sm"}
              icon={<FaCartPlus />}
            >
              Action
            </IconButton>
            <Menu>
              {({ isOpen }) => (
                <>
                  <MenuButton isActive={isOpen} as={Button} rightIcon={<ChevronDownIcon />}>
                    Catálogo
                  </MenuButton>
                  <MenuList display={'block'}>
                    <MenuItem>Piton Bola</MenuItem>
                    <MenuItem>Gecko Leopardo</MenuItem>
                    <MenuItem>Camaleón</MenuItem>
                    <MenuItem>Gecko de día</MenuItem>
                    <MenuItem>Dragón Barbado</MenuItem>
                    <MenuItem>Tortugas</MenuItem>
                  </MenuList>
                </>
              )}
            </Menu>
            <Menu>
              {({ isOpen }) => (
                <>
                  <MenuButton isActive={isOpen} as={Avatar} size={'sm'} colorScheme='orange'>

                  </MenuButton>
                  <MenuList >
                    <MenuItem onClick={handleSignOut}>Cerrar Sesión</MenuItem>
                  </MenuList>
                </>
              )}
            </Menu>
            {/* <ColorModeSwitcher /> */}
          </HStack>

        </Flex>

      </div>
    </div>
  )
}

