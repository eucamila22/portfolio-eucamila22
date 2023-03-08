import styled from 'styled-components'

export const ContactPageStyled = styled.section`
    width: 100%;
    max-width: 1040px;
    min-height: 94vh;

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    background-color: #0f0f10;
    box-shadow: 0 0 100px 10px rgb(80 80 80 / 50%);
    border-bottom: 2px solid #808080;

    .social-contact {
        width: 90%;
        max-width: 600px;
        height: 400px;

        background-color: #8f5543;
        border-radius: 10px;

        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        gap: 10px;

        color: white;
        font-size: 1rem;
        box-shadow: 0 0 100px 10px rgb(80 80 80 / 100%);


        .icon {
            font-size: 2rem;
        }

        a, p {
            color: white;
            font-size: 1.25rem;
            margin: 10px 0 5px 0;
            text-decoration: none;

            :hover {
                color: black;
            }
        }
    }
`
