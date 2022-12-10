import './overLay.css'
import { Fragment } from 'react';
import ReactDOM from 'react-dom';


const Backdrop = (props) => {
        return <div className="backdrop" />;
};

const ModalOverlay = (props) => {
        return (
                <div className="modal">
                        <div className="content">
                                <h1>Sorry! This application does not support mobile screen.</h1>
                                <p>Please revisit the site with a tab/laptop/desktop size screen.</p>
                        </div>
                </div>
        );
};

const portalElement = document.getElementById('overlay');

const OverLay = (props) => {
        return (
                <Fragment>
                        {ReactDOM.createPortal(<Backdrop />, portalElement)}
                        {ReactDOM.createPortal( <ModalOverlay/>, portalElement )}
                </Fragment>
        )
}

export default OverLay
