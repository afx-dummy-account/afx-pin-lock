import React from 'react'

type Props = {
    unlocked: Boolean
}

export default ({ unlocked }: Props) => {
    return <h1>{unlocked ? 'Unlocked' : 'Locked'}</h1>
}