import styled from 'styled-components';

// export const Link = (props)=>{
//     return <a className={props.className}>
//         {props.children}
//     </a>
// }
// let {className, children} = props

export const Link = ({className, children, ...resProps})=>(
    <a className={className} {...resProps}>
        {children}
    </a>
)
export const StyledLink= styled(Link)`
    color: palevioletred;
    font-weight: bold;
`