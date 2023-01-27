function DetailPage(){
    return (
        <div className="container">
            <div className="row">
                <div className="col-md-6">
                    <img src="https://image.ohou.se/i/bucketplace-v2-development/uploads/productions/164388564242609760.jpg?gif=1&w=960&h=960&c=c&webp=1" width="100%" />
                </div>
                <div className="col-md-6">
                    <h4 className="pt-5">상품명</h4>
                    <p>상품설명</p>
                    <p>120000원</p>
                    <button className="btn btn-danger">주문하기</button> 
                </div>
            </div>
        </div> 
    )
}

export default DetailPage;