import React, { Component } from 'react'
import PrivacyIntroBlock from '../sections/privacy-policy/intro-block';
import API from '../../langapi/http';
import SEOTags from "../sections/common/SEOTags";
import PageLayout from "../layouts/PageLayout";
import { constants } from '../../utils/constants';


const pageId = '629712d4b2b9bd47050b7fd2';
class TermsofUse extends Component {

    state = {
        intro: null,
        banner: null,
        meta: {}
    }

    componentDidMount() {
        try {
            const activeLang = localStorage.getItem('lang');

            API.get(`/all-sections/${pageId}/${activeLang}`).then(response => {
                this.setState({
                    banner: response?.data?.data[0]?.banner,
                    intro: response?.data?.data[0]?.intro,
                    meta: response?.data?.data[0]?.meta
                });
            })

        } catch (error) {
            console.log(error)
        }
    }

    render() {
        const activeLang = localStorage.getItem('lang');

        const breadcrumbItems = [
            {
                text: `${constants?.site_content?.about_page?.bread_crumb?.title[activeLang]}`,
                link: '/',
                isActive: false,
            },
            {
                text: `${constants?.site_content?.terms_page?.bread_crumb?.title2[activeLang]}`,
                link: '/terms-of-use',
                isActive: true,
            },
        ]
        return (
            <div className="bg-white privacy-policy-wrapper">
                <SEOTags meta={this.state.meta} />
                {
                    this.state.banner ?
                        <PageLayout
                            header={{ isMobile: this.props.isMobile, isTop: this.props.isTop }}
                            banner={{ title: this.state.banner?.section_name, image: this.state.banner?.section_avatar?.avatar }}
                            breadCrumb={{ items: breadcrumbItems }}
                            activeLang={activeLang}
                        >

                            {/*/!*====== INTRO START ======*!/*/}
                            <PrivacyIntroBlock data={this.state.intro} />
                            {/*====== INTRO END ======*/}

                        </PageLayout>
                        :
                        <div className={"preloader align-items-center justify-content-center"}>
                            <div className="cssload-container">
                                <div className="cssload-loading"><i /><i /><i /><i /></div>
                            </div>
                        </div>
                }
            </div>
        );
    }
}

export default TermsofUse;
