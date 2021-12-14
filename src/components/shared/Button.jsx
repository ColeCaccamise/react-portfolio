import PropTypes from 'prop-types';

function Button({ children, version, goTo }) {
    return (
        <a href={`${goTo}`} className={`btn btn--${version}`}>
            {children}
        </a>
    )
}

Button.propTypes = {
    children: PropTypes.string,
}

export default Button
