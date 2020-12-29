import React from 'react'
import {useSelector} from 'react-redux'


export default function Message(){
    const isShow = useSelector((state) =>state.layout.showMessage);


    return (
      <React.Fragment>
          {isShow &&(
                <div className="container  d-flex justify-content-center mt-2">
                <div className="alert alert-success h-25 d-inline-block" role="alert">
                    Cadastro realizado com Sucesso !!!
                </div>
            </div>
          )}
      </React.Fragment>
    );

}