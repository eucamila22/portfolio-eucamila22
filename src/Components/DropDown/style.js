import styled from 'styled-components'

export const DropDownStyled = styled.ul`
    .menu-mobile {
        display: flex;
    }
    .dropDown-icon {
        right: 10px;
        color: white;
        font-size: 30px;
        position: absolute;
        top: 25px;
    }

    .dropDown-content {
        width: 150px;
        height: 200px;

        background-color: white;

        position: relative;
        top: 118px;
        right: -12px;
        padding: 20px;

        display: flex;
        flex-direction: column;
        align-items: flex-end;
        
        border-radius: 10px 0 0 10px;
    }

    .dropDown-content a {
        color: black;
        line-height: 30px;
        font-size: 1.25rem;
        cursor: pointer;

    }

    @media (min-width: 768px) {
        display: none;
    }
`
