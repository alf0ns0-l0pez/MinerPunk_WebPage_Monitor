import './Overview.css'
export default function Overview() {
    return (
        <div>
            <h2>Responsive Image Gallery</h2>

            <h4>Resize the browser window to see the effect.</h4>

            <div class="responsive">
                <div class="gallery">
                    <img src="none" alt="Cinque Terre" width="600" height="400" />
                    <div class="desc">Board description</div>
                </div>
            </div>


            <div class="responsive">
                <div class="gallery">
                    <img src="none" alt="Forest" width="600" height="400" />
                    <div class="desc">Board description</div>
                </div>
            </div>

            <div class="responsive">
                <div class="gallery">
                    <img src="none" alt="Northern Lights" width="600" height="400" />
                    <div class="desc">Board description</div>
                </div>
            </div>

            <div class="responsive">
                <div class="gallery">
                    <img src="none" alt="Mountains" width="600" height="400" />
                    <div class="desc">Board description</div>
                </div>
            </div>
        </div>
    );
}