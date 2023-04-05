import '../App.css';
import { useEffect, useState } from "react";
import styled, { keyframes } from 'styled-components';

function CartPage(){
    return (
        <div>
            <table class="table">
                <thead>
                    <tr style={{borderColor:'#ffffff'}}>  {/* tr : 행 1개 생성*/}
                        <th scope="col">#</th>            {/* th, td : 행 1개 생성*/}
                        <th scope="col">상품명</th>
                        <th scope="col">수량</th>
                        <th scope="col">가격</th>
                    </tr>
                </thead>
                <tbody>
                    <tr style={{borderColor:'#ffffff'}}>
                        <td>1</td>
                        <td>Mark</td>
                        <td>Otto</td>
                        <td>@mdo</td>
                    </tr>
                    <tr style={{borderColor:'#ffffff'}}>
                        <td>1</td>
                        <td>Jacob</td>
                        <td>Thornton</td>
                        <td>@fat</td>
                    </tr>
                    <tr style={{borderColor:'#ffffff'}}>
                        <td>1</td>
                        <td>Jacob</td>
                        <td>Thornton</td>
                        <td>@fat</td>
                    </tr>
                </tbody>
            </table>
        </div>
    )
}

export default CartPage;