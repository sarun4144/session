import React, { useEffect, useRef, useState } from 'react'
import style from "./style.css"
import SessionSignedIn from './session-signedin'

function Session() {
    let [signedIn, setSignedIn] = useState(false)
    const form = useRef()

    useEffect(() => {
        fetch('/api/session/get')
            .then(response => response.json())
            .then(result => setSignedIn(result.signedIn))
            .catch(err => alert(err))

    }, [])

    function onSubmitForm(event) {
        event.preventDefault();
        const fd = new FormData(form.current)
        const fe = Object.fromEntries(fd.entries())

        fetch('/api/session/set', {
            method: 'POST',
            body: JSON.stringify(fe),
            headers: { 'Content-Type': 'application/json' }
        })
            .then(response => response.json())
            .then(result => {
                if (result.signedIn) {
                    setSignedIn(result.signedIn)
                } else {
                    alert('Email หรือ Password ไม่ถูกต้อง')
                }
            })
            .catch(err => alert(err))
    }
    if (!signedIn) {
        return (
            <div style={{margin:"30px"}}>
                <form onSubmit={onSubmitForm} ref={form}>
                <input type='email' name='email' placeholder="Email"/>
                    <br/>
                    <input  type='password' name='password' placeholder="Password"/>
                    <br/><br/>
                    <button>ส่งข้อมูล</button>
                </form>

            </div>
        )
    }else{
        return (
            <SessionSignedIn/>
        )
    }
   
}

export default Session