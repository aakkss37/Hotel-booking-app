import './overLay.css'
import { Fragment } from 'react';
import ReactDOM from 'react-dom';


const Backdrop = () => {
        return <div className="backdrop" />;
};

const ModalOverlay = () => {
        return (
                <div className="modal">
                        <div className="content">
                                <h2>Sorry! This application does not support mobile screen.</h2>
                                <p>Please revisit the site with a tab/laptop/desktop size screen.</p>
                        </div>
                </div>
        );
};

const portalElement = document.getElementById('overlay');

const OverLay = () => {
        return (
                <Fragment>
                        {ReactDOM.createPortal(<Backdrop />, portalElement)}
                        {ReactDOM.createPortal( <ModalOverlay/>, portalElement )}
                </Fragment>
        )
}

export default OverLay
