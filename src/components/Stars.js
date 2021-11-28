import { FaStar } from "react-icons/fa";
import styled from "styled-components";

function Stars({ rating }) {
    const yellow = Array(rating).fill("#ffdf2b");

    const notYellow = Array(5 - rating).fill("#CDCDCD");
    const classes = yellow.concat(notYellow);

    return (
        <StarsContainer>
            <FaStar size="20" color={classes[0]} />
            <FaStar size="20" color={classes[1]} />
            <FaStar size="20" color={classes[2]} />
            <FaStar size="20" color={classes[3]} />
            <FaStar size="20" color={classes[4]} />
        </StarsContainer>
    );
}

const StarsContainer = styled.div``;

export default Stars;
