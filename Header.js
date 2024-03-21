import React,{useState,useEffect} from 'react'
import logo from "../logo.svg"

// import Navigation from './Navigation'
const Header = () => {
  const [showSocialBar, setShowSocialBar] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const contentHeight = document.documentElement.scrollHeight; // Chiều cao của toàn bộ nội dung
      const scrollHeight = window.scrollY;
      const windowHeight = window.innerHeight;
      const scrollableHeight = contentHeight - windowHeight; // Chiều cao có thể cuộn được

      // Tính toán khi đã cuộn được 80% chiều cao có thể cuộn được
      const eightyPercentScrollableHeight = scrollableHeight * 0.9;

      // Nếu thanh cuộn đã di chuyển 80% chiều cao có thể cuộn được, hiển thị thanh cố định
      if (scrollHeight >= eightyPercentScrollableHeight) {
        setShowSocialBar(true);
      } else {
        setShowSocialBar(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    // Cleanup
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  const [darkMode, setDarkMode] = useState(false); // State để lưu trạng thái chế độ tối

  useEffect(() => {
    if (darkMode) {
      document.body.classList.add('dark-mode'); // Thêm lớp CSS vào thẻ body
    } else {
      document.body.classList.remove('dark-mode'); // Loại bỏ lớp CSS khỏi thẻ body
    }
  }, [darkMode]);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode); // Chuyển đổi giá trị của chế độ tối
  };
  return (
    <header className='flex-Elements'>
        <div className={showSocialBar?'header_for_moblie_change':'header_for_moblie'}>
            {/* <div className='header-wrapper'> */}
              <ul className='header-navigation' style={{ listStyleType: "None"}}>
               <li className='header-li'>
                   <img src={logo} alt="logo" height="30px" width="30px"></img>
                   <span className='white-text'>Home</span>
               </li>
               <li className='header-li'>
                   <img src={logo} alt="logo" height="30px" width="30px"></img>
                   <span className='white-text'>Resume</span>
               </li>
               <li className='header-li'>
                   <img src={logo} alt="logo" height="30px" width="30px"></img>
                   <span className='white-text'>Work</span>
               </li>
               <li className='header-li'>
                   <img src={logo} alt="logo" height="30px" width="30px"></img>
                   <span className='white-text'>Contact</span>
               </li>
              </ul>
            {/* </div> */}
        </div>
        <div className='header_text_content'>
            <p className='text-bold'>HTT</p>
        </div>
        <div className='views_mode'>
                <img className='views_mode_image' src={logo} alt='logo' height="30px" width="30px" onClick={toggleDarkMode}></img>
        </div>
    </header>
  )
}

export default Header