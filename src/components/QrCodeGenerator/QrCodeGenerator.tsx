import { QRCodeSVG } from 'qrcode.react';
import { useState } from 'react';
import { Navigation } from '../Navigation/Navigation';
import { GENERATE_DATA } from '../constants';
import './QrCodeGenerators.scss'

export const QrCodeGenerator = (): JSX.Element => {

    const [value, setValue] = useState<string>('');
    const [result, setResult] = useState<string>('');
    const onClickHandler = (): void => {
        setResult(value);

        const prevData = JSON.parse(localStorage.getItem(GENERATE_DATA) || '[]');
        localStorage.setItem(
            GENERATE_DATA,
            JSON.stringify([...prevData, value])
        );

    }


    const onChangeHandler = (e: React.ChangeEvent<HTMLInputElement>): void => {
        setValue(e.target.value);
        setResult('');
    }

    //! TODO - HIDE TITLE WHEN STARTERD TYPING IN INPUT FIELD !!


    return (
        <div className='qr-connainer'>

            <div className="welcoming-title">create and use your Qr Code:</div>
            <Navigation />
            <div className="qr-sub-container">
                {result !== '' && <QRCodeSVG value={value} />}
                <input className='qr-input' type='text' placeholder='type something up here....' value={value} onChange={onChangeHandler} />
                <button className='qr-button' type='button' onClick={onClickHandler}>Generate QR</button>
            </div>
        </div>
    )
}
