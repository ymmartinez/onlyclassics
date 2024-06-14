import React from 'react';
import { Card } from 'primereact/card';
import { Button } from 'primereact/button';
import { useNavigate } from 'react-router-dom';
import './index.css'; 

const Terms = () => {
    const navigate = useNavigate();

    return (
        <div className="app-container">
            <div className="content-wrapper">
                <div className="header">
                    <Button 
                        onClick={() => navigate('/')} 
                        icon="pi pi-arrow-left" 
                        className="p-button-text back-button"
                    />
                    <h2 className="title">Términos y condiciones de uso del sitio</h2>
                </div>
                    <Card className="card border-round-xl">
                        <div className="terms-container">
                            <p>Versión vigente: 30 de Mayo, 2024.</p>
                            <h3>1-Resumen de términos y condiciones</h3>
                            <p><b>Todo clasicos y Antiguedades</b> ofrece servicios de comercio electrónico y pagos digitales.</p>
                            <p>Para poder operar en la plataforma todas las Personas Usuarias deberán aceptar los Términos y Condiciones,
                            los anexos y la Declaración de Privacidad.
                            Podrán operar dentro de Todo Clasicos y Antiguedades quienes tengan capacidad legal y menores de edad debidamente autorizados.
                            Cada Persona Usuaria es responsable de los datos personales que brinda al momento de registrarse y se obliga a
                            mantenerlos actualizados. Además, es el único responsable del uso y resguardo de su contraseña.</p>

                        <h3>2-Todo Clasicos y Antiguedades</h3>
                        <p>Mercado Libre es una compañía de tecnología que ofrece servicios vinculados principalmente al comercio electrónico y a los pagos digitales. 
                        Los servicios que ofrece Todo Clasicos y Antiguedades en los sitios www.Todoclasicosyantiguedades.com y sus aplicaciones móviles
                        (de ahora en más: “Sitio”) están diseñados para formar un ecosistema que permita a las personas vender, comprar, pagar,
                        enviar productos y realizar otras actividades comerciales con tecnología aplicada.</p>

                        <h3>3-Modo (Plataforma de pago)</h3>
                        <p>Plataforma para realizar pagos y cobros dentro y fuera de Todo clasicos y antiguedades</p>

                        <h3>4-Envíos</h3>
                        <p>Herramienta para enviar y recibir compras realizadas en Todo Clasicos y Antiguedades.</p>

                        <h3>5-Terminos y condiciones del sitio</h3>
                        <p>Estos términos y condiciones y los anexos que explican los servicios de todo clasicos y antiguedades
                        (de ahora en más: “Términos y Condiciones”) regulan la relación entre Todo clasicos y antiguedades y las  personas 
                        que usan sus servicios (“Personas Usuarias”). 
                        Las Personas Usuarias aceptan estos Términos y Condiciones desde el momento en que se registran en el Sitio y usan Todo clasicos y antiguedades.
                        Cuando debamos hacer cambios importantes en nuestros servicios, publicaremos las modificaciones con 10 días corridos
                        de anticipación para que las Personas Usuarias puedan revisarlas y seguir usando Todo clasicos y antiguedades.
                        El plazo será de 2 días hábiles en caso de que tengamos que actualizar las tarifas de nuestros servicios. En ningún caso afectarán
                        las operaciones que ya hayan finalizado.
                        Las Personas Usuarias que no tengan obligaciones pendientes con Todo Clasicos y Antiguedades o con otras Personas Usuarias,
                        podrán finalizar la relación con Todo Clasicos y antiguedades cancelando su cuenta. </p>

                        <h3>6-Capacidad</h3>
                        <p>Podrán usar nuestros servicios las personas mayores de edad que tengan capacidad legal para contratar.
                        Los menores de edad, a partir de los 13 años, sólo podrán utilizar su cuenta con autorización del representante
                        legal, quien responderá por todas las acciones y obligaciones que se deriven de la utilización de esa cuenta y quien
                        deberá velar por el uso responsable y adecuado de ella en atención a la madurez del menor de edad que autorice.

                        Quien use Todo clasicos y antiguedades en representación de una empresa deberá tener capacidad para contratar a nombre de ella. Además,
                        para poder usar la cuenta, la Persona Usuaria debe encontrarse activa. </p>

                        <h3>7-Registro y Cuenta</h3>
                        <p>Quien quiera usar nuestro servicio, deberá completar el formulario de registro con los datos que le sean requeridos.
                        Al completarlo, se compromete a hacerlo de manera exacta, precisa y verdadera y a mantener sus datos siempre actualizados. 
                        La Persona Usuaria será la única responsable de la certeza de sus datos de registro. Sin perjuicio de la información brindada 
                        en el formulario, podremos solicitar y/o consultar información adicional para corroborar la identidad de la Persona Usuaria. 
                        La cuenta es personal, única e intransferible, es decir que bajo ningún concepto se podrá vender o ceder a otra persona.
                        Se accede a ella con la clave personal de seguridad que haya elegido y que deberá mantener bajo estricta confidencialidad.
                        La Persona Usuaria podrá crear Cuentas Colaboradoras y definir sus permisos de acceso. En cualquier caso, la Persona Usuaria
                        será la única responsable por las operaciones que se realicen en su cuenta. En caso de detectar un uso no autorizado de su cuenta,
                        deberá notificar de forma inmediata y fehaciente a Todo clasicos y antiguedades. 
                        Podremos rechazar una solicitud de registro o bien cancelar un registro ya aceptado, sin que esto genere derecho a un resarcimiento.
                        No podrán registrarse nuevamente en el Sitio las Personas Usuarias que hayan sido inhabilitadas previamente. Tampoco podrán registrarse
                        quienes estén incluidos o relacionados a personas incluidas en listas nacionales o internacionales de sanciones. Conocé más. 
                        Además, en caso de detectar el uso de más de una cuenta, podremos aplicar retenciones, débitos y/o cualquier otra medida
                        si consideramos que ese accionar puede perjudicar al resto de las personas que usan el Sitio o a Todo clasicos y antiguedades,
                        más allá de las sanciones que pudieran corresponder. </p>

                        <h3>8-Privacidad de Datos</h3>
                        <p>En Todo clasicos y antiguedades hacemos un uso responsable de la información personal,
                        protegiendo la privacidad de las Personas Usuarias que nos confiaron sus datos y tomando
                        las medidas necesarias para garantizar la seguridad en nuestro Ecosistema Todo clascicos y antiguedades.
                        Conocé más sobre nuestra Declaración de Privacidad</p>

                        <h3>9-Sanciones</h3>
                        <p>En caso que la Persona Usuaria incumpliera una ley o los Términos y Condiciones,
                        podremos advertir, suspender, restringir o inhabilitar temporal o definitivamente su cuenta,
                        sin perjuicio de otras sanciones que se establezcan en las reglas de uso particulares de los servicios
                        de Todo clasicos y antiguedades. </p>

                        <h3>10-Responsabilidad</h3>
                        <p>Todo clasicos y antiguedades será responsable por cualquier defecto en la prestación de su servicio,
                        en la medida en que le sea imputable y con el alcance previsto en las leyes vigentes. </p>

                        <h3>11-Tarifas</h3>
                        <p>Todo clasicos y antiguedades podrá cobrar por sus servicios y la Persona Usuaria se compromete a pagarlos a tiempo. 
                        Podremos modificar o eliminar las tarifas en cualquier momento con el debido preaviso establecido en la
                        cláusula 2 de estos Términos y Condiciones. De la misma manera, podremos modificar las tarifas temporalmente por
                        promociones en favor de las Personas Usuarias.
                        La Persona Usuaria autoriza a Todo clasicos y antiguedades a retener y/o debitar los fondos existentes y/o futuros 
                        de las cuentas bancarias que haya registrado en ella, para saldar las tarifas impagas o cualquier otra deuda que pudiera tener. 
                        Para conocer el detalle de las tarifas de cada servicio, las Personas Usuarias deberán consultar los términos y condiciones correspondientes. 
                        En todos los casos se emitirá la factura de conformidad con los datos fiscales que las personas tengan cargados en su cuenta. </p>

                        <h3>12-Propiedad Intelectual</h3>
                        <p>Todo clasicos y antiguedades y/o sus sociedades relacionadas son propietarias de todos los derechos de propiedad intelectual sobre sus sitios,
                        todo su contenido, servicios, productos, marcas, nombres comerciales, logos, diseños, imágenes, frases publicitarias,
                        derechos de autor, dominios, programas de computación, códigos, desarrollos, software, bases de datos, información, tecnología,
                        patentes y modelos de utilidad, diseños y modelos industriales, secretos comerciales, entre otros (“Propiedad Intelectual”) y se
                        encuentran protegidos por leyes nacionales e internacionales.
                        Aunque Todo clasicos y antiguedades otorga permiso para usar sus productos y servicios conforme a lo previsto en los Términos y Condiciones,
                        esto no implica una autorización para usar su  Propiedad Intelectual, excepto consentimiento previo y expreso de Todo clasicos y antiguedades y/o
                        sus sociedades vinculadas. En cualquier caso, los usuarios vendedores que usen dichos productos y servicios no podrán utilizar la Propiedad
                        Intelectual de Todo clasicos y antiguedades de una manera que cause confusión en el público y deberán llevar a cabo su actividad comercial bajo una marca o
                        nombre comercial propio y distintivo, que no resulte confundible con la marca Todo clasicos y antiguedades, siguiendo con los
                        lineamientos del Legal Brandbook.
                        Está prohibido usar nuestros productos o servicios para fines ilegales, realizar cualquier tipo de ingeniería inversa u obras derivadas,
                        utilizar herramientas de búsqueda o de extracción de datos y contenidos de nuestra plataforma para su reutilización y/o crear bases de datos
                        propias que incluyan en todo o en parte nuestro contenido sin nuestra expresa autorización. Está también prohibido el uso indebido,
                        sin autorización y/o contrario a la normativa vigente y/o que genere confusión o implique uso denigratorio y/o que le cause perjuicio, daños o
                        pérdidas a Todo clasicos y antiguedades y/o a sus sociedades relacionadas. La utilización de los productos y servicios de Todo clasicos y antiguedades tampoco implica la autorización 
                        para usar propiedad intelectual de terceros que pueda estar involucrada, cuyo uso quedará bajo exclusiva responsabilidad del usuario. 
                        En caso que una Persona Usuaria o cualquier publicación infrinja la Propiedad Intelectual de Todo clasicos y antiguedades o de terceros, Todo clasicos y antiguedades podrá
                        remover dicha publicación total o parcialmente, sancionar al usuario conforme a lo previsto en estos Términos y Condiciones y ejercer las acciones
                        extrajudiciales y/o judiciales correspondientes.</p>

                        <h3>13-Indemnidad</h3>
                        <p>La Persona Usuaria mantendrá indemne a Todo clasicos y antiguedades y sus sociedades relacionadas, así como a quienes la dirigen, suceden,
                        administran, representan y/o trabajan en ellas, por cualquier reclamo administrativo o judicial iniciado por otras Personas Usuarias,
                        terceros o por cualquier Organismo, relacionado con sus actividades.
                        En virtud de esa responsabilidad, podrán realizar compensaciones, retenciones u otras medidas necesarias para la reparación de pérdidas,
                        daños y perjuicios, cualquiera sea su naturaleza.</p>

                        <h3>14-Jurisdicción y Ley Aplicable</h3>
                        <p>Estos Términos y Condiciones se rigen por la ley argentina. Toda controversia derivada de su aplicación, interpretación, ejecución o validez será resuelta
                        por los tribunales nacionales ordinarios competentes, con asiento en la Ciudad de Buenos Aires, salvo disposición específica de normas de orden público,
                        como por ejemplo, legislación relativa al Consumidor. Para todos los efectos relacionados con estos Términos y Condiciones y con el uso del sitio,
                        Todo clasicos y antiguedades con CUIT ...  establece como domicilio ....</p>
                    </div>
                </Card>
            </div>
        </div>
    );
};

export default Terms;