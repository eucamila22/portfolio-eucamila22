import styled from 'styled-components'

export const ProjectsPageStyled = styled.section`
    width: 100%;
    max-width: 1040px;
    min-height: 94vh;

    display: flex;
    justify-content: center;
    align-items: center;

    background-color: #0f0f10;
    box-shadow: 0 0 100px 10px rgb(80 80 80 / 50%);
    border-bottom: 2px solid #808080;

    .container-cards {
        width: 90%;
        height: 700px;

        display: flex;
        flex-direction: column;
        align-items: center;

        overflow-y: scroll;
    }

    .container-cards::-webkit-scrollbar {
        width: 8px;
    }

    .container-cards::-webkit-scrollbar-track {
        background: transparent;
    }

    .container-cards::-webkit-scrollbar-thumb {
        border-radius: 20px;
        background: white;
    }

    @media (min-width: 768px) {
        .container-cards {
            width: 100%;
            height: 700px;

            display: flex;

            gap: 20px;
            flex-direction: row;
            flex-wrap: wrap;
            align-content: flex-start;
            justify-content: center;
        }
    }
`
