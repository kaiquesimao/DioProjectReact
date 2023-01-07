import React from "react";

import {ButtonContainer} from "./styles.js";

const Button = ({title, variant="primary", onClick}) => {
    return(
            <ButtonContainer variant={variant} onclick={onClick}>
                {title}
            </ButtonContainer>
    )
}
export {Button};
