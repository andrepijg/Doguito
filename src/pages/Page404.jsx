import image from "../assets/img/doguito404.svg"
import "../assets/css/404.css"

const Page404 = () => {
    return (
    <main className="container flex flex--center flex--column">
        <img className="dog-image" src={image} alt="doguito" />
        <p className="notfount-text">Esta página no existe</p>
    </main>
    );


}

export default Page404