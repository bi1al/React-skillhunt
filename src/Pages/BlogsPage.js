import React from 'react'
import Banner from '../Components/Banner'
import Blog from '../Components/Blog'
import img1 from '../images/image_1.jpg';
import img2 from '../images/image_2.jpg';
import img3 from '../images/image_3.jpg';
import img4 from '../images/image_4.jpg';
import img5 from '../images/image_5.jpg';
import img6 from '../images/image_4.jpg';
import img7 from '../images/image_7.jpg';
import img8 from '../images/image_8.jpg';
import Newslatter from '../Components/NewsLatter'
import Footer from '../Components/Footer'

function BlogsPage() {
    return (
        < >

        <Banner title="Our Blogs"/>

        <div className="blog-wrapper">
            <Blog img={img1}  />
            <Blog img={img2}  />
            <Blog img={img3} />
            <Blog img={img4} />
            <Blog img={img5}  />
            <Blog img={img6} />
            <Blog img={img7} />
            <Blog img={img8} />
        </div>

        <Newslatter />
      <Footer />

         </  >
    )
}

export default BlogsPage
