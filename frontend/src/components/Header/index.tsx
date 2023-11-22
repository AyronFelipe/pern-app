import { HamburgerIcon } from '@chakra-ui/icons';
import {
  Box,
  Button,
  Flex,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  Text,
} from '@chakra-ui/react';

function Header() {
  return (
    <Flex
      as="nav"
      align="center"
      justify="space-between"
      wrap="wrap"
      p={6}
      bg="#2575e8"
      color="white"
    >
      <Flex align="center" mr={5}>
        <Text fontSize="xl" fontWeight="bold">
          News Portal
        </Text>
      </Flex>

      <Box display={{ base: 'block', md: 'none' }}>
        <Menu>
          <MenuButton
            as={Button}
            variant="ghost"
            colorScheme="white"
            fontSize="2xl"
          >
            <HamburgerIcon />
          </MenuButton>
          <MenuList>
            <MenuItem color="black">Início</MenuItem>
            <MenuItem color="black">Notícias</MenuItem>
            <MenuItem color="black">Sobre</MenuItem>
          </MenuList>
        </Menu>
      </Box>

      <Box
        display={{ base: 'none', md: 'flex' }}
        width={{ base: 'full', md: 'auto' }}
        alignItems="center"
        flexGrow={1}
      >
        <Text
          mr={4}
          cursor="pointer"
          _hover={{ color: 'gray.300' }}
          fontWeight="bold"
        >
          Início
        </Text>
        <Text
          mr={4}
          cursor="pointer"
          _hover={{ color: 'gray.300' }}
          fontWeight="bold"
        >
          Notícias
        </Text>
        <Text
          mr={4}
          cursor="pointer"
          _hover={{ color: 'gray.300' }}
          fontWeight="bold"
        >
          Sobre
        </Text>
      </Box>
    </Flex>
  );
}

export default Header;
