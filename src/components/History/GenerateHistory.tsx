import React from 'react'
import { Navigation } from '../Navigation/Navigation'
import { GENERATE_DATA } from '../constants';
import { QRCodeSVG } from 'qrcode.react';
import './History.scss'

export const GenerateHistory: React.FC = () => {
    const data = JSON.parse(localStorage.getItem(GENERATE_DATA) || '[]');

    return (
        <div className='qr-scanner__connainer'>
            <h3 className='qr-scanner__title'>Generate History </h3>
            <Navigation />
                {data.map((text: string, index: number) => (
                    <div className='qr-scanned__container' key={index}>
                        <p className='scanned-element'>{text}</p>
                        <QRCodeSVG value={text} size={100} />
                    </div>
                ))}
        </div>
    )
}
