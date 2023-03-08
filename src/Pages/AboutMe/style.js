import styled from 'styled-components'

export const AboutMePageStyled = styled.section`
    width: 100%;
    max-width: 1040px;
    min-height: 94vh;

    background-color: #0f0f10;
    box-shadow: 0 0 100px 10px rgb(80 80 80 / 50%);
    border-bottom: 2px solid #808080;

    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;

    .about-me {
        width: 80%;

        color: white;

        margin-top: 80px;

        p {
            padding: 15px;
            line-height: 30px;
            font-weight: 600;

            a {
                list-style: none;
                color: #007fff;

                :hover {
                    color: #b0e0e6;
                }
            }
        }
    }
`
