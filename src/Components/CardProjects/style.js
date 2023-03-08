import styled from 'styled-components'

export const CardProjectsStyled = styled.div`
    .info {
        display: none;
    }

    .project-card {
        width: 300px;
        min-height: 200px;
        border-radius: 8px;
        box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
        display: grid;
        margin: 20px 0;
        position: relative;

        img {
            width: 300px;
            height: 200px;
            object-fit: cover;
            border-radius: 8px;
            position: absolute;
            z-index: 0;
        }
    }
    .info-mobile {
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 10px;
        box-shadow: 4px 0 8px rgba(0, 0, 0, 0.2);
    }

    .info-mobile {
        width: 300px;
        position: absolute;
        gap: 4px;
        bottom: 0;
        left: 0;
        background-color: rgba(143, 85, 67);
        border-radius: 0 0 8px 8px;
        padding: 5px;
    }

    .info-mobile h4 {
        color: #fff;
    }

    .links {
        display: flex;
        gap: 30px;
        a {
            color: #fff;
            text-decoration: none;
        }
    }

    @media (min-width: 900px) {
        .info-mobile {
            display: none;
        }
        .project-card {
            width: 300px;
            height: 200px;
            border-radius: 8px;
            box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
            display: grid;
            place-items: center;
            position: relative;
            transition: all 1s;
            z-index: 1;
            overflow: hidden;

            img {
                width: 300px;
                height: 200px;
                object-fit: cover;
                border-radius: 8px;
                position: absolute;
                z-index: -2;
            }
        }

        .info {
            display: flex;
            flex-direction: column;
            align-items: center;
        }

        .info h4,
        .info p {
            color: #fff;
            font-weight: 700;
            opacity: 0;
            padding: 5px;
            transition: all 0.6s;
        }

        .info a {
            color: #fff;
            font-weight: 700;
            text-decoration: none;
        }

        .project-card:hover .info h4,
        .project-card:hover .info p {
            opacity: 1;
        }

        .info::before {
            content: '';
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background: #8f5543;
            transform: skew(30deg) translateX(100%);
            opacity: 0.3;
            z-index: -1;
            transition: all 0.6s ease;
        }

        .info::after {
            content: '';
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background: #8f5543;
            transform: skew(-30deg) translateX(100%);
            box-shadow: 0 0 20px rgba(0, 0, 0, 0.7);
            opacity: 0.3;
            z-index: -1;
            transition: all 0.6s ease;
        }

        .project-card:hover .info::before {
            transform: skew(30deg) translateX(50%);
        }

        .project-card:hover .info::after {
            transform: skew(-30deg) translateX(40%);
            opacity: 0.7;
        }

        .project-card::before {
            content: '';
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background: #8f5543;
            opacity: 0.3;
            transform: skew(30deg) translateX(85%);
            transition: all 0.6s ease;
            z-index: -1;
        }

        .project-card::after {
            content: '';
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background: #8f5543;
            opacity: 0.3;
            transform: skew(-30deg) translateX(85%);
            transition: all 0.6s ease;
            z-index: -1;
        }

        .project-card:hover:before {
            transform: skew(30deg) translateX(30%);
        }

        .profile-card:hover:after {
            transform: skew(-30deg) translateX(20%);
        }
    }
`
