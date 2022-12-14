import Head from "next/head";
import Footer from '../components/Footer';
import FeaturedPosts from '../components/FeaturedPosts';
import Header from "../components/Header";
import Layout from "../components/Layout";
import {
  Flex,
  VStack,
  Text,
  Heading,
  Divider,
  Box,
  useColorModeValue,
  Link
} from "@chakra-ui/react";
import ProfileImage from "../components/ProfileImage";
import MyTopTracks from "../components/MyTopTracks";

export default function Home() {
  const imgBorder = useColorModeValue("gray.800","lightwhite");
  const navColor = useColorModeValue("rgba(255, 255, 255, 0.8)","rgba(26, 34, 44,.8)");

  return (
    <>
      <Head>
        <title>Home</title>
        <meta name="description" content="Welcome to my site.I'm Bimal Thapa Magar and I am ReactJS enthusiast, Electronics and Communication Engineer and a guitar player."/>
        <meta property="og:title" content="ReactJS Developer, Engineer and Knowledge Seeker"/>
        <meta property="og:description" content="Hi, I'm Bimal Thapa Magar and I am ReactJS enthusiast, Electronics and Communication Engineer and a guitar player."/>
      </Head>
      <Header/>
      <Flex mb="4rem">
        <VStack spacing="3rem">
          <Flex align="center" justify="space-between" width="100%">
              <Heading fontSize="4.5rem" zIndex="100" w="100%" textAlign="left" fontFamily="inherit">
                Hi!👋 I&rsquo;m <Text  position="relative" sx={{
                  ":after":{
                    content:'""',
                    position:"absolute",
                    height:"1rem",
                    width:"calc(100% + 10px)",
                    left:"-5%",
                    bottom:"10%",
                    background:"#ffc725",
                    zIndex:-1
                  },
                  display:"inline-block",
                }}>Bimal.</Text>
              </Heading>
               <ProfileImage/>
          </Flex>
          <Text fontSize="1.7rem" lineHeight="1.6" textAlign="justify" sx={{
            textJustify:"inter-word",
            hyphens:"auto"
          }}>
            My name is Bimal Thapa Magar.Currently,I’m based in Kathmandu,Nepal.
            I am an electronics and communication engineer,web developer and a ReactJS
            enthusiast.I can build scalable web applications and is always ready to
            work with whoever does invite me for collaboration.Don&rsquo;t forget to check 
            out the naivete blogs that I have written in my site <Link href="/blogs" color="blue.400">here</Link>.Besides that, I am enamored of 
            music:like to play guitar most of the time when I am not coding.
          </Text>
        </VStack>
      </Flex>
      {/******
        ****** WILL ADD THIS FEATUREdPOSTS FEATURE LATER
        *****<FeaturedPosts/>
        ******
        *******/
      }
      <MyTopTracks/>
      <Divider mt="1rem"/>
    </>
  )
}

