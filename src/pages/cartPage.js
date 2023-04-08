import '../App.css';
import { useEffect, useState } from "react";
import { useSelector } from 'react-redux';
import styled, { keyframes } from 'styled-components';

function CartPage(){

    // 화면전환 애니메이션
    let [animEnd, setAnimEnd] = useState('')
    useEffect(()=>{
        setAnimEnd('anim_fade_end')
    }, [])

    let store = useSelector((state)=>{ return state })

    
    return (
        <div className={'container anim_fade_start ' + animEnd}>
            <table class="table">
                <thead>
                    <tr>  {/* tr : 행 1개 생성*/}
                        <th scope="col">#</th>  {/* th, td : 행 1개 생성*/}
                        <th scope="col">상품명</th>
                        <th scope="col">수량</th>
                        <th scope="col">KRW</th>
                    </tr>
                </thead>
                <tbody>
                    <tr style={{borderColor:'#ffffff'}}>
                        <td>1</td>
                        <td>Modern Wooden Chair</td>
                        <td>1</td>
                        <td>120000</td>
                    </tr>
                    <tr style={{borderColor:'#ffffff'}}>
                        <td>2</td>
                        <td>Cozy Home Sofa</td>
                        <td>1</td>
                        <td>110000</td>
                    </tr>
                    <tr style={{borderColor:'#ffffff'}}>
                        <td>3</td>
                        <td>Fancy Gold Chair</td>
                        <td>3</td>
                        <td>390000</td>
                    </tr>
                </tbody>
            </table>
        </div>
    )
}

export default CartPage;