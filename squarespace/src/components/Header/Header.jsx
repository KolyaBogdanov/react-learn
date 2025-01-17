import './Header.css'
import HeaderLeft from './HeaderLeft'
import HeaderCenter from './HeaderCenter'
import HeaderRight from './HeaderRight'
import React from 'react'

export default function Header () {
    return (
        <div className="header">
            <HeaderLeft />
            <HeaderCenter />
            <HeaderRight />
    </div>
    )   
}