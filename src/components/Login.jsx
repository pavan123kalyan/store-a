import React from 'react'
export default function Login(){
    return(
        <form>
            <label>Email: </label>
            <input type="email" name="email" required/>
            <br>
            </br>
            <label>Password: </label>
            <input type="password" name="password" required/>
            <br>
            </br>
            <button type="submit">Login</button>
        </form>
    )

}