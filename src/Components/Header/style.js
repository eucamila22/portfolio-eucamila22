import styled from 'styled-components'

export const HeaderComponentStyled = styled.header`
    background-color: #0f0f10;
    border-bottom: 3px solid #808080;

    > div {
        width: 100%;
        max-width: 1040px;
        height: 80px;

        background-color: #0f0f10;
        border-bottom: 3px solid #808080;
        position: fixed;
        top: 0;
        z-index: 1001;

        display: flex;
        align-items: center;
        justify-content: space-between;

        padding: 0 10px;

        p {
            color: white;
        }

        .ul-desk {
            display: none;
            gap: 10px;
        }

        a {
            cursor: pointer;
            color: white;
        }
    }

    @media (min-width: 768px) {
        div {
            .ul-desk {
                display: flex;
                gap: 50px;
            }
        }
    }
`
