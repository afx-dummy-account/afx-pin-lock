import React from 'react'
import styled from 'styled-components'

const StyledResult = styled.h1`
    font-size: 4rem;
    text-align: center;
`

type Props = {
    unlocked: Boolean
}

export default ({ unlocked }: Props) => <StyledResult>{unlocked ? 'UNLOCKED' : 'LOCKED'}</StyledResult>