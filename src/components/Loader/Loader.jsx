import { Hourglass } from 'react-loader-spinner';

const Loader = ({ isLoading }) => (
    isLoading ? (
        <Hourglass
            height={40}
            width={40}
            ariaLabel='hourglass-loaging'
            color={['#306cce', '#72a1ed']}
        />
    ) : null
);

export default Loader;