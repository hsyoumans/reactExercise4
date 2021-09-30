import { ChangeEvent, useState } from "react";

function ShapeIt() {

    const [size, setSize] = useState("0");
    const [isCircle, setCircle] = useState(false);

    function handleSizeChange(e:ChangeEvent<HTMLInputElement>){
        setSize(e.target.value);
    }

    return (
        <>
            <p>
                <label htmlFor="diameter">Diameter</label>
                <input className="shape" type="text" value={size} onChange={handleSizeChange} />
            </p>
            <p>
                <label htmlFor="shape">Is Circle?</label>
                <input className="check" type="checkbox" checked={isCircle} onChange={e => setCircle(e.target.checked)}/>
            </p>
            <div className={`output ${isCircle ? "circle" : "square"}`} style={{width: size + "px", height: size + "px"}}></div>
        </>
    );

}

export default ShapeIt;