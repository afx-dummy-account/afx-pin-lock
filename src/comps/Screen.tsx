import React from 'react'
import styled from 'styled-components'

const StyledScreen = styled.h2`
    font-size: 3rem;
    border-radius: 1rem;
    border: 1px solid #666;
    padding: 1rem;
    width: calc(100% - 2rem - 2px);
    height: 3rem;
`

// TODO: centralize
export type digit = '0' | '1' | '2' | '3' | '4' | '5' | '6' | '7' | '8' | '9'

type Props = {
    digits: digit[] | null
}

export default ({ digits }: Props) => <StyledScreen>{digits?.reduce((acc, _) => acc + ' *', '')}</StyledScreen>
