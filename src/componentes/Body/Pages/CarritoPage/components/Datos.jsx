import React, { useContext } from 'react'
import { IoAlertCircleOutline } from "react-icons/io5";
import { useNavigate } from 'react-router-dom';
import { GlobalContext } from '../../../../Context/Conntext';
import { useForm } from 'react-hook-form';

////////////////          Componentes Inputs      /////////////////////////////////////////////////
function Input_text({ Label, PlaceHolder, Type = "text", Name, Value, Hook, errors, MsjErrors }) {

    return (
        <div className="input-component-text">
            <label htmlFor={Name}>{Label}:</label>
            <input type={Type} id={Name} placeholder={PlaceHolder} defaultValue={Value ? Value : ''} readOnly={!!Value}
                {...Hook(Name, MsjErrors)} />
            {errors[Name] ?
                <div className="error">
                    <IoAlertCircleOutline />
                    {errors[Name] && <p>{errors[Name]?.message}</p>}
                </div> :
                <div className='disable'>
                    <p>Sin errores</p>
                </div>
            }

        </div>
    )
}
function Input_checkbox({ Label, Hook, errors, MsjErrors, watch }) {
    return (
        <div className="input-component-radio">
            <p>{Label}:</p>
            {errors.Entrega ? <div className="error-entrega">
                <IoAlertCircleOutline />
                <p>{errors.Entrega.message}</p>
            </div> : <></>}

            <div className="check">
                <input type='radio' id='Delivery' name='Entrega' defaultValue='Delivery' {...Hook('Entrega', MsjErrors)} />
                <label htmlFor='Delivery'>Delivery</label>
            </div>
            <div className="check">
                <input type='radio' id='No-Delivery' name='Entrega' defaultValue='Entrega en Tienda' {...Hook('Entrega')} />
                <label htmlFor='No-Delivery'>Recojo en Tienda</label>
            </div>
            {watch("Entrega") == "Delivery" &&
                <Input_text
                    Label="Dirección"
                    Name="Direccion"
                    PlaceHolder="Escribe la dirección o una referencia cercana"
                    Hook={Hook}
                    errors={errors}
                    MsjErrors={{
                        required: { value: true, message: "Por favor, ingresa tu dirección" }
                    }}
                />}
            {watch("Entrega") != "Delivery" &&
                <div className="Direccion">
                    <h5>Dirección de nuestra tienda</h5>
                    <p>Jr. PanDulce 2364 Lince </p>
                </div>}
        </div>
    )
}
function Input_Terminos_Condiciones({Hook, MsjErrors}) {
    return (
        <div className="input-component-checkbox">
            <input type="checkbox" id="Terminos" name="Terminos" defaultValue={true} {...Hook("Terminos",MsjErrors)} />
            <label htmlFor="Terminos">Acepto Términos de uso o privacidad</label>
        </div>
    )
}
///////////////////////////////////////////////////////////////////////////////////////////////////


function Datos({ total }) {

    const { register, handleSubmit, formState: { errors }, watch } = useForm()
    console.log("Erros", errors)



    const onSubmit = handleSubmit((data) => {
        console.log("la data", data)
    })


    return (
        <div className='datos'>
            <h2>Datos del Pedido</h2>
            <form action="">
                <div className="part1">
                    <Input_text
                        Label="Nombre"
                        Name="Nombre"
                        PlaceHolder="Escribe tu nombre completo"
                        Hook={register}
                        errors={errors}
                        MsjErrors={{
                            required: { value: true, message: "Por favor, ingresa tu nombre completo." },
                            minLength: { value: 5, message: "El nombre debe tener al menos 5 caracteres." }
                        }}
                    />
                    <Input_text Label="Correo"
                        Name="Correo"
                        PlaceHolder="Escribe tu correo electrónico"
                        Error="Ingrese su correo"
                        Type='email'
                        Hook={register}
                        errors={errors}
                        MsjErrors={{
                            required: { value: true, message: "Por favor, ingresa una dirección de correo válida." },
                            pattern: { value: /^[a-zA-Z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/, message: "Formato de correo no válido." }
                        }}
                    />
                    <Input_text Label="Número de WhatsApp"
                        Name="WhatsApp"
                        PlaceHolder="Escribe tu número de WhatsApp"
                        Type='number'
                        Hook={register}
                        errors={errors}
                        MsjErrors={{
                            required: { value: true, message: "Por favor, ingresa tu número de WhatsApp." },
                            maxLength: { value: 9, message: "El número de WhatsApp debe como máximo 9 números." },
                            pattern: { value: /^[0-9]{9}$/, message: "Por favor, ingresa un número de WhatsApp válido" }
                        }}
                    />
                </div>
                <div className="part2">
                    <Input_checkbox Label="Entrega"
                        Hook={register}
                        errors={errors}
                        watch={watch}
                        MsjErrors={{
                            required: { value: true, message: "Por favor,seleciona un método de entrega" }
                        }}
                    />
                </div>
                <div className="part3">
                    <Input_text Label="Comentarios adicionales"
                        Name="Comentario"
                        PlaceHolder="¿Hay algún detalle especial que debamos saber?"
                        Hook={register}
                        errors={errors} />
                    <Input_text Label="Método de pago"
                        Name="payment"
                        Value="Recibirás un enlace de pago por WhatsApp"
                        Hook={register}
                        errors={errors} />
                    <Input_Terminos_Condiciones Hook={register}
                        MsjErrors={{ required: { value: true, message: "Debes aceptar los términos y condiciones." } }}
                    />
                    {errors.Terminos && 
                    <div className="error-terminos">
                        <IoAlertCircleOutline />
                        <p>{errors.Terminos.message}</p>
                    </div>
                    }
                </div>
            </form>
            <div className="total">
                <p>Total</p>
                <p>S/. {total}</p>
            </div>
            <button onClick={() => onSubmit()}>
                Crear Pedido
            </button>
        </div>
    )
}

export default Datos
