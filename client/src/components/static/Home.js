import React from 'react'
import img1 from './img1.jpg'
import img2 from './img2.jpg'
import img3 from './img3.jpg'
import Carousel from 'react-bootstrap/Carousel'


function Home(props)
{
    return (
        <div>
            <h2 className='pt-2 text-center'>Welcome To The Our Website... (#LIVEWITHLOVE#)</h2>
            <div className='carousel'>
                <Carousel>
                    <Carousel.Item>
                    <div className="d-block justify-content-center">
                            <img
                                src={img1}
                                alt="Six slide"
                                width='100%'
                                height='650'
                            />
                        </div>
                        <Carousel.Caption>
                            <p style={{color:'black',fontSize:'24px'}}><b>“A hostel is second home to the students with new members of the intellectual family and You Have The toughest Days At The Begining But Most Enjoyable Days Later.”</b></p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                    <div className="d-block justify-content-center">
                            <img
                                src={img2}
                                alt="Six slide"
                                width='100%'
                                height='650'
                            />
                        </div>
                        <Carousel.Caption>
                            <p style={{color:'white',fontSize:'24px'}}><b>"A Place Where You Have To Live With People Of Your Age and You Have To Do Most Of The Things You Haven't Done."</b></p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <div className="d-block justify-content-center">
                            <img
                                src={img3}
                                alt="Six slide"
                                width='100%'
                                height='650'
                            />
                        </div>
                        <Carousel.Caption>
                            <p style={{color:'black',fontSize:'24px'}}><b>"A Place That Contains A Thousand Of Memories and Teaches You A Lot Of Things."</b></p>
                        </Carousel.Caption>
                    </Carousel.Item>
                </Carousel>
            </div>

            <div className='footer d-inline-block' style={{width:'100%',height:'80px', backgroundColor:'black',color:'white', fontSize:'20px'}} >
                <div className='copyright'>
                    <h5 className="text-center pt-3">© 2020, All rights reserved.</h5>
                </div>

            </div>
        </div>
    )
}
export default Home