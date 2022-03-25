import {
    Flex,
    Container,
    Heading,
    Stack,
    Text,
    Button,
    Icon,
    IconProps,
    Image,
  } from '@chakra-ui/react';
  import Lottie from 'react-lottie';
  import backend from '../assets/88009-diploma-certificate-animation-icon.json';
  
  export default function Hero4() {
    const defaultOptions = {
        loop: true,
        autoplay: true,
        animationData: backend,
        rendererSettings: {
          preserveAspectRatio: "xMidYMid slice"
        }
      };
    return (
      <Container maxW={'5xl'}>
        <Stack
          textAlign={'center'}
          align={'center'}
          spacing={{ base: 8, md: 10 }}
          py={{ base: 20, md: 28 }}>
            <Heading
              fontWeight={600}
              fontSize={{ base: '3xl', sm: '4xl', md: '6xl' }}
              lineHeight={'110%'}>
              Bacharel em Sistemas de Informação pela {' '}
              <Text as={'span'} color={'orange.400'}>
                Universidade Federal de Mato Grosso do Sul (UFMS)
              </Text>
        </Heading>
         <Flex w={'full'}>
          </Flex>
              <Lottie 
                options={defaultOptions}
                height={'60%'}
                width={'60%'}
            />
        </Stack>
      </Container>
    );
  }
  