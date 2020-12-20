import React, {useRef} from 'react'

const TdInput = () => {

    const inputRef = useRef<HTMLInputElement>(null)

    return <div className='todo-input'>
        <input type="text" ref={inputRef} placeholder="请输入待办项"/>
        <button>增加</button>
    </div>
}

export default TdInput