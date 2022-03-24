import {
    Button,
    Flex,
    Heading,
    Image,
    Stack,
    Text,
    useBreakpointValue, useColorModeValue, StackDivider, Icon, Container, Box
  } from '@chakra-ui/react';
  import {
    IoLaptopOutline,
    IoPhonePortraitOutline,
    IoServerOutline,
  } from 'react-icons/io5';
  import { ReactElement } from 'react';
  
  interface FeatureProps {
    text: string;
    iconBg: string;
    icon?: ReactElement;
  }
  const Feature = ({ text, icon, iconBg }: FeatureProps) => {
    return (
      <Stack direction={'row'} align={'center'}>
        <Flex
          w={10}
          h={10}
          align={'center'}
          justify={'center'}
          rounded={'full'}
          bg={iconBg}>
          {icon}
        </Flex>
        <Text fontWeight={700}>{text}</Text>
      </Stack>
    );
  };
  export default function Hero2() {
  
    return (
        <Container maxW={'7xl'}>
        <Stack
            bgColor={'white'}
          align={'center'}
          spacing={{ base: 8, md: 12 }}
          py={{ base: 20, md: 28 }}
          direction={{ base: 'column', md: 'row' }}
          minH={'100vh'}
          >
          <Stack flex={1} spacing={{ base: 5, md: 10 }}>
            <Heading
              lineHeight={1.1}
              fontWeight={600}
              fontSize={{ base: '3xl', sm: '4xl', lg: '6xl' }}>
              <Text
                as={'span'}
                position={'relative'}
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
                Sobre Mim
              </Text>
              <br />
              <Text as={'span'} color={'red.400'}>
                Desenvolvedor Full Stack
              </Text>
            </Heading>
            <Text color={'gray.500'}>
                    Adoro Programar desde a adolêscencia, estudei Sistemas de Informação na UFMS, Fiz estágios e já desenvolvi diversos projetos Freelancers. Meu foco atual é nos Frameworks
                    do Javascript como o React e React Native para o Front-End e Node, Express para o Back-End.
                </Text>
                <Text>Curiosidade: Esse site foi Desenvolvido com <b>Next.Js</b> e <b>React.Js</b></Text>
            <Heading>Atuo nas seguintes áreas: </Heading>
            <Feature
              icon={
                <Icon as={IoLaptopOutline} color={'yellow.500'} w={5} h={5} />
              }
              iconBg={useColorModeValue('yellow.100', 'yellow.900')}
              text={'Desenvolvimento Web'}
            />
            <Feature
              icon={<Icon as={IoPhonePortraitOutline} color={'green.500'} w={5} h={5} />}
              iconBg={useColorModeValue('green.100', 'green.900')}
              text={'Desenvolvimento Mobile'}
            />
            <Feature
              icon={
                <Icon as={IoServerOutline} color={'red.500'} w={5} h={5} />
              }
              iconBg={useColorModeValue('red.100', 'red.900')}
              text={'Desenvolvimento de APIs'}
            />
          </Stack>
          <Flex
            flex={1}
            >
            
              <Image
                alt={'Hero Image'}
                fit={'cover'}
                align={'center'}
                w={'100%'}
                h={'100%'}
                src={
                  './jan-vlacuha-Rns_A8bJ_dQ-unsplash.jpg'
                }
              />
          </Flex>
        </Stack>
      </Container>
    );
  }