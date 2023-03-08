import styled from 'styled-components'

export const CardTechStyled = styled.div`
    background: #fff;
    border-radius: 12px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin: 20px 10px;
    text-align: center;
    width: 130px;
    height: 130px;
    box-shadow: 0 0 30px 10px rgba(255, 255, 255, 30%);

    img {
        width: 100px;
        height: 100px;
        padding: 10px;
    }

    span {
        font-size: 1.25rem;
        font-weight: 600;
    }

    :hover {
        box-shadow: 0 0 40px 10px rgba(120, 51, 30, 40%);
    }
`
