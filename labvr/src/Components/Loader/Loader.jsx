import React from 'react'
import Loader from "react-loader-spinner";
export default class LoaderPage extends React.Component {
    render() {
        const styles={
            width: "100%",
            height: "100vh",
            display:"flex",
            alignItems:"center",
            justifyContent:"center",
            backgroundColor: "rgba(2,5,54,0.5)",
            position: "absolute",
            zIndex:"99999999"
        }
        if (this.props.loading)
            return <></>;
        return (
            <div style={styles}>
                <Loader
                    type="Puff"
                    color="aqua"
                    height={60}
                    width={60}
                // timeout={3000} //3 secs
                />
            </div>
        )
    }
}