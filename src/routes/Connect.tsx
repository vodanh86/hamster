import { TonConnectButton } from '@tonconnect/ui-react';
import { useTonConnect } from '../hooks/useTonConnect';
import { useCounterContract } from '../hooks/useCounterContract';

export default function Connect() {
    const { connected } = useTonConnect();
    const { value, address, sendIncrement } = useCounterContract();

    return (
        <div className='Container'>
            <TonConnectButton />

            <div className='Card'>
                <b>Counter Address</b>
                <div className='Hint'>{address?.slice(0, 30) + '...'}</div>
            </div>

            <div className='Card'>
                <b>Counter Value</b>
                <div>{value ?? 'Loading...'}</div>
            </div>

            <a
                className={`Button ${connected ? 'Active' : 'Disabled'}`}
                onClick={() => {
                    sendIncrement();
                }}
            >
                Increment
            </a>
        </div>
    );
}