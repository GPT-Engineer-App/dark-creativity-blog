// Personal Blog Website with a Unique Dark Style
import { Box, Flex, Heading, Text, VStack, Image, Link, IconButton } from "@chakra-ui/react";
import { FaSun, FaMoon, FaTwitter, FaGithub, FaLinkedin } from "react-icons/fa";
import { useState } from "react";

const Index = () => {
  const [isDark, setIsDark] = useState(true);

  const toggleTheme = () => {
    setIsDark(!isDark);
  };

  const bgColor = { light: "gray.50", dark: "gray.800" };
  const color = { light: "black", dark: "white" };

  return (
    <Box bg={bgColor[isDark ? "dark" : "light"]} color={color[isDark ? "dark" : "light"]} minH="100vh">
      <Flex p={5} justifyContent="space-between" alignItems="center">
        <Heading size="lg">My Personal Blog</Heading>
        <IconButton icon={isDark ? <FaSun /> : <FaMoon />} isRound={true} size="lg" alignSelf="flex-start" onClick={toggleTheme} aria-label="Toggle Theme" />
      </Flex>
      <VStack spacing={8} p={5}>
        <Box maxW="lg" borderWidth="1px" borderRadius="lg" overflow="hidden" p={5}>
          <Heading size="md">Welcome to My World</Heading>
          <Text mt={4}>This is my personal space on the web where I share insights, stories, and thoughts. Dive in and explore my world!</Text>
        </Box>
        <Box maxW="lg" borderWidth="1px" borderRadius="lg" overflow="hidden" p={5}>
          <Heading size="md">Latest Posts</Heading>
          <Text mt={4}>Stay updated with the latest posts and happenings. I write about technology, life experiences, and much more.</Text>
        </Box>
        <Box maxW="lg" borderWidth="1px" borderRadius="lg" overflow="hidden" p={5}>
          <Heading size="md">About Me</Heading>
          <Flex align="center" mt={4}>
            <Image borderRadius="full" boxSize="100px" src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxwb3J0cmFpdCUyMG9mJTIwYSUyMHBlcnNvbnxlbnwwfHx8fDE3MTQ2NzAwNDd8MA&ixlib=rb-4.0.3&q=80&w=1080" alt="Profile image" />
            <Text ml={4}>I'm a passionate individual who loves to explore new technologies and share knowledge. Connect with me on social platforms.</Text>
          </Flex>
        </Box>
        <Flex justify="center" w="full">
          <Link href="https://twitter.com" isExternal>
            <IconButton icon={<FaTwitter />} isRound={true} m={1} aria-label="Twitter" />
          </Link>
          <Link href="https://github.com" isExternal>
            <IconButton icon={<FaGithub />} isRound={true} m={1} aria-label="GitHub" />
          </Link>
          <Link href="https://linkedin.com" isExternal>
            <IconButton icon={<FaLinkedin />} isRound={true} m={1} aria-label="LinkedIn" />
          </Link>
        </Flex>
      </VStack>
    </Box>
  );
};

export default Index;
