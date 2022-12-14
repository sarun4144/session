import React from 'react'

function SessionSignedIn() {

    function onClickLink(event){
        event.preventDefault()
        fetch('/api/session/del')
        .then(response => response.text())
        .then(result => window.location.href = '/session')
        .catch(err => alert(err))
    }
  return (
    <div style={{margin:'30px'}}>
        <h3>ท่านเข้าสู่ระบบแล้ว</h3>
        <br/>
        <a href={'/'} onClick={(e) => onClickLink(e)}>ออกจากระบบแล้ว</a>
    </div>
  )
}

export default SessionSignedIn