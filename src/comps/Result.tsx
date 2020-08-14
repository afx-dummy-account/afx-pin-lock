import React from 'react'

type Props = {
    unlocked: Boolean
}

export default ({ unlocked }: Props) => <h1>{unlocked ? 'UNLOCKED' : 'LOCKED'}</h1>