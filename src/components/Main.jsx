
const Main = ({saludo, edad, datos}) => {
    
    const { nombre } =datos;
    
    return(
        <main>
            <p>{saludo}</p>
            <p>A nuestra tienda de cosas ricas ♥</p>
            <p>Comenzamos hace {edad} año!</p>
            <p>
                {nombre}
            </p>
        </main>
    );
};

export default Main;