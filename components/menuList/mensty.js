import styled from "styled-components";

export  const Menus = styled.div`
    width: 20vw;
    border-right: 1px solid rgba(0,0,0,0.2);
    margin-top: 50px;
label{
    margin-left: 40px;
    font-weight: bold;
    margin-bottom: 50px;
}
.list ul{
    width: 100%;
    list-style: none;
    font-size: small;
}
.list ul li{
    margin: 10px 0px;
    padding: 10px 0px;
}
.list ul li:hover{
    border-right: 2px solid green;
    cursor: pointer;
    color: green;
    text-decoration: underline;
}
@media (max-width : 720px) {
    width: 50vw;
    margin-left: ${props => props.active ? "0px" : "-50vw"};
}
`
export const Icons = styled.div`
    position: fixed;
    bottom: 20px;
    left: 20px;

    &:hover{
        cursor: pointer;
    }
`