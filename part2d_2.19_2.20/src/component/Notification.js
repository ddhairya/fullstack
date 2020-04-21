import React from 'react'

const Notification = ({message}) => {
    if (message === ''){
        console.log(message)
        return null
    }else{
        console.log(message)
        return(
            <div className = "msg">
                {message}
            </div>
        )

    }

    
}

export default Notification