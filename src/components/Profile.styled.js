import styled from '@emotion/styled'

export const Profiled = styled.div`
background-color: #fff;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding-top: 20px;
    padding-left: 20px;
    padding-right: 20px;
    `

export const Avatar = styled.img`
    border: 1px solid gray;
    border-radius: 50%;
    width: 30%;
    `

export const Name = styled.p`
    text-align: center;
    font-weight: bold;
    margin-top: 20px;    
`
export const Taglocation = styled.p`
text-align: center;
    color: gray;
    margin-top: 14px;
`

export const Stats = styled.ul`
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #F5F5F5;
    padding-left: 0px;
`
export const Statsitem = styled.li`
    display: flex;
    width: 100%;
    flex-direction: column;
    padding: 16px;
    justify-content: center;
`

export const Label = styled.span`
text-align: center;
`

export const Quantity = styled.span`
font-weight: bold;
    text-align: center;
    line-height: 1.5;
    font-size: 16px;
`