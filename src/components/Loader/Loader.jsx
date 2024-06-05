import { Hourglass } from 'react-loader-spinner'
import css from './Loader.module.css'

export default function Loader() {
    return (
        <div className={css.wrapper}>
            <Hourglass
                visible={true}
                height="80"
                width="80"
                ariaLabel="hourglass-loading"
                wrapperStyle={{
                    display: 'inline-block',
                    textAlign: 'center'
                }}
                colors={['#190530', '#a06cd9']}
            />
        </div>
    );
}