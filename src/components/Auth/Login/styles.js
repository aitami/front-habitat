import styled from 'styled-components';

export const StyledAuth = styled.div`
    padding-top: 80px;
    width: 100%;
    position: fixed;
    height: 100%;
    background: linear-gradient(130deg,#00799F 38%,#008679 80%,#35A37B 100%);
`;

export const StyledSection = styled.section`
    margin: 0 auto;
    width: 30%;
    text-align: center;

    .span_copyrights {
        color: white;
        font-size: 12px;
    }
`;

export const StyledLogoText = styled.span`
    font-size: 45px;
    color: white;
    letter-spacing: 3px;
    position: relative;
    top: -14px;
    left: 15px;
`;

export const StyledLog = styled.img`
    width: 50px;
`;

export const StyledLogo = styled.img`
    height: 50px;
`;

export const StyledInput = styled.input`
    width: 100%;
    font-size: 14px;
    height: 40px !important;
    border: none !important;
    background-color: #007986 !important;
    color: white;

    ::placeholder{
        color: white;
    }
`;

export const StyledForm = styled.form`
    width: 90%;
    margin: 20px auto;
    border-top: 1px inset;
    border-bottom: 1px inset;
    padding: 40px 0;

    input:focus {
        outline: none !important;
        box-shadow: 0 0 15px white;
    }

    .span_forgot {
        width: auto;
        color: white;
        text-align: left;
        display: inherit;
    }

    .button_sign-in{
        width: 100%;
        background: #D3E9E6;
        box-shadow: 0 4px 3px 0 rgba(0,0,0,0.2);
    }

    .button_other{
        background: #00CCB8;
    }

    .buttons_container{
        margin-top: 15px;
        padding-top: 15px;
        display: flex;
        justify-content: space-between;
        border-top: 1px inset;
    }
`;

export const StyledButton = styled.button`
    margin: 20px 0;
    box-shadow: 0 4px 3px 0 rgba(0,0,0,0.2);
    border-radius: 2px;
    border: none;
`;

