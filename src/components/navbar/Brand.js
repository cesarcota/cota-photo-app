
import React from 'react'
import styled from 'styled-components'

import logo from '../../assets/olympus-35dc2x-512.png'

const Brand = () => {
    return (
        <Image src={logo} alt="Fancy Logo" />
    )
}

export default Brand

const Image = styled.img`
    width: 5%;
    margin: auto 0;
`
