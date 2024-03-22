import React from 'react'

function Section06() {
//<iframe src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d4395.975724259186!2d121.29461386837104!3d25.031665338137554!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMjXCsDAxJzUxLjIiTiAxMjHCsDE3JzQyLjYiRQ!5e0!3m2!1szh-TW!2stw!4v1692290063340!5m2!1szh-TW!2stw" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
  return (
    <div className='w-full h-[50vh] md:h-[65vh]'>
      <iframe 
        src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d3198.143627418386!2d121.17341491132322!3d25.055860804204688!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x34682100116b3515%3A0x9dcfca21a8781eb5!2z5LiK6aCG6Im-6bqXIOaOpeW-heS4reW_gw!5e0!3m2!1szh-TW!2stw!4v1711097573982!5m2!1szh-TW!2stw" 
        style={{ border: '0', width: '100%', height: '100%' }}
        allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>

      <div className='bg-[#E85C77]  w-full p-4 flex  justify-around items-center'>
        <a className='p-1' href="tel:033855000">
          <img src={process.env.PUBLIC_URL+'/images/release/phone.png'} alt="" className='max-w-full'/>
        </a>
        <a className='p-1' href="https://www.facebook.com/profile.php?id=100093873286645" target='_blank'>
          <img src={process.env.PUBLIC_URL+'/images/release/fb.png'} alt="" className='max-w-full'/>
        </a>
        <a className='p-1' href="https://maps.app.goo.gl/HFip7A7icRLuJUM29" target="_blank">
          <img src={process.env.PUBLIC_URL+'/images/release/map.png'} alt="" className='max-w-full'/>
        </a>
       
      </div>
    </div>
  )
}

export default Section06