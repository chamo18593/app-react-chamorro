
const Main = ({saludo, edad, datos}) => {
    
    const { nombre } =datos;
    
    return(
        <main>
            <p>Bienvenido</p>
            <p>Somos Happy Belly</p>
            <p>Comenzamos hace {edad} año!</p>
            <p>
                {nombre}
            </p>
        </main>
    );
};

export default Main;