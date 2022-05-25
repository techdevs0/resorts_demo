import React, { useEffect, useState } from 'react'
import Footer from '../layouts/Footertwo';
import Blogsidebar from '../layouts/Blogsidebar';
import { Link } from 'react-router-dom';
import Headertwo from '../layouts/Headertwo';
import API from '../../utils/http';
import ReactPaginate from "react-paginate";
import PageLayout from '../layouts/PageLayout';
import bannerImg from "../../assets/img/blog/blogBanner.jpg"


const Blog = (props) => {
  const activeLang = localStorage.getItem('lang');

  //  blog Data

  const [blogData, setBlogData] = useState([]);

  const getBlogData = () => {
    API.get(`/blogs`).then(response => {
      const allData = response.data?.data;
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
      )
      setRecentBlog(recentData);
    })
      .catch(err => {
        console.log(err)
      })
  }

  useEffect(() => {
    getBlogData();
    getRecentData();
  }, []);

  // pagination code

  const [pageNumber, setPageNumber] = useState(0);

  const usersPerPage = 6;
  const pagesVisited = pageNumber * usersPerPage;

  const displayBlogs = blogData
    .slice(pagesVisited, pagesVisited + usersPerPage)
    .map((x, i) => {
      return (
        <div className="post-box mb-40" key={i}>
          <div className="post-media">
            <img src={x?.img} alt="image" />
          </div>
          <div className="post-desc">
            {/* <Link to={`/blog-inner/${x?.slug}`} className="cat">Businese</Link> */}
            <h2>
              <Link to={`/${activeLang}/blog-inner/${x?.slug}`}>
                {x?.title}
              </Link>
            </h2>
            <ul className="post-meta">
              {/* <li><Link to="#"><i className="far fa-eye" />232 Views</Link></li> */}
              {/* <li><Link to="#"><i className="far fa-comments" />35 Comments</Link></li> */}
              <li><Link to="#"><i className="far fa-calendar-alt" />
                {new Date(x?.created_at).toLocaleDateString()}
              </Link></li>
            </ul>
            <p
              dangerouslySetInnerHTML={{
                __html: x?.short_description.substr(0, 200)
              }}
            >
            </p>
            <div className="post-footer">
              <div className="author">
                <Link to="#">
                  {/* <img src={x?.author_img} alt="" /> */}
                  <i className="fal fa-user mr-2" />
                  {x?.posted_by}
                </Link>
              </div>
              <div className="read-more">
                <Link to={`/${activeLang}/blog-inner/${x?.slug}`}><i className="far fa-arrow-right" />Read More</Link>
              </div>
            </div>
          </div>
        </div>
      );
    });

  const pageCount = Math.ceil(blogData.length / usersPerPage);

  const changePage = ({ selected }) => {
    setPageNumber(selected);
  };

  const breadcrumbItems = [
    {
      text: 'Fishermans Cove Resort',
      link: '/',
      isActive: false,
    },
    {
      text: 'Blogs',
      link: '/blog',
      isActive: true,
    },
  ];


  return (
    <div>
      <PageLayout
        header={{ isMobile: props.isMobile, isTop: props.isTop }}
        banner={{ title: "Blogs", image: bannerImg }}
        breadCrumb={{ items: breadcrumbItems }}
        activeLang={activeLang}
      >
        {/* <Headertwo /> */}
        {/*====== BREADCRUMB PART START ======*/}

        {/* <section className="breadcrumb-area" style={{ backgroundImage: 'url(assets/img/bg/04.jpg)' }}>
        <div className="container">
          <div className="breadcrumb-text">
            <span>The ultimate luxury</span>
            <h2 className="page-title">News Feeds</h2>
            <ul className="breadcrumb-nav">
              <li><Link to="/">Home</Link></li>
              <li className="active">Blog</li>
            </ul>
          </div>
        </div>
      </section> */}
        {/*====== BREADCRUMB PART END ======*/}
        {/*====== BLOG SECTION START ======*/}
        <section className="blog-section pt-40 pb-100">
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-lg-8 col-md-10">
                <div className="blog-loop">

                  {displayBlogs}
                  {/* {
                  blogData.map((x, i) => (
                    <div className="post-box mb-40" key={i}>
                      <div className="post-media">
                        <img src={x?.img} alt="image" />
                      </div>
                      <div className="post-desc">
                        <Link to={`/blog-inner/${x?.slug}`} className="cat">Businese</Link>
                        <h2>
                          <Link to={`/blog-inner/${x?.slug}`}>
                            {x?.title}
                          </Link>
                        </h2>
                        <ul className="post-meta">
                          <li><Link to="#"><i className="far fa-eye" />232 Views</Link></li>
                          <li><Link to="#"><i className="far fa-comments" />35 Comments</Link></li>
                          <li><Link to="#"><i className="far fa-calendar-alt" />
                            {new Date(x?.created_at).toLocaleDateString()}
                          </Link></li>
                        </ul>
                        <p
                          dangerouslySetInnerHTML={{
                            __html: x?.short_description.substr(0, 200)
                          }}
                        >
                        </p>
                        <div className="post-footer">
                          <div className="author">
                            <Link to="#">
                              <img src="assets/img/author-small.png" alt="" />
                              {x?.posted_by}
                            </Link>
                          </div>
                          <div className="read-more">
                            <Link to={`/blog-inner/${x?.slug}`}><i className="far fa-arrow-right" />Read More</Link>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))
                } */}








                  {/* <div className="post-box with-video mb-40">
                    <div className="post-media">
                      <img src="assets/img/blog/02.jpg" alt="" />
                      <Link to="#" className="play-icon"><i className="fas fa-play" /></Link>
                    </div>
                    <div className="post-desc">
                      <Link to="/blog-inner" className="cat">Businese</Link>
                      <h2>
                        <Link to="/blog-inner">Adipisicing elit, sed do eiusmod tempor
                          incididunt ut labore et dolore.</Link>
                      </h2>
                      <ul className="post-meta">
                        <li><Link to="#"><i className="far fa-eye" />232 Views</Link></li>
                        <li><Link to="#"><i className="far fa-comments" />35 Comments</Link></li>
                        <li><Link to="#"><i className="far fa-calendar-alt" />24th March 2019</Link></li>
                      </ul>
                      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor
                        incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
                        exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute
                        irure dolor in reprehenderit in voluptate velit esse cillum dolore.</p>
                      <div className="post-footer">
                        <div className="author">
                          <Link to="#">
                            <img src="assets/img/author-small.png" alt="" />
                            by Hetmayar
                          </Link>
                        </div>
                        <div className="read-more">
                          <Link to="/blog-inner"><i className="far fa-arrow-right" />Read More</Link>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="post-box mb-40">
                    <div className="post-media">
                      <img src="assets/img/blog/03.jpg" alt="" />
                    </div>
                    <div className="post-desc">
                      <Link to="/blog-inner" className="cat">Businese</Link>
                      <h2>
                        <Link to="/blog-inner">Magna aliqua. Ut enim ad minim venia
                          m, quis nostrud exercitation ullamco</Link>
                      </h2>
                      <ul className="post-meta">
                        <li><Link to="#"><i className="far fa-eye" />232 Views</Link></li>
                        <li><Link to="#"><i className="far fa-comments" />35 Comments</Link></li>
                        <li><Link to="#"><i className="far fa-calendar-alt" />24th March 2019</Link></li>
                      </ul>
                      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor
                        incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
                        exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute
                        irure dolor in reprehenderit in voluptate velit esse cillum dolore.</p>
                      <div className="post-footer">
                        <div className="author">
                          <Link to="#">
                            <img src="assets/img/author-small.png" alt="" />
                            by Hetmayar
                          </Link>
                        </div>
                        <div className="read-more">
                          <Link to="/blog-inner"><i className="far fa-arrow-right" />Read More</Link>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="post-box sound-cloud-post mb-40">
                    <div className="post-media">
                      <img src="assets/img/blog/06.jpg" alt="" />
                    </div>
                    <div className="post-desc">
                      <Link to="/blog-inner" className="cat">Businese</Link>
                      <h2>
                        <Link to="/blog-inner">Laboris nisi ut aliquip ex ea commodo
                          consequat. Duis aute irure dolor.</Link>
                      </h2>
                      <ul className="post-meta">
                        <li><Link to="#"><i className="far fa-eye" />232 Views</Link></li>
                        <li><Link to="#"><i className="far fa-comments" />35 Comments</Link></li>
                        <li><Link to="#"><i className="far fa-calendar-alt" />24th March 2019</Link></li>
                      </ul>
                      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor
                        incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
                        exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute
                        irure dolor in reprehenderit in voluptate velit esse cillum dolore.</p>
                      <div className="post-footer">
                        <div className="author">
                          <Link to="#">
                            <img src="assets/img/author-small.png" alt="" />
                            by Hetmayar
                          </Link>
                        </div>
                        <div className="read-more">
                          <Link to="/blog-inner"><i className="far fa-arrow-right" />Read More</Link>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="post-box no-thumb mb-40">
                    <div className="post-desc">
                      <Link to="/blog-inner" className="cat">Businese</Link>
                      <h2>
                        <Link to="/blog-inner">In reprehenderit in voluptate velit esse
                          cillum dolore eu fugiat.</Link>
                      </h2>
                      <ul className="post-meta">
                        <li><Link to="#"><i className="far fa-eye" />232 Views</Link></li>
                        <li><Link to="#"><i className="far fa-comments" />35 Comments</Link></li>
                        <li><Link to="#"><i className="far fa-calendar-alt" />24th March 2019</Link></li>
                      </ul>
                      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor
                        incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
                        exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute
                        irure dolor in reprehenderit in voluptate velit esse cillum dolore.</p>
                      <div className="post-footer">
                        <div className="author">
                          <Link to="/blog-inner">
                            <img src="assets/img/author-small.png" alt="" />
                            by Hetmayar
                          </Link>
                        </div>
                        <div className="read-more">
                          <Link to="/blog-inner"><i className="far fa-arrow-right" />Read More</Link>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="post-box quote-post mb-40">
                    <div className="post-desc">
                      <h2>
                        <Link to="/blog-inner">Excepteur sint occaecat cupida
                          tat non proident, sunt in.</Link>
                      </h2>
                      <ul className="post-meta">
                        <li><Link to="#"><i className="far fa-eye" />232 Views</Link></li>
                        <li><Link to="#"><i className="far fa-comments" />35 Comments</Link></li>
                        <li><Link to="#"><i className="far fa-calendar-alt" />24th March 2019</Link></li>
                      </ul>
                    </div>
                  </div>
                  <div className="post-box title-with-thumb mb-40">
                    <div className="post-desc">
                      <Link to="/blog-inner" className="cat">Businese</Link>
                      <h2>
                        <Link to="/blog-inner">Culpa qui officia deserunt mollit anim
                          id est laborum. Sed ut perspiciatis</Link>
                      </h2>
                      <ul className="post-meta">
                        <li><Link to="#"><i className="far fa-eye" />232 Views</Link></li>
                        <li><Link to="#"><i className="far fa-comments" />35 Comments</Link></li>
                        <li><Link to="#"><i className="far fa-calendar-alt" />24th March 2019</Link></li>
                      </ul>
                    </div>
                  </div>*/}
                </div>


                <ReactPaginate
                  previousLabel={<i className="far fa-angle-double-left" />}
                  nextLabel={<i className="far fa-angle-double-right" />}
                  pageCount={pageCount}
                  onPageChange={changePage}
                  containerClassName={"paginationBttns"}
                  previousLinkClassName={"previousBttn"}
                  nextLinkClassName={"nextBttn"}
                  disabledClassName={"paginationDisabled"}
                  activeClassName={"paginationActive"}
                />

                {/* <div className="pagination-wrap">
                <ul>
                  <li><Link to="#"><i className="far fa-angle-double-left" /></Link></li>
                  <li className="active"><Link to="#">1</Link></li>
                  <li><Link to="#">2</Link></li>
                  <li><Link to="#">3</Link></li>
                  <li><Link to="#">...</Link></li>
                  <li><Link to="#">10</Link></li>
                  <li><Link to="#"><i className="far fa-angle-double-right" /></Link></li>
                </ul>
              </div> */}
              </div>
              {/* Blog Sidebar */}
              <div className="col-lg-4 col-md-8 col-sm-10">
                <Blogsidebar
                  recentBlog={recentBlog}
                  activeLang={activeLang}
                />
              </div>
            </div>
          </div>
        </section>
        {/*====== BLOG SECTION END ======*/}
        {/* <Footer /> */}
      </PageLayout>
    </div>

  );
}

export default Blog;
