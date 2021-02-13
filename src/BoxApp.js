import React, {useState} from 'react';
import uuid from 'uuid/dist/v4'



function BoxApp() {

    const [height, setHeight] = useState('');
    const [width, setWidth] = useState('');
    const [color, setColor] = useState('');

    const [boxList, setBoxList] = useState([]);


    const heightChange = e => {
        setHeight(e.target.value)
    }

    const widthChange = e => {
        setWidth(e.target.value)
    }

    const colorChange = e => {
        setColor(e.target.value)
    }

    const handleSubmit = e => {
        e.preventDefault();
        const newBox = {
            height: height,
            width: width,
            color: color,
            id: uuid()
        }

        setBoxList([...boxList, newBox]);
        setHeight('');
        setWidth('');
        setColor('')

    }

    const remove = id => {
        setBoxList(boxList.filter(b => b.id !== id))
    }

    return (
        <>
        <div className='container card d-flex flex-column align-items-center'>
            <h1>Create a box</h1>
            <form onSubmit={handleSubmit} className='d-flex flex-column w-50'>
                <div className='d-flex justify-content-between mb-3'>
                    <label>Height:</label>
                    <input 
                    value={height}
                    onChange={heightChange}
                    required
                    />
                </div>
                <div className='d-flex justify-content-between mb-3'>
                    <label>Width:</label>
                    <input 
                    value={width}
                    onChange={widthChange}
                    required
                    />
                </div>
                <div className='d-flex justify-content-between mb-3'>
                    <label>Background Color:</label>
                    <input 
                    value={color}
                    onChange={colorChange}
                    required
                    />
                </div>
                <button className='btn btn-primary'>Create</button>
            </form>
        </div>
        <div>
        {boxList.map(box => 
            <div style={{
                width: box.width,
                height: box.height, 
                backgroundColor: box.color,
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center'
            }} key={box.id}>
                <button onClick={() => remove(box.id)}>remove</button>
            </div>)}
        </div>
        </>
    )
}

export default BoxApp
