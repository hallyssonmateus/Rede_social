import "./share.css"

export default function Share() {
  return (
    <div className="share">
        <div className="shareWrapper">
            <div className="shareTop">
                <img className="shareProfile" src="/assets/person/person3.jpg" alt="Fotoprofile1"/>
                <input placeholder="What's in your mind" className="shareInput" />
            </div>
            <hr className="shareHr"/>
            <div className="shareBottom">
                <div className="shareOptions">
                    <div className="shareOption">
                        <span className="shareOptionText">Photo/Video</span>                    
                    </div>

                    <div className="shareOption">
                        <span className="shareOptionText">Photo/Video</span>                    
                    </div>

                    <div className="shareOption">
                        <span className="shareOptionText">Photo/Video</span>                    
                    </div>

                    <div className="shareOption">
                        <span className="shareOptionText">Photo/Video</span>                    
                    </div>
                </div>
                
            </div>
        </div>
    </div>
  )
}
