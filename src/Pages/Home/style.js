import styled from 'styled-components'

export const HomePageStyled = styled.section`
    width: 100%;
    max-width: 1040px;
    min-height: 95vh;

    background-image: url('https://2.bp.blogspot.com/-swiAGzQt8gs/W61kGDfV0CI/AAAAAAAAQVM/ZyZmgQVHIFchb0UHsMTprK35kgpSOiXwQCLcBGAs/w0/trilho-trem.jpg');
    background-repeat: no-repeat;
    background-position: center;
    background-color: #0f0f10;
    border-bottom: 3px solid #808080;
    object-fit: cover;

    position: relative;
    z-index: 2;

    display: flex;
    justify-content: center;

    .container-about-me {
        width: 100%;
        height: 100%;
        background-color: rgba(0, 0, 0, 0.5);

        position: absolute;
        z-index: 1;

        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;

        color: white;

        p {
            font-size: 20px;
            font-weight: 400;
            font-family: 'Raleway', sans-serif;
            margin-left: 20px;
            margin-bottom: 10px;
        }

        h1 {
            font-size: 30px;
            font-weight: 800;
            font-family: 'Aboreto', cursive;
            margin-left: 20px;
            margin-bottom: 10px;
        }
    }

    @media (min-width: 768px) {
        .container-about-me {
            p {
                font-size: 30px;
                margin-left: 0;
            }

            h1 {
                font-size: 50px;
                font-weight: 800;
                margin-left: 0;
            }
        }
    }
`
