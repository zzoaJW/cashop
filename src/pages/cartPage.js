import '../App.css';
import { useEffect, useState } from "react";
import { useSelector } from 'react-redux';
import styled, { keyframes } from 'styled-components';

let Button = styled.button`
    background-color : white
`

function CartPage(){

    // 화면전환 애니메이션
    let [animEnd, setAnimEnd] = useState('')
    useEffect(()=>{
        setAnimEnd('anim_fade_end')
    }, [])

    // store
    let cart = useSelector((state)=>{ return state.cart })


    return (
        <div className={'container anim_fade_start ' + animEnd}>
            <table class="table">
                <thead>
                    <tr>  {/* tr : 행 1개 생성*/}
                        <th scope="col">#</th>  {/* th, td : 행 1개 생성*/}
                        <th scope="col">상품명</th>
                        <th scope="col">수량</th>
                        <th scope="col">KRW</th>
                        <th/>
                    </tr>
                </thead>
                <tbody>
                    {
                        cart.map(function(c, i){
                            return (
                                <TableBody funiture={c}/>
                            )
                        })
                    }
                </tbody>
            </table>
        </div>
    )
}

function TableBody({funiture}){
    return (
        <tr style={{borderColor:'#ffffff'}}>
            <td>{funiture.id}</td>
            <td>{funiture.name}</td>
            <td>{funiture.count}</td>
            <td>{funiture.price*funiture.count}</td>
            <td><Button>+</Button></td>
        </tr>
    )
}

export default CartPage;