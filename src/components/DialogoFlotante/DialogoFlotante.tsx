import './DialogoFlotante.css'

const DialogoFlotante = () => {
    return <div className="DialogoFlotante" id="divFecha">
        <div><div id="cerrarFecha">X</div></div>
        <div>
            <label>
                <p>Fecha</p>
                <input type="date" id="fecha_f" />
            </label>
        </div>
    </div>
}

export default DialogoFlotante