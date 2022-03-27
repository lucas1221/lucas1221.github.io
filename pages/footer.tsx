import {
    Box,
    chakra,
    Container,
    Heading,
    Stack,
    Text,
    useColorModeValue,
    VisuallyHidden,
  } from '@chakra-ui/react';
  import { FaGithub, FaInstagram, FaLinkedin, FaTwitter, FaYoutube } from 'react-icons/fa';
  import { ReactNode } from 'react';
  import Hero1 from './hero1'
  import Link from "next/link"

  const Logo = (props: any) => {
    return (
      <Heading>Lucas Gonzalez de Queiroz</Heading>
    );
  };
  
  const SocialButton = ({
    children,
    label,
    href,
  }: {
    children: ReactNode;
    label: string;
    href: string;
  }) => {
    return (
      <chakra.button
        bg={useColorModeValue('blackAlpha.100', 'whiteAlpha.100')}
        rounded={'full'}
        w={8}
        h={8}
        cursor={'pointer'}
        as={'a'}
        href={href}
        display={'inline-flex'}
        alignItems={'center'}
        justifyContent={'center'}
        transition={'background 0.3s ease'}
        _hover={{
          bg: useColorModeValue('blackAlpha.200', 'whiteAlpha.200'),
        }}>
        <VisuallyHidden>{label}</VisuallyHidden>
        {children}
      </chakra.button>
    );
  };
  
  export default function Footer() {
    return (
      <Box
        bg={useColorModeValue('gray.50', 'gray.900')}
        color={useColorModeValue('gray.700', 'gray.200')}>
        <Container
          as={Stack}
          maxW={'6xl'}
          py={4}
          spacing={4}
          justify={'center'}
          align={'center'}>
          <Logo />
          <Stack direction={'row'} spacing={6}>
            <Link href={'/hero1'}>Início</Link>
            <Link href={'/hero2'}>Sobre Mim</Link>
            <Link href={'/hero3'}>Habilidades</Link>
            <Link href={'/hero4'}>Educação</Link>
            <Link href={'/hero5'}>Projetos</Link>
            <Link href={'/contact'}>Contato</Link>
          </Stack>
        </Container>
  
        <Box
          borderTopWidth={1}
          borderStyle={'solid'}
          borderColor={useColorModeValue('gray.200', 'gray.700')}>
          <Container
            as={Stack}
            maxW={'6xl'}
            py={4}
            direction={{ base: 'column', md: 'row' }}
            spacing={4}
            justify={{ base: 'center', md: 'space-between' }}
            align={{ base: 'center', md: 'center' }}>
            <Text>Desenvolvido por: Lucas G. de Queiroz © 2022</Text>
            <Stack direction={'row'} spacing={6}>
              <SocialButton label={'Linkedin'} href={'https://www.linkedin.com/in/lucas-g-de-queiroz-655834214/'}>
                <FaLinkedin />
              </SocialButton>
              <SocialButton label={'Github'} href={'https://github.com/lucas1221'}>
                <FaGithub />
              </SocialButton>
              <SocialButton label={'Instagram'} href={'https://www.instagram.com/lucaasgq'}>
                <FaInstagram />
              </SocialButton>
            </Stack>
          </Container>
        </Box>
      </Box>
    );
  }