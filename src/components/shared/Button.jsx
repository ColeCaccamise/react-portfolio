import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

function Button({ children, version, goTo, external }) {
    return (
        external ? <a href={`${goTo}`} className={`btn btn--${version}`}>
        {children}
        </a> 
        : <Link to={`${goTo}`} className={`btn btn--${version}`}>
            {children}
        </Link>
    )
}

Button.propTypes = {
    external: PropTypes.bool
}

Button.defaultProps = {
    external: false
}

export default Button
