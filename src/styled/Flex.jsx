import styled from 'styled-components'

const StFlex = styled.div`
    display: flex;
    box-sizing: border-box;
    flex-direction: ${({direction}) => direction || "row"};
    align-items: ${({align}) => align || "stretch"};
    justify-content: ${({justify}) => justify || "stretch"};
    width: ${({width}) => width || "auto"};
    height: ${({height}) => height || "auto"};
    flex-grow: ${({grow}) => grow || "0"};
    padding: ${({padding}) => padding || "0 0"};

`

export const Flex = props => <StFlex {...props}/>