import React, {useRef, useState} from 'react';
import { Card } from 'primereact/card';
import { InputText } from 'primereact/inputtext';
import { Password } from 'primereact/password';
import { Button } from 'primereact/button';
import axios from 'axios';
import { Toast } from 'primereact/toast';
import { useNavigate } from 'react-router-dom';

const Login = () => {
    type Severity = 'success' | 'info' | 'warn' | 'error';
    const [username, setUsername] = useState<string>('');
    const [password, setPassword] = useState<string>('');
    const toast = useRef<Toast>(null);
    const navigate = useNavigate();

    const showToast = (severity: Severity, summary: string, detail: string) => {
        toast.current?.show({ severity: severity, summary: summary, detail: detail });
    }

    const handleLogin = () => {
        axios.post('http://localhost:3000/auth/login', { 
        // axios: hace peticiones html
        // post recibe dos parametros el primero es la url a la que le hacemos la peticion
        // y el segundo es un objeto con lo que le queremos enviar
            email: username,
            password: password
        }).then((response) => { // then para cuando se termina de resolver algo (promesas)
            localStorage.setItem('access_token', response.data.access_token);
            navigate('/');
        }).catch((error) => { //catch para cuando falla
            showToast('error', 'No se pudo iniciar sesion', 'Verifique los mensajes en la pantalla');
        });
    }
    const handleRegister = () => {
        navigate('/register');
    }
    const header = (
        <>
            <div className='text-left'>
                <Button onClick={() =>navigate('/')} icon="pi pi-arrow-left" className="p-button-text " />
            </div>
        </>
    );

    const footer = (
        <>
            <div className='flex justify-content-between'>
                <Button type="button" label="Registrarse" onClick={handleRegister} icon="pi pi-users" style={{backgroundColor:'#67C6E3'}}className='border-round-xl'/>
                <Button type="button" label="Entrar" onClick={handleLogin} icon='pi pi-sign-in' style={{backgroundColor:'#279EFF'}} className='border-round-xl'/>
            </div>
            <p style={{textDecoration: 'underline'}}>Forgot your ID and password</p>
        </>
    );


    return (
        <div className=" h-screen flex justify-content-center align-content-center align-items-center"
            style={{
                backgroundImage: "url('background.jpeg')", backgroundSize: 'cover', backgroundPosition: 'center', backgroundRepeat: 'no-repeat'
            }}
        >
            <Toast ref={toast} />
            <Card
                header={header}
                title="Bienvenido!"
                footer={footer}
                className='text-center p-4 bg-white border-round-xl'
                >
                <div className="card flex flex-column md:flex-col gap-5">
                    <div className="p-inputgroup flex-1">
                        <span className="p-inputgroup-addon border-round-left-xl bg-white">
                            <i className="pi pi-user"></i>
                        </span>
                        <span className="p-float-label">
                            <InputText
                                id="username"
                                value={username}
                                onChange={(e) => setUsername(e.target.value)}
                                className='border-round-right-xl'
                                onKeyDown={(e) => {
                                    if (e.key === 'Enter') {
                                        e.preventDefault();
                                        (document.getElementById('password') as HTMLInputElement).focus();
                                    }
                                }}
                                />
                            <label htmlFor="username">Username</label>
                        </span>
                    </div>

                    <div className="p-inputgroup flex-1">
                        <span className="p-inputgroup-addon border-round-left-xl bg-white" >
                            <i className="pi pi-lock"></i>
                        </span>
                        <span className="p-float-label">
                            <Password
                                inputClassName='border-round-right-xl'
                                inputId="password"
                                onChange={(e: React.ChangeEvent<HTMLInputElement>) => setPassword(e.target.value)}
                                toggleMask
                                value={password}
                                onKeyDown={(e) => {
                                    if (e.key === 'Enter') {
                                        e.preventDefault();
                                        handleLogin();
                                    }
                                }}
                                />
                            <label htmlFor="password">Contraseña</label>
                        </span>
                    </div>
                </div>
            </Card>
        </div>
    )
}
export default Login;