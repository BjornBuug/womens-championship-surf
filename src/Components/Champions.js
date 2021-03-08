import React from 'react'

const Champions = ({champions}) => {
    return (
        <div className="section-center">
            {champions.map((champion)=> {
            const {id, name, age, image, bio} = champion;
            return (
                <article key={id} className="menu-item">
                    <img src={image} alt={name} className='photo'/>
                    <div className="item-info">
                        <header>
                            <h4>{name}</h4>
                            <h4 className="price"> Age: {age}</h4>
                        </header>
                    <p className="item-text">{bio}</p>
                    </div>
                </article>
            );
            })}
        </div>
    );
};

export default Champions