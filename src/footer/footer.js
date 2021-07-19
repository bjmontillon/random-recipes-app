import React from 'react'
import '../footer/footer.css'

const Footer = () => {
    return (
        <div className='footer-wrapper'>
            <div className='footer-container'>
                <ul className='socialMediaLinks'>
                    <li className='facebook-link'><a href='https://www.facebook.com/profile.php?id=100011215170729' target='_blank' rel="noreferrer"><i class="fab fa-facebook"></i></a></li>
                    <li className='twitter-link'><a href='https://twitter.com/PangilinanBj' target='_blank' rel="noreferrer"><i class="fab fa-twitter-square"></i></a></li>
                    <li className='github-link'><a href='https://github.com/bjmontillon' target='_blank' rel="noreferrer"><i class="fab fa-github"></i></a></li>
                </ul>
            </div>
        </div>
    )
}

export default Footer