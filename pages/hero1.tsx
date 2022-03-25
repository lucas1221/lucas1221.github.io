import {
    Stack,
    Flex,
    Button,
    Text,
    VStack,
    useBreakpointValue, Heading,
  } from '@chakra-ui/react';
import React from 'react';
import Typical from 'react-typical'
//import './styles.css';
import Lottie from 'react-lottie';
import backend from '../assets/teste.json';
import backend2 from '../assets/teste2.json';
import backend3 from '../assets/teste3.json';

  export default function Hero1() {
    const defaultOptions = {
        loop: true,
        autoplay: true,
        animationData: backend,
        rendererSettings: {
          preserveAspectRatio: "xMidYMid slice"
        }
      };
      const defaultOptions2 = {
        loop: true,
        autoplay: true,
        animationData: backend2,
        rendererSettings: {
          preserveAspectRatio: "xMidYMid slice"
        }
      };
      const defaultOptions3 = {
        loop: true,
        autoplay: true,
        animationData: backend3,
        rendererSettings: {
          preserveAspectRatio: "xMidYMid slice"
        }
      };
      /*
        <Text as={'span'} color={'red.400'}>
              Desenvolvedor Full Stack
            </Text>
      */
     
    return (
      
      <Flex
        w={'100%'}
        h={'100vh'}
        backgroundImage={'./geometry5.jpg'}
        backgroundSize={'cover'}
        backgroundPosition={'center center'}>
        <VStack
          w={'full'}
          justify={'center'}
          px={useBreakpointValue({ base: 4, md: 8 })}
          bgGradient={'linear(to-r, blackAlpha.600, transparent)'}>
          <Stack maxW={'6xl'} align={'flex-start'} spacing={6}>
          <Heading
            lineHeight={1.1}
            fontWeight={600}
            fontSize={{ base: '3xl', sm: '4xl', lg: '6xl' }}
            >
            <Text
              as={'span'}
              position={'relative'}
              color={'white'}
              marginTop={20}
              _after={{
                content: "''",
                width: 'full',
                height: '30%',
                position: 'absolute',
                bottom: 1,
                left: 0,
                bg: 'red.400',
                zIndex: -1,
              }}>
              Olá, Eu sou o <u>Lucas</u>
            </Text>
            <br />
            <Text as={'span'} color={'red.400'}>
            <Typical
              steps={['Desenvolvedor Full Stack', 2000, 'Desenvolvedor Mobile', 2000, 'Desenvolvedor Web', 2000, 'Desenvolvimento Back-End', 2000]}
              loop={Infinity}
              style={{backgroundColor: 'red !important', Color: 'red'}}
            />
            </Text>
          </Heading>
            <Stack direction={'row'}>
            <Lottie 
                options={defaultOptions}
                height={'100%'}
                width={'100%'}
            />
            <Lottie 
                options={defaultOptions2}
                height={'100%'}
                width={'100%'}
            />
            
            </Stack>
          </Stack>
        </VStack>
      </Flex>
     
    );
  }