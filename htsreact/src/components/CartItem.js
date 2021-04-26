


export default function CartItem({product}) {





    const {id, title, imgName, price, total, count} = product;


    return (
        <div className="row my-1 text-capitalize text-center">
            <div className="col-10 mx-auto col-lg-2">
                <img
                    src={imgName}
                    style={{width: "5rem", heigth: "5rem"}}
                    className="img-fluid"
                    alt=""
                />
            </div>
            <div className="col-10 mx-auto col-lg-2 ">
                <span className="d-lg-none">product :</span> {title}
            </div>
            <div className="col-10 mx-auto col-lg-2 ">
                <strong>
                    <span className="d-lg-none">price :</span> ${price}
                </strong>
            </div>
            <div className="col-10 mx-auto col-lg-2 my-2 my-lg-0 ">
                <div className="d-flex justify-content-center">
                    <div>
                          <span
                              className="btn btn-black mx-1"
                              onClick={() => {//decrement
                              }}>
                              -
                          </span>
                        <span className="btn btn-black mx-1">{count}</span>
                        <span
                            className="btn btn-black mx-1"
                            onClick={() => {//increment
                            }}
                             >
                            +
                          </span>
                    </div>
                </div>
            </div>
            <div className="col-10 mx-auto col-lg-2 ">
                <div className=" cart-icon" onClick={() => {//usuwanie itemów
                }}
                >
                    <i className="fas fa-trash"/>
                </div>
            </div>
            <div className="col-10 mx-auto col-lg-2 ">
                <strong>item total : ${total} </strong>
            </div>
        </div>
    );
}