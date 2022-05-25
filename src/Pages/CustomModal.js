
import React, { useState } from 'react';

import Modal from '../Pages/Modal';

const CustomModal = () => {
 
    const [
        show,
        setShow
    ] = useState(false);
    return (
        <React.Fragment>
            <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center',  }}>
                <button onClick={() => setShow(true)}>Open Modal</button>
            </div>
            <Modal show={show} onClose={() => setShow(false)}>
                <div className="content">
                    <img src="https://cdn.pixabay.com/photo/2015/01/09/11/11/office-594132__340.jpg" alt="Developer" />
                    <div className="text">
                        <h2>John Doe</h2>
                        <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe aliquid placeat omnis
                            adipisci dolores quae amet mollitia sint, temporibus eum magnam facilis odio ex incidunt?
                            Deleniti quam et rem obcaecati. Laborum atque odit expedita nulla.
                        </p>
                        <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita labore laborum, assumenda
                            dolorum provident quod itaque earum, officia in placeat dignissimos nostrum? Totam corrupti
                            nihil repudiandae ducimus atque quod eos!
                        </p>
                    </div>
                </div>
            </Modal>
        </React.Fragment>
    );
}

export default CustomModal
