import React from 'react'
import { Navigation } from '../Navigation/Navigation'
import { SCAN_DATA } from '../constants';
import { QRCodeSVG } from 'qrcode.react';
import './History.scss'

export const ScannedHistory: React.FC = () => {
    const data = JSON.parse(localStorage.getItem(SCAN_DATA) || '[]');

    return (
        <div className='qr-scanner__connainer'>
            <h3 className='qr-scanner__title'>Scan History </h3>
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
