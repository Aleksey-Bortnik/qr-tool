import { Scanner } from '@yudiel/react-qr-scanner';
import { useState } from 'react';
import { Navigation } from '../Navigation/Navigation';
import { SCAN_DATA } from '../constants';
import './QrCodeScanner.scss'


console.log(SCAN_DATA);

interface ScanResult {
    rawValue: string;
}

export const QrCodeScanner = () => {
    const [scanned, setScanned] = useState<string | null>(null);
    const scanHandler = (result: ScanResult[]) => {
        setScanned(result[0].rawValue);

        const prevData = JSON.parse(localStorage.getItem(SCAN_DATA) || '[]');
        localStorage.setItem(SCAN_DATA, JSON.stringify([...prevData, result[0].rawValue]));
    }

    return (
        <div className='qr-scanner__connainer'>
            <h3 className='qr-scanner__title'>Scan your QR </h3>
                <Navigation />
            <div className='qr-scanner__sub-container'>
                <Scanner
                    onScan={scanHandler}
                    components={{
                        audio: true,
                        finder: true,
                    }}
                    styles={{
                        container: { width: 250 }
                    }}
                />
                <h5 className='qr-scanned'>{scanned}</h5>
            </div>
        </div>
    )
}
