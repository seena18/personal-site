import App from "../App"
import { useParallax } from "react-scroll-parallax";
import '../App.css'
import { Parallax } from "react-scroll-parallax";
export default function Text() {
    return (
        <Parallax speed={-10}>
            <div className="corner">
                <div className="bigtext">Seena Abed</div>
                <div className="subtext">Computer Science Undergraduate</div>
            </div ></Parallax>

    )
}