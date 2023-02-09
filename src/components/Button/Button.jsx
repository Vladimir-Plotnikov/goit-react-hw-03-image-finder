import { ButtonStyle } from "./Button.styled"
import PropTypes from 'prop-types'

export function Button({ onClick }) {
    return (
    <ButtonStyle type="button" onClick={onClick}>
        Load more
    </ButtonStyle>
    )
}

Button.protoTypes = {
    onClick: PropTypes.func.isRequired
}