import React, { useState } from 'react';
import { Card } from 'primereact/card';


let User = () => {

    return(

        <div className="h-screen flex justify-content-center align-content-center align-items-center">
            <Card title="Mi usuario" className="p-card-title" style={{
                textAlign: 'center',
                backgroundColor: 'rgba(255, 255, 255, 0.9)',
                padding: '20px',
                borderRadius: '10px',
                boxShadow: '0 4px 8px 0 rgba(0,0,0,0.2)'
            }}>

            </Card>
        </div>
    )}


export default User;