import '../App.css';
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from 'react-redux';
import styled, { keyframes } from 'styled-components';
import { addAge, changeName, addCart, cleanCart, changeCount } from './../store.js';

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
    let cart = useSelector( (state) => state.cart )
    let user = useSelector( (state) => state.user )
    let dispatch = useDispatch()

    
    return (
        <div className={'container anim_fade_start ' + animEnd}>
            <div>
                <p style={{color:'#9DD84B' }}>{user.age}살 {user.name} 님</p>
                <Button onClick={()=>{ dispatch(addAge(100)) }}>나이 먹기</Button> <Button onClick={()=>{ dispatch(changeName()) }}>이름 바꾸기 (1회)</Button>
            </div>
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
                                <TableBody funiture={c} dispatch={dispatch}/>
                            )
                        })
                    }
                </tbody>
            </table>
            <Button onClick={()=>{
                dispatch(cleanCart())
            }}>clean cart</Button>
        </div>
    )
}

function TableBody({funiture, dispatch}){
    return (
        <tr style={{borderColor:'#ffffff'}}>
            <td>{funiture.id}</td>
            <td>{funiture.name}</td>
            <td>{funiture.count}</td>
            <td>{funiture.price*funiture.count}</td>
            <td><Button onClick={()=>{
                dispatch(changeCount(10))
            }}>+</Button></td>
        </tr>
    )
}

export default CartPage;