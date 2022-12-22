import React from "react"

const Loader=()=>{

    return <div style={{ width: '100px', height: '100px', position: 'absolute', top: "46%", left: "50%" }}>

    <div class="spinner-border text-success" role="status">
    </div>
    <div>Loading...</div>
</div>
}

export default Loader