import React, { useState } from 'react'

const Post = () => {
    const [like, setLike] = useState(false)
    const [replyToggle, setReplyToggle] = useState(false)

    return (
        <div className='post-container'>
            <h3>Title Heading</h3>
            <h5>Title Descriptiton, <span>May 2, 2022</span></h5>

            <div id='img'></div>
            <p>
                Nunc ut lacus non ante vehicula lacinia. Fusce sit amet libero et purus euismod dignissim. Aliquam at nibh mauris. Nunc quis ornare ex. Pellentesque non nisl ultrices, scelerisque eros at, ornare enim. Sed fringilla aliquam elit, nec semper augue. Nunc ipsum eros, faucibus vitae velit nec, scelerisque mollis lectus. Sed nec orci vitae neque interdum gravida. Phasellus eu sodales nibh. Fusce finibus cursus vestibulum. Cras tristique sollicitudin magna ac vehicula.
            </p>
            <p>
                Sunt in culpa qui officia deserunt mollit anim id est laborum consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco.
            </p>
            <div className="button-container">
                <button onClick={() => setLike(true)} style={{ display: !like ? 'block' : 'none' }} id="like-button">
                    <i class="fa-solid fa-thumbs-up"></i>
                    Like
                </button>
                <button style={{ display: like ? 'block' : 'none' }} id="like-button">
                    &#10003; Liked
                </button>

                <button onClick={() => setReplyToggle(prevState => !prevState)} id='reply-button'>Replies <span>2</span></button>
            </div>

            <div style={{ display: replyToggle ? 'flex' : 'none' }} className="reply-section">
                <div id="profile-pic"></div>
                <div className="comment">
                    <div className="comment-head">
                        <h4>Username <span>April 26, 2022, 10.52 PM</span></h4>
                    </div>
                    <div className="comment-body">
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum numquam eos, aliquid repudiandae </p>
                    </div>
                </div>
            </div>

            <div style={{ display: replyToggle ? 'flex' : 'none' }} className="reply-section">
                <div id="profile-pic"></div>
                <div className="comment">
                    <div className="comment-head">
                        <h4>Username <span>April 26, 2022, 10.52 PM</span></h4>
                    </div>
                    <div className="comment-body">
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum numquam eos, aliquid repudiandae Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum numquam eos, aliquid repudiandaeLorem ipsum dolor sit amet consectetur adipisicing elit. Laborum numquam eos, aliquid repudiandaeLorem ipsum dolor sit amet consectetur adipisicing elit. Laborum numquam eos, aliquid repudiandaeLorem ipsum dolor sit amet consectetur adipisicing elit. Laborum numquam eos, aliquid repudiandaeLorem ipsum dolor sit amet consectetur adipisicing elit. Laborum numquam eos, aliquid repudiandaeLorem ipsum dolor sit amet consectetur adipisicing elit. Laborum numquam eos, aliquid repudiandaeLorem ipsum dolor sit amet consectetur adipisicing elit. Laborum numquam eos, aliquid repudiandaeLorem ipsum dolor sit amet consectetur adipisicing elit. Laborum numquam eos, aliquid repudiandaeLorem ipsum dolor sit amet consectetur adipisicing elit. Laborum numquam eos, aliquid repudiandaeLorem ipsum dolor sit amet consectetur adipisicing elit. Laborum numquam eos, aliquid repudiandaeLorem ipsum dolor sit amet consectetur adipisicing elit. Laborum numquam eos, aliquid repudiandae </p>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Post