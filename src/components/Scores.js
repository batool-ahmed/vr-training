import React, {useContext} from 'react'
import Score from './Score'
import { NervousContext } from '../AppContext/NervousContext';

function Scores({session, quick = true}) {
  const showNervousDiv = useContext(NervousContext);

  return (
    <div> 
      { (quick && (!session.clarity_comment  || !session.pauses_score)) && 
          <>
            <p className='purple bold centerText'>This may take a few seconds! Please wait. Thank you for your patience.</p>
          </> 
        }              
      {(quick &&  (session.clarity_comment  && session.pauses_score)) &&
        <>
            <h5>Speech Analysis</h5>
            <hr/>
            <Score score={session.clarity_comment} title='Clarity' showArrow={true}/>
            <hr/>
            <Score score={session.pauses_score} title='No. of Pauses taken'  showArrow={true}/>
            <hr/>
            <Score score={session.pronunciation_score+'%'} title='Pronunciation' showArrow={true}/>
            <hr/>
            <Score score={session.speakingrate_comment} title='Speaking Rate'  showArrow={true}/>
            <hr/>
            <Score score={session.listenability_score+'%'} title='Listenability' showArrow = {true}/>
        </>
      }
        { (!quick && session.facingaud_score && session.facingaud_score   && session.feetdist_score  && session.sway_score) && 
          <>
            <h5>Speech Analysis</h5>
            <hr/>
            <Score score={session.clarity_comment} title='Clarity'  showArrow={true}/>
            <hr/>
            <Score score={session.pauses_score} title='No. of Pauses taken' showArrow={true}/>
            <hr/>
            <Score score={session.pronunciation_score+'%'} title='Pronunciation' showArrow={true}/>
            <hr/>
            <Score score={session.speakingrate_comment} title='Speaking Rate'  showArrow={true}/>
            <hr/>
            <Score score={session.listenability_score+'%'} title='Listenability' showArrow={true}/>
            <h5 className='analysisType'>Body Language Analysis</h5>
            <hr/>
            <Score score={session.facingaud_score+'% of the time'} title='Facing Audience'/>
            <hr/>
            <Score score={session.feetdist_score+'% of the time'} title='Feet Shoulder-width apart'/>
            <hr/>
            <Score score={session.sway_score+'% of the time'} title='Swaying'/>
            <h5 className='analysisType'>Nervousness Analysis</h5>
            <hr/>
            {showNervousDiv &&<Score score={session.nervousness_score+'%'} title='Nervousness'/> }
          </> 
        }   
        { (!quick && (!session.facingaud_score  || !session.feetdist_score || !session.sway_score || !session.nervousness_score)) && 
          <>
            <p className='purple bold centerText'>This may take a few minutes! Please wait. Thank you for your patience.</p>
          </> 
        }              
    </div>
  )
}

export default Scores