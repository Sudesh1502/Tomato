import { assets } from '../../assets/assets';
import './AppDownload.css'

const AppDownload = () => {
  return (
    <div className='appDownload' id='appDownload'>
      <p>For Better Expirence Download  <br />Tomato App</p>
      <div className="appDownloadPlatforms">
        <img src={assets.play_store} alt="" /><img src={assets.app_store}  alt="" />
      </div>
    </div>
  )
}

export default AppDownload;
