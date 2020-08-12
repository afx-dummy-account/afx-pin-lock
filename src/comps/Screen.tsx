import React from 'react'
import styled from 'styled-components'

const StyledScreen = styled.h2`
    font-size: 30px;
`

type Props = {
    digits: Number[] | null
}

export default ({ digits }: Props) => <StyledScreen>{digits?.reduce((acc, _) => acc + ' *', '')}</StyledScreen>
