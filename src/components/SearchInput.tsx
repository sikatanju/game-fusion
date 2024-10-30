import { Input, InputGroup, InputLeftElement } from '@chakra-ui/react';

import { BsSearch } from 'react-icons/bs';

const SearchInput = () => {
    return (
        <InputGroup>
            <InputLeftElement children={<BsSearch/>} />    
            <Input borderRadius='20px' placeholder='Search game' variant='filled' />
        </InputGroup>
  )
}

export default SearchInput;