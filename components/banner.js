import styles from "./banner.module.css"

const subtitleStyle = {
    fontStyle: "italic",
    fontSize: "x-large",
    color: "red"
}

const Banner = (props) => {
    return (
        <header className="row mb-4">
            <div className="col-5">
                <img className={styles.logo} src="./GloboLogo.png" alt="logo"/>
            </div>
            <div className="col-7 mt-5" style={subtitleStyle}>
                {props.headerText}
            </div>
        </header>
    )
}

export default Banner;