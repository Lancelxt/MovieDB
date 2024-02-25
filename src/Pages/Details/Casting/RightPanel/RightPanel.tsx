import React from 'react'
import './RightPanel.css'
import { ExclamationCircle, Facebook, Instagram, Keyboard, KeyboardFill, Link, Twitter } from 'react-bootstrap-icons'
import useFetch from '../../../../Hooks/useFetch'
import { useParams } from 'react-router'
import Keywords from './Keywords'
import EditButton from './EditButton'
const RightPanel = () => {
  const {id,media_type}=useParams() 
    const {data:queryData} = useFetch("/"+media_type+"/"+id)

  return (
    <div>
        <div className="social-btns-wrapper">
            <div className="social-btns"><Facebook size={24}/></div>
            <div className="social-btns"><Twitter size={24}/></div>
            <div className="social-btns"><Instagram size={24}/></div>
            <div className="social-btns"><Link size={28}/></div>
        </div>
        <div className="queries">
            <div className="query">
                <p style={{fontWeight:600}}>Status</p>
                <p>{queryData?.status}</p>
            </div>
            <div className="query">
                <p style={{fontWeight:600}}>Original Language</p>
                <p>{queryData?.original_language}</p>
            </div>
            <div className="query">
  <p style={{fontWeight: 600}}>Budget</p>
  <p>${queryData?.budget ? Number(queryData?.budget).toLocaleString('en-US', {minimumFractionDigits: 2, maximumFractionDigits: 2}) : '-'}</p>
</div>


<div className="query">
  <p style={{fontWeight: 600}}>Revenue</p>
  <p>${queryData?.revenue ? Number(queryData?.revenue).toLocaleString('en-US', {minimumFractionDigits: 2, maximumFractionDigits: 2}) : '-'}</p>
</div>
        </div>
        <div className="keyword-container">
            <p style={{fontSize:"17.6px",fontWeight:600,color:"#000"}}>Keywords</p>
        <Keywords/>
        <EditButton/>
        <div className="shortcut">
          <KeyboardFill size={20}/>
          Keyboard Shortcut
        </div>
        <div className="shortcut">
          <ExclamationCircle size={20}/>
          Report an issue
        </div>
        </div>

    </div>
  )
}

export default RightPanel