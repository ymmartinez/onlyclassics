import React, {useRef, useState} from 'react';
import { Card } from 'primereact/card';
import { InputText } from 'primereact/inputtext';
import { Password } from 'primereact/password';
import { Button } from 'primereact/button';
import axios from 'axios';
import { Toast } from 'primereact/toast';

let Login = () => {
    type Severity = 'success' | 'info' | 'warn' | 'error';
    const [username, setUsername] = useState<string>('');
    const [password, setPassword] = useState<string>('');
    const toast = useRef<Toast>(null);

    const showToast = (severity: Severity, summary: string, detail: string) => {
        toast.current?.show({ severity: severity, summary: summary, detail: detail });
    }

    const login = () => {
        axios.post('http://localhost:3000/auth/login', {
            email: username,
            password: password
        }).then((response) => {
            console.log(response);
        }).catch((error) => {
            showToast('error', 'No se pudo iniciar sesion', 'Verifique los mensajes en la pantalla');
        });
    }

    return (
        <div className="h-screen flex justify-content-center align-content-center align-items-center"
            style={{
                backgroundImage: "url('background.jpeg')", backgroundSize: 'cover', backgroundPosition: 'center', backgroundRepeat: 'no-repeat'
            }}>
            <Toast ref={toast} />
            <Card title="Welcome!" className="p-card-title" style={{
                textAlign: 'center',
                backgroundColor: 'rgba(255, 255, 255, 0.9)',
                padding: '20px',
                borderRadius: '10px',
                boxShadow: '0 4px 8px 0 rgba(0,0,0,0.2)'
            }}>
                <div className="card flex flex-column md:flex-col gap-5">
                    <div className="p-inputgroup flex-1">
                        <span className="p-inputgroup-addon">
                            <i className="pi pi-user"></i>
                        </span>
                        <span className="p-float-label">
                            <InputText id="username" value={username} onChange={(e) => setUsername(e.target.value)} />
                            <label htmlFor="username">Username</label>
                        </span>
                    </div>

                    <div className="p-inputgroup flex-1">
                        <span className="p-inputgroup-addon" >
                            <i className="pi pi-key"></i>
                        </span>
                        <span className="p-float-label">
                            <Password
                                inputId="password"
                                onChange={(e: React.ChangeEvent<HTMLInputElement>) => setPassword(e.target.value)}
                                toggleMask
                                value={password} />
                            <label htmlFor="password">Password</label>
                        </span>
                    </div>
                    <Button type="button" label="Log in" onClick={login} />
                    <p style={{textDecoration: 'underline'}}>Forgot your ID and password</p>
                    <Button type="button" label="Register" icon="pi pi-users" severity="secondary" />
                </div>
            </Card>
        </div>

    )
}
export default Login;