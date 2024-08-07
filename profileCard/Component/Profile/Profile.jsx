import React from 'react'
import '../Profile/Profile.css'
import card from '../../../images/bg-pattern-card.svg'
import vector from '../../../images/image-victor.jpg'
function Profile() {
  return (
    <div id='Profile'>
      <img id='card' src={card}/>
      <img id='profilepic' src={vector} />
      <h3>Victor Crest 26</h3>
      <h5>London</h5>
      <div id='bottomdiv'>
        <label className='total'>80K
        
            <label className='category'>Followers</label>
        </label>
        <label className='total'>803K
        
            <label className='category'>Likes</label>
        </label>
        <label className='total'>1.4K
        
            <label className='category'>Photos</label>
        </label>
      </div>

    </div>
  )
}

export default Profile
