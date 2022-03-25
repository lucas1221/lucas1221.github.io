import { ReactNode } from 'react';
import {
  Stack,
  Container,
  Box,
  Flex,
  Text,
  Heading,
  SimpleGrid, Icon,
} from '@chakra-ui/react';
import {FaReact, FaAndroid, FaApple, FaNodeJs, FaPython, FaHtml5, FaCss3Alt, FaJava, FaGit, FaGithub, } from 'react-icons/fa';

export default function Hero3() {
  return (
    <Box bg={'gray.800'} position={'relative'}>
      <Flex
        flex={1}
        zIndex={0}
        display={{ base: 'none', lg: 'flex' }}
        backgroundImage="./andras-vas-Bd7gNnWJBkU-unsplash.jpg"
        backgroundSize={'cover'}
        backgroundPosition="center"
        backgroundRepeat="no-repeat"
        position={'absolute'}
        width={'50%'}
        insetY={0}
        right={0}>
        <Flex
          bgGradient={'linear(to-r, gray.800 10%, transparent)'}
          w={'full'}
          h={'full'}
        />
      </Flex>
      <Container maxW={'7xl'} zIndex={10} position={'relative'}>
        <Stack direction={{ base: 'column', lg: 'row' }}>
          <Stack
            flex={1}
            color={'gray.400'}
            justify={{ lg: 'center' }}
            py={{ base: 4, md: 20, xl: 60 }}>
            <Box mb={{ base: 8, md: 20 }}>
              <Heading
                color={'white'}
                mb={5}
                fontSize={{ base: '3xl', md: '5xl' }}>
                Habilidades e Conhecimentos
              </Heading>
                <Icon as={FaReact} w={10} h={10}/>
                <Icon as={FaAndroid} w={10} h={10}/>
                <Icon as={FaApple} w={10} h={10}/>
                <Icon as={FaNodeJs} w={10} h={10}/>
                <Icon as={FaPython} w={10} h={10}/>
                <Icon as={FaHtml5} w={10} h={10}/>
                <Icon as={FaCss3Alt} w={10} h={10}/>
                <Icon as={FaJava} w={10} h={10}/>
                <Icon as={FaGit} w={10} h={10}/>
                <Icon as={FaGithub} w={10} h={10}/>

              <Text fontSize={'xl'} color={'gray.400'} marginTop={10}>
                Desenvolvedor de Software especializado nos mais modernos Frameworks disponíveis no mercado
              </Text>
            </Box>

            <SimpleGrid columns={{ base: 1, md: 2 }} spacing={10}>
              {stats.map((stat) => (
                <Box key={stat.title}>
                  <Text
                    fontFamily={'heading'}
                    fontSize={'3xl'}
                    color={'white'}
                    mb={3}>
                    {stat.title}
                  </Text>
                  <Text fontSize={'xl'} color={'gray.400'}>
                    {stat.content}
                  </Text>
                </Box>
              ))}
            </SimpleGrid>
          </Stack>
          <Flex flex={1} />
        </Stack>
      </Container>
    </Box>
  );
}

const StatsText = ({ children }: { children: ReactNode }) => (
  <Text as={'span'} fontWeight={700} color={'white'}>
    {children}
  </Text>
);

const stats = [
  {
    
    title: 'React (Web e Mobile)',
    content: (
      <>
        <StatsText>React.js, React Native, Next.Js, Hooks, Context API, Axios</StatsText> para o Desenvolvimento de Websites e aplicativos para Android e iOS
      </>
    ),
    
  },
  {
    title: 'Back-End',
    content: (
      <>
        <StatsText>Node.Js, Express.Js, Python, MySQL, PostgreSQL, MariaDB, SequelizeORM</StatsText> para criar APIs velozes e modernas
      </>
    ),
  },
  {
    title: 'Java',
    content: (
      <>
        <StatsText>Spring, Hibernate</StatsText> para impulsionar diversos tipos de aplicativos Web, Mobile e Desktop
      </>
    ),
  },
  {
    title: 'Suporte Técnico',
    content: (
      <>
        <StatsText>GSuite, Office, Hardware, Photoshop</StatsText> diversas ferramentas para dar Suporte Técnico aos usuários, além de UI/UX Design
      </>
    ),
  },

  
];