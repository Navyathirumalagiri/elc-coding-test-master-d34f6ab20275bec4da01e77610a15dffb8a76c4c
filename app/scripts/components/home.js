/**
 * This file will hold the Main content that lives in the main body of the site
 *
 */
import React from 'react';


class Home extends React.Component {

    /**
     * Renders the default app in the window, we have assigned this to an element called root.
     *
     * @returns JSX
     * @memberof Home
     */

    render() {
        let data;
        if (this.props.data) {
            data = this.props.data.data;
        }
        return (
            <section id="home">
                <div className="content">
                    {data && data.map((obj) =>
                        (
                            <div key={obj._id} className="item">
                                <div className="tags">
                                {obj.tags.map((tag) =>
                                    (
                                        <h3 className="tag">{tag}</h3>
                                    )
                                )}
                                </div>
                                <div className="name">{obj.name}</div>
                                <img src={obj.picture} alt=""/>
                                <div className="price">${obj.price}</div>
                                <p>{obj.about}</p>
                            </div>
                        )
                    )}
                </div>
            </section>
        );
    }


}

// Export out the React Component
export default Home;