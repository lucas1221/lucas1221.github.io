import React, { ReactNode } from 'react';
import {
  IconButton,
  Box,
  CloseButton,
  Flex,
  Icon,
  useColorModeValue,
  Link,
  Drawer,
  DrawerContent,
  Text,
  useDisclosure,
  BoxProps,
  FlexProps, Divider,
} from '@chakra-ui/react';
import {
  FiHome,
  FiStar,
  FiMenu,
} from 'react-icons/fi';
import {CgProfile} from 'react-icons/cg';
import {RiCodeSSlashFill} from 'react-icons/ri';
import {FaUniversity} from 'react-icons/fa';
import {AiOutlineMail} from 'react-icons/ai';
import {GrDocumentPdf} from 'react-icons/gr';
import { IconType } from 'react-icons';
import { ReactText } from 'react';
import NextLink from "next/link"

interface LinkItemProps {
  name: string;
  icon: IconType;
  page: string;
}
const LinkItems: Array<LinkItemProps> = [
  { name: 'Início', icon: FiHome, page: '/hero1' },
  { name: 'Sobre Mim', icon: CgProfile, page: '/hero2' },
  { name: 'Habilidades', icon: RiCodeSSlashFill, page: '/hero3' },
  { name: 'Educação', icon: FaUniversity, page: '/hero4' },
  { name: 'Projetos', icon: FiStar, page: '/hero5' },
  { name: 'Contato', icon: AiOutlineMail, page: '/contact' },
  { name: 'Baixar Currículo', icon: GrDocumentPdf, page: 'https://drive.google.com/file/d/1fY2MtyksEDcapjQrmfQHo6fyp1KV6jt2/view?usp=sharing' },
];


export default function SimpleSidebar({ children }: { children: ReactNode }) {
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <Box minH="100vh">
      <SidebarContent
        onClose={() => onClose}
        display={{ base: 'none', md: 'block' }}
      />
      <Drawer
        autoFocus={false}
        isOpen={isOpen}
        placement="left"
        onClose={onClose}
        returnFocusOnClose={false}
        onOverlayClick={onClose}
        size="full">
        <DrawerContent>
          <SidebarContent onClose={onClose} />
        </DrawerContent>
      </Drawer>
      {/* mobilenav */}
      <MobileNav display={{ base: 'flex', md: 'none' }} onOpen={onOpen} />
      <Box ml={{ base: 0, md: 60 }} p="0">
        {children}
      </Box>
    </Box>
  );
}

interface SidebarProps extends BoxProps {
  onClose: () => void;
}

const SidebarContent = ({ onClose, ...rest }: SidebarProps) => {
  return (
    <Box
      bg={useColorModeValue('white', 'gray.900')}
      borderRight="1px"
      borderRightColor={useColorModeValue('black', 'black')}
      w={{ base: 'full', md: 60 }}
      pos="fixed"
      h="full"
      {...rest}>
      <Flex h="auto" alignItems="center" mx="7" justifyContent="center">
        <Text fontSize="3xl" fontFamily="monospace" fontWeight="bold" marginTop={10}>
          Lucas Gonzalez de Queiroz
        </Text>
        <CloseButton display={{ base: 'flex', md: 'none' }} onClick={onClose} />
      </Flex>
      <p style={{background: 'black', marginTop: 50, marginBottom: 20}}><Divider orientation='horizontal' /></p>
      {LinkItems.map((link) => (
        <NextLink key={link.name} href={link.page} passHref>
          <NavItem icon={link.icon}>
            {link.name}
          </NavItem>
        </NextLink>
      ))}
    </Box>
  );
};

interface NavItemProps extends FlexProps {
  icon: IconType;
  children: ReactText;
}
const NavItem = ({ icon, children, ...rest }: NavItemProps) => {
  return (
    
    <Link style={{ textDecoration: 'none' }} _focus={{ boxShadow: 'none' }}>
      <Flex
        align="center"
        p="4"
        mx="4"
        borderRadius="lg"
        role="group"
        cursor="pointer"
        _hover={{
          bg: 'red.500',
          color: 'white',
        }}
        {...rest}>
        {icon && (
          <Icon
            mr="4"
            fontSize="20"
            _groupHover={{
              color: 'white',
            }}
            as={icon}
          />
        )}
        {children}
      </Flex>
    </Link>
    
  );
};

interface MobileProps extends FlexProps {
  onOpen: () => void;
}
const MobileNav = ({ onOpen, ...rest }: MobileProps) => {
  return (
    <Flex
      ml={{ base: 0, md: 60 }}
      px={{ base: 4, md: 24 }}
      height="20"
      alignItems="center"
      bg={useColorModeValue('white', 'gray.900')}
      borderBottomWidth="1px"
      borderBottomColor={useColorModeValue('black', 'black')}
      justifyContent="flex-start"
      {...rest}>
      <IconButton
        variant="outline"
        onClick={onOpen}
        aria-label="open menu"
        icon={<FiMenu />}
      />

      <Text fontSize="2xl" ml="8" fontFamily="monospace" fontWeight="bold">
        Lucas G. de Queiroz
      </Text>
    </Flex>
  );
};