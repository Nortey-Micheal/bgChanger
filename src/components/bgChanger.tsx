import { ChangeEvent, useState } from "react";

export function BgChanger() {
    const [Color,setColor] = useState("");
    const [bg,setBg] = useState({
        backgroundColor: ""
    })

    const valueSetter = (e:ChangeEvent<HTMLSelectElement>) => {
        setColor(e.target.value)
    }

    const bgSetter = (color:string) => {
        setBg({
            backgroundColor: color
        })
    }

    return (
        <section>
            <select onChange={valueSetter} name="color" id="color">
                <option value="#fcf7ff">light purple</option>
                <option value="#022c43">Dark</option>
                <option value="#FFD700">Yellow</option>
                <option value="#00a8cc">Cyan</option>
                <option value="#FFFADE">Cream</option>
                <option value="#9b7fe9">Purple</option>
            </select>
            <button onClick={() => bgSetter(Color)} className="ml-6 bg-red-600 py-1 px-3 rounded text-amber-100 text-lg font-bold"> Change Color</button>
            {/* <p>{Color}</p> */}
            <div className="h-96 w-full border-1 border-red-500" style={bg}></div>
        </section>
        
    )
}