import styled from 'styled-components'

export const ModalCart = styled.div`
    height: 100vh;
    width: 30%;
    position: fixed;
    inset: 0 0 auto auto;
    box-shadow: -5px 0px 6px 0px #00000021;
    background: ${props => props.theme.colors.primary};
`

export const TitleCart = styled.h2`
    width: 60%;
    font-size: 1.7rem;
    font-weight: 700;
    line-height: 2rem;
    color: #fff;
    inset: 2rem auto auto 3rem;
    position: absolute;
`

export const ButtonClose = styled.div`
    height: 2rem;
    width: 2rem;
    margin-top: 1.5rem;
    background: #000;
    color: #fff;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
`

export const ButtonFinish = styled.button`
    width: 100%;
    height: 5rem;
    display: flex;
    align-items: center;
    justify-content: center;
    position: absolute;
    inset: auto 0 0 0;
    background: #000;
    color: #fff;
    font-size: 1.6rem;
    font-weight: 700;
    cursor: pointer;
`
