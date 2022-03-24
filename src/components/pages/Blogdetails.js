import React, { useEffect, useState } from 'react'
import Footer from '../layouts/Footertwo';
import Blogsidebar from '../layouts/Blogsidebar';
import { Link } from 'react-router-dom';
import Headertwo from '../layouts/Headertwo';
import API from '../../utils/http';
import { useParams } from "react-router-dom";
import PageLayout from '../layouts/PageLayout';



const Blogdetails = (props) => {


  // single blog Data
  const { id } = useParams();

  useEffect(() => {
    getBlogData();
    getSingleBlogData();
    getRecentData();
  }, [id]);

  const [singleBlogData, setSingleBlogData] = useState([]);

  const getSingleBlogData = () => {
    API.get(`/blogs/${id}`).then(response => {
      const singleData = response?.data?.data;
      setSingleBlogData(singleData);
    })
      .catch(err => {
        console.log(err)
      })
  }

  //  blog Data

  const [blogData, setBlogData] = useState([]);

  const getBlogData = () => {
    API.get(`/blogs`).then(response => {
      const allData = response.data?.data.filter((x) => x.slug !== id);
      setBlogData(allData);
    })
      .catch(err => {
        console.log(err)
      })
  }

  // recentBlog

  const [recentBlog, setRecentBlog] = useState([]);

  const getRecentData = () => {
    API.get(`/blogs`).then(response => {
      const recentData = response.data?.data.sort(
        (a, b) =>
          new Date(b.created_at).getTime() - new Date(a.created_at).getTime()
      );
      setRecentBlog(recentData);
    })
      .catch(err => {
        console.log(err)
      })
  }




  const breadcrumbItems = [
    {
      text: 'Fishermans Cove Resort',
      link: '/',
      isActive: false,
    },
    {
      text: 'Blogs',
      link: '/blog',
      isActive: false,
    },
    {
      text: `${singleBlogData?.title}`,
      link: `/blog-inner/${singleBlogData?.slug}`,
      isActive: true,
    },
  ]


  return (
    <div>
      {/* <Headertwo /> */}
      <PageLayout
        header={{ isMobile: props.isMobile, isTop: props.isTop }}
        banner={{ title: singleBlogData?.title, image: singleBlogData?.banner_img }}
        breadCrumb={{ items: breadcrumbItems }}
      >


        {/*====== BREADCRUMB PART START ======*/}
        {/* <section className="breadcrumb-area" style={{ backgroundImage: `url( ${singleBlogData?.banner_img})` }}>
          <div className="container">
            <div className="breadcrumb-text">
              <span>
                {
                  singleBlogData?.sub_title
                }
              </span>
              <h2 className="page-title">

                {
                  singleBlogData?.title
                }

              </h2>
              <ul className="breadcrumb-nav">
                <li><Link to="/">Home</Link></li>
                <li><Link to="/blog">Blog</Link></li>
                <li className="active">
                  {
                    singleBlogData?.title
                  }
                </li>
              </ul>
            </div>
          </div>
        </section> */}
        {/*====== BREADCRUMB PART END ======*/}
        {/*====== BLOG SECTION START ======*/}
        <section className="blog-section pt-40 pb-100">
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-lg-8">
                <div className="news-details-box">
                  <div className="entry-content">
                    <Link to={`/blog-inner/${singleBlogData?.slug}`} className="cat">Businese</Link>
                    <h2 className="title">
                      {
                        singleBlogData?.title
                      }
                    </h2>
                    <ul className="post-meta">
                      <li><Link to="#"><i className="fal fa-user" />
                        {
                          singleBlogData?.posted_by
                        }
                      </Link></li>
                      <li><Link to="#"><i className="fal fa-calendar-alt" />
                        {new Date(singleBlogData?.created_at).toLocaleDateString()}
                      </Link></li>
                      {/* <li><Link to="#"><i className="fal fa-comments" />35 Comments</Link></li> */}
                    </ul>
                    {/* <p className="mb-30"
                      dangerouslySetInnerHTML={{
                        __html: singleBlogData?.short_description
                      }}
                    > */}
                    {/* Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor
                      incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
                      exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure
                      dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                      Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt
                      mollit anim id est laborum. Sed ut perspiciatis unde omnis iste natus error sit
                      voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo
                      inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim
                      ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur
                      magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui
                      dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam
                      eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. */}
                    {/* </p> */}
                    {/* <p>
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor
                      incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
                      exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure
                      dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                      Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt.
                    </p> */}
                    <figure className="mt-45 mb-45">
                      <img src={singleBlogData?.img} alt="image" />
                    </figure>
                    {/* <h3 className="subtitle"> A cleansing hot shower or bath</h3> */}
                    <p
                      dangerouslySetInnerHTML={{
                        __html: singleBlogData?.long_description
                      }}
                    >
                      {/* Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor
                      incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
                      exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure
                      dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                      Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia. */}
                    </p>
                    {/* <div className="gap" />
                    <h3 className="subtitle">Setting the mood with incense</h3>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor
                      incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
                      exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure
                      dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                      Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia.
                    </p>
                    <div className="gap" />
                    <h3 className="subtitle">Setting the mood with incense</h3>
                    <ul className="list-icon">
                      <li>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do.</li>
                      <li>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do.</li>
                      <li>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do.</li>
                      <li>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do.</li>
                      <li>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do.</li>
                    </ul>
                    <blockquote className="mt-40 mb-40">
                      <span className="quote-by">by Hetmayar</span>
                      Viral dreamcatcher keytar typewriter, aest hetic offal umami. Aesthetic polaroid pug
                      pitchfork post-ironic.
                    </blockquote>
                    <p className="mb-30">
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor
                      incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
                      exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure
                      dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                      Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt
                      mollit anim id est laborum. Sed ut perspiciatis unde omnis iste natus error sit
                      voluptatem accusantium.
                    </p>
                    <div className="row align-items-center">
                      <div className="col-md-5 mb-30">
                        <img src="assets/img/blog-details/02.jpg" alt="image" />
                      </div>
                      <div className="col-md-7 mb-30">
                        <p>
                          Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor
                          incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis
                          nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                          Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu
                          fugiat nulla pariatur. Excepteur sint occaecat
                        </p>
                      </div>
                    </div>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor
                      incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
                      exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure
                      dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                      Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt
                      mollit anim id est laborum. Sed ut perspiciatis unde omnis iste natus error sit
                      voluptatem.
                    </p> */}
                  </div>


                  <div className="entry-footer">
                    {/* ----------------------Social share---------------------- */}

                    {/* <div className="tag-and-share mt-50 mb-50 d-md-flex align-items-center justify-content-between">
                    <div className="tag">
                      <h5>Related Tags</h5>
                      <ul>
                        <li><Link to={`/blog-inner/${singleBlogData?.slug}`}>Popular</Link></li>
                        <li><Link to={`/blog-inner/${singleBlogData?.slug}`}>desgin</Link></li>
                        <li><Link to={`/blog-inner/${singleBlogData?.slug}`}>ux</Link></li>
                      </ul>
                    </div>
                    <div className="share text-md-right">
                      <h5>Social Share</h5>
                      <ul>
                        <li><Link to="#"><i className="fab fa-facebook-f" /></Link></li>
                        <li><Link to="#"><i className="fab fa-twitter" /></Link></li>
                        <li><Link to="#"><i className="fab fa-medium" /></Link></li>
                        <li><Link to="#"><i className="fab fa-google-plus-g" /></Link></li>
                        <li><Link to="#"><i className="fab fa-tumblr" /></Link></li>
                      </ul>
                    </div>
                  </div> */}

                    {/* ----------------------next and previous buttons ---------------------- */}
                    {/* <div className="post-nav d-md-flex align-items-center justify-content-between">
                    <div className="prev-post">
                      <span>Prev Post</span>
                      <Link to={`/blog-inner/${singleBlogData?.slug}`}>Tips On Minimalist</Link>
                    </div>
                    <span className="icon">
                      <img src="../../assets/img/blog-details/icon.png" alt="icon" />
                    </span>
                    <div className="next-post text-right">
                      <span>Next Post</span>
                      <Link to={`/blog-inner/${singleBlogData?.slug}`}>Less Is More</Link>
                    </div>
                  </div> */}


                    {/* ----------------------Related Post---------------------- */}

                    {
                      blogData?.length > 0 &&
                      <div className="related-post mt-50">
                        <h3 className="mb-30">Related Post</h3>
                        <div className="row">
                          {
                            blogData?.map((x, i) => (
                              <div className="col-md-6" key={i}>
                                <div className="related-post-box mb-50">
                                  <img src={x?.img} alt="img" className='imgstyle' />
                                  {/* <div className="thumb"
                                style={{ backgroundImage: `url( ${x?.img})` }} >
                              </div> */}
                                  <div className="desc">
                                    <Link to={`/blog-inner/${x?.slug}`} className="date"><i className="far fa-calendar-alt" />
                                      {new Date(x?.created_at).toLocaleDateString()}
                                    </Link>
                                    <h4><Link to={`/blog-inner/${x?.slug}`}>
                                      {x?.title}
                                    </Link></h4>
                                    <p
                                      dangerouslySetInnerHTML={{
                                        __html: x?.short_description?.substr(0, 200)
                                      }}
                                    >
                                    </p>
                                  </div>
                                </div>
                              </div>
                            ))
                          }
                        </div>
                      </div>
                    }


                    {/* ----------------------Author details---------------------- */}

                    {/* <div className="author-info-box mb-45">
                    <div className="info-text">
                      <span>Written by</span>
                      <h3>
                        {
                          singleBlogData?.posted_by
                        }
                      </h3>
                      <p
                        dangerouslySetInnerHTML={{
                          __html: singleBlogData?.author_details
                        }}
                      >
                      </p>
                    </div>
                  </div> */}
                  </div>
                  {/* <div className="comment-template">
                  <h3 className="box-title">03 Comments</h3>
                  <ul className="comments-list mb-100">
                    <li>
                      <div className="comment-img">
                        <img src="../../assets/img/blog-details/avatar-1.jpg" alt="img" />
                      </div>
                      <div className="comment-desc">
                        <div className="desc-top">
                          <h6>Rosalina Kelian</h6>
                          <span className="date">19th May 2018</span>
                          <Link to="#" className="reply-link"><i className="far fa-reply" />Reply</Link>
                        </div>
                        <p>
                          Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
                          tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
                          quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
                          consequat.
                        </p>
                      </div>
                      <ul className="children">
                        <li>
                          <div className="comment-img">
                            <img src="../../assets/img/blog-details/avatar-2.jpg" alt="img" />
                          </div>
                          <div className="comment-desc">
                            <div className="desc-top">
                              <h6>Rosalina Kelian</h6>
                              <span className="date">19th May 2018</span>
                              <Link to="#" className="reply-link"><i className="far fa-reply" />Reply</Link>
                            </div>
                            <p>
                              Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
                              eiusmod
                              tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
                              veniam,
                              quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
                              commodo
                              consequat.
                            </p>
                          </div>
                        </li>
                      </ul>
                    </li>
                    <li>
                      <div className="comment-img">
                        <img src="../../assets/img/blog-details/avatar-3.jpg" alt="img" />
                      </div>
                      <div className="comment-desc">
                        <div className="desc-top">
                          <h6>Rosalina Kelian</h6>
                          <span className="date">19th May 2018</span>
                          <Link to="#" className="reply-link"><i className="far fa-reply" />Reply</Link>
                        </div>
                        <p>
                          Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
                          tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
                          quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
                          consequat.
                        </p>
                      </div>
                    </li>
                  </ul>
                  <h3 className="box-title">Post Comment</h3>
                  <div className="comment-form">
                    <form action="#">
                      <div className="input-group input-group-two textarea mb-20">
                        <textarea placeholder="Type your comments...." defaultValue={""} />
                        <div className="icon"><i className="fas fa-pen" /></div>
                      </div>
                      <div className="input-group input-group-two mb-20">
                        <input type="text" placeholder="Type your Name...." />
                        <div className="icon"><i className="fas fa-user" /></div>
                      </div>
                      <div className="input-group input-group-two mb-20">
                        <input type="email" placeholder="Type your email...." />
                        <div className="icon"><i className="fas fa-envelope" /></div>
                      </div>
                      <div className="input-group input-group-two mb-20">
                        <input type="url" placeholder="Type your Website...." />
                        <div className="icon"><i className="fas fa-globe" /></div>
                      </div>
                      <div className="input-group  mt-30">
                        <button type="submit" className="main-btn btn-filled"><i className="far fa-comments" /> Post
                          Comment</button>
                      </div>
                    </form>
                  </div>
                </div> */}
                </div>
              </div>
              {/* Blog Sidebar */}
              <div className="col-lg-4 col-md-8 col-sm-10">
                <Blogsidebar
                  recentBlog={recentBlog}
                />
              </div>
            </div>
          </div>
        </section>
        {/*====== BLOG SECTION END ======*/}
        {/* <Footer /> */}
      </PageLayout>

    </div >

  );
}
// }

export default Blogdetails;
