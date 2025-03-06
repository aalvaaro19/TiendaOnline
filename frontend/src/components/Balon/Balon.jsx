import React from 'react'
import imgBalon from '../../images/balon.png'
function Balon() {
  return (
    <div className="balon-lateral">
      <img src={imgBalon} alt="Balón" style={{ width: '100%', height: '100%' }} />
    </div>
  );
}
export default Balon