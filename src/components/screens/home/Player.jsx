import {useRef} from "react"
const VideoPlayer = ({src,...props}) =>{
    const ref = useRef()
    const handlePlay = () => {
        ref.current.play()
    }
const handlePause = () =>{
    ref.current.pause()
}    
return (
    <div>
      <button> onClick={handlePlay}</button>
      <button> onClick={handlePause}</button>
      <video src='https://youtu.be/sBhGcogIiac'  
      width='300' 
      ref={ref}
      />
    </div>
)
}
export default VideoPlayer;