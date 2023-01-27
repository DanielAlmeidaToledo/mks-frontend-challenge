import styled from 'styled-components'

export const NavbarStyled = styled.nav`
    height: 16vh;
    color: #fff;
    display: flex;
    justify-content: space-between;
    padding: 0 5rem;
    background-color: ${props => props.theme.colors.primary};
`

export const Logo = styled.div`
    display: flex;
    align-items: center;

    h1 {
        font-size: 2.5rem;
        font-weight: 600;
    }

    span {
        font-size: 1.25rem;
        font-weight: 300;
        padding-left: 0.5rem;
    }
`

export const ButtonCart = styled.div`
    display: flex;
    align-items: center;
    margin: auto 0;
    padding: 1.2rem 0;
    background: #fff;
    height: 30%;
    border-radius: 0.5rem;

    .imgCart {
        margin: 0 0.3rem 0 1rem;
    }

    span {
        padding: 0 1rem 0 0.3rem;
        color: #000;
        font-weight: 700;
    }
`
