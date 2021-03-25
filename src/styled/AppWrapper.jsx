import styled from 'styled-components'

const StAppWrapper = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    min-height: 100vh;
    background-color: #F7FAFB;
    box-sizing: border-box;
`

export const AppWrapper = props => <StAppWrapper {...props} /> 