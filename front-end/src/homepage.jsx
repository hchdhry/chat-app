import React from 'react';
import {
  FormControl,
  FormLabel,
  FormHelperText,
  Input, // Import the Input component from Chakra UI
} from '@chakra-ui/react';

const Homepage = () => {
  return (
    <>
      <h1>Homepage</h1>
      <FormControl>
        <FormLabel>Username</FormLabel>
        <Input type="text" placeholder="Username" /> {/* Use Input component */}
        <FormHelperText>We'll never share your email.</FormHelperText>
      </FormControl>
      <FormControl>
        <FormLabel>Password</FormLabel>
        <Input type="password" placeholder="Password" /> {/* Use Input component */}
      </FormControl>
    </>
  );
}

export default Homepage;
